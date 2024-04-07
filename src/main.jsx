import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { About, Contact, Project } from "./components";
import HomePage from "./HomePage.jsx";
import "./index.css";
import NotFound from "./components/ui/NotFound.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        errorElement: <div>Not Found</div>,
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
