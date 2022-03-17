import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <div className="page">
      <Seo title="About" />
        <h1>About me</h1>
        <h2>Header</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
      </div>
    </Layout>
  )
}

export default AboutPage