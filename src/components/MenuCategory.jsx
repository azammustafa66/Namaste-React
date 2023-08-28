import { useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

const MenuCategory = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(data);
  return (
    <Wrapper className="border-b-[10px] border-gray-300">
      <div
        className="flex items-start justify-between"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <p className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </p>
        <p>{isExpanded ? "⬆️" : "⬇️"}</p>
      </div>
      <div>{isExpanded && <ItemList items={data?.itemCards} />}</div>
    </Wrapper>
  );
};

export default MenuCategory;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
  margin: 1.75rem auto;
  padding: 20px;
  cursor: pointer;
`;
