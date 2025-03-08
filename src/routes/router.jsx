import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { SignIn } from "../components/form/SignIn";
import { SignUp } from "../components/form/SignUp";
import Homepage from "../pages/Homepage";
import { RoomDetails } from "../pages/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/view-room-details/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/rooms/get-room/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
