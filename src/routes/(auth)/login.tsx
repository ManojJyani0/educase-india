import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginSchema, type LoginInput } from '../../lib/validation'

export const Route = createFileRoute('/(auth)/login')({
  component: LoginScreen,
})

function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const onSubmit = (data: LoginInput) => {
    console.log('Login data:', data)
    // In a real app, you would make an API call here
    alert(`Login successful! Welcome ${data.email}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] p-4">
      {/* Main container matching design size */}
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden">
        {/* Heading */}
        <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px]">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-['Rubik']">
            Welcome back
          </h1>
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60 mt-2 font-['Rubik']">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="absolute top-[140px] left-[20px] w-[335px]">
          {/* Email Address */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            error={errors.email}
            {...register('email')}
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password}
            {...register('password')}
          />

          {/* Remember me & Forgot password */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                {...register('remember')}
              />
              <label htmlFor="remember" className="text-[13px] text-[#919191] font-['Rubik']">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[13px] text-[#6C25FF] font-['Rubik']">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="absolute top-[736px] left-0 w-[335px] h-[46px]"
            loading={isSubmitting}
          >
            Sign In
          </Button>
        </form>

        {/* Don't have an account? Register Button */}
        <Link
          to="/register"
          className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-[#1D2226] font-medium text-[16px] leading-[17px] font-['Rubik'] flex items-center justify-center"
        >
          Don't have an account? Register
        </Link>

        {/* Footer text */}
        <p className="absolute top-[790px] left-0 right-0 text-center text-[#919191] text-sm font-['Rubik']">
          By signing in, you agree to our{' '}
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
