export const InputField = ({
  autoComplete,
  className = '',
  id,
  isFieldSet = false,
  label,
  required = true,
  type = 'text',
} : {
  autoComplete?: string,
  className?: string,
  id: string,
  isFieldSet?: boolean,
  label: string,
  required?: boolean,
  type?: string,
}) => {
  return (
    <div className={`flex ${isFieldSet ? 'flex-col-reverse' : 'flex-col'}`}>
      <label
        className={`text-[var(--${isFieldSet ? 'ice' : 'aqua'})] text-${isFieldSet ? 'sm' : 'xl'} lg:text-${isFieldSet ? 'sm' : '2xl'} ${className}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className='bg-[var(--ice)] rounded-xs'
        id={id}
        name={id}
        required={required}
        type={type}
      />
    </div>
  )
}
