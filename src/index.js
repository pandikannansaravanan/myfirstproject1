import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Process from "./process";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Process />
  </StrictMode>
);
