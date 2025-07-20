import { ReactNode } from 'react'

export const Main = ({children, className = ''} : {children: ReactNode, className?: string}) => {
  return (
    <main className={`content-mt overflow-y-auto scrollbar-hide ${className}`}>
      {children}
    </main>
  )
}
