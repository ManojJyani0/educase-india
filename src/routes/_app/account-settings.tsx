import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/account-settings')({
  component: AccountSettingsScreen,
})

function AccountSettingsScreen() {
  return (
    <>
      {/* Top Navbar - Pixel perfect from design */}
      <header className="h-[60px] bg-white shadow-[0px_3px_6px_#00000007] flex items-center justify-start px-4">
        <h1 className="text-[18px] font-medium text-[#1D2226] font-['Rubik'] m-0">
          Account Settings
        </h1>
      </header>

      {/* Profile Section */}
      <div className="flex  justify-start items-stretch gap-x-4 p-4">
        {/* Profile Image with Camera Icon */}
        <div className="relative w-[100px] rounded-full  h-[100px] bg-gradient-to-br from-[#6C25FF] to-[#E70B897B]">
          <img
            src="/images/Ellipse.png"
            className="w-full h-full "
          />
          {/* Camera Icon - positioned exactly as in design */}
          <div className="absolute bottom-[-2px] right-[-2px] w-[32px] h-[32px] bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H11L10 2H6L5 4H2C1.45 4 1 4.45 1 5V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V5C15 4.45 14.55 4 14 4ZM8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9C11 10.66 9.66 12 8 12Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Name and Email - exact spacing from design */}
        <div className="mt-4">
          <h2 className="text-[20px] font-medium text-[#1D2226] font-['Rubik'] m-0">John Doe</h2>
          <p className="text-[14px] text-[#919191] font-['Rubik'] mt-1 mb-0">john.doe@example.com</p>
        </div>


        {/* Dotted Line - exact width and spacing */}
      </div>
      <div className="mt-6 w-full px-3">
        <p className="text-[14px] leading-[22px] text-[#1D2226] text-ellipsis font-['Rubik'] m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <div className="mt-6 w-[335px] border-t border-dashed border-[#CBCBCB]"></div>
      {/* Lorem Ipsum Text - 4 lines as shown in design */}

    </>
  )
}
