import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Optional: simple global styles
const styles = `
  body {
    font-family: Arial, sans-serif;
    background-color: #fafafa;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #007bff;
  }
  button {
    cursor: pointer;
    background-color: #007bff;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 4px;
  }
  input, textarea {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
