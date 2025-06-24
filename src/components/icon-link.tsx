import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

export const IconLink = ({Icon, label, to} : {Icon: IconType, label: string, to: string}) => {
  const isExternal = /^https?:\/\//.test(to)

  const button = (
    <button aria-label={label} className='bg-[var(--ice)] text-[var(--aqua)] text-4xl rounded-xl p-6 w-fit hover:animate-ripple'>
      <Icon />
    </button>
  )

  if (isExternal) {
    return (
      <a className='my-4 cursor-default' href={to} rel='noopener noreferrer' target='_blank' >
        {button}
      </a>
    )
  }

  return (
    <Link className='my-4 cursor-default' to={to}>
      {button}
    </Link>
  )
}
