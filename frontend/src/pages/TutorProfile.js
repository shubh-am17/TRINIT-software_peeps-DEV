import React, { useState } from "react";
import "./tp.css";
import Navbar from "../components/Navbar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

// Define a function component for collecting card details (only card number)
function CheckoutForm({ handlePayment }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    // Extract only the card number from the event object
    const cardNumber = event.target.elements.cardNumber.value;

    // Handle payment logic here, potentially requiring additional details
    const response = await handlePayment(cardNumber);

    if (response && response.error) {
      setError(response.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label>
        Card Number
        <CardElement className="carddet"
          options={{
            style: {
              base: {
                fontSize: "16px",
                
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                  content: '"xxxx xxxx xxxx xxxx  MM/YY  CVC"',
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit">Pay</button>
    </form>
  );
}
function TutorProfile() {
  const [tutor] = useState({
    id: 1,
    name: "John Doe",
    language: "English",
    experience: "5-10 years",
    price: 30,
    qualifications: "Bachelor of Arts in English Literature",
    totalClasses: 100,
    timeSlots: [
      { id: 1, startTime: "09:00 AM", endTime: "10:00 AM" },
      { id: 2, startTime: "11:00 AM", endTime: "12:00 PM" },
      { id: 3, startTime: "02:00 PM", endTime: "03:00 PM" },
    ],
  });

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Selected time slot
  const [lessonLength, setLessonLength] = useState(45); // Initial lesson length

  const handleLessonLengthChange = (event) => {
    setLessonLength(parseInt(event.target.value, 10));
  };

  const handlePayment = async (event) => {
    // Handle payment logic here
    const stripe = await loadStripe("pk_test_..."); // Load Stripe instance with your test publishable key
    // Use stripe.js methods to handle payment
  };

  return (
    <>
      <Navbar />
      <div className="tutor-profile">
        <h1>{tutor.name}</h1>
        <p>
          Teaches: {tutor.language} | Experience: {tutor.experience} | Price: $
          {tutor.price}/hour
        </p>
        <h3>Qualifications</h3>
        <p>{tutor.qualifications}</p>
        <h3>Hours of Classes Taken</h3>
        <p>{tutor.totalClasses}</p>
        <h3>Schedule</h3>
        {/* Conditionally render available time slots if any */}
        {tutor.timeSlots && (
          <>
            <h2>Available Time Slots</h2>
            <ul className="time-slots">
              {tutor.timeSlots.map((timeSlot) => (
                <li key={timeSlot.id}>
                  {timeSlot.startTime} - {timeSlot.endTime}
                  {selectedTimeSlot === timeSlot && (
                    <span className="selected"> (Selected)</span>
                  )}
                  <button
                    onClick={() => setSelectedTimeSlot(timeSlot)}
                    disabled={selectedTimeSlot}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        <label htmlFor="lesson-length">Lesson Length:</label>
        <select
          id="lesson-length"
          value={lessonLength}
          onChange={handleLessonLengthChange}
        >
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
          <option value="90">90 minutes</option>
        </select>
      </div>
      <Elements
        stripe={loadStripe(
          "pk_test_51OsaY3SIwm1PEUKSM6lzE2dDuXBSCgPB4MnmxkHAfj6vYnOTyjePJSej8sEiHRjp99vHYbwy5sG1cah7IxqH40Ri00LgekQmhX"
        )}
      >
        <CheckoutForm handlePayment={handlePayment} />
      </Elements>
    </>
  );
}

export default TutorProfile;
