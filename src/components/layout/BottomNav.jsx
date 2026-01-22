import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="h-16 border-t bg-white flex justify-around items-center">
      <NavLink to="/discover">Discover</NavLink>
      <NavLink to="/connect">Connect</NavLink>
      <NavLink to="/upskill">Upskill</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}

export default BottomNav
