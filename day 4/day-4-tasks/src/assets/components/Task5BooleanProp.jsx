import React from 'react';

function StudentStatus({ isStudent }) {
  return (
    <p className="student-status">
      5. {isStudent ? "Student" : "Not a Student"}
    </p>
  );
}

export default StudentStatus;
