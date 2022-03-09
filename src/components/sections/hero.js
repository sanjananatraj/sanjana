/* eslint-disable react/display-name */
import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../../styles/sections.module.scss"

const Hero = ({pageRefs}) => (
  <section className={styles.hero} id='#hero' ref={el => {pageRefs.current = { ...pageRefs.current, hero: el}}}>
    <h3>Hi there! I&apos;m</h3>
    <h2>Sanjana Natraj.</h2>
    <p>I&apos;m a software engineer with a love for front end web development. I love building open-source projects and working with front end technologies and frameworks such as React, Javascript, and more! I am currently looking for new opportunities as a full time software engineer. </p>
  </section>
)

Hero.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default Hero