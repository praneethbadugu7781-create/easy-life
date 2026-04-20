import { motion } from 'framer-motion'
import { DOCTORS } from '../../data/doctors'
import DoctorCard from '../cards/DoctorCard'

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">MEET OUR TEAM</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Doctors You Can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highly qualified specialists bring years of experience in surgical care and post-operative management
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {DOCTORS.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Doctors?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-teal-600 mb-2">30+</p>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 mb-2">5000+</p>
              <p className="text-gray-600">Successful Procedures</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 mb-2">99%</p>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
