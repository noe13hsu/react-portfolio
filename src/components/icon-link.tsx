import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

export const IconLink = ({children, to = '/'} : {children: ReactNode, to?: string}) => {
  const navigate = useNavigate()

  return (
    <button
      className='bg-[var(--ice)] text-[var(--aqua)] text-4xl rounded-xl p-6 w-fit my-4'
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  )
}
