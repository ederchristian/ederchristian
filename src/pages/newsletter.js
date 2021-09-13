import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as Styled from "../components/Newsletter/styled"

const Newsletter = () => (
  <Layout>
    <Seo title="Newsletter" />
    <Styled.MainContent>
      <h1>I'd like to talk to you.</h1>
      <p>
        In this newsletter I'm gonna talk mainly about tech, lyfestyle, and
        business.
      </p>
      <p>
        I'm gonna share with you my experience with front-end development,
        startups, entrepreneurship, english studies, and so on.
      </p>
      <p>I won't spam, I promise.</p>
      <p>
        You can also{" "}
        <a
          href="https://buttondown.email/ederchristian/rss"
          target="_blank"
          rel="noopener noreferrer"
        >
          subscribe via RSS
        </a>
        .
      </p>

      <Styled.Group>
        <Styled.Form
          action="https://buttondown.email/api/emails/embed-subscribe/ederchristian"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/ederchristian', 'popupwindow')"
          className="embeddable-buttondown-form"
        >
          <Styled.Input
            type="email"
            name="email"
            id="bd-email"
            placeholder="Your email"
          />
          <Styled.Input type="hidden" value="1" name="embed" />
          <Styled.Input type="submit" value="Subscribe" />
        </Styled.Form>
      </Styled.Group>
    </Styled.MainContent>
  </Layout>
)

export default Newsletter
