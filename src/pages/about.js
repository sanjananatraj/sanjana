import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import cat from "../images/icons8-cat-64.png"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <img src={cat} alt="blue cat" />
    <h1>About me</h1>
  </Layout>
)

export default AboutPage