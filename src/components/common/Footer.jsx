import { MapPin, Phone, Mail } from 'lucide-react'
import { CLINIC_INFO } from '../../constants/clinic'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{CLINIC_INFO.name}</h3>
                <p className="text-xs text-teal-300">{CLINIC_INFO.fullName}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{CLINIC_INFO.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition">Services</a></li>
              <li><a href="#doctors" className="text-gray-400 hover:text-teal-400 transition">Our Doctors</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-teal-400 transition">Book Appointment</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Piles Treatment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Fissures Treatment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Post-Surgery Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">General Surgery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-gray-300 hover:text-teal-400 transition block">
                    {CLINIC_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-gray-300 hover:text-teal-400 transition">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 {CLINIC_INFO.fullName}. All rights reserved.
            </p>

            {/* Admin & Nurse Links */}
            <div className="flex gap-4 text-xs">
              <a href="/admin" className="text-gray-500 hover:text-teal-400 transition">Admin</a>
              <span className="text-gray-600">|</span>
              <a href="/nurse" className="text-gray-500 hover:text-teal-400 transition">Nurse</a>
            </div>

            <div className="flex gap-4">
              <a href={CLINIC_INFO.socialLinks.facebook} className="text-gray-400 hover:text-teal-400 transition" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={CLINIC_INFO.socialLinks.instagram} className="text-gray-400 hover:text-teal-400 transition" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.197c2.73 0 3.056.01 4.122.06 1.065.049 1.79.218 2.427.465.657.254 1.215.595 1.738 1.118.523.523.864 1.081 1.118 1.738.247.637.416 1.362.465 2.427.05 1.066.06 1.392.06 4.122s-.01 3.056-.06 4.122c-.049 1.065-.218 1.79-.465 2.427-.254.657-.595 1.215-1.118 1.738-.523.523-1.081.864-1.738 1.118-.637.247-1.362.416-2.427.465-1.066.05-1.392.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.049-1.79-.218-2.427-.465-.657-.254-1.215-.595-1.738-1.118-.523-.523-.864-1.081-1.118-1.738-.247-.637-.416-1.362-.465-2.427-.05-1.066-.06-1.392-.06-4.122s.01-3.056.06-4.122c.049-1.065.218-1.79.465-2.427.254-.657.595-1.215 1.118-1.738.523-.523 1.081-.864 1.738-1.118.637-.247 1.362-.416 2.427-.465 1.066-.05 1.392-.06 4.122-.06"/>
                </svg>
              </a>
              <a href={CLINIC_INFO.socialLinks.twitter} className="text-gray-400 hover:text-teal-400 transition" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.028 14.028 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href={CLINIC_INFO.socialLinks.whatsapp} className="text-gray-400 hover:text-teal-400 transition" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.925 1.27c-.236.136-.491.333-.491.615 0 .512.386.945.875 1.419.267.294.584.566.786.772.202.206.331.476.331.763 0 .313-.126.613-.348.831-.223.218-.414.47-.626.722-.352.457-.693.91-.693 1.465 0 .812.324 1.567.902 2.11.578.542 1.373.915 2.263 1.115.89.2 1.878.186 2.826.06l.642-.08c.312-.039.577-.126.792-.262.215-.136.38-.32.475-.528.095-.208.119-.457.087-.695-.032-.238-.146-.458-.311-.637-.165-.179-.4-.27-.66-.27h-.56c-.356 0-.667.28-.667.625v1.5c0 .346-.298.625-.667.625h-1.334c-.368 0-.666-.279-.666-.625v-1.5c0-.345.298-.625.666-.625h.56c.26 0 .495.091.66.27.164.179.279.399.311.637.032.238.008.487-.087.695-.095.208-.26.392-.475.528-.215.136-.48.223-.792.262l-.642.08c-.948.126-1.936.14-2.826-.06-.89-.2-1.685-.573-2.263-1.115-.578-.543-.902-1.298-.902-2.11 0-.555.341-1.008.693-1.465.212-.252.403-.504.626-.722.222-.218.348-.518.348-.831 0-.287-.129-.557-.331-.763-.202-.206-.519-.478-.786-.772-.489-.474-.875-.907-.875-1.419 0-.282.255-.479.491-.615a9.87 9.87 0 014.925-1.27h.004z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
