import { Outlet } from "react-router";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 md:px-8 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
