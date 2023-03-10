import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}> HOME </Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}> ABOUT </Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}> Blog </Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        { children }
      </main>
    </div>
  )
}

export default Layout

// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
//  */

// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: `var(--size-content)`,
//           padding: `var(--size-gutter)`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `var(--space-5)`,
//             fontSize: `var(--font-sm)`,
//           }}
//         >
//           © {new Date().getFullYear()} &middot; Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// export default Layout
