import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition mb-6"
    >
      <ArrowLeft size={20} />
      <span>Back to Home</span>
    </button>
  )
}
