import React from "react";

const tasks = [
  { id: 1, name: "Complete assignment", completed: true },
  { id: 2, name: "Buy groceries", completed: false },
  { id: 3, name: "Read a book", completed: true },
  { id: 4, name: "Clean the room", completed: false },
];

const TaskList = () => {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "task completed" : "task"}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
