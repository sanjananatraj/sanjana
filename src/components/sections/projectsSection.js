import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../styles/sections.module.scss"
import sun from "../../images/icons8-sun-128.png"

const ProjectSection = ({ pageRefs }) => {

  const data = useStaticQuery(graphql`
    query  {
      allMdx(sort: {fields: frontmatter___order, order: ASC}) {
        nodes {
          frontmatter {
            date
            external
            github
            summary
            technologies
            title
            order
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return(
    <section id='#projectsSection' ref={el => pageRefs.current = { ...pageRefs.current, projectsSection: el}}>
      <h1><img src={sun} alt="sun"></img>{' '}Projects</h1>
      ➡️<Link to='/projects'>View more details about my projects</Link>

      <div className={styles.projectList}>
        {data.allMdx.nodes.map((node) => (
          <div className={styles.projectItem} key={node.order}>
              <h6 className={styles.title}>
                <GatsbyImage
                  image={getImage(node.frontmatter.image)}
                />
                {node.frontmatter.title}
              </h6>
              
              <p className={styles.summary}>{node.frontmatter.summary}</p>

              <nav className={styles.links}>
                {node.frontmatter.github && (
                  <a target="_blank" rel="noreferrer" href={node.frontmatter.github}>Github</a>
                )}

                {node.frontmatter.external && (
                  <a target="_blank" rel="noreferrer" href={node.frontmatter.external}>Link</a>
                )}
              </nav>
            
              <div className={styles.techList}>
                {node.frontmatter.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

          </div>
        ))}
      
        <div class={styles.projectItem}>
          <h6 class={styles.title}>Front End Developer Program</h6>
          <p>Praesent ac neque a erat laoreet dignissim at eu ipsum. Integer vitae neque non est consequat malesuada. Morbi consequat metus ut dui bibendum, a feugiat lorem luctus.</p>
        </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>Placeholder Title</h6>
          <p>Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Pharetra vel turpis nunc eget lorem dolor sed viverra. Venenatis urna cursus eget nunc.</p>
        </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>🥰</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>Lorem Ipsum...</h6>
          <p>...sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>Title 🤗</h6>
          <p>Just a couple of words for this one</p>
        </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>Just a placeholder text. Here's a longer title</h6>
          <p>TODO: Now, I have to generate my list of projects programmatically!</p>
          <p>Initial thoughts: How can I leverage GraphQL to expose my data? 🤔</p>
        </div>

        <div class={styles.projectItem}>
          <h6 class={styles.title}>A Project</h6>
          <p>This is a cool app that does cool things.</p>
        </div>
      </div>
    </section>
  )
}

ProjectSection.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default ProjectSection