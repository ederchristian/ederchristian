import React from "react"

import { Hobbies } from "../components/About/hobbies"
import { Languages } from "../components/About/languages"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { OtherSkills } from "../components/About/otherSkills"
import { Skills } from "../components/About/skills"
import { StudiesFuture } from "../components/About/studiesFuture"
import { StudiesPresent } from "../components/About/studiesPresent"

import EderChristian from "../images/eder-christian.png"

import * as Styled from "../components/About/styled"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Styled.MainContent>
      <h1>Hi, I'm Eder.</h1>
      <Styled.Image src={EderChristian} alt="Eder Christian" />
      <p>
        I'm a Front-end Developer working at an American company remotely from
        São Paulo, Brazil. I'm a passionate about technology and
        entrepreneurship, always looking for new opportunities and new
        connections with other people.
      </p>
      <blockquote>
        I believe that life really begins when we leave our comfort zone.
      </blockquote>
      <p>
        I love to make things for the web and to put my endeavor on it. In this
        path, each passing day I wanna get more envolved with the open source
        community and serve people with technology.
      </p>

      <h2>Skills</h2>
      <ul>
        {Skills.map(skill => {
          return <li key={skill.id}>{skill.item}</li>
        })}
      </ul>

      <h2>Currently studying</h2>
      <ul>
        {StudiesPresent.map(subject => {
          return <li key={subject.id}>{subject.item}</li>
        })}
      </ul>

      <h2>I wanna learn</h2>
      <ul>
        {StudiesFuture.map(subject => {
          return <li key={subject.id}>{subject.item}</li>
        })}
      </ul>

      <h2>I also do</h2>
      <ul>
        {OtherSkills.map(skill => {
          return <li key={skill.id}>{skill.item}</li>
        })}
      </ul>

      <h2>I speak</h2>
      <ul>
        {Languages.map(language => {
          return <li key={language.id}>{language.item}</li>
        })}
      </ul>

      <h2>My hobbies are</h2>
      <ul>
        {Hobbies.map(hobby => {
          return <li key={hobby.id}>{hobby.item}</li>
        })}
      </ul>
    </Styled.MainContent>
  </Layout>
)

export default About
