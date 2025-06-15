import { colorClassMap, TextColor } from "./types"

export const ColorShiftText = ({color, text} : {color: TextColor, text: string}) => {
  return (
    <span className={`dark:text-[#737373] ${colorClassMap[color]}`}>
      {text}
    </span>
  )
}
