import * as React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { StaticImage } from 'gatsby-plugin-image'

const SSRPage = ({ serverData }) => {
    // const { dogImage } = serverData
    // const image = getImage(dogImage)

    // console.log("CATS:", dogImage)
    // console.log("CATS:", dogImage.message)
    // console.log("RATS:", image)

    return <div>
        <h1> Hello! </h1>
        {/* <StaticImage src={ dogImage.message } alt="123"/> */}
        <img alt="DOG?" src ={ serverData.message }/>
        {/* <GatsbyImage image={ image }/>
         */}
         {/* <p> { dogImage } </p> */}
    </div>
}

// export const pageQuery = `graphql
//     query PageData { 
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `

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
