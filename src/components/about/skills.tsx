import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiLodash,
  SiMui,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRuby,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si'

import { FadeIn } from '../fade-in'
import { IconLabel } from './icon-label'

const skills = [
  {Icon: SiHtml5, label:'HTML'},
  {Icon: SiCss3, label:'CSS'},
  {Icon: SiJavascript, label:'JavaScript'},
  {Icon: SiTypescript, label:'TypeScript'},
  {Icon: SiReact, label:'React'},
  {Icon: SiRedux, label:'Redux'},
  {Icon: SiMui, label:'Material UI'},
  {Icon: SiBootstrap, label:'Bootstrap'},
  {Icon: SiTailwindcss, label:'Tailwind CSS'},
  {Icon: SiLeaflet, label:'React Leaflet'},
  {label:'HERE Maps API'},
  {label:'ApexCharts'},
  {label:'Nivo Charts'},
  {Icon: SiLodash, label:'Lodash'},
  {Icon: SiRuby, label:'Ruby on Rails'},
  {Icon: SiPostgresql, label:'PostgreSQL'},
  {Icon: SiGithub, label:'GitHub'},
  {Icon: SiWordpress, label:'WordPress'},
  {Icon: SiFigma, label:'Figma'},
]

export const Skills = () => {
  return (
    <FadeIn className='about-section-layout' delay={200}>
      {skills.map(({Icon, label}) => <IconLabel key={label} Icon={Icon} label={label} />)}
    </FadeIn>
  )
}
