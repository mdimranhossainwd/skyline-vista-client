import { NavLink } from "react-router-dom";

export const AgentMenu = () => {
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
        Add Property
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        My Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        Sold Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="profile"
      >
        Requested Properties
      </NavLink>
    </>
  );
};
