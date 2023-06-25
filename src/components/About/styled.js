import styled from "styled-components"
import media from "styled-media-query"

export const MainContent = styled.section`
  max-width: 100rem;
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

export const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 0 auto 1.6rem;
  font-weight: 800;
  word-wrap: break-word;
  
  ${media.lessThan("large")`
    font-size: 2.4rem;
  `}
`

export const Image = styled.img`
  display: initial;
  width: 100%;
  border-radius: 0.7rem;
  padding: 0.8rem 1.6rem 0;
  margin: 0 auto 1.6rem;

  ${media.greaterThan("medium")`
    width: 40rem;
    padding: 0;
    margin: 0.5rem 1.7rem 2rem;
  `}
`

export const Subtitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 3.2rem auto 0;
`

export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  padding: 0 1.6rem;
  margin: 0 auto 1.6rem;
  word-wrap: break-word;
  line-height: 1.8;
`

export const ListGroup = styled.ul`
  list-style: initial;
  margin: 0 0 1.6rem 3.2rem;

  ${media.lessThan("large")`
    margin: 0 1.6rem 1.6rem;
    padding: 0 1.6rem;
  `}
`

export const ListItem = styled.li`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.8;
  padding: 0.4rem 0;
`

export const SkillGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 1.6rem;

  ${media.lessThan("large")`
    margin: 0 0 1.6rem 1.6rem;
  `}
`

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--highlight);
  border-radius: 0.7rem;
  color: var(--highlight);
  margin: 1rem 1rem 0 0;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;

  ${media.greaterThan("medium")`
    height: 3.2rem;
    padding: 0 1.6rem;
  `}
`

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
