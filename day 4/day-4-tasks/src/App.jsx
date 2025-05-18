import React from "react";
import MessageComponent from "./assets/components/Task2SimpleTextProp";
import UserInfo from "./assets/components/Task3UserInfo";
import PersonInfo from "./assets/components/Task4PersonInfo";
import StudentStatus from "./assets/components/Task5BooleanProp";
import WelcomeUser from "./assets/components/Task6DefaultProps";
import HobbiesList from "./assets/components/Task7ListRendering";
import UserDetails from "./assets/components/Task8ObjectProps";
import ConditionalWelcome from "./assets/components/Task9ConditionalRender";
import ColoredText from "./assets/components/Task10InlineStyle";
import AlertButton from "./assets/components/Task11ButtonEvent";
import CardComponent from "./assets/components/Task12CardComponent";
import ParentComponent from "./assets/components/Task13ParentComponent";
import Profile from "./assets/components/MiniProject1";
import TaskList from "./assets/components/MiniProject2";
import ColorfulText from "./assets/components/MiniProject3";
import ClickCounter from "./assets/components/MiniProject4";

function App() {
  {
    /* Task 8 */
  }
  const user = {
    name: "Preethi",
    email: "preethi@example.com",
    phone: "9876543210",
  };

  {
    /* Task 11 */
  }
  const showAlert = () => {
    alert("11. Button clicked from prop function!");
  };

  {
    /* Mini project 2 */
  }
  const myTasks = ["Learn React", "Write code", "Test app"];

  return (
    <div>
      <MessageComponent message="2. Hello, this is a prop message!" />{/* Task2 */}
      {/* Task3 */}
      <UserInfo name="Alice" age={25} />
      <UserInfo name="Bob" age={30} />
      <hr />
      {/* Task 4 */}
      <PersonInfo name="Preethi" city="Chennai" />
      <PersonInfo name="Sofiya" city="Coimbatore" />
      <hr />
      {/* Task 5 */}
      <StudentStatus isStudent={true} />
      <StudentStatus isStudent={false} />
      <hr />
      {/* Task 6 */}
      <WelcomeUser name="Preethi" />
      <WelcomeUser />
      <hr />
      {/* Task 7 */}
      <HobbiesList hobbies={["Reading", "Traveling", "Gaming"]} />
      <hr />
      {/* Task 8 */}
      <UserDetails user={user} />
      <hr />
      {/* Task 9 */}
      <ConditionalWelcome name="Meena" />
      <ConditionalWelcome />
      <hr />
      {/* Task 10 */}
      <ColoredText color="crimson" />
      <hr />
      {/* Task 11 */}
      <AlertButton handleClick={showAlert} />
      <hr />
      {/* Task 12 */}
      <CardComponent
        title="Reusable Card Component"
        description="This is a simple reusable card created using props."
      />
      <hr />
      {/* Task 13 */}
      <ParentComponent />
      <hr />
      {/* Miniproject 1 */}
      <h2 className="project-heading">Mini Project 1: Profile Card</h2>
      <div className="profile-container">
        <Profile name="Sofiya" age={24} city="Chennai" />
        <Profile />
      </div>
      <hr />
      {/* Mini Project 2 */}
      <h2 className="project-heading">Mini Project 2: Task List</h2>
      <TaskList tasks={myTasks} />
      <hr />
      {/* Mini Project 3 */}
      <ColorfulText text="Hello, World!" color="blue" />
      <hr />
      {/* Mini Project 4 */}
      <h2 className="project-heading">Mini Project 4: Click Counter</h2>
      <ClickCounter
        onClick={() => {
          console.log("Button Clicked");
          alert("Check Console to see the Output!");
        }}
      />
      <hr />
    </div>
  );
}

export default App;
