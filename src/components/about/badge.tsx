export const Badge = ({className = '', text} : {className?: string, text: string}) => {
  return (
    <span className={`inline-block p-4 text-2xl text-center bg-[var(--grey)] rounded-md ${className}`}>
      {text}
    </span>
  )
}
