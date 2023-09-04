import { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactUs from "./components/Routes/ContactUs";
import Error from "./components/Routes/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer/Shimmer";
import About from "./components/Routes/About";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
