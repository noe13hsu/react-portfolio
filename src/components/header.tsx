export const Header = ({text} : {text: string }) => {
  return (
    <h1 className='text-xl text-[#8ce1eb] underline decoration-solid decoration-[#737373]'>
      {text}.
    </h1>
  )
}
