import { NavLink } from "react-router-dom";

export const AgentMenu = () => {
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
        to="add-properties"
      >
        Add Property
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="my-own-properties"
      >
        My Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="my-sold-porperties"
      >
        Sold Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#E21B60]" : "")}
        to="brought-property-request"
      >
        Requested Properties
      </NavLink>
    </>
  );
};
