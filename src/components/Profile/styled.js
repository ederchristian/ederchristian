import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    cursor: pointer;
  }
`

export const ProfilePosition = styled.h1`
  display: block;
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`
