import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, CheckCircle, User, Phone, Calendar } from 'lucide-react'
import { getBookingsByType, updateBookingStatus } from '../../utils/bookingUtils'

export default function NurseDressings() {
  const [dressings, setDressings] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadDressings()
  }, [])

  const loadDressings = () => {
    const allDressings = getBookingsByType('dressing')
      .filter(d => d.status === 'confirmed')
    setDressings(allDressings)
  }

  const updateStatus = (id, status) => {
    updateBookingStatus('dressing', id, status)
    loadDressings()
  }

  const filteredDressings = filter === 'all'
    ? dressings
    : dressings.filter(d => d.nurseStatus === filter)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'started':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg p-6 shadow-soft">
          <p className="text-gray-600 text-sm font-medium">Total Assigned</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{dressings.length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-lg p-6 shadow-soft">
          <p className="text-gray-600 text-sm font-medium">In Progress</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {dressings.filter(d => d.nurseStatus === 'started').length}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg p-6 shadow-soft">
          <p className="text-gray-600 text-sm font-medium">Completed</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {dressings.filter(d => d.nurseStatus === 'completed').length}
          </p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="flex gap-4 flex-wrap">
        {['all', 'started', 'completed'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === status
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-600'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Dressings Grid */}
      {filteredDressings.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDressings.map((dressing, index) => (
            <motion.div
              key={dressing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-soft border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{dressing.name}</h3>
                    <p className="text-sm text-gray-600">Dressing Appointment</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(dressing.nurseStatus || 'pending')}`}>
                  {(dressing.nurseStatus || 'pending').charAt(0).toUpperCase() + (dressing.nurseStatus || 'pending').slice(1)}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-gray-400" />
                  <a href={`tel:${dressing.phone}`} className="text-orange-600 hover:text-orange-700">
                    {dressing.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={18} className="text-gray-400" />
                  <span>{new Date(dressing.date).toLocaleDateString()}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Area:</span> {dressing.area}
                </div>
                {dressing.linkedTreatmentId && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Linked to:</span> Treatment #{dressing.linkedTreatmentId}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => updateStatus(dressing.id, { ...dressing, nurseStatus: 'started' })}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium"
                >
                  <Clock size={18} />
                  Mark as Started
                </button>
                <button
                  onClick={() => updateStatus(dressing.id, { ...dressing, nurseStatus: 'completed' })}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition font-medium"
                >
                  <CheckCircle size={18} />
                  Mark as Completed
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg p-12 text-center shadow-soft">
          <p className="text-gray-600 text-lg">No dressing appointments assigned yet</p>
        </div>
      )}
    </div>
  )
}
