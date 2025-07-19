import { ReactNode } from 'react'

export const Main = ({children} : {children: ReactNode}) => {
  return (
    <main className='main-layout'>
      {children}
    </main>
  )
}
