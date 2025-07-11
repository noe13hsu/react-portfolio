import { Subtitle } from '../components/subtitle'
import { Title } from '../components/title'
import { Form } from '../components/contact/form'

export const Contact = () => {
  return (
    <>
      <Title text='Contact' />
      <Subtitle text={'Let\'s connect'} />
      <div className='content-mt overflow-y-auto scrollbar-hide w-full'>
        <Form />
      </div>
    </>
  )
}
