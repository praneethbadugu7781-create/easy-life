import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ConsultationBooking from './pages/ConsultationBooking'
import TreatmentBooking from './pages/TreatmentBooking'
import DressingBooking from './pages/DressingBooking'
import AdminDashboard from './pages/AdminDashboard'
import NursePanel from './pages/NursePanel'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationBooking />} />
        <Route path="/treatment" element={<TreatmentBooking />} />
        <Route path="/dressing" element={<DressingBooking />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/nurse" element={<NursePanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
