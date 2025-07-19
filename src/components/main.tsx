import { ReactNode } from 'react'

export const Main = ({children} : {children: ReactNode}) => {
  return (
    <main className='main-layout content-mt overflow-y-auto scrollbar-hide'>
      {children}
    </main>
  )
}
