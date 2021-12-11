import dynamic from 'next/dynamic'

const DynamicSwitch = dynamic(() => import('../Switch'), { ssr: false })

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <h2>
        Mega da
        <br /> Virada
      </h2>
      <DynamicSwitch />
    </S.Header>
  )
}
