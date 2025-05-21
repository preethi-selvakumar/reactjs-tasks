import React, { useState } from "react";
import NumberList from "./assets/components/Task2NumberList";
import NameList from "./assets/components/Task3NameList";
import UserList from "./assets/components/Task4UserList";
import FruitList from "./assets/components/Task5FruitList";
import WelcomeMessage from "./assets/components/Task6WelcomeMessage";
import LoginMessage from "./assets/components/Task7LoginMessage";
import TaskList from "./assets/components/Task8TaskList";
import ItemList from "./assets/components/Task9ItemList";
import TimeGreeting from "./assets/components/Task10TimeGreeting";
import ClickableList from "./assets/components/Task11ClickableText";
import ToggleList from "./assets/components/Task12ToggleList";
import EvenNumbersList from "./assets/components/Task13EvenNumbers";
import StudentList from "./assets/components/MiniProject1";
import TaskManager from "./assets/components/MiniProject2";
import GreetingMessage from "./assets/components/MiniProject3";
import NumberFilter from "./assets/components/MiniProject4";

function App() {
  const [selectedTask, setSelectedTask] = useState("");

 const renderComponent = () => {
  switch (selectedTask) {
    case "Task2": return <NumberList />;
    case "Task3": return <NameList />;
    case "Task4": return <UserList />;
    case "Task5": return <FruitList />;
    case "Task6": return <WelcomeMessage />;
    case "Task7": return <LoginMessage />;
    case "Task8": return <TaskList />;
    case "Task9": return <ItemList />;
    case "Task10": return <TimeGreeting />;
    case "Task11": return <ClickableList />;
    case "Task12": return <ToggleList />;
    case "Task13": return <EvenNumbersList />;
    case "MiniProject1": return <StudentList />;
    case "MiniProject2": return <TaskManager />;
    case "MiniProject3": return <GreetingMessage />;
    case "MiniProject4": return <NumberFilter />;
    default: return null; 
  }
};


  const dropdownStyle = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    margin: "20px auto",
    display: "block",
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>✅ React Day 5 Tasks</h1>

      <select
        value={selectedTask}
        onChange={(e) => setSelectedTask(e.target.value)}
        style={dropdownStyle}
      >
        <option value="">-- Select a task to display --</option>
        <option value="Task2">2. Number List</option>
        <option value="Task3">3. Name List</option>
        <option value="Task4">4. User List</option>
        <option value="Task5">5. Fruit List</option>
        <option value="Task6">6. Welcome Message</option>
        <option value="Task7">7. Login Message</option>
        <option value="Task8">8. Task List</option>
        <option value="Task9">9. Item List</option>
        <option value="Task10">10. Time Greeting</option>
        <option value="Task11">11. Clickable List</option>
        <option value="Task12">12. Toggle List</option>
        <option value="Task13">13. Filtered Even Numbers</option>
        <option value="MiniProject1">Mini Project 1: Student List</option>
        <option value="MiniProject2">Mini Project 2: Task Manager</option>
        <option value="MiniProject3">Mini Project 3: Greeting Message</option>
        <option value="MiniProject4">Mini Project 4: Number Filter</option>
      </select>

      <div style={{ marginTop: "30px" }}>{renderComponent()}</div>
    </div>
  );
}

export default App;
