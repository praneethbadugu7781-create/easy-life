import { STORAGE_KEYS } from '../constants/api'

// Get all bookings of a specific type
export const getBookingsByType = (type) => {
  const key = getStorageKeyByType(type)
  return JSON.parse(localStorage.getItem(key) || '[]')
}

// Save booking of specific type
export const saveBooking = (type, booking) => {
  const key = getStorageKeyByType(type)
  const bookings = getBookingsByType(type)
  const newBooking = {
    id: Date.now(),
    type,
    ...booking,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  bookings.push(newBooking)
  localStorage.setItem(key, JSON.stringify(bookings))
  return newBooking
}

// Update booking status
export const updateBookingStatus = (type, id, status) => {
  const key = getStorageKeyByType(type)
  const bookings = getBookingsByType(type)
  const updated = bookings.map(b =>
    b.id === id ? { ...b, status } : b
  )
  localStorage.setItem(key, JSON.stringify(updated))
  return updated
}

// Get booking by ID
export const getBookingById = (type, id) => {
  const bookings = getBookingsByType(type)
  return bookings.find(b => b.id === id)
}

// Delete booking
export const deleteBooking = (type, id) => {
  const key = getStorageKeyByType(type)
  const bookings = getBookingsByType(type)
  const filtered = bookings.filter(b => b.id !== id)
  localStorage.setItem(key, JSON.stringify(filtered))
}

// Helper: Get storage key by type
const getStorageKeyByType = (type) => {
  switch(type) {
    case 'consultation':
      return STORAGE_KEYS.consultationBookings
    case 'treatment':
      return STORAGE_KEYS.treatmentBookings
    case 'dressing':
      return STORAGE_KEYS.dressingBookings
    default:
      throw new Error(`Unknown booking type: ${type}`)
  }
}

// Filter bookings by status
export const filterBookingsByStatus = (type, status) => {
  const bookings = getBookingsByType(type)
  return status === 'all'
    ? bookings
    : bookings.filter(b => b.status === status)
}

// Get booking stats
export const getBookingStats = (type) => {
  const bookings = getBookingsByType(type)
  return {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    rejected: bookings.filter(b => b.status === 'rejected').length,
    completed: bookings.filter(b => b.status === 'completed').length,
  }
}
