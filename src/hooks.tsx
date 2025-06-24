import { useEffect, useState } from 'react'

export const useDelayedRender = (delay: number): boolean => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), delay)

    return () => clearTimeout(timeout)
  })

  return shouldRender
}
