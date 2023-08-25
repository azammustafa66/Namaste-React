import "./RestaurantMenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { DISH_URL } from "../../utils/url";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards: dishes } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="res-info">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating}</h3>
      </div>
      <div className="dishes">
        <h1>Menu</h1>
        <ul>
          {dishes?.map((dish) => (
            <li key={dish.card.info.id}>
              <div className="dish-container">
                <div className="dish-info">
                  <h2>{dish.card.info.name}</h2>
                  <p>{dish.card.info.description}</p>
                  <h3>Price: ₹{dish.card.info.price / 100}</h3>
                </div>
                <div className="dish-image">
                  <img src={DISH_URL + dish.card.info.imageId} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
