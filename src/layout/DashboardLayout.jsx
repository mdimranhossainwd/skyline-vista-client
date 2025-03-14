import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AgentMenu } from "../components/menu/AgentMenu";
import { UserMenu } from "../components/menu/UserMenu";
import { useRole } from "../hooks/useRole";

export const DashboardLayout = () => {
  const [role] = useRole();
  console.log(role);

  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <>
      {role === "user" && <UserMenu />}
      {role === "agent" && <AgentMenu />}
      {role === "admin" && <AdminMenu />}
    </>
  );

  return (
    <div className="md:flex min-h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-60 bg-white p-5 ">
        <nav>
          <div>
            <h2 className="text-2xl mt-3 font-ubuntu font-semibold text-[#E21B60] ">
              Skyline
            </h2>
          </div>
          <div className="grid grid-cols-1 py-2 gap-2 mt-8">{menuItems}</div>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full bg-white p-4 flex justify-between items-center border-b-[1px] border-[#DDDDDD]">
        <h2 className="text-2xl font-ubuntu font-semibold text-[#E21B60] ">
          Skyline
        </h2>
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
