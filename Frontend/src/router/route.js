import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

const route = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default route;
