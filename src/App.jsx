import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";

export const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
