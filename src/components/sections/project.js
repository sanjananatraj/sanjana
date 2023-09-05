import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../styles/sections.module.scss"
import sun from "../../images/icons8-sun-128.png"

const Project = ({ pageRefs }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "projects"}}, sort: { childMdx: { frontmatter: { order: ASC} } } ) {
        nodes {
          childMdx {
            frontmatter {
              title
              github
              external
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              image_alt
              order
              stack
              summary
            }
          }
        }
      }
    }
  `)

  return (
    <section id="project" ref={(el) => (pageRefs.current = { ...pageRefs.current, project: el })}>
      <h1>
        <img src={sun} alt="sun"></img> Projects
      </h1>
      ➡️<Link to="/projects">View more details about my projects</Link>
      <div className={styles.projectList}>
        {data.allFile.nodes.map((node, index) => (
          <div className={styles.projectItem} key={index}>
            <h6 className={styles.title}>
              <GatsbyImage
                image={getImage(node.childMdx.frontmatter.image)}
                alt={node.childMdx.frontmatter.image_alt}
              />
              &nbsp;
              {node.childMdx.frontmatter.title}
            </h6>

            <p>{node.childMdx.frontmatter.summary}</p>

            <nav className={styles.links}>
              {node.childMdx.frontmatter.github && (
                <a target="_blank" rel="noreferrer" href={node.childMdx.frontmatter.github}>
                  Github
                </a>
              )}
              {node.childMdx.frontmatter.external && (
                <a target="_blank" rel="noreferrer" href={node.childMdx.frontmatter.external}>
                  Link
                </a>
              )}
            </nav>

            <div className={styles.techList}>
              {node.childMdx.frontmatter.stack?.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

Project.propTypes = {
  pageRefs: PropTypes.object.isRequired,
}

export default Project
