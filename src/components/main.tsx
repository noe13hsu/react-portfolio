import { Route, Routes } from 'react-router-dom'

import { internalLinks } from '../routes'

export const Main = () => {
  return (
    <main className='flex flex-col items-center h-full min-h-0 lg:col-start-2 lg:row-start-2'>
      <Routes>
        {internalLinks.map(({element, to}) => <Route element={element} path={to} />)}
      </Routes>
    </main>
  )
}
