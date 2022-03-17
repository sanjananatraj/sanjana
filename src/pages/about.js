import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/menu.scss"

import Hamburger from 'hamburger-react'

const AboutPage = () => {
  const [isOpen, setOpen] = useState(false)
  const [style, setStyle] = useState('fullMenu tra')
  
  const handleToggle = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    if(isOpen) {
      console.log("open")
      setStyle('fullMenu tr')
    } else {
      console.log("closed")
      setStyle('fullMenu tra')
    }
  }, [isOpen])
  
  // behavior for if the user resizes window after opening fullscreen menu
  const onResize = (e) => {
    if(e.currentTarget.innerWidth > 1033){
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Layout>
      <div className="ham">
        <Hamburger size={25} color="black" toggled={isOpen} toggle={handleToggle} direction="right" easing="ease-in" label="Show fullscreen menu"  />
      </div>
      <div className={style}>
        <p>hello, world!</p>
      </div>
      <div className="page">
      <Seo title="About" />
        <h1>About me</h1>
        <h2>Header</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
      </div>
    </Layout>
  )
}

export default AboutPage