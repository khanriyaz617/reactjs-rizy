import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
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

    const liveAPIData =
      resDataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(liveAPIData);
    setFilteredRestaurantList(liveAPIData);
  };

  const FetchPromotedRestaurant = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check your internet connection.</h1>;
  }
  return restaurantList.length === 0 ? (
    <div>
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-gray-300  rounded-lg"
            placeholder="Search Restaurant"
            onChange={(e) => {
              console.log(`Search Text- ${e.target.value}`);
              const searchedItems = restaurantList.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });
              // console.log("searchedItems", searchedItems)
              setFilteredRestaurantList(searchedItems);
            }}
          />
        </div>
        <div className=" m-4 p-4 flex items-center">
          <button
            className="filter-btn bg-gray-300 px-4 py-2 rounded-lg"
            onClick={() => {
              const searchedRestaurantList = restaurantList.filter(
                (item) => item.info.avgRatingString >= 4.0
              );
              setFilteredRestaurantList(searchedRestaurantList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
      {
        console.log(filteredRestaurantList)
      }
        {filteredRestaurantList.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            { restaurant.info.avgRating > 4.5 ? (
              <FetchPromotedRestaurant
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
