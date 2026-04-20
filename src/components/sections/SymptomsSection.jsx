import { motion } from 'framer-motion'
import { SYMPTOMS, SYMPTOM_AWARENESS } from '../../data/symptoms'
import * as Icons from 'lucide-react'

export default function SymptomsSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-medical-red font-semibold mb-3 text-lg">HEALTH AWARENESS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {SYMPTOM_AWARENESS.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {SYMPTOM_AWARENESS.subtitle}
          </p>
        </motion.div>

        {/* Symptoms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {SYMPTOMS.map((symptom, index) => {
            const Icon = Icons[symptom.icon]
            return (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl text-center cursor-pointer transition ${
                  symptom.severity === 'urgent'
                    ? 'bg-red-100 border-2 border-medical-red hover:shadow-premium'
                    : symptom.severity === 'moderate'
                    ? 'bg-orange-100 border border-orange-200 hover:shadow-premium'
                    : 'bg-yellow-100 border border-yellow-200 hover:shadow-premium'
                }`}
              >
                <div className="mb-4 flex justify-center">
                  {Icon && (
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Icon
                        size={28}
                        className={
                          symptom.severity === 'urgent'
                            ? 'text-medical-red'
                            : symptom.severity === 'moderate'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }
                      />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{symptom.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{symptom.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Important Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-medical-red to-red-700 rounded-3xl p-12 text-white text-center mb-8"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {SYMPTOM_AWARENESS.message}
          </h3>
          <button
            onClick={scrollToBooking}
            className="mt-6 bg-white text-medical-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition hover:shadow-medium text-lg"
          >
            {SYMPTOM_AWARENESS.cta}
          </button>
        </motion.div>

        {/* Detailed Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Why Early Consultation Matters?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Early Diagnosis</h4>
              <p className="text-gray-600">Identifying problems early leads to better treatment outcomes and faster recovery.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-gray-600">Our experts provide customized treatment plans based on your specific condition.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prevention</h4>
              <p className="text-gray-600">Early intervention helps prevent complications and more serious health issues.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
