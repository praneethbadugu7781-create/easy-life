import { useState, useEffect } from 'react'
import NurseLayout from '../components/nurse/NurseLayout'
import NurseTreatments from '../components/nurse/NurseTreatments'
import NurseDressings from '../components/nurse/NurseDressings'

export default function NursePanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [activeTab, setActiveTab] = useState('treatments')

  useEffect(() => {
    const token = localStorage.getItem('nurse_login_token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock login - in production, this would be a real API call
    if (credentials.username === 'nurse' && credentials.password === 'nurse123') {
      localStorage.setItem('nurse_login_token', 'mock-token-' + Date.now())
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials. Use nurse/nurse123')
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
            <h1 className="font-display text-2xl font-bold text-gray-900">Nurse Login</h1>
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
                placeholder="nurse"
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
            Demo credentials: nurse / nurse123
          </p>
        </div>
      </div>
    )
  }

  return (
    <NurseLayout>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
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
      {activeTab === 'treatments' && <NurseTreatments />}
      {activeTab === 'dressings' && <NurseDressings />}
    </NurseLayout>
  )
}
