import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../component/AddProduct";
import AddUser from "../component/AddUser";
import AllUser from "../component/AllUser";
import WelcomeScreen from "../component/WelcomeScreen";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
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
  {
    path: "/dashboard",
    element: <Dashboard />,

    /* <Dashboard /> */

    children: [
      {
        path: "/dashboard",
        element: <WelcomeScreen></WelcomeScreen>,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser />,

        /* <WelcomeScreen></WelcomeScreen> */
      },
      {
        path: "/dashboard/adduser",
        element: <AddUser />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      // {
      //   path: "/dashboard/allsellers",
      //   element: (
      //     <AdminRoute>
      //       <AllSellers></AllSellers>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/reportedItems",
      //   element: (
      //     <AdminRoute>
      //       <ReportedItems></ReportedItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/adda-products",
      //   element: (
      //     <SellerRoute>
      //       <AddAProduct></AddAProduct>
      //     </SellerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/my-products",
      //   element: (
      //     <SellerRoute>
      //       <MyProducts></MyProducts>
      //     </SellerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/payment/:id",
      //   element: <Payment></Payment>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://mall-of-recondition-laptops-server.vercel.app/orders/${params.id}`
      //     ),
      // },
    ],
  },
]);
export default router;
