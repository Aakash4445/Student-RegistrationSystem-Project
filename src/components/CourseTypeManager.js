import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const CourseTypeManager = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [newCourseType, setNewCourseType] = useState("");
  const [error, setError] = useState("");

  const addCourseType = () => {
    if (newCourseType.trim() === "") {
      setError("Course type cannot be empty.");
      return;
    }
    if (courseTypes.includes(newCourseType)) {
      setError("Course type already exists.");
      return;
    }

    setCourseTypes([...courseTypes, newCourseType]);
    setNewCourseType("");
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={newCourseType}
        onChange={(e) => setNewCourseType(e.target.value)}
        placeholder="Enter course type"
      />
      <button onClick={addCourseType}>Add</button>
      <ErrorMessage message={error} />
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type} <button onClick={() => setCourseTypes(courseTypes.filter((t) => t !== type))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManager;
