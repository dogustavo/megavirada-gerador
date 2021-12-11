import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;

  br {
    display: static;

    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-size: 2rem;

    @media screen and (min-width: ${breakpoints.large}) {
      font-size: 4rem;
    }
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    margin-top: 16px;
  }
`
