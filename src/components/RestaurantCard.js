import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log('resData', props)
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL}

      />
      <h3>{name || "Not Available"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo }</h4>
      {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
      <h4>{deliveryTime} minutes</h4>

    </div>
  );
};

export default RestaurantCard;
