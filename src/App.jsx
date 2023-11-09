import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notes from "./pages/notes/Notes";
import Videos from "./pages/videos/Videos";
import ContactUs from "./pages/contactus/ContactUs";
import Aboutus from "./pages/aboutus/Aboutus";
import Liveclass from "./pages/liveclass/Liveclass";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="liveclass" element={<Liveclass />} />
          <Route path="notes/detail" element={<Details />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
