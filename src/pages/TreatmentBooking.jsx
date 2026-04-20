import Header from '../components/common/Header'
import BackButton from '../components/common/BackButton'
import TreatmentForm from '../components/booking/TreatmentForm'

export default function TreatmentBooking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
            <div className="text-center mb-8 md:mb-12">
              <p className="text-green-600 font-semibold mb-2 md:mb-3 text-sm md:text-lg">TREATMENT SERVICES</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                Book Your Treatment
              </h1>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Schedule a treatment with your preferred healthcare provider - choose between our expert doctors or experienced nurses.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <TreatmentForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-green-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Choice of Provider</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Select between our qualified doctors or experienced nurses based on your preference and treatment needs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-green-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Comprehensive Care</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Our treatment services cover a range of medical procedures and care requirements for your health.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-green-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Professional Support</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Receive expert treatment and care with our team of trained healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
