import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Its a React Element actually
const heading2 = <h2>I am JSX heading.</h2>;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
// root.render(heading2);
// root.render(<AppLayout />);
