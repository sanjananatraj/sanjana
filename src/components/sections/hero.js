import * as React from "react"
import * as styles from "../../styles/sections.module.scss"

const Hero = ({ pageRefs }) => {
  return (
    <>
      <section className={styles.hero} id='#hero' ref={el => {pageRefs.current = { ...pageRefs.current, hero: el}}}>
        <h3>Hi there! I'm</h3>
        <h2>Sanjana Natraj.</h2>
        <p>I'm a software engineer with a love for front end web development. I love building open-source projects and working with front end technologies and frameworks such as React, Javascript, and more! I'm currently looking for new opportunities as a full time software engineer. </p>
      </section>
    </>
  );
}

export default Hero