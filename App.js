import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "I am importig from react node_modules not from CDN"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
