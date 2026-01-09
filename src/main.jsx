
  // import { createRoot } from "react-dom/client";
  // import App from "./App.tsx";
  // import "./index.css";

  // createRoot(document.getElementById("root")!).render(<App />);
  

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(<App />);
