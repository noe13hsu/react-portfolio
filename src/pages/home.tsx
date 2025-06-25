import { LuBrush, LuFlame, LuWrench, LuLightbulb, LuSparkle } from 'react-icons/lu'

import { HomeMessage } from '../components/home/home-message'
import { Header } from '../components/header'
import { SubHeader } from '../components/sub-header'

const INTERVAL = 200
const messages = [
  {
    Icon: LuFlame,
    message: <>I'm a passionate front end developer with <strong className='important'>4 years of experience in React and 1.5 years in TypeScript</strong>.</>
  },
  {
    Icon: LuBrush,
    message: <>I've also worked with UI libraries such as <strong className='important'>Material UI, Bootstrap, and Tailwind</strong>, and have experience building components with plain CSS.</>
  },
  {
    Icon: LuWrench,
    message: <>I thrive on building and improving meaningful applications - so far <strong className='important'>from revamping websites to developing a tracking system and a multiplayer poker game</strong>.</>
  },
  {
    Icon: LuLightbulb,
    message: <>With a strong foundation in mathematics, I approach problem-solving with <strong className='important'>logical precision and creativity</strong>.</>
  },
  {
    Icon: LuSparkle,
    message: <>Coding is something I genuinely enjoy as it gives me a strong feeling of accomplishment, and I'm always <strong className='important'>excited to bring cool ideas to life through clean, efficient code</strong>.</>
  },
]

export const Home = () => {
  return (
    <>
      <Header text='Noe Hsu' />
      <SubHeader text='I am a React developer.' />
      <div className='flex-1 flex flex-col text-[var(--ice)] text-2xl mt-40'>
        {messages.map(({Icon, message}, index) => (
          <HomeMessage delay={INTERVAL * (index + 1)} Icon={Icon}>
            {message}
          </HomeMessage>
        ))}
      </div>
    </>
  )
}
