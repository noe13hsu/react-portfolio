export const Badge = ({className = '', text} : {className?: string, text: string}) => {
  return (
    <span
      className={`
        ${className} truncate-one-line inline-block p-2 text-lg text-center bg-[var(--grey)] rounded-md h-fit
        lg:p-4 lg:text-2xl
      `}
    >
      {text}
    </span>
  )
}
