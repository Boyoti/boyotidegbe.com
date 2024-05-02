import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import { Layout } from '../components/Layout'
// import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'

import { projectsList } from '../data/projectsList'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Index({ data }) {
  // const latest = data.latest.edges
  const highlights = data.highlights.edges
  
  // const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedHighlights = useMemo(
    () =>
      getSimplifiedPosts(highlights, { externUrl: true, shortTitle: true, thumbnails: true }),
    [highlights]
  )

  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />

      {/* First part: Presentation */}

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hello, I'm Boyoti" index>
            <p className="hero-description small width">
              I'm a ServiceNow developer with over than 5 years experience, passionate about
              Team Management, IT Security, Cloud Management and Knowledge Sharing.
            </p>
          </Hero>

          {/* My Own Image */}
          <div className="decoration">
            <img
              src="/boyoti.jpeg"
              alt="Boyoti E. DEGBE"
              className="image hero-image"
              title="Boyoti E. DEGBE"
            />
          </div>

        </div>
      </div>

      <div className="container">
        {/* Part two: The latest articles */}

        {/* <section className="segment first">
          <Heading title="Latest Posts" slug="/blog" />

          <Posts data={simplifiedLatest} newspaper />
        </section> */}

        {/* Part Three: The highlights */}

        <section className="segment large">
          <Heading title="Posts" slug="/blog" />

          <div className="highlight-preview">
            {simplifiedHighlights.map((post) => {
              return (
                <div className="muted card flex cardRMflex" key={`popular-${post.slug}`}>
                  {post.thumbnail && <Img fixed={post.thumbnail} />}
                  <div>
                    <time>{post.date}</time>

                    <Link className="card-header" to={post.slug}>
                      {post.title}
                    </Link>

                    {/* <a className="card-header"
                      href={`${post.externUrl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {post.title}
                    </a> */}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Fourth part: my projects */}

        <section className="segment large">
          <Heading title="Projects" slug="/projects" />

          <div className="post-preview">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="anchored card" key={project.slug}>
                    <div>
                      <time>{project.startDate} - {project.endDate}</time>
                      <a
                        className="card-header inactiveLink"
                        href={`https://github.com/boyoti/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                      <p>{project.tagline}</p>
                    </div>
                    <div className="anchored links">
                      {project.writeup && (
                        <Link className="button" to={project.writeup}>
                          More about
                        </Link>
                      )}
                      {/* <a
                        className="button flex"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a> */}
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </div>
    </div>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: {frontmatter: {date: DESC}}
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: {frontmatter: {date: DESC}}
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            shortTitle
            externUrl
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 45, height: 45) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
