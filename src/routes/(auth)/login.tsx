import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginSchema, type LoginInput } from '../../lib/validation'
import { useAuth } from '../../contexts/AuthContext'

export const Route = createFileRoute('/(auth)/login')({
  component: LoginScreen,
})

function LoginScreen() {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid,},
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const onSubmit = async (data: LoginInput) => {
    try {
      await login(data.email, data.password)
      navigate({ to: '/account-settings' })
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials.')
    }
  }
  

  return (
    <div className="min-h-screen flex flex-col items-start justify-start px-3 gap-y-3">
        <div className="pt-10">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-['Rubik']">
            Signin to your PopX account
          </h1>
          <p className="text-[18px] leading-[26px] text-[#1D2226]  opacity-60 mt-2 font-['Rubik']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
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
          {/* Sign In Button */}
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading||!isValid}
            loading={isSubmitting}
          >
            Sign In
          </Button>
        </form>
      </div>
  )
}
