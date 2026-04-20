import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import Cart from "../pages/Cart/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
