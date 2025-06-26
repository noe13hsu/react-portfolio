import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

export const IconLink = ({
  download = false,
  Icon,
  label,
  to,
} : {
  download?: boolean,
  Icon: IconType,
  label: string,
  to: string,
}) => {
  const isExternal = /^https?:\/\//.test(to)

  const button = (
    <button
      aria-label={label}
      className='bg-[var(--ice)] text-[var(--aqua)] p-4 text-3xl rounded-xl w-fit lg:text-4xl lg:p-6 hover:animate-ripple'
    >
      <Icon />
    </button>
  )

  if (isExternal || download) {
    return (
      <a
        className='cursor-default'
        download={download}
        href={to}
        rel='noopener noreferrer'
        target='_blank'
        title={label}
      >
        {button}
      </a>
    )
  }

  return (
    <Link className='cursor-default' title={label} to={to}>
      {button}
    </Link>
  )
}
