import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
`

export const PostItemLink = styled(Link)`
  display: flex;
  color: #8899a6;
  text-decoration: none;

  &:hover {
    color: #00d59f;
  }
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background ? props.background : '#00d59f'};
  border-radius: 50%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  min-width: 90px;
  min-height: 90px;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
