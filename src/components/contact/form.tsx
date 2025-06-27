import { InputField } from './input-field'

export const Form = () => {
  return (
    <form
      action='https://formspree.io/f/myzjbpgz'
      className='bg-[var(--grey)] p-4 rounded-lg space-y-4 w-[90%] mx-auto md:w-[60%] lg:max-w-xl lg:p-6'
      method='POST'
    >
      <fieldset>
        <legend className='text-xl text-[var(--aqua)] lg:text-2xl'>Name</legend>
        <div id='name-field-set' className='grid grid-cols-2 gap-4'>
          <InputField autoComplete='given-name' className='self-end' id='first-name' isFieldSet label='First Name' />
          <InputField autoComplete='family-name' className='self-end' id='last-name' isFieldSet label='Last Name' />
        </div>
      </fieldset>

      <InputField autoComplete='given-name' id='organisation' label='Organisation' required={false} />
      <InputField autoComplete='email' id='email' label='Email' type='email' />
      <InputField id='subject' label='Subject' />

      <div className='flex flex-col'>
        <label className='text-[var(--aqua)] text-xl lg:text-2xl' htmlFor='message'>Message</label>
        <textarea className='bg-[var(--ice)] h-40 rounded-xs' id='message' name='message' required />
      </div>

      <div className='flex justify-center'>
        <button className='px-6 py-2 bg-[var(--aqua)] hover:animate-ripple rounded-sm' id='send-button' type='submit'>
          Send
        </button>
      </div>
    </form>
  )
}
