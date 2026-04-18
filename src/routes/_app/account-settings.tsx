import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/account-settings')({
  component: AccountSettingsScreen,
})

function AccountSettingsScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] p-4">
      {/* Main container matching design size */}
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden">
        {/* Heading */}
        <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px]">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-['Rubik']">
            Account Settings
          </h1>
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60 mt-2 font-['Rubik']">
            Manage your preferences
          </p>
        </div>

        {/* Settings description */}
        <div className="absolute top-[204px] left-[20px] w-[337px] h-[63px]">
          <p className="text-[14px] leading-[22px] text-[#1D2226] font-['Rubik'] capitalize">
            Here you can update your account details, security settings, notification preferences, and privacy controls.
          </p>
        </div>

        {/* Settings cards */}
        <div className="absolute top-[300px] left-[20px] w-[335px]">
          {/* Personal Information */}
          <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
            <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Personal Information</h3>
            <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Update your name, email, and phone number</p>
            <button className="mt-3 text-[#6C25FF] text-[14px] font-medium font-['Rubik']">Edit</button>
          </div>

          {/* Security */}
          <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
            <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Security</h3>
            <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Change password, enable 2FA, manage devices</p>
            <button className="mt-3 text-[#6C25FF] text-[14px] font-medium font-['Rubik']">Manage</button>
          </div>

          {/* Notifications */}
          <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
            <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Notifications</h3>
            <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Configure email and push notifications</p>
            <button className="mt-3 text-[#6C25FF] text-[14px] font-medium font-['Rubik']">Configure</button>
          </div>

          {/* Privacy */}
          <div className="mb-4 p-4 border border-[#CBCBCB] rounded-[6px] bg-white">
            <h3 className="text-[16px] font-medium text-[#1D2226] font-['Rubik']">Privacy</h3>
            <p className="text-[14px] text-[#919191] mt-1 font-['Rubik']">Control your data and visibility settings</p>
            <button className="mt-3 text-[#6C25FF] text-[14px] font-medium font-['Rubik']">Settings</button>
          </div>
        </div>

        {/* Buttons */}
        <button className="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#DD4A3D] rounded-[6px] text-white font-medium text-[16px] leading-[17px] font-['Rubik']">
          Log Out
        </button>
        <button className="absolute top-[670px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] text-[#1D2226] font-medium text-[16px] leading-[17px] font-['Rubik']">
          Save Changes
        </button>

        {/* Back link */}
        <div className="absolute top-[790px] left-0 right-0 text-center">
          <a href="/" className="text-[#6C25FF] text-sm font-['Rubik']">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
