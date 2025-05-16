import React from "react";
import "./App.css";

function App() {
  // 2. Simple JSX Element: Create a JSX element that displays "Hello, React!".
  const element1 = <h1>2. Hello, React!</h1>;

  // 3. Embedding Expressions: Write JSX that displays the result of 5 + 5.
  const element2 = <h2>3. The result is {5 + 5}</h2>;

  // 4. Using Variables in JSX: Create a variable with your name and display it in JSX.
  const myName = "Preethi";
  const element3 = <p>4. Hello, {myName}!</p>;

  // 5. Attributes in JSX: Add the className attribute to a JSX element with a CSS class.
  const element4 = (
    <h1 className="heading">5. Styled with className attribute in JSX</h1>
  );

  // 6. 6. Inline Styling: Apply inline styles to a heading using the style attribute in JSX.
  const element5 = (
    <h1 style={{ color: "green", fontSize: "35px", textAlign: "center" }}>
      6. Inline Styled Heading
    </h1>
  );

  // 7. Class-based Styling: Create an external CSS file and apply the styles using className.
  const element6 = (
    <h1 className="subheading">
      7. Class-based Styled Heading from External CSS
    </h1>
  );

  // 8. ReactDOM.render(): This task is completed in index.js as ReactDOM.render() is used there.
  const element7 = (
    <h2>
      8. ReactDOM.render() is used in <code>index.js</code> to render the App
      component.
    </h2>
  );

  // 9. Self-closing Tags: Use a self-closing tag like <img /> inside JSX.
  const element8 = (
    <img src="https://via.placeholder.com/150" alt="Sample Image" />
  );

  // 10. JSX Comments: Add comments inside JSX code.

  // 11. JSX with Functions: Write a function that returns a JSX element and render it.
  function renderGreeting() {
    return <h2>11. JSX with Functions</h2>;
  }

  // 12. Multiple Elements in JSX: Use a fragment or div to render multiple JSX elements.
  function renderUserProfile() {
    return (
      <>
        <h2>12. User Profile</h2>
        <p>Welcome to your profile page, Preethi!</p>
        <button>Logout</button>
      </>
    );
  }

  // 13. Conditional Rendering with JSX: Display a message only if a variable is true
  function UserGreeting() {
    const isLoggedIn = false;
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>;
  }

  return (
    <div>
      {element1}
      {element2}
      {element3}
      {element4}
      {element5}
      {element6}
      {element7}
      {element8}
      {/* 10. This is a comment inside JSX */}
      {renderGreeting()}
      {renderUserProfile()}
      {UserGreeting()}
    </div>
  );
}

export default App;
