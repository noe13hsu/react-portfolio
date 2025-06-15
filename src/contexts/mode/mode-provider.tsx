import { ReactNode, useCallback, useState } from "react"
import { ModeContext } from "./context"
import { DARK, LIGHT, Mode } from "./types"

export const ModeProvider = ({children} : {children: ReactNode}) => {
  const [mode, setMode] = useState<Mode>(DARK)

  const toggleMode = useCallback(() => {
    setMode(prev => prev === DARK ? LIGHT : DARK)
  }, [])

  return (
    <ModeContext.Provider value={{mode, toggleMode}}>
      {children}
    </ModeContext.Provider>
  )
}
