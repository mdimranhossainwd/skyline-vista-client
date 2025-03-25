import { NavLink } from "react-router-dom";

export const UserMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="my-profile"
      >
        My Profile
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="offer-wishlist"
      >
        Wishlist
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="my-sold-porperties"
      >
        Purchased Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="review"
      >
        My Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="payment-history"
      >
        Payment History
      </NavLink>
    </>
  );
};
