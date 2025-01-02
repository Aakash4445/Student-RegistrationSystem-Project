import React from "react";
import "./App.css";
import CourseTypeManager from "./components/CourseTypeManager";
import CourseManager from "./components/CourseManager";
import CourseOfferingManager from "./components/CourseOfferingManager";
import StudentRegistrationManager from "./components/StudentRegistrationManager";

const App = () => {
  return (
    <div>
      <h1>Student Registration System</h1>
      <CourseTypeManager />
      <CourseManager />
      <CourseOfferingManager />
      <StudentRegistrationManager />
    </div>
  );
};

export default App;
