import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CLINIC_INFO } from '../../constants/clinic'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 font-semibold mb-3 text-lg">GET IN TOUCH</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out to us through any of these channels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={32} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  {CLINIC_INFO.address.full}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={32} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-teal-600 font-semibold text-lg hover:text-teal-700 transition"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
                <p className="text-gray-600 text-sm mt-1">Mon-Sun, 9 AM - 8 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={32} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Email Us</h3>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-teal-600 font-semibold hover:text-teal-700 transition"
                >
                  {CLINIC_INFO.email}
                </a>
                <p className="text-gray-600 text-sm mt-1">Response within 2 hours</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={32} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Operating Hours</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Weekdays:</span> {CLINIC_INFO.hours.weekdays}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Saturday:</span> {CLINIC_INFO.hours.saturday}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Sunday:</span> {CLINIC_INFO.hours.sunday}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-premium"
          >
            <iframe
              src={CLINIC_INFO.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <motion.a
            href={CLINIC_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-premium transition cursor-pointer"
          >
            <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.925 1.27c-.236.136-.491.333-.491.615 0 .512.386.945.875 1.419.267.294.584.566.786.772.202.206.331.476.331.763 0 .313-.126.613-.348.831-.223.218-.414.47-.626.722-.352.457-.693.91-.693 1.465 0 .812.324 1.567.902 2.11.578.542 1.373.915 2.263 1.115.89.2 1.878.186 2.826.06l.642-.08c.312-.039.577-.126.792-.262.215-.136.38-.32.475-.528.095-.208.119-.457.087-.695-.032-.238-.146-.458-.311-.637-.165-.179-.4-.27-.66-.27h-.56c-.356 0-.667.28-.667.625v1.5c0 .346-.298.625-.667.625h-1.334c-.368 0-.666-.279-.666-.625v-1.5c0-.345.298-.625.666-.625h.56c.26 0 .495.091.66.27.164.179.279.399.311.637.032.238.008.487-.087.695-.095.208-.26.392-.475.528-.215.136-.48.223-.792.262l-.642.08c-.948.126-1.936.14-2.826-.06-.89-.2-1.685-.573-2.263-1.115-.578-.543-.902-1.298-.902-2.11 0-.555.341-1.008.693-1.465.212-.252.403-.504.626-.722.222-.218.348-.518.348-.831 0-.287-.129-.557-.331-.763-.202-.206-.519-.478-.786-.772-.489-.474-.875-.907-.875-1.419 0-.282.255-.479.491-.615a9.87 9.87 0 014.925-1.27h.004z"/>
            </svg>
            <h3 className="font-bold text-lg text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Chat with us on WhatsApp for quick responses</p>
            <span className="text-green-600 font-semibold">Send Message →</span>
          </motion.a>

          {/* Emergency Call */}
          <motion.a
            href={`tel:${CLINIC_INFO.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-medical-red bg-opacity-10 border-2 border-medical-red rounded-2xl p-8 text-center hover:shadow-premium transition cursor-pointer"
          >
            <Phone className="w-12 h-12 text-medical-red mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us Immediately</h3>
            <p className="text-gray-600 mb-4">For urgent medical concerns</p>
            <span className="text-medical-red font-semibold">{CLINIC_INFO.phone}</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
