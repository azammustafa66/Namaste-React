import Shimmer from "./Shimmer/Shimmer";
import { DISH_URL } from "../utils/url";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import styled from "styled-components";
const RestaurantMenu = () => {
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
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="res-info">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating}</h3>
      </div>
      <div className="dishes">
        <h1>Menu</h1>
        <ul className="list-none">
          {dishes?.map((dish) => (
            <li key={dish.card.info.id}>
              <div className="flex items-center justify-between gap-6 w-[750px] mt-12 pt-4">
                <div className="flex flex-1 flex-col items-start justify-center gap-6">
                  <h2>{dish.card.info.name}</h2>
                  <p>{dish.card.info.description}</p>
                  <h3>Price: ₹{dish.card.info.price / 100}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={DISH_URL + dish.card.info.imageId}
                    alt=""
                    width={100}
                    className="rounded-lg"
                  />
                  <Button>Add to Cart</Button>
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

const Button = styled.button`
  width: auto;
  height: auto;
  background-color: orange;
  color: #fff;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #d5ad80;
  }
`;
