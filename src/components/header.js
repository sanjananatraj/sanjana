import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../styles/header.module.scss"

const links = [
  { url: "/about", label: "about" },
  { url: "/projects", label: "projects" },
  { url: "/credits", label: "credits" },
]

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <nav className={styles.parent}>
      <div className={styles.logo}>
        <Link to="/" className={styles.title}>
          {siteTitle}
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link to={link.url} key={link.label} activeClassName="is-active">
            <i>
              <span title={link.label}>{link.label}</span>
            </i>
          </Link>
        ))}
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
