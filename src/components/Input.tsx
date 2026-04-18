import { forwardRef } from 'react'
import { type FieldError } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="mb-6">
        <div className="relative">
          {label && (
            <label className="absolute -top-2 left-[14px] bg-[#F7F8F9] px-1 text-[13px] leading-[17px] text-[#6C25FF] font-['Rubik'] z-10">
              {label}
            </label>
          )}
          <input
            ref={ref}
            className={`w-full h-[40px] border ${
              error ? 'border-[#DD4A3D]' : 'border-[#CBCBCB]'
            } rounded-[6px] px-4 text-[#1D2226] font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent ${className}`}
            {...props}
          />
        </div>
        {(error || helperText) && (
          <p className={`mt-1 text-[12px] ${error ? 'text-[#DD4A3D]' : 'text-[#919191]'}`}>
            {error ? error.message : helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input