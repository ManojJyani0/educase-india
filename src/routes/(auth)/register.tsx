import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterInput } from '../../lib/validation'
import Input from '../../components/Input'

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterScreen,
})

function RegisterScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: RegisterInput) => {
    console.log('Registration data:', data)
    // Here you would typically send data to your backend
    alert('Account created successfully!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] p-4">
      {/* Main container matching design size */}
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden">
        {/* Heading */}
        <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px]">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-['Rubik']">
            Create your account
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute top-[140px] left-[20px] w-[335px]"
        >
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register('fullName')}
            error={errors.fullName}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            {...register('password')}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword')}
            error={errors.confirmPassword}
          />

          {/* Create Account Button */}
          <button
            type="submit"
            className="absolute top-[736px] left-0 w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-medium text-[16px] leading-[17px] font-['Rubik']"
          >
            Create Account
          </button>
        </form>

        {/* Already Registered? Login Button */}
        <Link
          to="/login"
          className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-[#1D2226] font-medium text-[16px] leading-[17px] font-['Rubik'] flex items-center justify-center"
        >
          Already Registered? Login
        </Link>

        {/* Footer text */}
        <p className="absolute top-[790px] left-0 right-0 text-center text-[#919191] text-sm font-['Rubik']">
          By signing up, you agree to our{' '}
          <a href="#" className="text-[#6C25FF]">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#6C25FF]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}
