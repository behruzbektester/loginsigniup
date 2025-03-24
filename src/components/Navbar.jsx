export default function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full">
          <img src="../logo.svg" alt="" />
        </div>
        <span className="text-lg font-semibold">Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <button className="text-gray-600 hover:text-black">Home</button>
        <button className="text-gray-600 hover:text-black">Projects</button>
        <button className="text-gray-600 hover:text-black">Tasks</button>
        <button className="text-gray-600 hover:text-black">Settings</button>
      </nav>

      {/* Profile */}
      <div className="flex items-center space-x-3">
        <button className="relative">
          <span className="w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full absolute -top-1 -right-1">
            3
          </span>
          🔔
        </button>
        <div className="w-10 h-10 bg-gray-400 rounded-full">
          <img src="../user.png" alt="user-icon" />
        </div>
      </div>
    </header>
  );
}
