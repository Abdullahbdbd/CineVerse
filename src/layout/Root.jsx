import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
