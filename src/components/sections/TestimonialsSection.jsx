import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'
import TestimonialCard from '../cards/TestimonialCard'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">WHAT OUR PATIENTS SAY</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read stories from our satisfied patients about their experience with Easy Life Clinic
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-8 min-h-80">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                className={`w-3 h-3 rounded-full transition ${
                  index >= currentIndex && index < currentIndex + itemsPerView
                    ? 'bg-teal-600'
                    : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-teal-600 hover:text-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-teal-600 hover:text-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-8 text-center border border-gray-100"
        >
          <p className="text-gray-600 text-lg mb-4">
            Join thousands of patients who have successfully recovered with our expert care
          </p>
          <a
            href="#booking"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition hover:shadow-medium"
          >
            Book Your Consultation Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
