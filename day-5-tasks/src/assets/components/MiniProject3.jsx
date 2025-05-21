import React from "react";

const GreetingMessage = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #fff6e0, #ffe9b5)",
          padding: "30px",
          borderRadius: "20px",
          color: "#7f5f00",
          fontSize: "2rem",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(255, 193, 7, 0.2)",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        🌅 Rise and Shine! Good Morning!
      </div>
    );
  } else if (hour < 18) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #ffd3a5, #fd6585)",
          padding: "30px",
          borderRadius: "20px",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(0, 188, 212, 0.2)",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        🌞 Hope You're Having a Bright Afternoon!
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #d3cce3, #e9e4f0)",
          padding: "30px",
          borderRadius: "20px",
          color: "#4a148c",
          fontSize: "2rem",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(103, 58, 183, 0.2)",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        🌙 Unwind Time... Good Evening!
      </div>
    );
  }
};

export default GreetingMessage;
