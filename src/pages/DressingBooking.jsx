import Header from '../components/common/Header'
import BackButton from '../components/common/BackButton'
import DressingForm from '../components/booking/DressingForm'

export default function DressingBooking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 md:pt-0 pb-28 md:pb-0">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
            <div className="text-center mb-8 md:mb-12">
              <p className="text-orange-600 font-semibold mb-2 md:mb-3 text-sm md:text-lg">POST-TREATMENT CARE</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                Book Dressing & Post-care
              </h1>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Schedule professional dressing and post-treatment care with our experienced nurses to ensure proper wound care and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <DressingForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Expert Nursing Care</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Our skilled nurses provide professional dressing and post-treatment care with proper hygiene and expertise.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Link Previous Treatment</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Link your dressing appointment to a previous treatment for continuity and coordinated care.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Wound Management</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Professional wound care and dressing to support your recovery and prevent complications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
