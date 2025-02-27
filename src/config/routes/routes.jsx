import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../home/home";
import DetaillArticle from "../../component/detailArticle/detaillArticle";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:slug" element={<DetaillArticle />}></Route>
    </Routes>
  );
};

export default RoutePage;
