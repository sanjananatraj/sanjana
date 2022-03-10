import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/nav.module.scss"

const Nav = ({ pageRefs }) => {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.nav}>
      <ul>
        <li onClick={() => scrollIntoView('hero')}>Top</li>
        <li onClick={() => scrollIntoView('aboutme')}>About</li>
        <li onClick={() => scrollIntoView('experience')}>Experience</li>
        <li onClick={() => scrollIntoView('projectsSection')}>Projects</li>
        <li onClick={() => scrollIntoView('contact')}>Contact</li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default Nav;