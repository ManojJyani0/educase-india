import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterInput } from '../../lib/validation'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/AuthContext'

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterScreen,
})

function RegisterScreen() {
  const { register: authRegister, isLoading } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAgency: false
    },
  })

  const onSubmit = async (data: RegisterInput) => {
    try {
      await authRegister(data.fullName, data.email, data.password)
      navigate({ to: '/account-settings' })
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
    }
  }

  return (

    <div className="min-h-screen flex flex-col items-start justify-start px-3 gap-y-3">
      <div className="pt-10">
        <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-['Rubik']">
          Create your PopX account
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
      >
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          {...register('fullName')}
          error={errors.fullName}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your full name"
          {...register('phone')}
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
          label="Company Name"
          type="text"
          placeholder="Confirm your password"
          {...register('confirmPassword')}
          error={errors.confirmPassword}
        />
        <div className='text-[#1D2226] align-text-left pb-3'>
          <p>Are you Agency?</p>
          <div className='flex gap-x-2'>
            <label className='gap-y-2'>
              <input
                type="radio"
                value="yes"
                {...register('isAgency')}
              />
              <span className='px-2'>
                Yes
              </span>
            </label>
            <label className='text-[#1D2226]'>
              <input
                type="radio"

                value="no"
                {...register('isAgency')}
              />
              <span className='px-2'>
                No
              </span>
            </label>
          </div>
        </div>
        {/* Create Account Button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={isSubmitting || isLoading}
        >
          Create Account
        </Button>
      </form>




    </div>
  )
}
