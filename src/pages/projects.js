import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CodeBlock from "../components/codeBlock"

const components = {
  pre: CodeBlock,
}

const MDXBlock = (props) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{props.body}</MDXRenderer>
    </MDXProvider>
  )
}

const ProjectPage = ({ data }) => (
  <Layout>
    <div className="page">
      <Seo title="Projects" />
      <h1>Projects</h1>
      <p>
        This page is to go in a bit more depth about some of the projects I&apos;ve built. I&apos;ll
        be describing my thought process, some hurdles I encountered when building, and what I loved
        about each project!
      </p>

      <p>Note: this page is still under construction.</p>

      <h2>Table of Contents</h2>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.slug}>
            <a href={`#${node.slug}`}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>

      {data.allMdx.nodes.map((node) => (
        <div id={node.slug} key={node.slug}>
          <MDXBlock body={node.body} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      nodes {
        body
        frontmatter {
          title
        }
        slug
      }
    }
  }
`

export default ProjectPage
