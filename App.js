import React from "react";
import ReactDOM from "react-dom/client";

// Its a React Element actually
const heading2 = <h2>I am JSX heading.</h2>;

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName, star }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
      />
      <h3>{resName || "Not Avalivle"}</h3>
      <h4>North Indian, Biryani, Tandoor </h4>
      <h4>{star || 0} Stars</h4>
      <h4>25 Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="KFC" star="4.3" />
        <RestaurantCard resName="Hotel Taj" star="2.4" />
        <RestaurantCard resName="Hotel Oberoi" star="3.3" />
        <RestaurantCard />
        {/* <RestaurantCard /> */}
        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};

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
