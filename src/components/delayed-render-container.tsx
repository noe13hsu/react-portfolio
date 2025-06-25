import { ReactNode, useEffect, useState } from 'react'

export const DelayedRenderContainer = ({children, className = '', delay} : {children: ReactNode,className: string, delay: number}) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), delay)

    return () => clearTimeout(timeout)
  })

  return (
    <div className={`transition-opacity duration-500 ${shouldRender ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  )
}
