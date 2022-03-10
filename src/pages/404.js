import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Oh no! You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to='/'>Go back home</Link>
  </Layout>
)

export default NotFoundPage
