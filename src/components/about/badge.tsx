export const Badge = ({className = '', text} : {className?: string, text: string}) => {
  return (
    <span className={`inline-block p-2 text-xl text-center bg-[var(--grey)] rounded-md ${className}`}>
      {text}
    </span>
  )
}
