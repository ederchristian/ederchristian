import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import EderChristian from "../images/eder-christian.png"

import * as Styled from "../components/About/styled"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Styled.MainContent>
      <h1>Hi, I'm Eder.</h1>
      <Styled.Image src={EderChristian} alt="Eder Christian" />
      <p>
        I'm Eder Christian, a web developer, currently living in São Paulo -
        Brazil, and working at{" "}
        <a href="https://startse.com" target="_blank" rel="noopener noreferrer">
          StartSe
        </a>
        . I’m a passionate about technology and entrepreneurship, always looking
        for new opportunities and new connections with other people. I've got an
        entrepreneur mindset.
      </p>
      <blockquote>
        I believe that life really begins when we leave our comfort zone.
      </blockquote>
      <p>
        I love to make things for the web and to put my endeavor on it. In this
        path, each passing day I wanna get more envolved with the open source
        community.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>Bootstrap 3 and 4</li>
        <li>SVG</li>
        <li>Git</li>
        <li>Scrum</li>
        <li>Kanban</li>
      </ul>

      <h2>Currently studying</h2>
      <ul>
        <li>Data Structure and Algorithms</li>
        <li>Advanced JavaScript</li>
        <li>Next.js</li>
      </ul>

      <h2>I wanna learn</h2>
      <ul>
        <li>Vue.js</li>
        <li>Swift</li>
      </ul>

      <h2>I also do</h2>
      <ul>
        <li>Design in Photoshop and Illustrator</li>
        <li>Video editing at iMovie</li>
      </ul>

      <h2>I speak</h2>
      <ul>
        <li>Portuguese - Native</li>
        <li>English - Professional working proficiency</li>
        <li>Spanish - If you’re patient, we can understand each other</li>
      </ul>

      <h2>My hobbies are</h2>
      <ul>
        <li>Soccer (or football, if you prefer)</li>
        <li>Workout</li>
        <li>Programming</li>
        <li>Books</li>
        <li>Music (especially the old songs)</li>
        <li>Travel</li>
      </ul>
    </Styled.MainContent>
  </Layout>
)

export default About
