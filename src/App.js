import React from "react";
import Home from "./pages/Home";
import Images from "./pages/Images";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleImdeta from "./pages/SingleImdeta";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Images" element={<Images />} />
          <Route path="/:id" element={<SingleImdeta/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
