import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <Outlet />
    </div>
  )
}

export default AuthLayout
