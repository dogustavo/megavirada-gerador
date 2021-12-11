import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  @media (min-width: 700px) and (max-width: 1200px) {
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.1px;

    color: ${({ theme: { title } }) => (title === 'dark' ? '#102542' : '#FFF')};
  }
`
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
