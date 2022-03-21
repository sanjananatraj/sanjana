import * as React from "react"
import Seo from "../components/seo"
import { Fade } from "react-awesome-reveal"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Menu from "../components/menu"

import Hero from "../components/sections/hero"
import AboutMe from "../components/sections/aboutme"
import Experience from "../components/sections/experience"
import ProjectSection from "../components/sections/projectsSection"
import Contact from "../components/sections/contact"

const IndexPage = () => {
  //keep an array of section components for nav
  const pageRefs = React.useRef({});

  return (
    <Layout>
    <Seo title="Home" />
      <div className="index">
        <aside>
          <Menu pageRefs={pageRefs} />
          <div className="sidebar">
            <Nav pageRefs={pageRefs} class="nav" />
          </div>
        </aside>
        
        <article className="content">
          <Hero pageRefs={pageRefs} />
          <Fade triggerOnce={true} duration={1500} fraction={0.45}>
            <AboutMe pageRefs={pageRefs} />
          </Fade>
          <Fade triggerOnce={true}>
            <Experience pageRefs={pageRefs} />
          </Fade>
          <Fade triggerOnce={true}>
            <ProjectSection pageRefs={pageRefs} />
          </Fade>
          <Fade triggerOnce={true} fraction={0.3}>
            <Contact pageRefs={pageRefs} />
          </Fade>
        </article>
      
      </div>
    </Layout>
  )
}

export default IndexPage