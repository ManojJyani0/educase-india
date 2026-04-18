import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rounded-[6px] font-["Rubik"] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantClasses = {
      primary: 'bg-[#6C25FF] text-white hover:bg-[#5a1fe0]',
      secondary: 'bg-[#CBCBCB] text-[#1D2226] hover:bg-[#b0b0b0]',
      danger: 'bg-[#DD4A3D] text-white hover:bg-[#c93a2e]',
      outline: 'border border-[#6C25FF] text-[#6C25FF] bg-transparent hover:bg-[#6C25FF] hover:text-white',
      ghost: 'text-[#6C25FF] bg-transparent hover:bg-[#F7F8F9]'
    }
    
    const sizeClasses = {
      sm: 'h-[36px] px-3 text-[14px]',
      md: 'h-[46px] px-4 text-[16px]',
      lg: 'h-[56px] px-6 text-[18px]'
    }
    
    const widthClass = fullWidth ? 'w-full' : ''
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button