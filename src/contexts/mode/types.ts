export const DARK = 'dark' as const
export const LIGHT = 'light' as const

export type Mode = typeof DARK | typeof LIGHT

export type ModeContextType = {
  mode: Mode,
  toggleMode: () => void,
}
