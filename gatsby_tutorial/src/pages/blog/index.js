import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My first b-log posts">
            <p> It's s o cool TO be complicated </p>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            {/* <h2><a href={ node.frontmatter.slug }>{node.frontmatter.title}</a></h2> */}
                            <h2><Link to={`/blog/${node.frontmatter.slug}`}>
                              {node.frontmatter.title}
                            </Link></h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p> {node.excerpt} </p>
                        </article>
                    ))
                    // data.allMdx.edges.map(edge => (
                    //     <article key={edge.node.id}>
                    //         <h2>{edge.node.frontmatter.title}</h2>
                    //         <p>Posted: {edge.node.frontmatter.date}</p>
                    //         <p> {edge.node.excerpt} </p>
                    //     </article>
                    // ))
                }
            </ul>
        </Layout>
    )
}

// export const query = graphql`
// query {
//     allMdx(sort: {frontmatter: {date: DESC}}) {
//       edges {
//         node {
//           frontmatter {
//             date(formatString: "MMMM D, YYYY")
//             title
//             slug
//           }
//           excerpt
//           id
//         }
//       }
//     }
//   }
// `

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
        }
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My first B-log post"/>

export default BlogPage