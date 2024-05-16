const express = require("express");
const router = express.Router();
const patientInfo = require('./patientData');

router.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log('####################', req.body);
  let response = "";

  // Assuming all users have access to the options
  response = "CON Hi, welcome to Nishauri Health Assistant. How may I help you today?\n";
  response += "1. Refill Prescription\n";
  response += "2. Upcoming Appointments\n";
  response += "3. Next Doctor to Meet\n";
  response += "4. Hospital/Clinic Location\n";

  if (text === "1") {
    // Assuming a default patient for demonstration purposes
    const patient = patientInfo['ABC123'];
    response = "CON Which prescription would you like to refill?\n";
    const medications = patient.currentMedications.map(med => med.name);
    response += medications.join("\n");
  } else if (text === "2") {
    // Assuming a default patient for demonstration purposes
    const patient = patientInfo['ABC123'];
    const upcomingAppointments = patient.upcomingAppointments.map(
      (appointment, index) =>
        `${index + 1}. ${appointment.date}, ${appointment.time}\n${appointment.doctor}\n${appointment.location}\n${appointment.purpose}\n`
    );
    response = `CON Upcoming Appointments:\n${upcomingAppointments.join("\n")}`;
  } else if (text === "3") {
    // Assuming a default patient for demonstration purposes
    const patient = patientInfo['ABC123'];
    const nextAppointment = patient.upcomingAppointments[0];
    response = `END Your next appointment is:\nDate: ${nextAppointment.date}, ${nextAppointment.time}\nDoctor: ${nextAppointment.doctor}\nLocation: ${nextAppointment.location}\nPurpose: ${nextAppointment.purpose}`;
  } else if (text === "4") {
    // Assuming a default patient for demonstration purposes
    const patient = patientInfo['ABC123'];
    const nextAppointment = patient.upcomingAppointments[0];
    response = `END Your next appointment is at:\n${nextAppointment.location}`;
  } else if (/^\d+$/.test(text)) {
    response = "END Invalid option. Please try again.";
  }

  res.set("Content-Type: text/plain");
  res.send(response);
});

module.exports = router;