import styled from "styled-components";
import { IMG_URL } from "../utils/url";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col flex-1 gap-6 items-start px-3">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b border-gray-400 w-full flex flex-col items-stretch"
        >
          <div className="flex items-start justify-between">
            <p>
              {item?.card?.info?.name}
              <span className="text-left block">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </p>
            <div>
              <img
                src={IMG_URL + item?.card?.info?.imageId}
                alt="food-image"
                width={118}
                height={96}
                className="relative rounded-lg"
              />
              <Button>Add to Cart</Button>
            </div>
          </div>
          <p className="text-left text-sm mb-10 text-gray-600 w-[70%]">
            {item?.card?.info?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

const Button = styled.button`
  position: absolute;
  width: 95px;
  height: 45px;
  background-color: #f0f0f0;
  color: #0dce0d;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  right: 27.75%;

  &:hover {
    background-color: #d5ad80;
  }
`;
