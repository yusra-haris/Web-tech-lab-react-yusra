import React, { useState } from "react";

function Calculator(params) {
  const [num, setNum] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addition = () => {
    setResult(Number(num) + Number(num2));
  };
  const subtraction = () => {
    setResult(Number(num) - Number(num2));
  };
  const multiplication = () => {
    setResult(Number(num) * Number(num2));
  };
  const division = () => {
    setResult(Number(num) / Number(num2));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Simple Calculator</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <button
          onClick={addition}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
        <button
          onClick={subtraction}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Subtract
        </button>
        <button
          onClick={multiplication}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Multiply
        </button>
        <button
          onClick={division}
          style={{
            padding: "10px",
            backgroundColor: "#9C27B0",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Divide
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Result is: {result}
      </p>
    </div>
  );
}

export default Calculator;

