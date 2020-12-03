import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
  background: var(--mediumBackground);
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);

  ${media.lessThan("large")`
    font-size: .9rem;
    line-height: 1.3;
    padding: 2rem 1rem;
  `}
`

export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  background: var(--mediumBackground);
  width: 50%;
  padding: 3rem;
  transition: background 0.5s;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: var(--highlight);

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
