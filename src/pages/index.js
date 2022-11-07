import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
/*import Seo from "../components/seo"*/

const IndexPage = () => (
  <Layout>
  <div className="Hero">
    <div className="HeroGroup">
    <h1>Kim Nguyen</h1>
    <p>I really want to become a developer. Hence I have to practice everyday to become better in developing my ideas, writing down my thoughts. Currently I'm in a phase of reshifting my life.</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
  </Layout>
)

/*export const Head = () => <Seo title="Page two" />*/

export default IndexPage