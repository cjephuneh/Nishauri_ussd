// patientData.js
const patientInfo = {
    'ABC123': {
      name: 'John Doe',
      age: 34,
      gender: 'Male',
      contactNumber: '+1 234-567-8901',
      emergencyContact: 'Jane Doe, +1 234-987-6543',
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
          date: 'May 15, 2024',
          time: '10:00 AM',
          doctor: 'Dr. Susan Smith, Endocrinologist',
          location: 'MedCenter Clinic, 123 Health St., Wellness City',
          purpose: 'Routine diabetes management check-up',
        },
        {
          date: 'May 22, 2024',
          time: '2:00 PM',
          doctor: 'Dr. Neil Johnson, Cardiologist',
          location: 'Heart Health Hospital, 456 Care Ave., Wellness City',
          purpose: 'Follow-up on blood pressure and heart health',
        },
      ],
      prescriptionRefillDates: {
        Metformin: 'June 1, 2024',
        Lisinopril: 'June 10, 2024',
        Atorvastatin: 'June 10, 2024',
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
    // Add more patient information objects here if needed
  };
  
  module.exports = patientInfo;