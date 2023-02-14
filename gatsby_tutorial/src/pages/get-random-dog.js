import * as React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { StaticImage } from 'gatsby-plugin-image'

const SSRPage = ({ data, serverData }) => {
    // const { dogImage } = serverData
    // const image = getImage(dogImage)
    console.log(data.site.siteMetadata.title)
    return <div>
        <h1> { data.site.siteMetadata.title } </h1>
        {/* <StaticImage src={ dogImage.message } alt="123"/> */}
        <img alt="DOG?" src ={ serverData.message }/>
        {/* <GatsbyImage image={ image }/>
         */}
         {/* <p> { dogImage } </p> */}
    </div>
}

export const query = graphql`
    query { 
        site {
            siteMetadata {
                title
            }
        }
    }
`
export const Head = () => (
    <Seo title="About Page Damnnnnnn"> </Seo>
)
export default SSRPage

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
        // const data = await res.json()
        if (!res.ok) {
            throw new Error("Response failed!")        
        }

        return {
            props: await res.json(),
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {}
        }
    }
}
