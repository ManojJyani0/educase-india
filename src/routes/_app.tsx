import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] p-4">
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
