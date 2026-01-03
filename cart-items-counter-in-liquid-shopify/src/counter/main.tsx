import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./Counter.tsx";

createRoot(document.getElementById("counter")!).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
