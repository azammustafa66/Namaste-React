import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import "./Header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const [login, setLogin] = useState(true);
  const onlineStatus = useOnlineStatus();

  // If dependency array is not provided then useEffect will be called on every render
  // If dependency array is empty then useEffect will be called only once
  // If dependency array is not empty then useEffect will be called only when state of that component is changed
  useEffect(() => {}, [btnState]);

  const handleClick = () => {
    if (login) {
      setBtnState("Logout");
    } else {
      setBtnState("Login");
    }

    setLogin(!login);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <button className="login" onClick={handleClick}>
              {btnState}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
