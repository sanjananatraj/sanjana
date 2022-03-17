import React, {useState, useEffect} from "react"
import "../styles/menu.scss"
import Nav from "../components/nav"
import Hamburger from 'hamburger-react'

const Menu = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [style, setStyle] = useState('fullMenu menu-leave')

  const handleToggle = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    if(isOpen) {
      setStyle('fullMenu menu-enter')
      document.body.style.overflow = 'hidden';
    } else {
      setStyle('fullMenu menu-leave')
      document.body.style.overflow = 'unset';
    }
  }, [isOpen])

  const onResize = (e) => {
    if(e.currentTarget.innerWidth > 884){
      setOpen(false)
    }
  }

  const pageRefs = props.pageRefs;

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return(
    <>
      <div className="ham">
        <Hamburger size={25} color="black" toggled={isOpen} toggle={handleToggle} direction="right" easing="ease-in" label="Show fullscreen menu"  />
      </div>
      <div className={style}>
          <Nav pageRefs={pageRefs} class="fullNav" setOpen={setOpen} />
      </div>
    </>
  )
}

export default Menu