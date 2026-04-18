import { createFileRoute } from '@tanstack/react-router'
import Button from '../../components/Button'

export const Route = createFileRoute('/_app/account-settings')({
  component: AccountSettingsScreen,
})

function AccountSettingsScreen() {
  return (
    <>
      {/* Top Navbar - Pixel perfect from design */}
      <header className="absolute top-0 left-0 right-0 h-[60px] bg-white shadow-[0px_3px_6px_#00000007] flex items-center justify-center">
        <h1 className="text-[18px] font-medium text-[#1D2226] font-['Rubik'] m-0">
          Account Settings
        </h1>
      </header>

      {/* Profile Section */}
      <div className="absolute top-[80px] left-0 right-0 flex flex-col items-center">
        {/* Profile Image with Camera Icon */}
        <div className="relative w-[100px] h-[100px]">
          <div
            className="w-full h-full rounded-full bg-gradient-to-br from-[#6C25FF] to-[#E70B897B]"
            style={{
              background: "transparent url('img/Ellipse_114.png') 0% 0% no-repeat padding-box",
              backgroundSize: 'cover',
              opacity: 1
            }}
          />
          {/* Camera Icon - positioned exactly as in design */}
          <div className="absolute bottom-[-2px] right-[-2px] w-[32px] h-[32px] bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H11L10 2H6L5 4H2C1.45 4 1 4.45 1 5V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V5C15 4.45 14.55 4 14 4ZM8 12C6.34 12 5 10.66 5 9C5 7.34 6.34 6 8 6C9.66 6 11 7.34 11 9C11 10.66 9.66 12 8 12Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Name and Email - exact spacing from design */}
        <div className="mt-4 text-center">
          <h2 className="text-[20px] font-medium text-[#1D2226] font-['Rubik'] m-0">John Doe</h2>
          <p className="text-[14px] text-[#919191] font-['Rubik'] mt-1 mb-0">john.doe@example.com</p>
        </div>

        {/* Lorem Ipsum Text - 4 lines as shown in design */}
        <div className="mt-6 w-[335px]">
          <p className="text-[14px] leading-[22px] text-[#1D2226] text-center font-['Rubik'] m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Dotted Line - exact width and spacing */}
        <div className="mt-6 w-[335px] border-t border-dashed border-[#CBCBCB]"></div>
      </div>

      {/* Settings Cards */}
      <div className="absolute top-[380px] left-[20px] w-[335px]">
        {/* Personal Information */}
        <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
          <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Personal Information</h3>
          <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Update your name, email, and phone number</p>
          <Button variant="ghost" size="sm" className="mt-3">
            Edit
          </Button>
        </div>

        {/* Security */}
        <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
          <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Security</h3>
          <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Change password, enable 2FA, manage devices</p>
          <Button variant="ghost" size="sm" className="mt-3">
            Manage
          </Button>
        </div>

        {/* Notifications */}
        <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
          <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Notifications</h3>
          <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Configure email and push notifications</p>
          <Button variant="ghost" size="sm" className="mt-3">
            Configure
          </Button>
        </div>

        {/* Privacy */}
        <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
          <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Privacy</h3>
          <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Control your data and visibility settings</p>
          <Button variant="ghost" size="sm" className="mt-3">
            Settings
          </Button>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute top-[670px] left-[20px] w-[335px]">
        <Button variant="secondary" fullWidth className="mb-4">
          Save Changes
        </Button>
        <Button variant="danger" fullWidth>
          Log Out
        </Button>
      </div>

      {/* Back link */}
      <div className="absolute top-[790px] left-0 right-0 text-center">
        <a href="/" className="text-[#6C25FF] text-sm font-['Rubik']">
          ← Back to Home
        </a>
      </div>
    </>
  )
}
