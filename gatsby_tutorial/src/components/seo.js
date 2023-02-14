import * as React from 'react'
// import { graphql, useStaticQuery} from 'gatsby'
import useSiteMetadata from './useSiteMetadata'

const Seo = ({ title }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const _sitetitle = useSiteMetadata()
  return (
    // <title>{title} | 1234 </title>
    <title> {title} | { _sitetitle } </title>
    // <title>{title} | {data.site.siteMetadata.title}</title>
    // <title> {title} | {useSiteMetadata()} </title>
    // <title> <useSiteMetadata></useSiteMetadata> </title>
  )
}

export default Seo


// /**
//  * SEO component that queries for data with
//  * Gatsby's useStaticQuery React hook
//  *
//  * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
//  */

// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// function Seo({ description, title, children }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title

//   return (
//     <>
//       <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
//       <meta name="description" content={metaDescription} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={metaDescription} />
//       <meta property="og:type" content="website" />
//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={metaDescription} />
//       {children}
//     </>
//   )
// }

// export default Seo
