import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Home, Stethoscope, Calendar, Users, Mail, MapPin } from 'lucide-react'
import { CLINIC_INFO } from '../../constants/clinic'

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed w-full top-0 z-50 bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-gray-900 text-lg">Easy Life</h1>
                <p className="text-xs text-teal-600 font-medium">Clinic</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex gap-8 items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('doctors')}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Doctors
              </button>
              <button
                onClick={() => scrollToSection('booking-menu')}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Contact
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition"
              >
                <Phone size={18} />
                <span className="text-sm">{CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={() => scrollToSection('booking-menu')}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 font-semibold transition hover:shadow-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Minimal Top Bar */}
      <header className="md:hidden fixed w-full top-0 z-40 bg-white shadow-soft">
        <div className="px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-1">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-gray-900 text-xs">Easy Life</h1>
              <p className="text-xs text-teal-600 font-medium leading-none">Clinic</p>
            </div>
          </Link>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="text-teal-600 hover:text-teal-700 transition"
            title="Call us"
          >
            <Phone size={16} />
          </a>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Icon Based */}
      <nav className="md:hidden fixed w-full bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 gap-0 px-2 py-2">
          <button
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-center justify-center py-2 text-gray-700 hover:text-teal-600 transition"
          >
            <Home size={24} />
            <span className="text-xs mt-1 font-medium">Home</span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center justify-center py-2 text-gray-700 hover:text-teal-600 transition"
          >
            <Stethoscope size={24} />
            <span className="text-xs mt-1 font-medium">Services</span>
          </button>
          <button
            onClick={() => scrollToSection('doctors')}
            className="flex flex-col items-center justify-center py-2 text-gray-700 hover:text-teal-600 transition"
          >
            <Users size={24} />
            <span className="text-xs mt-1 font-medium">Doctors</span>
          </button>
          <button
            onClick={() => scrollToSection('booking-menu')}
            className="flex flex-col items-center justify-center py-2 text-teal-600 hover:text-teal-700 transition"
          >
            <Calendar size={24} />
            <span className="text-xs mt-1 font-medium">Book</span>
          </button>
        </div>
      </nav>
    </>
  )
}
