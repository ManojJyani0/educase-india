import Button from '#/components/Button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="flex h-full  content-end ">
      
        {/* Background */}
        <div className="w-full h-full gap-x-3 p-4 bg-[#F7F8F9] flex flex-col justify-end"  >
        
        {/* Content */}
        <div className="pt-20 ">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226]">
            Welcome to PropX
          </h1>
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt
          </p>
        </div>


        {/* Buttons */}
        <div className="bottom-8  right-5">
          <Button
            to="/register"
            className="block w-full h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-medium text-[16px] leading-[17px] mb-4 flex items-center justify-center"
          >
            <span className='text-[#FFFFFF]'>
            Get Started
            </span>
            
          </Button>
          <Button
            to="/login"
            className="block w-full h-[46px] border border-[#CBCBCB] bg-[#6C25FF4B] rounded-[6px] text-[#1D2226;] font-medium text-[16px] leading-[17px] flex items-center justify-center"
            variant ="secondary"
          >
           <span className='text-[#1D2226]'>
            Already Registered? Login
            </span>
          </Button>         
        </div>
        </div>
    </div>
  )
}