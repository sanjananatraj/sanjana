/* eslint-disable react/display-name */
import * as React from "react"
import PropTypes from "prop-types"
import { AttentionSeeker } from "react-awesome-reveal"
import * as styles from "../../styles/sections.module.scss"

const Hero = ({ pageRefs }) => (
  <section
    className={styles.hero}
    id="hero"
    ref={(el) => {
      pageRefs.current = { ...pageRefs.current, hero: el }
    }}
  >
    <AttentionSeeker effect="pulse" triggerOnce>
      <h3>👋 Hi there! I&apos;m</h3>
      <h2>Sanjana Natraj.</h2>
    </AttentionSeeker>
    <p>
      I&apos;m a software engineer with a love for front end web development. I love building
      open-source projects and working with front end technologies/frameworks such as React,
      JavaScript, and more! Currently, I work as a full stack engineer @{" "}
      <a target="_blank" rel="noreferrer" href="https://www.fidelity.com/">
        Fidelity Investments.
      </a>{" "}
    </p>
  </section>
)

Hero.propTypes = {
  pageRefs: PropTypes.object.isRequired,
}

export default Hero
