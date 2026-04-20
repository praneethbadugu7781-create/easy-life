import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, Calendar, CheckCircle, Clock } from 'lucide-react'
import { STORAGE_KEYS } from '../../constants/api'

export default function PatientsList() {
  const [patients, setPatients] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings) || '[]')
    // Filter only confirmed bookings as "assigned patients"
    const confirmedPatients = storedBookings.filter(b => b.status === 'confirmed')
    setPatients(confirmedPatients)
  }, [])

  const updatePatientStatus = (id, status) => {
    const updated = patients.map(patient =>
      patient.id === id ? { ...patient, status } : patient
    )
    setPatients(updated)

    // Update in localStorage
    const allBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings) || '[]')
    const updatedAll = allBookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    )
    localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(updatedAll))
  }

  const filteredPatients = filter === 'all'
    ? patients
    : patients.filter(p => p.nurseStatus === filter)

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
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Total Assigned</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{patients.length}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">In Progress</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {patients.filter(p => p.nurseStatus === 'started').length}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-soft"
        >
          <p className="text-gray-600 text-sm font-medium">Completed</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {patients.filter(p => p.nurseStatus === 'completed').length}
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
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-teal-600'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Patients Grid */}
      {filteredPatients.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPatients.map((patient, index) => (
            <motion.div
              key={patient.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-soft border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">{patient.service}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.nurseStatus || 'pending')}`}>
                  {(patient.nurseStatus || 'pending').charAt(0).toUpperCase() + (patient.nurseStatus || 'pending').slice(1)}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-gray-400" />
                  <a href={`tel:${patient.phone}`} className="text-teal-600 hover:text-teal-700">
                    {patient.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={18} className="text-gray-400" />
                  <span>{new Date(patient.date).toLocaleDateString()}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Nurse:</span> {patient.nurse || '-'}
                </div>
                {patient.doctor && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Consulting Doctor:</span> Dr. {patient.doctor}
                  </div>
                )}
              </div>

              {/* Address */}
              <p className="text-sm text-gray-600 mb-6">
                <span className="font-semibold text-gray-900">Address:</span> {patient.address}
              </p>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => updatePatientStatus(patient.id, { ...patient, nurseStatus: 'started' })}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium"
                >
                  <Clock size={18} />
                  Mark as Started
                </button>
                <button
                  onClick={() => updatePatientStatus(patient.id, { ...patient, nurseStatus: 'completed' })}
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
          <p className="text-gray-600 text-lg">No patients assigned yet</p>
        </div>
      )}
    </div>
  )
}
