import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/sections.module.scss"
import spring from "../../images/icons8-spring-100.png"
import react from "../../images/icons8-react-100.png"

const jobs = [
  {'company': 'ZeroUI', 'title': 'Software Engineering Intern', 'descriptions': [
      "Optimized website's loading speed by 43% by implementing infinite scrolling using React, Async JavaScript, and Flask",
      "Implemented playlist functionality, explore page, and user profile pages with Bootstrap and SASS",
      "Built 15+ reusable React components and methods for future use",
      "Utilized HTTP Requests and Node.js to standardize connection to backend for client-server interaction"
  ]},
  {'company': 'ARMUS Corporation', 'title': 'Software Engineering Intern', 'descriptions': [
      "Developed a public health reporting website for displaying cardiovascular data from 30+ Washington hospitals with HTML5, CSS, JavaScript, jQuery, and Google Maps API",
      "Used Jenkins, Docker, and XML to run local unit testing and fix over 100 registries",
      "Crafted a mockup template of an educational module with data visualization of test results and a video player using Sketch"
  ]},
  {'company': 'Google', 'title': 'CodeU Intern', 'descriptions': [
      "Selected for a 12-week invitation-only program, designed to provide practical coding experience and exposure to best industry practices",
      "Built a chat application with a team of 3 using collaboration tools including Slack, GitHub and Google Hangouts",
      "Constructed client-side features such as tokenizing user input, building an interest system and a conversation access control system with Java",
      "Participated in regular code interviews with a Google Engineer"
  ]}
]

const Experience = ({ pageRefs }) => (
  <>
    <section id='#experience' ref={el => {pageRefs.current = { ...pageRefs.current, experience: el}}}>
      <h1><img src={spring} alt="spring flower"></img>{' '}Experience</h1>
      <div className={styles.exp}>
        {jobs.map((job) => (
          <>
            <div className={styles.expChild}>
              <h3>{job.company}</h3>
              <h5>{job.title}</h5>
            </div>

            <ul className={styles.expChild}>
              {job.descriptions.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </section>
  </>
)

export default Experience