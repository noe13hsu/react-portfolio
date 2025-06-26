import { internalLinks } from '../routes'
import { VerticalBar } from './vertical-bar'
import { IconLink } from './icon-link'
import { HorizontalBar } from './horizontal-bar'

export const Nav = () => {
  return (
    <nav className='flex justify-between items-center m-2 gap-4 md:justify-start lg:m-4 lg:col-start-1 lg:row-start-1 lg:row-span-3 lg:flex-col'>
      {internalLinks.map(({download, Icon, label, to}) => (
        <IconLink key={label} download={download} Icon={Icon} label={label} to={to} />
      ))}
      <VerticalBar />
      <HorizontalBar />
    </nav>
  )
}
