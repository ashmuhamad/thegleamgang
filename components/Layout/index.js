import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Template = ({ children }) => {
  return (
    <div className="bg-pink-200 h-screen w-screen text-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
