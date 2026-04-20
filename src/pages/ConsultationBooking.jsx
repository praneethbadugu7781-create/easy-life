import Header from '../components/common/Header'
import BackButton from '../components/common/BackButton'
import ConsultationForm from '../components/booking/ConsultationForm'

export default function ConsultationBooking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton />
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold mb-3 text-lg">DOCTOR CONSULTATION</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Consultation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Schedule a consultation with our experienced doctors. Get expert advice for your health concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 md:py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Expert Doctors</h3>
                <p className="text-gray-600">
                  Consult with our experienced and qualified doctors who specialize in various medical fields.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Choose your preferred date and time for consultation. We accommodate your schedule.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-soft border border-blue-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Quick Confirmation</h3>
                <p className="text-gray-600">
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
