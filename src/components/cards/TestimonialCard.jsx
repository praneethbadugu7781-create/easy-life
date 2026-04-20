import { motion } from 'framer-motion'
import { Star, Check } from 'lucide-react'

export default function TestimonialCard({ testimonial, index }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-premium transition-all duration-300 hover:border-teal-200">
        {/* Header with Avatar */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
          />
          <div className="flex-1">
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.service}</p>
          </div>
          {testimonial.verified && (
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <Check size={14} className="text-green-600" />
              <span className="text-xs font-semibold text-green-600">Verified</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed mb-4">
          "{testimonial.text}"
        </p>

        {/* Date */}
        <p className="text-xs text-gray-500 font-medium">
          {formatDate(testimonial.date)}
        </p>
      </div>
    </motion.div>
  )
}
