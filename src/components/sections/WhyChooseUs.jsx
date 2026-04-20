import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Heart } from 'lucide-react'

const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: 'Experienced Doctors',
    description: 'Highly qualified specialists with 15+ years of experience in surgical and post-operative care'
  },
  {
    icon: Heart,
    title: 'Trusted Care',
    description: 'Thousands of satisfied patients who have successfully recovered under our expert medical guidance'
  },
  {
    icon: Users,
    title: 'Modern Treatment',
    description: 'Advanced surgical techniques and latest medical technologies for optimal outcomes'
  },
  {
    icon: CheckCircle,
    title: 'Patient Satisfaction',
    description: '99% patient satisfaction rate with comprehensive follow-up care and support'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">WHY CHOOSE US</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Health is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional healthcare services with personalized attention to every patient
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {WHY_CHOOSE_US.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all border border-gray-100 hover:border-teal-200"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={32} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-white grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-3">5000+</p>
            <p className="text-teal-100 text-lg">Successful Procedures</p>
          </div>
          <div className="text-center border-l border-r border-teal-400">
            <p className="text-5xl md:text-6xl font-bold mb-3">10000+</p>
            <p className="text-teal-100 text-lg">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-3">99%</p>
            <p className="text-teal-100 text-lg">Satisfaction Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
