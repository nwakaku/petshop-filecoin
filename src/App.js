import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";
import Pass from "./components/Pass";
import Second from "./components/Second";

function App() {
  const [dataUrl, setDataUrl] = useState()

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"><Pass setDataUrl={setDataUrl} dataUrl={dataUrl} /></Route> */}
          <Route path="/" element={<Pass setDataUrl={setDataUrl} dataUrl={dataUrl} />} />
          <Route path="videos" element={<Lesson dataUrl={dataUrl} />} />
          <Route path="second" element={<Second dataUrl={dataUrl} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
