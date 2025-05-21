import React from "react";

const StudentList = () => {
  const students = [
    { name: "Preethi", marks: 45 },
    { name: "Sofiya", marks: 78 },
    { name: "Anu", marks: 60 },
    { name: "Priya", marks: 32 },
    { name: "Vikram", marks: 90 },
    { name: "Meena", marks: 50 },
  ];

  return (
    <div className="student-container">
      <h2>Student Marks</h2>
      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <span className={student.marks > 50 ? "highlight-name" : ""}>
              {student.name}
            </span>{" "}
            - {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
