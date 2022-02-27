import * as React from "react"
// import { footer } from "./footer.module.scss"
import * as styles from "../styles/footer.module.scss"
import github from "../images/icons8-github-100.png"
import resume from "../images/icons8-resume-100.png"
import linkedin from "../images/icons8-linkedin-100.png"

const links = [
  { url: 'https://github.com/sanjananatraj', label: 'Github', icon: github },
  { url: 'https://www.linkedin.com/in/sanjana-natraj/', label: 'LinkedIn', icon: linkedin },
  { url: '/', label: 'Resume', icon: resume }
]

const Footer = () =>{
  return(
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Sanjana Natraj. Built with&nbsp;
      <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">Gatsby</a>.
      Icons by&nbsp;<a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      
      <br></br>
      <br></br>
      
      <div className={styles.footerNav}>
        <nav>
          {links.map((link) => (
            <a 
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={link.label}
            >
              <img src={link.icon} alt={link.label} title={link.label} />
              <span title={link.label}>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer