// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import MyComponent from '../components/my-component'
import { StaticImage } from 'gatsby-plugin-image'
// import Header from '../components/header'
import Seo from '../components/seo'
import useSiteMetadata from '../components/useSiteMetadata'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="HOME page">
      {/* <Header></Header> */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        title="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/gatsby-icon.png"
      />
      <MyComponent> Hitit! </MyComponent> 
    </Layout>
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>
// export const Head = () => <Seo title="Home page"></Seo>

export const Head = () => <Seo title={useSiteMetadata}></Seo>


// Step 3: Export your component
export default IndexPage



// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you???re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

// const IndexPage = () => (
//   <Layout>
//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/example.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         Welcome to <b>Gatsby!</b>
//       </h1>
//       <p className={styles.intro}>
//         <b>Example pages:</b>{" "}
//         {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> ?? </>}
//           </React.Fragment>
//         ))}
//         <br />
//         Edit <code>src/pages/index.js</code> to update this page.
//       </p>
//     </div>
//     <ul className={styles.list}>
//       {links.map(link => (
//         <li key={link.url} className={styles.listItem}>
//           <a
//             className={styles.listItemLink}
//             href={`${link.url}${utmParameters}`}
//           >
//             {link.text} ???
//           </a>
//           <p className={styles.listItemDescription}>{link.description}</p>
//         </li>
//       ))}
//     </ul>
//     {moreLinks.map((link, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> ?? </>}
//       </React.Fragment>
//     ))}
//   </Layout>
// )

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Home" />

// export default IndexPage
