import styled from "styled-components";
import PropTypes from "prop-types";

import { IMG_URL } from "../utils/url";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <StyledDiv>
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="res-image"
        className="rounded-lg w-72 h-44"
      />
      <div className="max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
        <h3 className="font-bold">{name}</h3>
      </div>
      <div className="max-w-full whitespace-nowrap overflow-hidden text-ellipsis my-2">
        <h4 title={cuisines}>{cuisines.join(", ")}</h4>
      </div>
      <div className="rating">
        <h4>Rating: {avgRating}</h4>
      </div>
      <div className="cost">
        <h4>{costForTwo}</h4>
      </div>
    </StyledDiv>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  cloudinaryImageId: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  costForTwo: PropTypes.string.isRequired,
};

export default RestaurantCard;

export const isPromoted = (RestaurantCard) => {
  (props) => (
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
};

const StyledDiv = styled.div`
  width: 273px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  transition: all 0.2s ease;
  gap: 5px;

  &:hover {
    transform: scale(0.9);
    transition: all 0.2 ease-in;
  }
`;
