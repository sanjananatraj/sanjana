import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/sections/hero"
import AboutMe from "../components/sections/aboutme"
import Experience from "../components/sections/experience"
import ProjectSection from "../components/sections/projectsSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <Hero />
      <AboutMe />
      <Experience />
      <ProjectSection />
  </Layout>
)

export default IndexPage
