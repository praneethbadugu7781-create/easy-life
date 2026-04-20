import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { NURSES } from '../../data/nurses'
import { saveBooking, getBookingsByType } from '../../utils/bookingUtils'

export default function DressingForm() {
  const { register, handleSubmit, watch, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      area: '',
      linkedTreatmentId: '',
      nurse: '',
      date: ''
    }
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const linkedTreatmentId = watch('linkedTreatmentId')

  // Get treatment bookings to allow linking
  const treatmentBookings = getBookingsByType('treatment').filter(b => b.status === 'confirmed')

  // When a treatment is selected, prefill name and phone
  const handleTreatmentSelect = (e) => {
    const id = parseInt(e.target.value)
    if (id) {
      const treatment = treatmentBookings.find(t => t.id === id)
      if (treatment) {
        setValue('name', treatment.name)
        setValue('phone', treatment.phone)
      }
    } else {
      setValue('name', '')
      setValue('phone', '')
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      saveBooking('dressing', data)
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting dressing booking:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 shadow-soft border border-orange-100"
    >
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6"
        >
          <p className="text-green-800 font-semibold text-lg">
            ✓ Dressing appointment booked successfully! We'll contact you soon to confirm.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
        {/* Row 1 - Linked Treatment (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
            Link to Previous Treatment (Optional)
          </label>
          <select
            {...register('linkedTreatmentId')}
            onChange={handleTreatmentSelect}
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white text-sm md:text-base"
          >
            <option value="">Select a treatment (or skip)...</option>
            {treatmentBookings.map(booking => (
              <option key={booking.id} value={booking.id}>
                {booking.service} - {booking.name} - {new Date(booking.date).toLocaleDateString()}
              </option>
            ))}
          </select>
          {treatmentBookings.length === 0 && (
            <p className="text-xs md:text-sm text-gray-600 mt-2 italic">
              No confirmed treatments available. You can still book a dressing appointment.
            </p>
          )}
        </div>

        {/* Row 2 - Name and Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
              Full Name *
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
              placeholder="Enter your full name"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white text-sm md:text-base"
            />
            {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
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
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white text-sm md:text-base"
            />
            {errors.phone && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Row 3 - Area and Date */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
              Area/Issue Needing Dressing *
            </label>
            <textarea
              {...register('area', {
                required: 'Please describe the area needing dressing',
                minLength: { value: 5, message: 'Please provide details' }
              })}
              placeholder="Describe the wound or area..."
              rows="3"
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white resize-none text-sm md:text-base"
            />
            {errors.area && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.area.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
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
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white text-sm md:text-base"
            />
            {errors.date && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.date.message}</p>}
          </div>
        </div>

        {/* Row 4 - Select Nurse */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
            Select Nurse *
          </label>
          <select
            {...register('nurse', { required: 'Please select a nurse' })}
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition bg-white text-sm md:text-base"
          >
            <option value="">Choose a nurse...</option>
            {NURSES.map(nurse => (
              <option key={nurse.id} value={nurse.name}>
                {nurse.name} - {nurse.specialty}
              </option>
            ))}
          </select>
          {errors.nurse && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.nurse.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4 md:pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-orange-600 text-white px-6 md:px-12 py-3 md:py-4 rounded-lg font-semibold hover:bg-orange-700 transition hover:shadow-medium text-sm md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Booking...' : 'Book Dressing Appointment'}
          </motion.button>
          <button
            type="reset"
            className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 md:px-12 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-sm md:text-lg"
          >
            Clear
          </button>
        </div>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 text-xs md:text-sm text-blue-800">
          <p className="font-semibold mb-1 md:mb-2">📞 Need immediate assistance?</p>
          <p>Call us at <span className="font-bold">8555006448</span> or WhatsApp for urgent help.</p>
        </div>
      </form>
    </motion.div>
  )
}
