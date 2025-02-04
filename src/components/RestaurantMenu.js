import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState([]);

  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  const fetchMenuDetails = async () => {
    console.log("Entry in useEffect");

    const fetchMenu = await fetch(MENU_URL);

    const jsonRestData = await fetchMenu.json();
    setRestInfo(jsonRestData);
  };
  
  const { id, name, areaName, avgRating, costForTwo, cuisines } =
    restInfo?.data?.cards[2]?.card?.card?.info || {};

  return restInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>
        Menu: {name} {id}
      </h1>
      <ul>
        <li>
          <h3>{areaName}</h3>
          <h3>{avgRating}</h3>
          <h3>{costForTwo}</h3>
          <h3>{cuisines.join(",") || "Not Available"}</h3>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
