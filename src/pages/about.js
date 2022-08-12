import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import { Hobbies } from "../components/About/hobbies"
import { Languages } from "../components/About/languages"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { OtherSkills } from "../components/About/otherSkills"
import { Skills } from "../components/About/skills"
import { StudiesFuture } from "../components/About/studiesFuture"
import { StudiesPresent } from "../components/About/studiesPresent"

import EderChristian from "../images/new-eder-christian.jpg"

const MainContent = styled.section`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 5rem 5rem;
  color: var(--postColor);
  font-family: var(--fontInter);

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--postColor);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 0 auto 1.6rem;
  font-weight: 800;
  word-wrap: break-word;
  
  ${media.lessThan("large")`
    font-size: 2.4rem;
  `}
`

const Image = styled.img`
  display: initial;
  width: 100%;
  border-radius: 0.7rem;
  padding: 0.8rem 1.6rem 0;
  margin: 0 auto 1.6rem;

  ${media.greaterThan("medium")`
    width: 32rem;
    padding: 0;
    margin: 0.5rem 1.7rem 2rem;
  `}
`

const Subtitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 3.2rem auto 0;
`

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0 1.6rem;
  margin: 0 auto 1.6rem;
  word-wrap: break-word;
  line-height: 1.8;
`

const ListGroup = styled.ul`
  list-style: initial;
  margin: 0 0 1.6rem 3.2rem;

  ${media.lessThan("large")`
    margin: 0 1.6rem 1.6rem;
    padding: 0 1.6rem;
  `}
`

const ListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.8;
  padding: 0.4rem 0;
`

const SkillGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 1.6rem;

  ${media.lessThan("large")`
    margin: 0 0 1.6rem 1.6rem;
  `}
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--highlight);
  border-radius: 0.7rem;
  color: var(--highlight);
  margin: 1rem 1rem 0 0;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  ${media.greaterThan("medium")`
    height: 3.2rem;
    padding: 0 1rem;
  `}
`

const About = () => (
  <Layout>
    <Seo title="About" />
    <MainContent>
      <Title>Hi, I'm Eder.</Title>
      <Image src={EderChristian} alt="Eder Christian" />
      <Paragraph>I'm from Lorena, a small city in the State of Sao Paulo, Brazil.</Paragraph>
      <Paragraph>I've been curious about computers since I was a kid. When I was 17, I got a certificate in technical computing. Three years later, I went to a public college to study Information Technology Management.</Paragraph>
      <Paragraph>Up until this point, we didn't even have a computer at home. My first computer was an old and simple PC that I got from a City Hall NGO project. Three years later, I could finally afford a MacBook Air — it was used but it made me fall in love with Apple products and that's when I knew I wanted to learn how to code. At first, considered Swift or Objective-C, but after some research, I decided to go with web development first and I liked the front-end area.</Paragraph>
      <Paragraph>In 2015, I got a post-degree certificate in Web Applications Development. I would say this is when my career really started, even though I had no experience or knowledge about programming.</Paragraph>
      <Paragraph>The following 5 years were full of new opportunities:</Paragraph>

      <ListGroup>
        <ListItem>I worked at a small marketing agency in my hometown with design and WordPress websites;</ListItem>
        <ListItem>I dropped everything to move to Sao Paulo city to work at <a href="https://startse.com" rel="noopener noreferrer">StartSe</a>, an education startup as a front-end developer with basic landing pages using HTML, CSS, JavaScript, and Bootstrap;</ListItem>
        <ListItem>I visited Silicon Valley and took some business courses with this startup;</ListItem>
        <ListItem>Still at this startup, I worked with sales, marketing, video editing, and design;</ListItem>
        <ListItem>I started working with React and Next.js, and helped this startup to create a platform to broadcast their online events, which helped me to become a partner;</ListItem>
        <ListItem>I also became a squad leader;</ListItem>
        <ListItem>I learned English from scratch by studying online;</ListItem>
        <ListItem>I attended more than 60 tech events and meetups — and made a lot of friends from the web development community.</ListItem>
      </ListGroup>

      <Paragraph>In February 2022 I started working at <a href="https://automatiq.com/" rel="noopener noreferrer">Automatiq</a>, an American company based in New York. It has an automation platform for ticket brokers, where they can do invoicing and pricing, for example, across multiple vendors.</Paragraph>
      <Paragraph>Really excited for my next steps in this amazing world!</Paragraph>

      <Subtitle>Skills</Subtitle>
      <SkillGroup>
        {Skills.map(skill => {
          return <SkillItem key={skill.id}>{skill.item}</SkillItem>
        })}
      </SkillGroup>

      <Subtitle>Currently studying</Subtitle>
      <SkillGroup>
        {StudiesPresent.map(subject => {
          return <SkillItem key={subject.id}>{subject.item}</SkillItem>
        })}
      </SkillGroup>

      <Subtitle>I wanna learn</Subtitle>
      <SkillGroup>
        {StudiesFuture.map(subject => {
          return <SkillItem key={subject.id}>{subject.item}</SkillItem>
        })}
      </SkillGroup>

      <Subtitle>I also do</Subtitle>
      <SkillGroup>
        {OtherSkills.map(skill => {
          return <SkillItem key={skill.id}>{skill.item}</SkillItem>
        })}
      </SkillGroup>

      <Subtitle>I speak</Subtitle>
      <SkillGroup>
        {Languages.map(language => {
          return <SkillItem key={language.id}>{language.item}</SkillItem>
        })}
      </SkillGroup>

      <Subtitle>My hobbies are</Subtitle>
      <SkillGroup>
        {Hobbies.map(hobby => {
          return <SkillItem key={hobby.id}>{hobby.item}</SkillItem>
        })}
      </SkillGroup>
    </MainContent>
  </Layout>
)

export default About
