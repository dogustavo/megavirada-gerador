export default function rem(number: number) {
  const units = number / (number * 0 + 1)

  const unit = units / 16

  return `${Math.floor(unit)}rem`
}
