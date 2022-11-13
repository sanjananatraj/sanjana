import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../../styles/sections.module.scss"
import spring from "../../images/icons8-spring-100.png"

const jobs = [
  {
    company: "Fidelity Investments",
    title: "Full Stack Engineer",
    descriptions: [
      "Developed client side features and UI changes for an equity research application with Angular and TypeScript",
      "Implemented routes and services connecting to external APIs containing market data with Node.js",
      "Wrote unit and E2E tests with Jasmine, Karma, and Cypress",
      "Worked in an collaborative agile environment with a cross-functional team to receive design requirements and business analysis on features",
    ],
  },

  {
    company: "ZeroUI",
    title: "Software Engineering Intern",
    descriptions: [
      "Optimized website's loading speed by 43% by implementing infinite scrolling using React, Async JavaScript, and Flask",
      "Implemented playlist functionality, explore page, and user profile pages with Bootstrap and SASS",
      "Built 15+ reusable React components and methods for future use",
      "Utilized HTTP Requests and Node.js to standardize connection to backend for client-server interaction",
    ],
  },
  {
    company: "ARMUS Corporation",
    title: "Software Engineering Intern",
    descriptions: [
      "Developed a public health reporting website for displaying cardiovascular data from 30+ Washington hospitals with HTML5, CSS, JavaScript, jQuery, and Google Maps API",
      "Used Jenkins, Docker, and XML to run local unit testing and fix over 100 registries",
      "Crafted a mockup template of an educational module with data visualization of test results and a video player using Sketch",
    ],
  },
  {
    company: "Google",
    title: "CodeU Intern",
    descriptions: [
      "Selected for a 12-week invitation-only program, designed to provide practical coding experience and exposure to best industry practices",
      "Built a chat application with a team of 3 using collaboration tools including Slack, GitHub and Google Hangouts",
      "Constructed client-side features such as tokenizing user input, building an interest system and a conversation access control system with Java",
      "Participated in regular code interviews with a Google Engineer",
    ],
  },
]

const extras = [
  {
    org: "SWE",
    title: "Secretary",
    descriptions: [
      "Served as Secretary of Society of Women Engineers @ UCSC",
      "Organized hackathons, local Santa Cruz community outreach, and events to encourage women in STEM fields",
      "Provided mentoring, career, and resume advice to club members",
      "Used MailChimp to send weekly emails about meeting updates",
    ],
  },
  {
    org: "AmeriCorps",
    title: "Google Code Corps Volunteer",
    descriptions: [
      "Guided students through CS First, a program that increases computer science exposure for young students",
      "Taught elementary school students fundamental programming concepts such as for loops and conditionals",
    ],
  },
  {
    org: "Google",
    title: "Connect with Google Student Champion",
    descriptions: [
      "Selected to lead the Connect with Google Slack community by increasing social engagement, share coding resources, and organizing spaces to build relationships and collaborate offline",
    ],
  },
]

const Experience = ({ pageRefs }) => (
  <section
    id={styles.experience}
    ref={(el) => {
      pageRefs.current = { ...pageRefs.current, experience: el }
    }}
  >
    <h1>
      <img src={spring} alt="spring flower"></img> Experience
    </h1>
    <div className={styles.exp}>
      {jobs.map((job, index) => (
        <React.Fragment key={index}>
          <div className={styles.expChild}>
            <h4>{job.company}</h4>
            <h5>{job.title}</h5>
          </div>

          <ul className={styles.expChild}>
            {job.descriptions.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>

    <hr></hr>

    <h2>Extras</h2>
    <div className={styles.exp}>
      {extras.map((extra, index) => (
        <React.Fragment key={index}>
          <div className={styles.expChild}>
            <h4>{extra.org}</h4>
            <h5>{extra.title}</h5>
          </div>

          <ul className={styles.expChild}>
            {extra.descriptions.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  </section>
)

Experience.propTypes = {
  pageRefs: PropTypes.object.isRequired,
}

export default Experience
