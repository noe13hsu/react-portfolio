import { Route, Routes } from 'react-router-dom'

import { internalLinks } from '../routes'

export const Main = () => {
  return (
    <main className='main-layout'>
      <Routes>
        {internalLinks.map(({element, to}) => <Route element={element} path={to} />)}
      </Routes>
    </main>
  )
}
