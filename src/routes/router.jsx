import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { ReviewForm } from "../components/form/ReviewForm";
import { SignIn } from "../components/form/SignIn";
import { SignUp } from "../components/form/SignUp";
import { UpdatePropertyForm } from "../components/form/UpdatePropertyForm";
import { DashboardLayout } from "../layout/DashboardLayout";
import { AddPropertiesPage } from "../pages/dashboard/AddPropertiesPage";
import { AllReviewsPage } from "../pages/dashboard/AllReviewsPage";
import { AllUsersPage } from "../pages/dashboard/AllUsersPage";
import { DashboardOverviewPage } from "../pages/dashboard/DashboardOverviewPage";
import { ManagePropertiesPage } from "../pages/dashboard/ManagePropertiesPage";
import { MyOwnPropertyPage } from "../pages/dashboard/MyOwnPropertyPage";
import { PaymentHistoryPage } from "../pages/dashboard/PaymentHistoryPage";
import { ProfilePage } from "../pages/dashboard/ProfilePage";
import { RequestPropertyPage } from "../pages/dashboard/RequestPropertyPage";
import { SoldPropertyPage } from "../pages/dashboard/SoldPropertyPage";
import { WishlistPage } from "../pages/dashboard/WishlistPage";
import Homepage from "../pages/Homepage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RoomDetails } from "../pages/RoomDetails";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/view-room-details/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://skyline-vista-server.vercel.app/api/rooms/get-room/${params?.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardOverviewPage />,
      },
      {
        path: "review",
        element: <ReviewForm />,
      },
      {
        path: "my-profile",
        element: <ProfilePage />,
      },
      {
        path: "offer-wishlist",
        element: <WishlistPage />,
      },
      {
        path: "payment-history",
        element: <PaymentHistoryPage />,
      },
      // AGENT ROUTES HERE
      {
        path: "add-properties",
        element: <AddPropertiesPage />,
      },
      {
        path: "my-own-properties",
        element: <MyOwnPropertyPage />,
      },
      {
        path: "my-sold-porperties",
        element: <SoldPropertyPage />,
      },
      {
        path: "brought-property-request",
        element: <RequestPropertyPage />,
      },
      {
        path: "update-properties/:id",
        element: <UpdatePropertyForm />,
        loader: ({ params }) =>
          fetch(
            `https://skyline-vista-server.vercel.app/api/rooms/get-room/${params.id}`
          ),
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
      {
        path: "manage-properties",
        element: <ManagePropertiesPage />,
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
