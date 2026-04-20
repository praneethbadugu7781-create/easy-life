import Header from '../components/common/Header'
import BackButton from '../components/common/BackButton'
import DressingForm from '../components/booking/DressingForm'

export default function DressingBooking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold mb-3 text-lg">POST-TREATMENT CARE</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Dressing & Post-care
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Schedule professional dressing and post-treatment care with our experienced nurses to ensure proper wound care and recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <DressingForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 md:py-20 bg-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Expert Nursing Care</h3>
                <p className="text-gray-600">
                  Our skilled nurses provide professional dressing and post-treatment care with proper hygiene and expertise.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Link Previous Treatment</h3>
                <p className="text-gray-600">
                  Link your dressing appointment to a previous treatment for continuity and coordinated care.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-soft border border-orange-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Wound Management</h3>
                <p className="text-gray-600">
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
