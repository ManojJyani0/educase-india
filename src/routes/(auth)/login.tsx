import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/login')({
  component: LoginScreen,
})

function LoginScreen() {
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

        {/* Form fields */}
        <div className="absolute top-[140px] left-[20px] w-[335px]">
          {/* Email Address */}
          <div className="mb-6">
            <label className="block text-[13px] leading-[17px] text-[#6C25FF] font-['Rubik'] mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-4 text-[#1D2226] font-['Rubik']"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-[13px] leading-[17px] text-[#6C25FF] font-['Rubik'] mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] px-4 text-[#1D2226] font-['Rubik']"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-[13px] text-[#919191] font-['Rubik']">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[13px] text-[#6C25FF] font-['Rubik']">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-medium text-[16px] leading-[17px] font-['Rubik']">
          Sign In
        </button>

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
