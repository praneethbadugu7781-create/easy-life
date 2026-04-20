export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition hover:shadow-medium focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus-visible:outline-teal-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-gray-400',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus-visible:outline-teal-600',
    danger: 'bg-medical-red text-white hover:bg-red-700 focus-visible:outline-medical-red',
    success: 'bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${disabledClass}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
