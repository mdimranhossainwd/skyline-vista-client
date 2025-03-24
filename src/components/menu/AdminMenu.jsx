import { NavLink } from "react-router-dom";

export const AdminMenu = () => {
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
        to="manage-properties"
      >
        Manage Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="all-users"
      >
        Manage Users
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="all-reviews"
      >
        Manage Reviews
      </NavLink>
    </>
  );
};
