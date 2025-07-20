export const Badge = ({className = '', text} : {className?: string, text: string}) => {
  return (
    <span
      className={`
        ${className}
        truncate-one-line inline-block p-2 text-lg text-center bg-[var(--grey)] rounded-md h-fit
        md:p-4 md:text-xl
        xl:text-2xl
      `}
    >
      {text}
    </span>
  )
}
