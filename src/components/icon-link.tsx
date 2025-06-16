import { IconType } from "react-icons"
import { Link } from "react-router-dom"

export const IconLink = ({Icon, label, to} : {Icon: IconType, label: string, to: string}) => {
  const isExternal = /^https?:\/\//.test(to)

  const button = (
    <button aria-label={label} className='bg-[var(--ice)] text-[var(--aqua)] text-4xl rounded-xl p-6 w-fit my-4'>
      <Icon />
    </button>
  )

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    )
  }

  return (
    <Link to={to}>
      {button}
    </Link>
  )
}
