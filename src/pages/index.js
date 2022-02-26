import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <h1>Hi people</h1>
      <h2>It's me.</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tristique orci, at vulputate neque ultrices sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt eget justo sed consequat. Suspendisse in imperdiet justo. In tempus vulputate volutpat. Donec ut quam nibh. Morbi molestie vel justo a sollicitudin.

      Cras accumsan porta ipsum, vitae consectetur purus fringilla a. Donec eros tellus, posuere a convallis in, commodo id orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed mollis nibh. Integer at mattis ex. Sed erat tellus, sagittis in risus eu, elementum sodales mauris. Proin aliquam vitae felis ut pellentesque. Quisque fermentum, eros id egestas suscipit, nulla justo consequat velit, eu interdum purus eros ut turpis. Aliquam sed augue lacinia, blandit nisl non, pellentesque odio. Nam eget hendrerit velit. Nam dictum diam ut erat egestas tempus. Integer finibus porttitor libero et efficitur. Suspendisse potenti. Fusce ut bibendum ante, sed interdum ipsum. Duis gravida faucibus magna, eu rhoncus ipsum pellentesque sed.

      Aliquam vitae pulvinar diam, ac elementum enim. Donec consectetur interdum libero, in feugiat est laoreet id. Proin erat nulla, hendrerit at ornare et, iaculis at nulla. Maecenas lobortis commodo erat, non egestas ipsum tristique eu. Sed ullamcorper elementum interdum. Vestibulum a pretium magna. Sed et lectus justo. Proin sit amet nisi arcu. Praesent faucibus eleifend ex eu suscipit. Sed id dolor maximus, tincidunt purus at, hendrerit erat. Nulla fringilla aliquam ligula ac lacinia. Aenean dapibus tortor dui, id pellentesque lorem lacinia vitae. Nam commodo porttitor felis, et molestie odio lobortis a. Sed ornare diam sed nunc fermentum, vel elementum est congue. Nulla feugiat neque in dolor vestibulum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  </Layout>
)

export default IndexPage