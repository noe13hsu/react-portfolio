import { TimelineItem } from './timeline-item'
import { TimelineEntry } from './types'

const timelineItems: TimelineEntry[]  = [
  {
    info: [
      'Convert legacy JavaScript/CoffeeScript poker app to modern React and Redux.',
      'Develop common components including a modal and a card component to replace tables on mobile.',
      'Build new features including a hand history replayer and bonus claimer.',
      'Maintain and update event translator to ensure accurate game event handling.',
      'Code reviews to uphold code quality and share best practices across the team.',
    ],
    institution: 'Codeworx',
    title: 'Software Engineer',
    type: 'experience',
    year: 'May 2023 - May 2025',
  },
  {
    info: [
      'Build reusable UI components using React, TypeScript, Lodash, and Material UI to support scalable front-end development.',
      'Build interactive map components for real-time tracking using React Leaflet and HERE Maps.',
      'Build Storybook for isolated UI component testing.',
      'Code reviews to uphold code quality and share best practices across the team.',
    ],
    institution: 'Blackbook.ai',
    title: 'Software Engineer',
    type: 'experience',
    year: 'November 2021 - May 2023',
  },
  {
    info: [
      'Revamp the Wicky.ai website with WordPress.',
      'Build UI components such as player cards and stats table with React and Bootstrap.',
      'Build interactive data visualisations for team and player stats with Nivo and ApexCharts.',
      'Use Figma to design wireframes and collaborate on UI/UX planning.',
    ],
    institution: 'Wicky (Sport Tech Daily)',
    title: 'Software Developer',
    type: 'experience',
    year: 'July 2021 - November 2021',
  },
  {
    info: [
      'Diploma of Information Technology'
    ],
    institution: 'Coder Academy',
    type: 'education',
    year: 'February 2021 - July 2021',
  },
  {
    info: [
      'Administration',
    ],
    institution: 'QUT International College',
    title: 'Administrative Assistant',
    type: 'experience',
    year: 'April 2017 - February 2021',
  },
  {
    info: [
      'Administration',
    ],
    institution: 'Navitas',
    title: 'Group Marketing Officer',
    type: 'experience',
    year: 'January 2012 - June 2015',
  },
  {
    info: [
      'Master of Business (Marketing)'
    ],
    institution: 'The University of Queensland',
    type: 'education',
    year: 'February 2010 - July 2011',
  },
  {
    info: [
      'Bachelor of Commerce (Accounting)'
    ],
    institution: 'The University of Queensland',
    type: 'education',
    year: 'July 2006 - December 2009',
  },
]

export const TimeLine = () => {
  return (
    <div className='w-full flex-1 overflow-y-auto flex flex-col relative scrollbar-hide mt-20'>
      {timelineItems.map((item, index) => <TimelineItem key={index} index={index} item={item} />)}
    </div>
  )
}
