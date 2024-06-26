import React from 'react'
import { Link } from 'gatsby'

import { slugify } from '../utils/helpers'
import { useGetTaxonomies } from '../utils/hooks/useGetTaxonomies'

export const BlogSidebar = () => {
  const data = useGetTaxonomies()
  const categories = data.categories.group
  const tags = data.tags.group

  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Article categories</h2>
        <div className="list">
          {categories
            .filter((category) => (category.name !== 'Highlight' && category.name !== 'Projects'))
            .map((category) => {
              return (
                <Link
                  key={category.name}
                  to={`/categories/${slugify(category.name)}`}
                  className="category"
                  activeClassName="active"
                >
                  <div className="name">{category.name}</div>
                  <div className="count">{category.totalCount}</div>
                </Link>
              )
            })}
        </div>
      </div>

      <div className="post-sidebar-card">
        <h2>Article tags</h2>
        <div className="tags">
          {tags
          .filter((tag) => (tag.name !== 'Projects'))
          .map((tag) => {
            return (
              <Link
                key={tag.name}
                to={`/tags/${slugify(tag.name)}`}
                className="tag"
                activeClassName="active"
              >
                {tag.name}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
