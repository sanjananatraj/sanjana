import * as React from "react"
import PropTypes from "prop-types"
import "../styles/layout.scss"
import { Fade } from "react-awesome-reveal"

const Nav = (props) => {
  function scrollIntoView(type) {
    props.pageRefs.current[type].scrollIntoView({ behavior: "smooth" })
    if(props.setOpen) {
      props.setOpen(false)
    }
  }

  return (
    <Fade direction="left" delay={300} triggerOnce>
      <nav className={props.class}>
        <ul>
          <li onClick={() => scrollIntoView('hero')}>Top</li>
          <li onClick={() => scrollIntoView('aboutme')}>Bio</li>
          <li onClick={() => scrollIntoView('experience')}>Experience</li>
          <li onClick={() => scrollIntoView('project')}>Projects</li>
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