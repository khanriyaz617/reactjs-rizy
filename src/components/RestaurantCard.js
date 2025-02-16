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
    <div className="res-card m-4 p-4 w-[250px] h-[410px] rounded-lg hover:bg-gray-300 border border-solid border-gray-500">
      <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL} />
      <h3 className="font-bold py-4 text-lg">{name || "Not Available"}</h3>
      <h4 className="font-semibold py-1">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold py-1">{avgRating} stars</h4>
      <h4 className="font-semibold py-1">{costForTwo}</h4>
      {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
      <h4 className="font-semibold py-1">{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-semibold absolute bg-black text-white m-1 p-1 rounded-sm">
          Best Sellers
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
