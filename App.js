import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "I am importig from react node_modules not from CDN"
);

// Its a React Element actually
const heading2 = <h2>I am JSX heading.</h2>;

const Title = () => {
  return <h2>I am Maulana Riyaz</h2>;
};
const nationality = "Indian"; 

const HeadingComponent = () => {
  return(
  <div className="containers">
    { Title()}
    <Title />
    <Title></Title>
    <h3>I am an {nationality}</h3>
    <h2>{ 300 + 600 }</h2>

    <h1 className="headingComponent">
      I am heading from Functional component.
    </h1>
  </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
root.render(<HeadingComponent />);
