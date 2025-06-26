export const Subtitle = ({text} : {text: string}) => {
  return (
    <h3 className='text-4xl mt-0 text-[var(--ice)] lg:text-6xl lg:mt-4'>
      {text}
    </h3>
  )
}
