import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: #D2D2D2;
  }
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

export default EstiloGlobal
