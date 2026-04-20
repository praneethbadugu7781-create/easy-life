import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Stethoscope, Pill, Bandage } from 'lucide-react'

export default function NavigationMenu() {
  const navigate = useNavigate()

  const bookingOptions = [
    {
      icon: Stethoscope,
      title: 'Doctor Consultation',
      description: 'Book an appointment with our doctors for consultation',
      path: '/consultation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Pill,
      title: 'Treatment Service',
      description: 'Book treatment services with doctor or nurse',
      path: '/treatment',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bandage,
      title: 'Dressing & Post-care',
      description: 'Book nurse for dressing and post-treatment care',
      path: '/dressing',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="booking-menu" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">BOOK YOUR SERVICE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Would You Like to Book?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the type of service you need and proceed with your booking
          </p>
        </motion.div>

        {/* Booking Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {bookingOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(option.path)}
                className="text-left group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all h-full border-2 border-transparent hover:border-teal-600">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Book Now</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
