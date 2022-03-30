import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"

const ThanksPage = () => (
  <Layout>
    <div className="page">
      <h1>Thank you!</h1>
      <p>Thanks for reaching out. I'll try and respond as soon as I can :)</p>
      <Link to="/">Go back home</Link>
    </div>
  </Layout>
)

export default ThanksPage
