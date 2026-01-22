const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="font-semibold">Startora</div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Rohit</span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </div>
  )
}

export default Navbar
