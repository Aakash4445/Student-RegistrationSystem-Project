import React, { useState } from "react";

const CourseOfferingManager = () => {
  const [offerings, setOfferings] = useState([]);
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");

  const addOffering = () => {
    if (course === "" || type === "") {
      alert("Select both course and type");
      return;
    }
    const newOffering = `${type} - ${course}`;
    setOfferings([...offerings, newOffering]);
  };

  const deleteOffering = (offering) => {
    setOfferings(offerings.filter((o) => o !== offering));
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button onClick={addOffering}>Add Offering</button>
      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>
            {offering} <button onClick={() => deleteOffering(offering)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferingManager;
