import styled from 'styled-components'

export const ListWrapper = styled.section`
  body#grid & {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-area: posts;
    grid-gap: 1px;
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
  }
`
