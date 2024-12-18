import React, { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const decrement2 = () => {
    if (count2 > 0) setCount2(count2 - 1);
  };
  const reset2 = () => {
    setCount2(0);
  };

  const totalPrice = count * 500 + count2 * 1000;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Shopping Cart</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#555" }}>Jewellery</h2>
        <p>Quantity: {count}</p>
        <div>
          <button
            onClick={increment}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Increase
          </button>
          <button
            onClick={decrement}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Decrease
          </button>
          <button
            onClick={reset}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
        <p>Amount: Rs. {count * 500}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#555" }}>Scarf</h2>
        <p>Quantity: {count2}</p>
        <div>
          <button
            onClick={increment2}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Increase
          </button>
          <button
            onClick={decrement2}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Decrease
          </button>
          <button
            onClick={reset2}
            style={{
              margin: "5px",
              padding: "5px 10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
        <p>Amount: Rs. {count2 * 1000}</p>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#333",
          padding: "10px",
          borderTop: "1px solid #ddd",
        }}
      >
        Total: Rs. {totalPrice}
      </h2>
    </div>
  );
}

export default Cart;
