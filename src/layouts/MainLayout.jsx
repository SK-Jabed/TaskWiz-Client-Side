import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Dynamic Content Starts Here*/}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Dynamic Content Ends Here*/}
      <Footer />
    </div>
  );
};

export default MainLayout;
