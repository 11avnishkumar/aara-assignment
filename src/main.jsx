import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import Profile from "./components/Profile.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import ProfileContext from "./context/ProfileContext";
const router = createBrowserRouter([
  {
    element: <ProfileContext />,
    children: [
      {
        path: "/",
        element: <App />,

        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/update-profile",
            element: <UpdateProfile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
