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

const Header = ({ siteTitle }) => {
  const [active, setActive] = React.useState()

  return(
    <header className={styles.header}>
      <nav className={styles.parent}>
        <div className={styles.logo}>
          <Link to="/" className={styles.title}>
            {siteTitle}
          </Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
              <Link 
                to={link.url}
                key={link.label}
                onClick={() => setActive(link.label)}
                activeClassName="is-active"
                >
                {/* <img src={link.icon} alt={link.label} title={link.label} /> */}
                <i><span title={link.label}>{link.label}</span></i>
              </Link>
            ))}
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
