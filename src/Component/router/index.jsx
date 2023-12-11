import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Mainpage/Mainpage";
import Login from "../../pages/Login/login";
import Sign from "../../pages/Sign/Sign";
import Log from "../../pages/Log/log";
import C from "../../pages/CCTVlog/cctvlog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Log" element={<Log />} />
      <Route path="/CCTVcheck" element={<C />} />
    </Routes>
  );
};

export default Routers;
