import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import LandingPage from "../pages/landingPage/LandingPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { useSelector } from "react-redux/es/exports";
import AddPage from "../pages/addPage/AddPage";
import Footer from "../components/footer/Footer";
import PrivateRouting from "./PrivateRouting";
import DetailPage from "../pages/detailPage/DetailPage";
import Myads from "../pages/myads/Myads";
import Fvrt from "../pages/fvrt/Fvrt";
import Navbar from "../components/navbar/Navbar";
import Bike from "../components/categories/Bike";
import TvMedia from "../components/categories/TvMedia";
import Tablet from "../components/categories/Tablet";
import Vehicles from "../components/categories/Vehicles";
import Electronics from "../components/categories/Electronics";
import House from "../components/categories/House";
import Watch from "../components/categories/Watch";
import Phone from "../components/categories/Phone";
import Computer from "../components/categories/Computer";
import Animals from "../components/categories/Animals";
export default function Routing() {
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar style={{ minWidth: 500 }} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/singleproduct/:id" element={<DetailPage />} />
          <Route path="/myads" element={<Myads />} />
          <Route path="/myfvrt" element={<Fvrt />} />
          <Route path="/bike" element={<Bike />} />
          <Route path="/tv-media" element={<TvMedia />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/house-plot" element={<House />} />
          <Route path="/Phone" element={<Phone />} />
          <Route path="/computer-accessories" element={<Computer />} />
          <Route path="/animals" element={<Animals />} />
          <Route
            path="/add"
            element={
              <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
                <AddPage />
              </PrivateRouting>
            }
          />
        </Routes>

        <br />
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </>
  );
}
