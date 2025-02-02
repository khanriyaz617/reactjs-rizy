import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(400);
  return (
    <div className="user-card">
      <h3>Count :{count}</h3>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Contact : khanriyaz627@gmail.com</h3>
    </div>
  );
};

export default User;
