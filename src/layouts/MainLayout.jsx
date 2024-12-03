import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
