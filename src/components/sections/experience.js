import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/sections.module.scss"

const Experience = ({ pageRefs }) => (
  <>
    <section id='#experience' ref={el => {pageRefs.current = { ...pageRefs.current, experience: el}}}>
      <h1>Experience</h1>
      <p>Cras accumsan porta ipsum, vitae consectetur purus fringilla a. Donec eros tellus, posuere a convallis in, commodo id orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed mollis nibh. Integer at mattis ex. Sed erat tellus, sagittis in risus eu, elementum sodales mauris. Proin aliquam vitae felis ut pellentesque. Quisque fermentum, eros id egestas suscipit, nulla justo consequat velit, eu interdum purus eros ut turpis. Aliquam sed augue lacinia, blandit nisl non, pellentesque odio. Nam eget hendrerit velit. Nam dictum diam ut erat egestas tempus. Integer finibus porttitor libero et efficitur. Suspendisse potenti. Fusce ut bibendum ante, sed interdum ipsum. Duis gravida faucibus magna, eu rhoncus ipsum pellentesque sed.</p>

      <p>Aliquam vitae pulvinar diam, ac elementum enim. Donec consectetur interdum libero, in feugiat est laoreet id. Proin erat nulla, hendrerit at ornare et, iaculis at nulla. Maecenas lobortis commodo erat, non egestas ipsum tristique eu. Sed ullamcorper elementum interdum. Vestibulum a pretium magna. Sed et lectus justo. Proin sit amet nisi arcu. Praesent faucibus eleifend ex eu suscipit. Sed id dolor maximus, tincidunt purus at, hendrerit erat. Nulla fringilla aliquam ligula ac lacinia. Aenean dapibus tortor dui, id pellentesque lorem lacinia vitae. Nam commodo porttitor felis, et molestie odio lobortis a. Sed ornare diam sed nunc fermentum, vel elementum est congue. Nulla feugiat neque in dolor vestibulum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </section>
  </>
)

export default Experience