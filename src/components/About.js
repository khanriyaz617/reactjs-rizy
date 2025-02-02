import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }
  render() {
    console.log("Parent Rendered called");

    return (
      <div className="about">
        {/* <User name="Maya Functional" location="Bombay" /> */}
        {/* <br></br> */}
        <UserClass name="First" location="Punjab" />
        <UserClass name="Second" location="Washington" />
      </div>
    );
  }
}

export default About;
