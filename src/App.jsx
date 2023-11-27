import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notes from "./pages/notes/Notes";
import Videos from "./pages/videos/Videos";
import ContactUs from "./pages/contactus/ContactUs";
import Aboutus from "./pages/aboutus/Aboutus";
import Liveclass from "./pages/liveclass/Liveclass";
import Details from "./pages/details/Details";
import Payment from "./components/payment/Payment";
import Apply from "./pages/apply/Apply";

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
          <Route path="apply" element={<Apply />} />
          <Route
            path="notes/detail/:selectedClass/:selectedSubject/payment"
            element={<Payment />}
          />
         <Route
            path="notes/detail/:selectedClass/:selectedSubject"
            element={<Details />}
          />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
