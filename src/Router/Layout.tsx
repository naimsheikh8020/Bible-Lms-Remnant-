import { Outlet } from "react-router";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
