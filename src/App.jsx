import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
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
    <div className="flex flex-col h-screen gap-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
