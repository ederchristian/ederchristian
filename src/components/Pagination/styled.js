import styled from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--borders);
  padding: 1.5rem 3rem;
  color: var(--texts);
  font-family: var(--fontInter);
  margin: 2rem 6.5rem 0;
  font-size: 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    padding: 1rem;
    margin: 0.8rem 0 0;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
