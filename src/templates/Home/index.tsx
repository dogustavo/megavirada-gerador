import React, { useContext } from 'react'
import * as S from './styles'

import Seo from 'components/seo'
import { Container, Header, MegaNumbers, Footer } from 'components'

import { CookieContext } from 'context/CookiesContext'

export default function Home() {
  const {
    theme: { title }
  } = useContext(CookieContext)

  return (
    <S.Wrapper color={title === 'dark' ? 'FFF' : '102542'}>
      <Seo session={'Mega'} />
      <Container>
        <Header />
        <MegaNumbers />
        <Footer />
      </Container>
    </S.Wrapper>
  )
}
