import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../assets/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnState, setBtnState] = useState("Login");
  const [login, setLogin] = useState(true);
  const onlineStatus = useOnlineStatus();

  // If dependency array is not provided then useEffect will be called on every render
  // If dependency array is empty then useEffect will be called only once
  // If dependency array is not empty then useEffect will be called only when state of that component is changed
  useEffect(() => {}, [btnState]);

  const handleClick = () => {
    login ? setBtnState("Logout") : setBtnState("Login");

    setLogin(!login);
  };

  return (
    <nav className="flex items-center justify-between border-black">
      <div>
        <Link to={"/"}>
          <img src={logo} width={200} alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex items-center list-none font-base pr-4 cursor-pointer">
          <ListItem>Online Status {onlineStatus ? "🟢" : "🔴"}</ListItem>
          <ListItem>
            <Link to={"/"}>Home</Link>
          </ListItem>
          <ListItem>
            <Link to={"/about"}>About Us</Link>
          </ListItem>
          <ListItem>
            <Link to={"/contact-us"}>Contact us</Link>
          </ListItem>
          <ListItem>
            <Link to={"/cart"}>
              <AiOutlineShoppingCart />
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/grocery"}>Grocery</Link>
          </ListItem>
          <ListItem>
            <button
              className="text-white rounded-md text-center w-14 bg-orange-300"
              onClick={handleClick}
            >
              {btnState}
            </button>
          </ListItem>
          <ListItem>{loggedInUser}</ListItem>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

const ListItem = styled.li`
  padding: 20px;
  margin-left: 10px;
`;
