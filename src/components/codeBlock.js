import React from "react"
import rangeParser from "parse-numeric-range"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "../themes"
import "../styles/codeBlock.scss"

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const CodeBlock = (props) => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""
  const code = props.children.props.children.trim()

  const metastring = props.children.props.metastring || ""
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const [buttonText, setButtonText] = React.useState("Copy")
  const [isHovering, setIsHovering] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setButtonText("Copied!")
    setTimeout(() => {
      setButtonText("Copy")
    }, 2000)
  }

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre
            className={className}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            style={{
              ...style,
            }}
          >
            {isHovering && (
              <button className="copy-button" onClick={copyToClipboard}>
                {buttonText}
              </button>
            )}

            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }

              return (
                <div {...lineProps}>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default CodeBlock
