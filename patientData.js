const patientInfo = {
  'ABC123': {
    name: 'Elvis Mburu',
    age: 20,
    gender: 'Male',
    contactNumber: '+254708419386',
    emergencyContact: 'Esther Wangithi, +254708339386',
    insuranceProvider: 'MedHealth Insurance',
    policyNumber: 'MH23456789',
    condition: 'Type 2 Diabetes Mellitus',
    diagnosisDate: 'March 15, 2022',
    allergies: ['Penicillin', 'Nuts'],
    previousSurgeries: ['Appendectomy (2019)'],
    currentMedications: [
      { name: 'Metformin 500 mg', dosage: 'Twice daily' },
      { name: 'Lisinopril 10 mg', dosage: 'Once daily for blood pressure' },
      { name: 'Atorvastatin 20 mg', dosage: 'Once daily for cholesterol' },
    ],
    upcomingAppointments: [
      {
        date: 'June 26, 2024',
        time: '10:00 AM',
        doctor: 'Dr. Susan Smith, Endocrinologist',
        location: 'Juja Level 5 Hospital',
        purpose: 'Routine diabetes management check-up',
        locationPin: 'https://maps.google.com/?q=-1.0986,37.0158', // Dummy Google Maps link
      },
      {
        date: 'June 29, 2024',
        time: '2:00 PM',
        doctor: 'Dr. Neil Johnson, Cardiologist',
        location: 'Mama Ngina Hospital',
        purpose: 'Follow-up on blood pressure and heart health',
        locationPin: 'https://maps.google.com/?q=-1.2871,36.8278', // Dummy Google Maps link
      },
    ],
    prescriptionRefillDates: {
      Metformin: 'July 1, 2024',
      Lisinopril: 'July 10, 2024',
      Atorvastatin: 'July 10, 2024',
    },
    dietaryRecommendations: [
      'Follow a balanced diet low in simple sugars and saturated fats.',
      'Increase intake of vegetables, whole grains, and lean proteins.',
      'Monitor carbohydrate intake and maintain regular meal times.',
    ],
    exerciseRecommendations: [
      'At least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.',
      'Include muscle-strengthening activities on two or more days a week.',
    ],
    additionalNotes: [
      'Continue monitoring blood sugar levels four times a day.',
      'Attend monthly diabetes education workshops at the MedCenter Clinic.',
      'Next annual comprehensive diabetic evaluation due in March 2025.',
    ],
  },
};

module.exports = patientInfo;
