const express = require("express");
const router = express.Router();
const patientInfo = require('./patientData');

const sessionState = {};

router.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log('####################', req.body);

  // Initialize session state if not present
  if (!sessionState[sessionId]) {
    sessionState[sessionId] = { step: 0, subStep: 0 };
  }

  const patient = patientInfo['ABC123'];
  let response = "";
  const userState = sessionState[sessionId];

  // Function to get the latest appointment
  const getLatestAppointment = (appointments) => {
    return appointments
      .filter(app => new Date(app.date) >= new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  };

  const latestAppointment = getLatestAppointment(patient.upcomingAppointments);

  if (userState.step === 0) {
    response = "CON Hi, welcome to Mshauri Health Assistant 🤖. How may I assist you today?\n";
    response += "1. 🔄 Refill Prescription\n";
    response += "2. 📅 Upcoming Appointments\n";
    response += "3. 👨‍⚕️ Next Doctor to Meet\n";
    response += "4. 🏥 Hospital/Clinic Location\n";
    userState.step = 1;
  } else if (userState.step === 1) {
    switch (text) {
      case "1":
        response = "CON Which prescription would you like to refill?\n";
        const medications = patient.currentMedications.map((med, index) => `${index + 1}. ${med.name}`);
        response += medications.join("\n");
        userState.step = 2;
        userState.subStep = 1;
        break;
      case "2":
        const upcomingAppointments = patient.upcomingAppointments.map(
          (appointment, index) => `${index + 1}. ${appointment.date}, ${appointment.time}\nDoctor: ${appointment.doctor}\nLocation: ${appointment.location}\nPurpose: ${appointment.purpose}\n📍 Location Pin: ${appointment.locationPin}\n`
        );
        response = `CON 📅 Upcoming Appointments:\n${upcomingAppointments.join("\n")}`;
        userState.step = 3;
        break;
      case "3":
        if (latestAppointment) {
          response = `END 👨‍⚕️ Your next appointment is:\nDate: ${latestAppointment.date}, ${latestAppointment.time}\nDoctor: ${latestAppointment.doctor}\nLocation: ${latestAppointment.location}\nPurpose: ${latestAppointment.purpose}\n📍 Location Pin: ${latestAppointment.locationPin}`;
        } else {
          response = "END No upcoming appointments found.";
        }
        userState.step = 0;
        break;
      case "4":
        if (latestAppointment) {
          response = `END 🏥 Your next appointment is at:\n${latestAppointment.location}\n📍 Location Pin: ${latestAppointment.locationPin}`;
        } else {
          response = "END No upcoming appointments found.";
        }
        userState.step = 0;
        break;
      default:
        response = "END Invalid option. Please try again.";
        userState.step = 0;
        break;
    }
  } else if (userState.step === 2 && userState.subStep === 1) {
    const medicationIndex = parseInt(text) - 1;
    if (medicationIndex >= 0 && medicationIndex < patient.currentMedications.length) {
      const medication = patient.currentMedications[medicationIndex];
      const refillDate = patient.prescriptionRefillDates[medication.name] || "No refill date available";
      response = `END 🔄 Your ${medication.name} prescription refill date is: ${refillDate}`;
      userState.step = 0;
      userState.subStep = 0;
    } else {
      response = "END Invalid option. Please try again.";
      userState.step = 0;
      userState.subStep = 0;
    }
  } else if (userState.step === 3) {
    response = "END Thank you for using Mshauri Health Assistant 🤖.";
    userState.step = 0;
    userState.subStep = 0;
  }

  res.set("Content-Type: text/plain");
  res.send(response);
});

module.exports = router;
