import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Body.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970483&lng=77.61440759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline!! Please check your status</h1>
    )
  }

  const topRatedRestaurants = () => {
    const filteredList = filteredRestaurant.filter(
      (restaurant) => restaurant.info.avgRating >= 4.2
    );

    setFilteredRestaurants(filteredList);
  };

  const changeHandler = (searchTermInput) => {
    setSearchTerm(searchTermInput);
    searchFilter();
  };

  const searchFilter = () => {
    const filteredByName = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredByCuisine = restaurantList.filter((restaurant) =>
      restaurant.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredRestaurants([...filteredByName, ...filteredByCuisine]);
  };

  const sortLowToHigh = () => {
    const sortedData = [...filteredRestaurant].sort(
      (a, b) =>
        parseInt(a.info.costForTwo.match(/\d+/)[0]) -
        parseInt(b.info.costForTwo.match(/\d+/)[0])
    );

    setFilteredRestaurants(sortedData);
  };

  const sortHighToLow = () => {
    const sortedData = [...filteredRestaurant].sort(
      (a, b) =>
        parseInt(b.info.costForTwo.match(/\d+/)[0]) -
        parseInt(a.info.costForTwo.match(/\d+/)[0])
    );

    setFilteredRestaurants(sortedData);
  };

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            name=""
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => changeHandler(event.target.value)}
          />
        </div>
        <div>
          <button onClick={topRatedRestaurants}>Top rated</button>
          <button onClick={sortLowToHigh}>Sort Low to High</button>
          <button onClick={sortHighToLow}>Sort High to Low</button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="link-style"
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
