import React from "react";
import { Routes, Route } from "react-router-dom";
import Navabar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

const App = () => {
  return (
    <div>
      <div className="min-h-screen p-4 bg-white text-grey-600 text-lg">
        <Navabar />
        <div className="w-full bg-neutral-600 h-1 mt-3"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
