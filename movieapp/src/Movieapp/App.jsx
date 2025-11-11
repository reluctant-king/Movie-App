import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import NewArrivals from "./New Arrivals";
import ComingSoon from "./Coming Soon";
import TopRated from "./Top Rated";
import Genres from "./Genres";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
