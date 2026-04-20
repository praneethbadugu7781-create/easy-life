import { useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NurseLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('nurse_login_token')
    window.location.href = '/nurse'
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <Link to="/nurse" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <h1 className="font-bold text-lg">Easy Life Nurse</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          <Link
            to="/nurse"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <span>👥 My Patients</span>
          </Link>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 w-full transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white shadow-soft flex items-center justify-between px-6 py-4 md:py-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h2 className="font-display font-bold text-2xl text-gray-900">Nurse Portal</h2>
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
            N
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
