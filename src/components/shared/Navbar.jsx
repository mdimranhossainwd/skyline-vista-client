import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav className={`relative bg-[#F3F4F6] ${darkMode ? "dark" : ""}`}>
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-between w-full">
            <Link className="text-2xl font-bold text-[#E21B60]">Skyline</Link>

            {/* Right Side (Mobile toggle and dark mode) */}
            <div className="flex items-center  gap-4 md:ml-auto md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-align-justify"
                  >
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                    <path d="M3 6h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu List */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#F3F4F6]  md:mt-0 md:p-0 md:relative md:flex md:items-center md:ml-auto ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
          >
            {/* On Desktop, menu items aligned to the right */}
            <div className="flex flex-col items-center md:flex-row md:items-center md:gap-6 md:ml-auto md:justify-end">
              <NavLink>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Property</NavLink>
              <NavLink>Contact</NavLink>
              <NavLink>Service</NavLink>
              <NavLink>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
