export const API_ENDPOINTS = {
  base: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  bookings: '/bookings',
  doctors: '/doctors',
  services: '/services',
  testimonials: '/testimonials',
};

export const API_CONFIG = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const STORAGE_KEYS = {
  // Legacy (kept for compatibility)
  bookings: 'easy_life_bookings',
  // New booking types
  consultationBookings: 'easy_life_consultation_bookings',
  treatmentBookings: 'easy_life_treatment_bookings',
  dressingBookings: 'easy_life_dressing_bookings',
  // Auth tokens
  adminLogin: 'admin_login_token',
  nurseLogin: 'nurse_login_token',
  userPreferences: 'user_preferences',
};
