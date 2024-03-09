import React, { useState, useEffect } from 'react';
import './tp.css'
function TutorProfile({ match }) { // Access tutor ID from URL parameter
  const [tutor, setTutor] = useState(true);

  // Fetch tutor details on component mount using the ID from URL parameter
//   useEffect(() => {
//     const fetchTutor = async () => {
//       const response = await fetch(`/api/tutors/${match.params.tutorId}`); // Replace with your endpoint
//       const data = await response.json();
//       setTutor(data);
//     };

//     fetchTutor();
//   }, [match.params.tutorId]);

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Selected time slot
  const [lessonLength, setLessonLength] = useState(45); // Initial lesson length

  const handleLessonLengthChange = (event) => {
    setLessonLength(parseInt(event.target.value, 10));
  };

  const handleBookLesson = () => {
    if (!selectedTimeSlot) {
      alert('Please select a time slot before booking.');
      return;
    }

    // Send booking request to backend with selected tutor ID, time slot, and lesson length
    console.log('Booking lesson:', tutor.id, selectedTimeSlot, lessonLength);
    // Replace with actual backend call
  };

  return (
    <div className="tutor-profile">
      {tutor ? (
        <>
          <h1>{tutor.name}</h1>
          <p>
            Teaches: {tutor.language} | Experience: {tutor.experience} | Price: ${tutor.price}/hour
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
                    <button onClick={() => setSelectedTimeSlot(timeSlot)} disabled={selectedTimeSlot}>
                      Select
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          <label htmlFor="lesson-length">Lesson Length:</label>
          <select id="lesson-length" value={lessonLength} onChange={handleLessonLengthChange}>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
          </select>
          <button onClick={handleBookLesson} disabled={!selectedTimeSlot}>
            Book Lesson
          </button>
        </>
      ) : (
        <p>Loading tutor details...</p>
      )}
    </div>
  );
}

export default TutorProfile;
