import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../Pages/MainPage/Mainpage";
import Login from "../../Pages/Login/login";
import Sign from "../../Pages/Sign/Sign";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign" element={<Sign />} />
    </Routes>
  );
};

export default Routers;
