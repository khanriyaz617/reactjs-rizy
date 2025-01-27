import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// Its a React Element actually
const heading2 = <h2>I am JSX heading.</h2>;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
root.render(<AppLayout />);
