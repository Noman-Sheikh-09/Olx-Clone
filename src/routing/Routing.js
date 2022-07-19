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
import Myads from '../pages/myads/Myads'
import Fvrt from '../pages/fvrt/Fvrt'
import Navbar from "../components/navbar/Navbar";
export default function Routing() {
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar style={{minWidth:500}} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/singleproduct/:id" element={<DetailPage />} />
          <Route path="/myads" element={<Myads />} />
          <Route path="/myfvrt" element={<Fvrt />} />

          <Route
            path="/add"
            element={
              <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
                <AddPage />
              </PrivateRouting>
            }
          />
        </Routes>

        <br/>
        <br/>
        <br/>
        <Footer />
      </BrowserRouter>
    </>
  );
}
