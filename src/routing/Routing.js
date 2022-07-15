import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import LandingPage from "../pages/landingPage/LandingPage";
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import { useSelector } from "react-redux/es/exports";
import AddPage from "../pages/addPage/AddPage";
import Footer from "../components/footer/Footer";
import PrivateRouting from './PrivateRouting'
export default function Routing() {
  
  const isUserLoggedIn = useSelector(state=>state.AuthReducer.isUserLoggedIn)
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/add" element={<PrivateRouting isUserLoggedIn={isUserLoggedIn}>
            <AddPage />
          </PrivateRouting>} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
