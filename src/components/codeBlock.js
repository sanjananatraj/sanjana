import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "../themes"

const CodeBlock = (props) => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)

  const lineNumberStyle = {
    marginRight: "20px",
    color: "#6b6d96",
  }

  const [buttonText, setButtonText] = React.useState("Copy")
  const copyButtonStyle = {
    float: "right",
    padding: "10px",
    marginLeft: "20px",
  }

  const onCopyClick = () => {
    navigator.clipboard.writeText(props.children.props.children.trim())
    setButtonText("Copied!")
    setTimeout(() => {
      setButtonText("Copy")
    }, 2000)
  }

  const [isHovering, setIsHovering] = React.useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
          style={{ ...style, padding: "20px" }}
        >
          <div>
            {isHovering && (
              <button style={copyButtonStyle} onClick={onCopyClick}>
                {buttonText}
              </button>
            )}
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span style={lineNumberStyle}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
