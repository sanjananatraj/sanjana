import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../styles/header.module.scss"
import cat from "../images/icons8-cat-64.png"
import fog from "../images/icons8-fog-100.png"
import moonAndStars from "../images/icons8-moon-and-stars-100.png"

const links = [
  { url: '/about', label: 'about', icon: cat },
  { url: '/projects', label: 'projects', icon: fog },
  { url: '/credits', label: 'credits', icon: moonAndStars }
]

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.headerTitle}>
          {siteTitle}
        </Link>
      </nav>
      <div>
        <nav className={styles.headerNav}>
          {links.map((link) => (
              <a 
                href={link.url}
                key={link.label}
                id={styles.headerLinks}
              >
                <img src={link.icon} alt={link.label} title={link.label} />
                <i><span title={link.label}>{link.label}</span></i>
              </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
