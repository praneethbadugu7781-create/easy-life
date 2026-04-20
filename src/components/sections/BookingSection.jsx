import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { SERVICES } from '../../data/services'
import { NURSES } from '../../data/nurses'
import { DOCTORS } from '../../data/doctors'
import { STORAGE_KEYS } from '../../constants/api'

export default function BookingSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      service: '',
      date: '',
      nurse: '',
      doctor: ''
    }
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Store booking in localStorage
      const existingBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings) || '[]')
      const newBooking = {
        id: Date.now(),
        ...data,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      existingBookings.push(newBooking)
      localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(existingBookings))

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting booking:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">BOOK YOUR APPOINTMENT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule a Consultation Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and our team will confirm your appointment within 24 hours
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100"
        >
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6"
            >
              <p className="text-green-800 font-semibold text-lg">
                ✓ Booking submitted successfully! We'll contact you soon to confirm.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Row 1 - Name and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' }
                  })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                />
                {errors.name && <p className="text-medical-red text-sm mt-2">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10,12}$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  placeholder="10-digit phone number"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                />
                {errors.phone && <p className="text-medical-red text-sm mt-2">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Row 2 - Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Address *
              </label>
              <textarea
                {...register('address', {
                  required: 'Address is required',
                  minLength: { value: 10, message: 'Please provide a complete address' }
                })}
                placeholder="Enter your complete address"
                rows="3"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white resize-none"
              />
              {errors.address && <p className="text-medical-red text-sm mt-2">{errors.address.message}</p>}
            </div>

            {/* Row 3 - Service and Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Service *
                </label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="">Choose a service...</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-medical-red text-sm mt-2">{errors.service.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  {...register('date', {
                    required: 'Please select a date',
                    validate: (value) => {
                      const selectedDate = new Date(value)
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return selectedDate >= today || 'Please select a future date'
                    }
                  })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                />
                {errors.date && <p className="text-medical-red text-sm mt-2">{errors.date.message}</p>}
              </div>
            </div>

            {/* Row 4 - Nurse and Doctor */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Nurse *
                </label>
                <select
                  {...register('nurse', { required: 'Please select a nurse' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="">Choose a nurse...</option>
                  {NURSES.map(nurse => (
                    <option key={nurse.id} value={nurse.name}>
                      {nurse.name}
                    </option>
                  ))}
                </select>
                {errors.nurse && <p className="text-medical-red text-sm mt-2">{errors.nurse.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Doctor to be Consulted (Optional)
                </label>
                <select
                  {...register('doctor')}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="">Any available doctor</option>
                  {DOCTORS.map(doctor => (
                    <option key={doctor.id} value={doctor.name}>
                      Dr. {doctor.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-center md:justify-start pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-teal-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-teal-700 transition hover:shadow-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Booking...' : 'Book Now'}
              </motion.button>
              <button
                type="reset"
                className="border-2 border-gray-300 text-gray-700 px-12 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-lg"
              >
                Clear
              </button>
            </div>

            {/* Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
              <p className="font-semibold mb-2">📞 Need immediate assistance?</p>
              <p>Call us directly at <span className="font-bold">8555006448</span> or message us on WhatsApp for urgent appointments.</p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
