import * as React from "react"
import PropTypes from "prop-types"
import "../styles/layout.scss"
import { Fade } from "react-awesome-reveal"

const Nav = ({ pageRefs }) => {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Fade direction="left" delay={300} triggerOnce>
      <nav className="nav">
        <ul>
          <li onClick={() => scrollIntoView('hero')}>Top</li>
          <li onClick={() => scrollIntoView('aboutme')}>Bio</li>
          <li onClick={() => scrollIntoView('experience')}>Experience</li>
          <li onClick={() => scrollIntoView('projectsSection')}>Projects</li>
          <li onClick={() => scrollIntoView('contact')}>Contact</li>
        </ul>
      </nav>
    </Fade>
  )
}

Nav.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default Nav;