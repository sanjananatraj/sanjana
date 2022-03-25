import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../../styles/sections.module.scss"
import night from "../../images/icons8-night-100.png"

const AboutMe = ({ pageRefs }) => {
  const skills = ['React', 'ES6 JavaScript', 'GraphQL', 'Node.js', 'Flask', 'Python']  

  const scrollToContact = (e) => {
    e.preventDefault()
    pageRefs.current['contact'].scrollIntoView({ behavior: "smooth" })
  }
  
  return(
      <section id="aboutme" ref={el => pageRefs.current = { ...pageRefs.current, aboutme: el}}>
        <h1><img src={night} alt="cloud and a moon"></img>{' '}About</h1>
        
        <p>Hello! My name is Sanjana, and I 💗 building beautiful websites, interfaces, and apps. I particularly love all things web development and front-facing software. Based in the Bay Area, my interest in coding started when I was in high school, as I was surrounded by all sorts of people in tech. I particularly liked creating and designing websites with HTML, CSS and JavaScript.</p>

        <p>While my main interests lie in front end development, I also have a bit of experience in backend technology, such as utilizing Flask and MySQL to build <a target="_blank" rel="noreferrer" href="https://thirdwavecoffeebase.com/">my own RESTful API</a>. Some of my favorite courses in college were about databases, machine learning, NLP, and data visualization.</p>
        
        <p>Now with my Bachelor&apos;s degree in computer science from UCSC, I&apos;m currently seeking out new opportunities for front end/full stack software engineering positions! Reach out to me by <a href="mailto:sanjana.natraj319@gmail.com">sending me an email</a> or by using the <a onClick={scrollToContact}>contact form below</a>. I'm also available on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sanjana-natraj/">LinkedIn</a>.</p>
        
        <p>Here are a couple of technologies I&apos;ve been using:</p>
        
        <ul className={styles.skills}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        ➡️<Link to='/about'>More about me</Link>
      </section>
    )
}

AboutMe.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default AboutMe