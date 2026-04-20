import Header from '../components/common/Header'
import BackButton from '../components/common/BackButton'
import ConsultationForm from '../components/booking/ConsultationForm'

export default function ConsultationBooking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 md:pt-0 pb-28 md:pb-0">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
            <div className="text-center mb-8 md:mb-12">
              <p className="text-blue-600 font-semibold mb-2 md:mb-3 text-sm md:text-lg">DOCTOR CONSULTATION</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
                Book Your Consultation
              </h1>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Schedule a consultation with our experienced doctors. Get expert advice for your health concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Expert Doctors</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Consult with our experienced and qualified doctors who specialize in various medical fields.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Flexible Scheduling</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Choose your preferred date and time for consultation. We accommodate your schedule.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">Quick Confirmation</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Get confirmation within 24 hours. We'll reach out to finalize your appointment details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
