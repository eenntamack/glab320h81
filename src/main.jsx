import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ← updated import
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Correct React 18 rendering
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);