import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },

  {
    path: "/admin",
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: "admin/dashboard",
        element: (
          <div>
            <h2>This is Dashboard</h2>
          </div>
        ),
      },
      {
        path: "admin/user",
        element: (
          <div>
            <h2>This is User</h2>
          </div>
        ),
      },
      {
        path: "admin/order",
        element: (
          <div>
            <h2>This is Order</h2>
          </div>
        ),
      },
      {
        path: "admin/product",
        element: (
          <div>
            <h2>This is Product</h2>
          </div>
        ),
      },
      {
        path: "admin/addproduct",
        element: (
          <div>
            <h2>This is Add Product</h2>
          </div>
        ),
      },
    ],
  },
]);

export default router;
