import { useState } from 'react'

import * as S from './styles'

export default function MegaNumbers() {
  const [sortNumbers, setSortNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0])

  const handleGenerateNumbers = () => {
    const numbersOfGames = 6
    const randomNumber: number[] = []

    for (let i = 0; randomNumber.length < numbersOfGames; i++) {
      const number = Math.floor(Math.random() * (60 - 1 + 1)) + 1

      !randomNumber.includes(number) && randomNumber.splice(i, i, number)
    }

    const sortedNumbers: number[] = randomNumber.sort((a, b) => a - b)

    setSortNumbers(sortedNumbers)
  }

  const renderSortedNumbers = () =>
    sortNumbers.map((number, id) => (
      <S.Ball key={id}>
        <p>{number}</p>
      </S.Ball>
    ))

  return (
    <S.Content>
      <S.Wrapper>{renderSortedNumbers()}</S.Wrapper>
      <S.Button onClick={handleGenerateNumbers}>GERAR NUMEROS</S.Button>
    </S.Content>
  )
}
