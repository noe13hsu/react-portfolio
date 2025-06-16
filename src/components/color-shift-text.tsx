import { colorClassMap, TextColor } from "./types"

export const ColorShiftText = ({color, text} : {color: TextColor, text: string}) => {
  return (
    <span className={`dark:text-[var(--grey)] ${colorClassMap[color]}`}>
      {text}
    </span>
  )
}
