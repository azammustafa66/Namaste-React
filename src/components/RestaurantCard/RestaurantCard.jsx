import React from "react";
import "./RestaurantCard.css";
import { IMG_URL } from "../../utils/url";

const MAX_CUISINES_LENGTH = 25;

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="restaurant-cards">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="res-image"
        className="res-img"
      />
      <div className="name">
        <h3>{name}</h3>
      </div>
      <div className="cuisines">
        <h4 title={cuisines}>{cuisines.join(", ")}</h4>
      </div>
      <div className="rating">
        <h4>Rating: {avgRating}</h4>
      </div>
      <div className="cost">
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
