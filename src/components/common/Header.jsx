import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { CLINIC_INFO } from '../../constants/clinic'

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-soft">
      {/* Desktop Header */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-3 py-2 flex flex-col gap-2">
          {/* Top Row - Logo and Phone */}
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-1.5">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-gray-900 text-xs">Easy Life</h1>
                <p className="text-xs text-teal-600 font-medium leading-tight">Clinic</p>
              </div>
            </Link>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold transition"
              title="Call us"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Navigation and CTA */}
          <nav className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-center px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="w-full text-center px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded transition"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-center px-2 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking-menu')}
              className="w-full text-center px-2 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded transition"
            >
              Book
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
