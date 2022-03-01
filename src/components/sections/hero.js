import * as React from "react"
import * as styles from "../../styles/sections.module.scss"

const Hero = (props) => (
  <>
    <section className={styles.hero} id={props.id}>
      <h3>Hi there! I'm</h3>
      <h2>Sanjana Natraj.</h2>
      <p>I'm a software engineer with a love for front end web development.</p>
    </section>
    <hr></hr>
  </>
)

export default Hero