import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
// import Blog from "../pages/Blog";
// import Contact from "../pages/Contact";
// import FreeDemo from "../pages/FreeDemo";
// import Home from "../pages/Home";
// import Services from "../pages/Services";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/blog",
      //   element: <Blog />,
      // },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      // {
      //   path: "/free-demo",
      //   element: <FreeDemo />,
      // },
    ],
  },
]);
export default router;
