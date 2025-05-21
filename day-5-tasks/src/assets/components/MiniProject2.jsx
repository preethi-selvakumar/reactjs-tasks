import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Homework", completed: false },
    { id: 2, text: "Buy Groceries", completed: false },
    { id: 3, text: "Walk the Dog", completed: false },
    { id: 4, text: "Read a Book", completed: false },
  ]);

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const containerStyle = {
    background: "linear-gradient(135deg, #fff5f7, #e0f7fa)",
    padding: "40px",
    maxWidth: "500px",
    margin: "3rem auto",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  };

  const taskStyle = (completed) => ({
    backgroundColor: completed ? "#d0f0c0" : "#ffffff",
    textDecoration: completed ? "line-through" : "none",
    color: completed ? "#4caf50" : "#333",
    padding: "15px 20px",
    marginBottom: "15px",
    borderRadius: "10px",
    fontSize: "1.1rem",
    boxShadow: completed
      ? "0 4px 10px rgba(76, 175, 80, 0.3)"
      : "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  });

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  };

  const checkboxStyle = {
    transform: "scale(1.3)",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={taskStyle(task.completed)}>
            <label style={labelStyle}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                style={checkboxStyle}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
