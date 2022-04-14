import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/codeBlock"

const components = {
  pre: CodeBlock,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
