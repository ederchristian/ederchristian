import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
  background: #192734;
  border-top: 1px solid #38444d;
  border-bottom: 1px solid #38444d;
`

export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  background: #192734;
  width: 50%;
  padding: 3rem;
  transition: background 0.5s;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: #00d59f;

  &:hover {
    background: #38444d;
  }

  &.previous {
    border-right: 1px solid #38444d;
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
