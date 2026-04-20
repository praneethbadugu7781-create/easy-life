import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import DoctorsSection from '../components/sections/DoctorsSection'
import SymptomsSection from '../components/sections/SymptomsSection'
import NavigationMenu from '../components/navigation/NavigationMenu'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <SymptomsSection />
        <NavigationMenu />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
