export const Header = ({text} : {text: string }) => {
  return (
    <h1 className='text-xl text-[var(--aqua)] underline decoration-solid decoration-[var(--grey)]'>
      {text}.
    </h1>
  )
}
