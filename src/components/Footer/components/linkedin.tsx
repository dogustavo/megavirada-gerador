import React, { useContext } from 'react'
import { CookieContext } from 'context/CookiesContext'

const LinkedinSvg = () => {
  const {
    theme: { title }
  } = useContext(CookieContext)

  return (
    <svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.646 4.167H7.354a3.02 3.02 0 0 0-3.062 2.979v35.708a3.02 3.02 0 0 0 3.062 2.98h35.292a3.022 3.022 0 0 0 3.062-2.98V7.146a3.02 3.02 0 0 0-3.062-2.98ZM16.854 39.04h-6.25v-18.75h6.25v18.75ZM13.73 17.668a3.25 3.25 0 1 1 0-6.5 3.27 3.27 0 1 1 0 6.5ZM39.396 39.04h-6.25V28.98c0-2.52-.896-4.167-3.167-4.167a3.437 3.437 0 0 0-3.208 2.271 4.166 4.166 0 0 0-.208 1.521v10.417h-6.25V20.27h6.25v2.646a6.25 6.25 0 0 1 5.645-3.125c4.167 0 7.188 2.687 7.188 8.458V39.04Z"
        fill={title === 'dark' ? '#FFF' : '#102542'}
      />
    </svg>
  )
}

export default LinkedinSvg
