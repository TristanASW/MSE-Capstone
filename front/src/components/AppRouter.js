import React from "react";
import { Routes, Route } from "react-router-dom";
import Front from "../pages/Front";
import Grid from "../pages/Grid";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buyer" element={<Buyer />} />
      <Route path="/seller" element={<Seller />} />
    </Routes>
  );
};

export default AppRouter;
