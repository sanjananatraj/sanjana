import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../styles/sections.module.scss"
import sun from "../../images/icons8-sun-128.png"

const ProjectSection = ({ pageRefs }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___order, order: ASC}) {
        nodes {
          frontmatter {
            external
            github
            summary
            stack
            title
            order
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            image_alt
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
                <GatsbyImage image={getImage(node.frontmatter.image)} alt={node.frontmatter.image_alt} />
                {node.frontmatter.title}
              </h6>
              
              <p>{node.frontmatter.summary}</p>

              <nav className={styles.links}>
                {node.frontmatter.github && (
                  <a target="_blank" rel="noreferrer" href={node.frontmatter.github}>Github</a>
                )}

                {node.frontmatter.external && (
                  <a target="_blank" rel="noreferrer" href={node.frontmatter.external}>Link</a>
                )}
              </nav>
          
              <div className={styles.techList}>
                {node.frontmatter.stack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

ProjectSection.propTypes = {
  pageRefs: PropTypes.object.isRequired
}

export default ProjectSection