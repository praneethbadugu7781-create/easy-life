import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-premium transition-all duration-300 h-full hover:border-teal-200 hover:-translate-y-2">
        {/* Icon Container */}
        <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-200 group-hover:to-teal-100 transition">
          {Icon && <Icon size={28} className="text-teal-600" />}
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
          {service.name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Benefits */}
        <div className="space-y-2">
          {service.benefits && service.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-6 text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-2 group/btn transition">
          Learn More
          <span className="group-hover/btn:translate-x-1 transition">→</span>
        </button>
      </div>
    </motion.div>
  )
}
