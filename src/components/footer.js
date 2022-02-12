import * as React from "react"
import { footer } from "./footer.module.scss"

const Footer = () =>{
    return(
        <footer className={footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby.</a>
          {` `}
          <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/Tfx7uIa5vMTc/moon">Moon</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
        </footer>
    )
}

export default Footer