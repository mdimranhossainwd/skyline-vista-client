import { NavLink } from "react-router-dom";

export const UserMenu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        My Profile
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        Wishlist
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        Purchased Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        My Reviews
      </NavLink>
    </>
  );
};
