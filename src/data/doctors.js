export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Amjad Khan',
    qualification: 'MBBS, MS ENT',
    specialty: 'Head and Neck Surgeon',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop',
    bio: 'Expert in Head and Neck Surgery with extensive experience in surgical care and recovery management.',
    rating: 4.9,
    patients: 2500,
  },
  {
    id: 2,
    name: 'Dr. Shameem Unnisa Shaikh',
    qualification: 'MBBS, MS General Surgery',
    specialty: 'General Surgeon & Breast Cancer Specialist',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1559839734033-6461efaf3cef?w=500&h=500&fit=crop',
    bio: 'Fellowship in Breast Cancer Disease. Specialized in general surgery and comprehensive post-operative care.',
    rating: 5.0,
    patients: 3200,
  }
];

export const DOCTORS_DETAILED = {
  1: {
    ...DOCTORS[0],
    certifications: [
      'MBBS from Osmania Medical College',
      'MS (ENT) from NIMS',
      'Fellowship in Head and Neck Surgery',
      'Member of Indian Medical Association'
    ],
    specializations: [
      'ENT Surgery',
      'Head and Neck Oncology',
      'Thyroid Surgery',
      'Post-Surgery Care Management'
    ]
  },
  2: {
    ...DOCTORS[1],
    certifications: [
      'MBBS from Maulana Azad Medical College',
      'MS General Surgery from Osmania University',
      'Fellowship in Breast Cancer Disease (AIOS)',
      'Member of Indian Society of Surgical Oncology'
    ],
    specializations: [
      'General Surgery',
      'Breast Surgery',
      'Cancer Surgery',
      'Minimally Invasive Surgery',
      'Post-Surgery Recovery'
    ]
  }
};
