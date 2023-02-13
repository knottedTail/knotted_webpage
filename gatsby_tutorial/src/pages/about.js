// Step 1: Import React
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {

  return (
    <Layout pageTitle="About Knotted World!">
        <p>We are falling into knotted things.</p>
    </Layout>
    // <main>
    //   <h1>About Knotted World!</h1>
    //   <Link to="/">Back to home?</Link>
    //   <p>We are falling into knotted things.</p>
    // </main>
  )
}
// // You'll learn about this in the next task, just copy it for now
export const Head = () => (  
  <Seo title="About Page Damnnnnnn"> </Seo>
  // <Seo title={ useSiteMetadata }></Seo>
    // <>
    //     <title>About Page Damnnnnn</title>
    //     <meta name="description" content="Delta yourself"/>
    // </>
)

// Step 3: Export your component
export default AboutPage