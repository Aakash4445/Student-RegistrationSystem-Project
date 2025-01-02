import React, { useState } from "react";

const StudentRegistrationManager = () => {
  const [registrations, setRegistrations] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [courseOffering, setCourseOffering] = useState("");

  const registerStudent = () => {
    if (studentName === "" || courseOffering === "") {
      alert("Enter both student name and course offering");
      return;
    }
    setRegistrations([...registrations, { studentName, courseOffering }]);
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Offering"
        value={courseOffering}
        onChange={(e) => setCourseOffering(e.target.value)}
      />
      <button onClick={registerStudent}>Register</button>
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>
            {reg.studentName} registered for {reg.courseOffering}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegistrationManager;
