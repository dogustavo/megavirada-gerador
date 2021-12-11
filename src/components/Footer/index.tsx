import Link from 'next/link'

import * as S from './styles'

import GitSvg from './components/git'
import LinkedinSvg from './components/linkedin'

export default function Footer() {
  return (
    <S.Footer>
      <p>
        © Gustavo Oliveira, {new Date().getFullYear()}. All rights reserved.
      </p>

      <S.SocialMedia>
        <Link href="https://github.com/dogustavo" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <GitSvg />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/oliveiragust/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <LinkedinSvg />
          </a>
        </Link>
      </S.SocialMedia>
    </S.Footer>
  )
}
