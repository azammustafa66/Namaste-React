import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import "./App.css";
/**
 *
 * Header
 *    - Logo
 *    - Nav-items
 * Body
 *    - Search
 *    - Restaurants finder
 *       - IMG
 *       - Name of the Res, Star Rating, Cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 **/

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
