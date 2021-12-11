import { Home as HomeTemplate } from 'templates'

import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { ICookie } from 'types'

import { CookieContext } from 'context/CookiesContext'
import { useContext, useEffect } from 'react'

interface IHome {
  cookies: ICookie
}

export default function Home({ cookies }: IHome) {
  const { setTheme } = useContext(CookieContext)

  useEffect(() => {
    cookies && setTheme(cookies)
  }, [cookies, setTheme])

  return <HomeTemplate />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)
  return {
    props: {
      cookies: cookies.theme ? JSON.parse(cookies.theme) : ''
    }
  }
}
