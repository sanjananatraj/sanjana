import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../../styles/sections.module.scss"
import night from "../../images/icons8-night-100.png"

const AboutMe = ({ pageRefs }) => (
    <section id='#aboutme' ref={el => pageRefs.current = { ...pageRefs.current, aboutme: el}}>
      <h1><img src={night} alt="cloud and a moon"></img>{' '}About me</h1>
      <p>Hello! My name is Sanjana and I like building beautiful websites, interfaces, and apps. I particularly love all things web development and front-facing software. Based in the Bay Area, my interest in coding started when I was in high school, as I was surrounded by all sorts of people in tech. I particularly liked creating and designing websites with HTML, CSS and JavaScript. I joined my local Girls Who Code club in high school, which accelerated my interest in coding.</p>
      <p>Now, I have a Bachelor&apos;s degree in computer science from UCSC, and I&apos;m currently seeking out new opportunities for front end software engineering positions! Reach out to me here.</p>
      <p>Some technologies I&apos;ve been using lately are:</p>
      <ul className={styles.skills}>
        <li>React</li>
        <li>ES6 JavaScript</li>
        <li>GraphQL</li>
        <li>Node.js</li>
        <li>Flask</li>
        <li>Python</li>
      </ul>

      ➡️<Link to='/about'>More about me</Link>
    </section>
)

AboutMe.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default AboutMe