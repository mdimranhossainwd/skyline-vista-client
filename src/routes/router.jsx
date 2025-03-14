import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { ReviewForm } from "../components/form/ReviewForm";
import { SignIn } from "../components/form/SignIn";
import { SignUp } from "../components/form/SignUp";
import { DashboardLayout } from "../layout/DashboardLayout";
import Homepage from "../pages/Homepage";
import { RoomDetails } from "../pages/RoomDetails";
import { AllReviewsPage } from "../pages/dashboard/AllReviewsPage";
import { AllUsersPage } from "../pages/dashboard/AllUsersPage";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "review",
        element: <ReviewForm />,
      },

      // ADMIN ROUTES HERE
      {
        path: "all-users",
        element: <AllUsersPage />,
      },
      {
        path: "all-reviews",
        element: <AllReviewsPage />,
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
