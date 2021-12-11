import styled from 'styled-components'
import { breakpoints } from 'styles'
import { rem } from 'utils'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 1rem;

  @media screen and (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(6, 1fr);
  }
`
export const Ball = styled.div`
  width: ${rem(70)};
  height: ${rem(70)};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) and (max-width: 1200px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    width: ${rem(130)};
    height: ${rem(130)};
  }

  p {
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${rem(40)};
    margin: 0;
    font-weight: 700;

    @media screen and (min-width: 700px) and (max-width: 1200px) {
      font-size: 40px;
    }

    @media screen and (min-width: ${breakpoints.large}) {
      font-size: ${rem(90)};
    }
  }
`
export const Button = styled.button`
  position: relative;
  font-size: ${rem(24)};
  color: ${({ theme }) => theme.colors.secundary};
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${rem(60)};
  align-self: center;

  width: ${rem(170)};
  height: ${rem(40)};

  @media (min-width: 700px) and (max-width: 1200px) {
    width: 200px;
    height: 50px;

    margin-top: 60px;
  }

  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  font-family: 'Asap Condensed', 'Oswald', 'Inter', 'sans-serif';
  transition: box-shadow 0.2s ease;

  box-shadow: -0.3rem 0.3rem 0px ${({ theme }) => theme.colors.secundary};

  &:active {
    box-shadow: 0rem 0rem 0px ${({ theme }) => theme.colors.secundary};
  }
`
