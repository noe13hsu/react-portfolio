import { internalLinks } from '../routes'
import { VerticalBar } from './vertical-bar'
import { IconLink } from './icon-link'
import { HorizontalBar } from './horizontal-bar'

export const Nav = () => {
  return (
    <nav className='nav-layout'>
      {internalLinks.map(({download, Icon, label, to}) => (
        <IconLink key={label} download={download} Icon={Icon} label={label} to={to} />
      ))}
      <VerticalBar />
      <HorizontalBar />
    </nav>
  )
}
