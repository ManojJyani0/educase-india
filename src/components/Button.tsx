import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Link, type LinkProps } from '@tanstack/react-router'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'className'> {
  href?: never
  to?: never
}

interface ButtonAsAnchorProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'className'> {
  href: string
  to?: never
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<LinkProps, 'to' | 'onClick' | 'className'> {
  to: LinkProps['to']
  href?: never
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      className = '',
      disabled = false,
      onClick,
      href,
      to,
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
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled || loading) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      onClick?.(e)
    }
    
    const commonProps = {
      className: combinedClasses,
      'aria-disabled': disabled || loading,
      onClick: handleClick,
    }
    
    // Loading content
    const content = loading ? (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        <span className="ml-2">Loading...</span>
      </div>
    ) : (
      children
    )
    
    // Render as anchor if href is provided
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled || loading ? undefined : href}
          {...commonProps}
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {content}
        </a>
      )
    }
    
    // Render as Link if to is provided
    if (to) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          {...commonProps}
          {...props as LinkProps}
          disabled={disabled || loading}
        >
          {content}
        </Link>
      )
    }
    
    // Default render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        {...commonProps}
        {...props as ButtonHTMLAttributes<HTMLButtonElement>}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button