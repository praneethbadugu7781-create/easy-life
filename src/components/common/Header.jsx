import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { CLINIC_INFO } from '../../constants/clinic'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-gray-900 text-lg">Easy Life</h1>
              <p className="text-xs text-teal-600 font-medium">Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
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
              className="hidden sm:flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition"
            >
              <Phone size={18} />
              <span className="text-sm">{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => scrollToSection('booking-menu')}
              className="hidden sm:block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 font-semibold transition hover:shadow-medium"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100 pt-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection('booking-menu')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking-menu')}
              className="block w-full mx-4 mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 font-semibold transition"
            >
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
