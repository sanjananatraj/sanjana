import * as React from "react"
import * as styles from "../styles/nav.module.scss";

const Nav = ({ pageRefs }) => {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth"});
  };

  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li onClick={() => scrollIntoView('hero')}>Top</li>
          <li onClick={() => scrollIntoView('aboutme')}>About</li>
          <li onClick={() => scrollIntoView('experience')}>Experience</li>
          <li onClick={() => scrollIntoView('projectsSection')}>Projects</li>
        </ul>
      </div>
    </>
  )
}

export default Nav;