import { ReactNode, useEffect, useState } from 'react'

export const FadeIn = ({children, className = '', delay} : {children: ReactNode, className?: string, delay: number}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  )
}
