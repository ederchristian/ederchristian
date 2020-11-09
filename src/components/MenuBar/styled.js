import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #192734;
  border-left: 1px solid #38444d;
  width: 3.75rem;
  height: 100vh;
  padding: 0.8rem 0;
  right: 0;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  color: #8899a6;
  cursor: pointer;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;

  &:hover {
    color: #00d59f;
  }
`
