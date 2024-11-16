import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/components/store.js";
import "./index.css";
import App1 from "./App1.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  </StrictMode>
);
