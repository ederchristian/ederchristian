import React from "react"

import { Hobbies } from "../components/About/hobbies"
import { Languages } from "../components/About/languages"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { OtherSkills } from "../components/About/otherSkills"
import { Skills } from "../components/About/skills"
import { StudiesFuture } from "../components/About/studiesFuture"
import { StudiesPresent } from "../components/About/studiesPresent"

import EderChristian from "../images/new-eder-christian.jpg"

import * as Styled from "../components/About/styled"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Styled.MainContent>
      <Styled.Title>Hi, I'm Eder.</Styled.Title>
      <Styled.Image src={EderChristian} alt="Eder Christian" />
      <Styled.Paragraph>I'm from Lorena, a small city in the State of Sao Paulo, Brazil.</Styled.Paragraph>
      <Styled.Paragraph>I've been curious about computers since I was a kid. When I was 17, I got a certificate in technical computing. Three years later, I went to a public college to study Information Technology Management.</Styled.Paragraph>
      <Styled.Paragraph>Up until this point, we didn't even have a computer at home. My first computer was an old and simple PC that I got from a City Hall NGO project. Three years later, I could finally afford a MacBook Air — it was used but it made me fall in love with Apple products and that's when I knew I wanted to learn how to code. At first, considered Swift or Objective-C, but after some research, I decided to go with web development first and I liked the front-end area.</Styled.Paragraph>
      <Styled.Paragraph>In 2015, I got a post-degree certificate in Web Applications Development. I would say this is when my career really started, even though I had no experience or knowledge about programming.</Styled.Paragraph>
      <Styled.Paragraph>The following 5 years were full of new opportunities:</Styled.Paragraph>

      <Styled.ListGroup>
        <Styled.ListItem>I worked at a small marketing agency in my hometown with design and WordPress websites;</Styled.ListItem>
        <Styled.ListItem>I dropped everything to move to Sao Paulo city to work at <a href="https://startse.com" rel="noopener noreferrer">StartSe</a>, an education startup as a front-end developer with basic landing pages using HTML, CSS, JavaScript, and Bootstrap;</Styled.ListItem>
        <Styled.ListItem>I visited Silicon Valley and took some business courses with this startup;</Styled.ListItem>
        <Styled.ListItem>Still at this startup, I worked with sales, marketing, video editing, and design;</Styled.ListItem>
        <Styled.ListItem>I started working with React and Next.js, and helped this startup to create a platform to broadcast their online events, which helped me to become a partner;</Styled.ListItem>
        <Styled.ListItem>I also became a squad leader;</Styled.ListItem>
        <Styled.ListItem>I learned English from scratch by studying online;</Styled.ListItem>
        <Styled.ListItem>I attended more than 60 tech events and meetups — and made a lot of friends from the web development community.</Styled.ListItem>
      </Styled.ListGroup>

      <Styled.Paragraph>In February 2022 I started working at <a href="https://automatiq.com/" rel="noopener noreferrer">Automatiq</a>, an American company based in New York. It has an automation platform for ticket brokers, where they can do invoicing and pricing, for example, across multiple vendors.</Styled.Paragraph>
      <Styled.Paragraph>Really excited for my next steps in this amazing world!</Styled.Paragraph>

      <Styled.Subtitle>Skills</Styled.Subtitle>
      <Styled.SkillGroup>
        {Skills.map(skill => {
          return <Styled.SkillItem key={skill.id}>{skill.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>

      <Styled.Subtitle>Currently studying</Styled.Subtitle>
      <Styled.SkillGroup>
        {StudiesPresent.map(subject => {
          return <Styled.SkillItem key={subject.id}>{subject.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>

      <Styled.Subtitle>I wanna learn</Styled.Subtitle>
      <Styled.SkillGroup>
        {StudiesFuture.map(subject => {
          return <Styled.SkillItem key={subject.id}>{subject.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>

      <Styled.Subtitle>I also do</Styled.Subtitle>
      <Styled.SkillGroup>
        {OtherSkills.map(skill => {
          return <Styled.SkillItem key={skill.id}>{skill.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>

      <Styled.Subtitle>I speak</Styled.Subtitle>
      <Styled.SkillGroup>
        {Languages.map(language => {
          return <Styled.SkillItem key={language.id}>{language.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>

      <Styled.Subtitle>My hobbies are</Styled.Subtitle>
      <Styled.SkillGroup>
        {Hobbies.map(hobby => {
          return <Styled.SkillItem key={hobby.id}>{hobby.item}</Styled.SkillItem>
        })}
      </Styled.SkillGroup>
    </Styled.MainContent>
  </Layout>
)

export default About
