import { createGlobalStyle } from 'styled-components'
import { breakpoints as media } from './variables'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        outline: 0;
        box-sizing: border-box;
    }
    html,
    body {
        font-family: 'Inter', 'sans-serif';
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 2px;
        line-height: normal;
        margin: 0px;
        padding: 0px;
        scroll-behavior: smooth;
        overflow-x: hidden;
        height: 100%;

        @media (min-width: ${media.small}) {
            font-size: 3vw;
          }
        @media (min-width: ${media.medium}) {
            font-size: 2vw;
          }
        @media (min-width: ${media.large}) {
            font-size: 0.8333333333vw;

          }
    }
    a, button {
        &:hover {
            cursor: pointer;
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-weight: 600;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        background: none;
        outline: none;
        padding: 0;
    }
`
