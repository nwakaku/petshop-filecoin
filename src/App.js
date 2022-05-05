import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";
import Pass from "./components/Pass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pass />} />
          <Route path="videos" element={<Lesson />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
