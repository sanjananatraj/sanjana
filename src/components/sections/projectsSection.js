import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../../styles/sections.module.scss"
import sun from "../../images/icons8-sun-128.png"

const ProjectSection = ({pageRefs}) => (
  <section id='#projectsSection' ref={el => pageRefs.current = { ...pageRefs.current, projectsSection: el}}>
    <h1><img src={sun} alt="sun"></img>{' '}Projects</h1>
    ➡️<Link to='/projects'>View more details about my projects</Link>

    <div className={styles.projectList}>
    
      <div className={styles.gradientBox}>
        <div className={styles.content}>
          <h6 className={styles.title}>Third Wave Coffee Base</h6>
          <p>A RESTful API that details coffee product listings from third wave coffee roasters based in Northern California.</p>

          <div className={styles.techList}>
            <span>Flask</span>
            <span>Python</span>
          </div>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>Front End Developer Program</h6>
          <p>Praesent ac neque a erat laoreet dignissim at eu ipsum. Integer vitae neque non est consequat malesuada. Morbi consequat metus ut dui bibendum, a feugiat lorem luctus.</p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>Placeholder Title</h6>
          <p>Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Pharetra vel turpis nunc eget lorem dolor sed viverra. Venenatis urna cursus eget nunc.</p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>🥰</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>Lorem Ipsum...</h6>
          <p>...sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>Title 🤗</h6>
          <p>Just a couple of words for this one</p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>Just a placeholder text. Here's a longer title</h6>
          <p>TODO: Now, I have to generate my list of projects programmatically!</p>
          <p>Initial thoughts: How can I leverage GraphQL to expose my data? 🤔</p>
        </div>
      </div>

      <div class={styles.gradientBox}>
        <div class={styles.content}>
          <h6 class={styles.title}>A Project</h6>
          <p>This is a cool app that does cool things.</p>
        </div>
      </div>

      <div class={styles.gradientBox}></div>

    </div>
  </section>
)

ProjectSection.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default ProjectSection