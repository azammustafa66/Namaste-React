import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";

// const storedCart = JSON.parse(localStorage.getItem("cart"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
