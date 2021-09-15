import styled from "styled-components"
import media from "styled-media-query"

export const SidebarContainer = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);
  height: 4rem;
  position: fixed;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  transition: all 0.5s ease;
  z-index: 9;

  ${media.lessThan("large")`
    position: inherit;
    align-items: flex-start;
    height: calc(100% - 57px);
    border: 0;
    padding: 0;
    transform: ${props =>
      props.isMenuOpen ? "translateX(0)" : "translateX(-100vw)"};
  `}
`

export const SidebarContainerBox = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("large")`
    height: calc(100% - 57px);
  `}
`

export const SidebarLinksContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  ${media.lessThan("large")`
    flex-direction: column;
    height: calc(100% - 100px);
    width: 100%;
  `}
`
