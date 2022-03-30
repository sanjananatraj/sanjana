import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby-link"
import * as styles from "../../styles/sections.module.scss"
import globe from "../../images/icons8-globe-64.png"

// https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = ({ pageRefs }) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }
  return (
    <section
      className={styles.contact}
      id="contact"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
    >
      <h1>
        <img src={globe} alt="blue globe"></img> Contact
      </h1>
      <p>
        I&apos;m currently open to new opportunities in software engineering. I'm based in the Bay
        Area, but I'm willing to relocate/work remotely. You can either{" "}
        <a href="mailto:sanjana.natraj319@gmail.com">send me an email</a> or use the form below to
        contact me. I&apos;ll try my best to respond as soon as possible!
      </p>

      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name:
            <br />
            <input type="text" name="name" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label>
            Email:
            <br />
            <input type="email" name="email" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              placeholder="Type your message here"
              onChange={handleChange}
              required
            />
          </label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
  )
}

Contact.propTypes = {
  pageRefs: PropTypes.object.isRequired,
}

export default Contact
