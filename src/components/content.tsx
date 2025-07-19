import { Route, Routes } from 'react-router-dom'

import { internalLinks } from '../routes'
import { NotFound } from '../pages/not-found'

export const Content = () => {
  return (
    <Routes>
      {internalLinks.map(({element, to}) => <Route element={element} path={to} />)}
      <Route element={<NotFound />} path='*' />
    </Routes>
  )
}
