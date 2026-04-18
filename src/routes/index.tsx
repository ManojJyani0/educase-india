import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[375px] h-[812px] bg-white shadow-lg relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#F7F8F9]" />
        
        {/* Content */}
        <div className="pt-20 px-5">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226]">
            Welcome to Educase
          </h1>
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60 mt-4">
            Your gateway to seamless learning and management.
          </p>
        </div>

        {/* Illustration or Image Placeholder */}
        <div className="flex justify-center mt-12">
          <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#6C25FF] to-[#642AF5] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl">🎓</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-8 left-5 right-5">
          <Link
            to="/register"
            className="block w-full h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-medium text-[16px] leading-[17px] mb-4 flex items-center justify-center"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="block w-full h-[46px] border border-[#CBCBCB] bg-[#6C25FF4B] rounded-[6px] text-[#1D2226;] font-medium text-[16px] leading-[17px] flex items-center justify-center"
          >
            Already Registered? Login
          </Link>         
        </div>
      </div>
    </div>
  )
}