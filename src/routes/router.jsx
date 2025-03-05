import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { SignUp } from "../components/form/SignUp";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
