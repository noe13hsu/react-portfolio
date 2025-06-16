import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

export const IconLink = ({children, to = '/'} : {children: ReactNode, to?: string}) => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(to)} className='bg-[var(--ice)] text-[var(--aqua)] text-2xl rounded-sm p-4'>
      {children}
    </button>
  )
}
