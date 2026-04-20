import { useState, useEffect } from 'react'
import AdminLayout from '../components/admin/AdminLayout'
import ConsultationTable from '../components/admin/ConsultationTable'
import TreatmentTable from '../components/admin/TreatmentTable'
import DressingTable from '../components/admin/DressingTable'

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('consultations')

  useEffect(() => {
    const token = localStorage.getItem('admin_login_token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      localStorage.setItem('admin_login_token', 'mock-token-' + Date.now())
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials. Use admin/admin123')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-premium p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Easy Life Clinic</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="admin"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Demo credentials: admin / admin123
          </p>
        </div>
      </div>
    )
  }

  return (
    <AdminLayout>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('consultations')}
          className={`px-6 py-3 font-semibold transition border-b-2 ${
            activeTab === 'consultations'
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Doctor Consultations
        </button>
        <button
          onClick={() => setActiveTab('treatments')}
          className={`px-6 py-3 font-semibold transition border-b-2 ${
            activeTab === 'treatments'
              ? 'text-green-600 border-green-600'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Treatments
        </button>
        <button
          onClick={() => setActiveTab('dressings')}
          className={`px-6 py-3 font-semibold transition border-b-2 ${
            activeTab === 'dressings'
              ? 'text-orange-600 border-orange-600'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Dressings/Post-care
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'consultations' && <ConsultationTable />}
      {activeTab === 'treatments' && <TreatmentTable />}
      {activeTab === 'dressings' && <DressingTable />}
    </AdminLayout>
  )
}
