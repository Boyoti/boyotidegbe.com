import React from 'react'
import { Link } from 'gatsby'

import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import blog from '../assets/nav-blog.png'
import search from '../assets/nav-search.png'
import projects from '../assets/nav-projects.png'
//import github from '../assets/nav-github.png'
// import myLogo from '../assets/floppylogo.png'
// import linkedin from '../assets/nav-linkedin.png'

import { slugify } from '../utils/helpers'

const mainNavItems = [
  { url: '/me', icon: search, label: 'About' },
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/resume', icon: blog, label: 'Resume' },
]

// const socialNavItems = [
//   { url: 'https://www.linkedin.com/in/boyoti-essohouna-degbe/', icon: linkedin, label: 'LinKedin' },
//   { url: 'https://github.com/boyoti', icon: github, label: 'GitHub' },
// ]

export const Navigation = ({ onUpdateTheme }) => {
  return (
    <section className="navigation">

      <div id="itscNavbar" className="itsc-navigation">

        <div className="itsc-brand">
          <Link to="/" key="brand" activeClassName="active" className="brand">
            {/* <img src={myLogo} className="logo" alt="Boyoti E. DEGBE" /> */}
            <span>Boyoti E. DEGBE</span>
          </Link>
        </div>

        <nav className="itscNav">

          <ul>
            {mainNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`${slugify(item.label)} ${item.mobileOnly ? 'mobile-only' : ''}`}
                >
                  {/* <img src={item.icon} alt={item.label} /> */}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}

            {/* {socialNavItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.icon} alt={item.label} className="nav-image" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))} */}

            <button className="itsc-bnTheme" onClick={onUpdateTheme}>
              <img className="itscThemIco" src={typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? sun : moon} alt="Theme" />
            </button>
          </ul>

        </nav>

      </div>

    </section>
  )
}
