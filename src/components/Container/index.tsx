import * as S from './styles'

type ContainerProps = {
  children: JSX.Element
}

export default function Container({ children }: ContainerProps) {
  return <S.Container>{children}</S.Container>
}
