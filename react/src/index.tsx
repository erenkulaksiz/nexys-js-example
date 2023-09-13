import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./App";
import { nexys } from "./nexys";

nexys.init();

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
