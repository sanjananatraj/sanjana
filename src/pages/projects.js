import * as React from "react"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPage = ({ data }) => (
  <Layout>
    <div className="page">
    <Seo title="Projects" />
      <h1>Projects</h1>
      <p>This page is to go in a bit more depth about some of the projects I&apos;ve built. I&apos;ll be describing my thought process, some hurdles I encountered when building, and what I loved about each project!</p>

      {data.allMdx.nodes.map((node) => (
        <MDXRenderer>{node.body}</MDXRenderer>
      ))}
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___order, order: ASC}) {
      nodes {
        body
      }
    }
  }
  `

export default ProjectPage