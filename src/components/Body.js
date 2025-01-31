import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [listQuote, setListQuote] = useState([]);

  console.log("I am in body");

  const quoteList = useEffect(() => {
    console.log("I am in useEffect");
    // fetchQuotes();
    fetchRestaurantList();
  }, []);

  const fetchQuotes = async () => {
    const data = await fetch("https://dummyjson.com/quotes");
    const json_quotes = await data.json();
    setListQuote(json_quotes);
    // console.log(json_quotes);
  };

  const fetchRestaurantList = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resDataJSON = await resData.json();
    console.log(
      "resDataJSON",
      resDataJSON?.data?.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
    const liveAPIData =
      resDataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // setRestaurantList(resList);
    setRestaurantList(liveAPIData);
  };

  return restaurantList.length === 0 ? (
    <div>
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant"
          />
          <button onClick={() => {}}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantList = restaurantList.filter(
              (item) => item.info.avgRatingString >= 4.4
            );
            setRestaurantList(filteredRestaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
