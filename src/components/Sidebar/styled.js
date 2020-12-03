import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: .9rem;
    z-index: 9;
  `}
`
