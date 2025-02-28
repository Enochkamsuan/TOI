import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import DetaillArticle from "../../pages/detailArticle/detaillArticle";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:slug" element={<DetaillArticle />}></Route>
    </Routes>
  );
};

export default RoutePage;
