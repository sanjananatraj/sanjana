import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import headshot from "../images/headshot.jpeg"
import js from "../images/icons8-javascript-logo-100.png"
import css from "../images/icons8-css3-100.png"
import docker from "../images/icons8-docker-100.png"
import webpack from "../images/icons8-webpack-100.png"
import py from "../images/icons8-python-64.png"
import java from "../images/icons8-java-64.png"
import babel from "../images/icons8-babel-100.png"
import react from "../images/icons8-react-100.png"
import html from "../images/icons8-html-5-64.png"
import api from "../images/icons8-api-64.png"
import sql from "../images/icons8-sql-64.png"
import * as styles from "../styles/about.module.scss"

const AboutPage = () => {

  const skills = [js, html, css, react, webpack, babel, api, py, java, docker, sql]

  return (
  <Layout>
    <Seo title="About" />
    <div className="page">
      <h1>About me</h1>
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <p>Hello and welcome once again to my website! I'm Sanjana, an aspriring software engineer based in the San Francisco Bay Area. This website is one of my creations that I built to showcase my open source projects, talk about the tech industry, link useful resources, and more! My goal is to continually update and add to this site as I build all sorts of things.</p>
          
          <h4>A bit more about me</h4>
          
          <p>My interest in tech started in high school, where I found myself using the internet more. I grew up in Foster City, CA, which had an abundance of tech companies all around! I was lucky enough to go on field trips to Google's Mountain View campus and Facebook's Menlo Park campus, which made me want to study computer science. I took APCS and joined my local <a href="https://girlswhocode.com/" target="_blank" rel="noreferrer">Girls Who Code</a> club, where I started learning JavaScript, HTML, and CSS. Ever since then, I fell in love with web development; now, I try and strive to build beautiful and accessible digital experiences!</p>
        </div>
        <img className={styles.headshot} src={headshot} height={300} alt="headshot"></img>
      </div>
      
      <div className={styles.skills}>
        <h4>Skills</h4>
        {skills.map((skill, i) => (
          <span key={i}><img src={skill}></img></span>
        ))}
      </div>
      <br></br>

      <h2>Interests</h2>
      <p>Outside of coding, some of my favorite things to do are play video games, watch some streams on Twitch, practice my photography skills, and cook. Some of the games I play are Overwatch, Valorant, and Apex Legends! I enjoy FPS games, but I also love to get immersed in single player games. Currently, I'm playing through Yakuza: Like a Dragon, which is probably one of my favorite JRPGs to date, right behind Persona 5.</p>
      
      <p>One hobby that I got into during quarantine was coffee. Before the pandemic, I wasn't really a coffee drinker, but I would drink some with my housemates with a french press in the mornings occasionally. I then researched more about coffee and learned about third wave coffee roasters and many different techniques to prepare coffee. I picked up a Hario v60, a scale, and a gooseneck kettle, and now I pretty much drink coffee everyday. My world changed when I started drinking pour over coffee with freshly roasted coffee beans, usually from a single origin. This definitely inspired me to <Link to="/projects#twcb">build some projects around coffee</Link>, too.</p>

      <p>Some other things I'm interested in are food science, pottery, pixel art, skincare, and computer hardware. Feel free to <Link to="/#contact">send me a message</Link> to connect if you'd like! I'm always open to meet new people and say hello. Thanks for reading!</p>
 
      <br></br>
      <h2>Tools</h2>
      <h4>Software</h4>
      <ul>
        <li>This website was built using <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">Gatsby</a> and is hosted on <a target="_blank" rel="noreferrer" href="https://www.netlify.com/">Netlify</a></li>
        <li>Coding: <a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/">Visual Studio Code</a> with the Pink Cat Boo theme (although I want to make my own theme eventually!)</li>
          <ul>
            <li>Platform: Windows 11</li>
            <li>Terminal: Git Bash</li>
          </ul>
      </ul>

      <h4>Hardware</h4>
      I mainly code on my desktop PC that I built in 2019. Specs:
      <ul>
        <li><b>CPU:</b> Intel Core i5-9600K</li>
        <li><b>CPU Cooler:</b> NZXT Kraken X62</li>
        <li><b>Motherboard:</b> Gigabyte Z390 AORUS PRO</li>
        <li><b>RAM:</b> Corsair Vengeance RGB Pro 16 GB DDR4-3200</li>
        <li><b>Storage:</b> 
          <ul>
            <li>SSD: Samsung 970 Evo Plus 500 GB M.2-2280 NVME Solid State Drive</li>
            <li>HDD: Seagate Barracuda 2 TB 3.5" 7200RPM Internal Hard Drive</li>
          </ul>
        </li>
        <li><b>GPU:</b> Gigabyte GeForce RTX 2080</li>
        <li><b>PSU:</b> Corsair RM850x</li>
        <li><b>Case:</b> NZXT H500i</li>
      </ul>
    </div>
  </Layout>
  )
}

export default AboutPage