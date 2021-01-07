import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarContainer = styled.aside`
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
  transition: all 0.5s ease;

  ${media.lessThan("large")`
    position: inherit;
    align-items: flex-start;
    height: calc(100% - 50px);
    border: 0;
    padding: 0;
    width: 100%;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `}
`

export const SidebarLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 100px);
`
