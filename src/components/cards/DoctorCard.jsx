import { motion } from 'framer-motion'
import { Star, Award, Users } from 'lucide-react'

export default function DoctorCard({ doctor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-premium transition-all duration-300 hover:border-teal-200">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-100 to-gray-100 h-96 flex items-center justify-center">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-2">👨‍⚕️</div>
              <p className="text-gray-500 font-medium">Image coming soon</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({doctor.rating})</span>
          </div>

          {/* Name */}
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
            {doctor.name}
          </h3>

          {/* Qualifications */}
          <p className="text-sm font-semibold text-teal-600 mb-3">
            {doctor.qualification}
          </p>

          {/* Specialty */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {doctor.specialty}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">EXPERIENCE</p>
              <p className="font-bold text-gray-900">{doctor.experience}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">PATIENTS</p>
              <div className="flex items-center gap-1">
                <Users size={16} className="text-teal-600" />
                <p className="font-bold text-gray-900">{doctor.patients.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-6 w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </motion.div>
  )
}
