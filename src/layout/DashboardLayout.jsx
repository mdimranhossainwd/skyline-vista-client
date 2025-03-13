import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Profile</NavLink>
      <NavLink>Setting</NavLink>
      <NavLink>Wishlist</NavLink>
      <NavLink>Payment</NavLink>
      <NavLink>Home</NavLink>
    </>
  );

  return (
    <div className="md:flex min-h-screen bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 bg-white p-5 ">
        <nav>
          <h2 className="text-xl font-bold mb-5">Dashboard</h2>
          <div className="grid grid-cols-1 py-2 gap-2">{menuItems}</div>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full bg-white p-4 flex justify-between items-center border-b-[1px] border-[#DDDDDD]">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify"
            >
              <path d="M3 12h18" />
              <path d="M3 18h18" />
              <path d="M3 6h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 px-5 md:px-0 left-0 w-full bg-white shadow-sm">
          <div className="grid grid-cols-1 py-2 gap-2">{menuItems}</div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
