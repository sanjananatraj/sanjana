import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/sections/hero"
import AboutMe from "../components/sections/aboutme"
import Experience from "../components/sections/experience"
import ProjectSection from "../components/sections/projectsSection"
import Nav from "../components/nav"

const IndexPage = () => {
  const pageRefs = React.useRef({});
  return (
    <Layout>
    <Seo title="Home" />
    <div className="wrapper">
      <div className="mainContent">
        <Hero pageRefs={pageRefs} />
        <AboutMe pageRefs={pageRefs} />
        <Experience pageRefs={pageRefs} />
        <ProjectSection pageRefs={pageRefs} />
      </div>
      <div className="sidebar">
        <Nav pageRefs={pageRefs}  />
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage
