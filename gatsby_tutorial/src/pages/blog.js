import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My first b-log posts">
            <p> It's s o cool TO be complicated </p>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            <a href={`/blog/`+node.name}>{node.name}</a>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
            nodes {
                name
            }
        }
    }
`
export const Head = () => <Seo title="My first B-log post"/>

export default BlogPage