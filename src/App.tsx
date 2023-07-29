import React, { useEffect, useState} from 'react';
import { Route, Link, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Nav from './Components/Nav'
import Home from './Components/Subpages/Home';
import Destination from './Components/Subpages/Destination';
import Crew from './Components/Subpages/Crew';
import Technology from './Components/Subpages/Technology';

function App() {
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
