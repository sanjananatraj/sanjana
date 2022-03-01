import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/sections/hero"
import AboutMe from "../components/sections/aboutme"
import Experience from "../components/sections/experience"
import ProjectSection from "../components/sections/projectsSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <Hero id='hero' />
      <AboutMe id='aboutme' />
      <Experience id='experience' />
      <ProjectSection id='projectsSection' />
  </Layout>
)

export default IndexPage
