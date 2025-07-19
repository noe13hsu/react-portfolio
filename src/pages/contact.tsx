import { Form } from '../components/contact/form'
import { Header } from '../components/header'
import { Main } from '../components/main'

export const Contact = () => {
  return (
    <>
      <Header subTitle={'Let\'s connect'} title='Contact' />
      <Main>
        <div className='content-mt overflow-y-auto scrollbar-hide w-full'>
          <Form />
        </div>
      </Main>
    </>
  )
}
