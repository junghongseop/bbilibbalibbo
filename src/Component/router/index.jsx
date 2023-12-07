import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../Pages/MainPage/MainPage";
import Login from "../../Pages/Login/login";
import Sign from "../../Pages/Sign/Sign";
import CCTV from "../../Pages/CCTV/cctv";
import Log from "../../Pages/Log/log";
import C from "../../Pages/CCTVlog/cctvlog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/CCTV" element={<CCTV />} />
      <Route path="/Log" element={<Log />} />
      <Route path="/cctvcheck" element={<C />} />
    </Routes>
  );
};

export default Routers;
