import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, User, Phone } from 'lucide-react'
import { STORAGE_KEYS } from '../../constants/api'

export default function BookingTable() {
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings) || '[]')
    setBookings(storedBookings)
  }, [])

  const updateBookingStatus = (id, status) => {
    const updated = bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    )
    setBookings(updated)
    localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(updated))
  }

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter(b => b.status === filter)

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{bookings.length}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {bookings.filter(b => b.status === 'pending').length}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Confirmed</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {bookings.filter(b => b.status === 'confirmed').length}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Rejected</p>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {bookings.filter(b => b.status === 'rejected').length}
          </p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="flex gap-4 flex-wrap">
        {['all', 'pending', 'confirmed', 'rejected', 'in-progress'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === status
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-600'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-soft overflow-hidden">
        {filteredBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nurse</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Doctor (Done by)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-400" />
                        <span className="font-medium text-gray-900">{booking.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-gray-400" />
                        <a href={`tel:${booking.phone}`} className="text-teal-600 hover:text-teal-700">
                          {booking.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{booking.service}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {new Date(booking.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{booking.nurse || '-'}</td>
                    <td className="px-6 py-4 text-gray-700">{booking.doctor ? `Dr. ${booking.doctor}` : '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-y-2">
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded hover:bg-green-100 transition w-full justify-center"
                      >
                        <CheckCircle size={16} />
                        <span className="text-sm font-medium">Accept</span>
                      </button>
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'rejected')}
                        className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-700 rounded hover:bg-red-100 transition w-full justify-center"
                      >
                        <XCircle size={16} />
                        <span className="text-sm font-medium">Reject</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No bookings found</p>
          </div>
        )}
      </div>
    </div>
  )
}
