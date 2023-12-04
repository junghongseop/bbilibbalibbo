import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../Pages/MainPage/Mainpage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default Routers;
