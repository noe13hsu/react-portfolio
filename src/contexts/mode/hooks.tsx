import { useContext } from "react"
import { ModeContext } from "./context"

export const useMode = () => {
  const context = useContext(ModeContext)

  if (!context) throw new Error('useDarkMode should be used within an DarkModeProvider')

  return context
}
