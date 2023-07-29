import React, { useEffect, useState} from 'react';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Subpages/Home';
import Destination from './Components/Subpages/Destination';
import Crew from './Components/Subpages/Crew';
import Technology from './Components/Subpages/Technology';

function App() {
  

  return (
    <>
      <BrowserRouter basename='/Space-tourism-website-main--React-Tailwind-Ts'>
        <Routes>
          <Route path="/Space-tourism-website-main--React-Tailwind-Ts" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
