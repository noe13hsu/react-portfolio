import { LuBrush, LuFlame, LuWrench, LuLightbulb, LuShuffle, LuSparkle } from 'react-icons/lu'

import { HomeMessage } from './home-message'

const INTERVAL = 200
const messages = [
  {
    Icon: LuFlame,
    message: <>I'm a passionate frontend developer with <strong className='important'>4 years of experience in React and 1.5 years in TypeScript</strong>.</>
  },
  {
    Icon: LuBrush,
    message: <>I've worked with UI libraries such as <strong className='important'>Material UI, Bootstrap, and Tailwind</strong>, and have experience building components with plain <strong className='important'>CSS</strong>.</>
  },
  {
    Icon: LuShuffle,
    message: <>I've also had experience building <strong className='important'> RESTful APIs using Ruby on Rails and PostgreSQL</strong>.</>
  },
  {
    Icon: LuWrench,
    message: <>I thrive on building and improving meaningful applications - so far <strong className='important'>from revamping websites to developing a tracking system and a multiplayer poker game</strong>.</>
  },
  {
    Icon: LuLightbulb,
    message: <>With a strong foundation in <strong className='important'>mathematics</strong>, I approach problem-solving with <strong className='important'>logical precision and creativity</strong>.</>
  },
  {
    Icon: LuSparkle,
    message: <>Coding is something I genuinely enjoy as it gives me a strong feeling of accomplishment, and I'm always <strong className='important'>excited to bring cool ideas to life through clean, efficient code</strong>.</>
  },
]

export const HomeMessages = () => {
  return (
    <>
      {messages.map(({Icon, message}, index) => (
        <HomeMessage delay={INTERVAL * (index + 1)} Icon={Icon}>
          {message}
        </HomeMessage>
      ))}
    </>
  )
}
