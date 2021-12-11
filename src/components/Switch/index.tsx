import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { CookieContext } from 'context/CookiesContext'

export default function Header() {
  const { colors, title } = useContext(ThemeContext)
  const { toggleTheme } = useContext(CookieContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      height={20}
      width={40}
      handleDiameter={18}
      checkedIcon={false}
      uncheckedIcon={false}
      offColor={colors.primary}
      onColor={colors.primary}
      offHandleColor={colors.background}
      onHandleColor={colors.background}
    />
  )
}
