import { createContext, ReactNode, useState, useEffect } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { setCookie } from 'nookies'

import { ICookie } from 'types'
import dark from 'styles/themes/dark'
import light from 'styles/themes/light'

type SetValue = (value: ICookie) => void

interface CookieContextData {
  theme: ICookie
  setTheme: SetValue
  toggleTheme: () => void
}

interface ICookieProvider {
  children: ReactNode
}

export const CookieContext = createContext({} as CookieContextData)

export function CookieProvider({ children }: ICookieProvider) {
  const [theme, setTheme] = useState<DefaultTheme>(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    setCookie(null, 'theme', JSON.stringify(theme), {
      maxAge: 86400 * 31,
      path: '/'
    })
  }, [theme])

  return (
    <CookieContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CookieContext.Provider>
  )
}
