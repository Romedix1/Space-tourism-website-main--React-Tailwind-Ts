import React, { useEffect, useState} from 'react';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Subpages/Home';
import Destination from './Components/Subpages/Destination';
import Crew from './Components/Subpages/Crew';
import Technology from './Components/Subpages/Technology';

function App() {

  // function setHeaderBottomText(){
  //   const headerBottomText = document.querySelector(".header--bottom-text")  as HTMLElement;
  //   headerBottomText.style.visibility = 'visible'
  //   headerBottomText.style.display = 'block'

  //   const bodyBottomText = document.querySelector(".body--bottom-text ")  as HTMLElement;
  //   bodyBottomText.style.visibility = 'visible'
  //   bodyBottomText.style.display = 'block'
  // }
  // function showHeaderBottomText(){
  //   setTimeout(()=> {setHeaderBottomText()},1500)
  // }

  // // function setBodyBottomText(){
  // //   const bodyBottomText = document.querySelector(".body--bottom-text ")  as HTMLElement;
  // //   bodyBottomText.style.visibility = 'visible'
  // //   bodyBottomText.style.display = 'block'
  // // }
  // // function showBodyBottomText(){
  // //   setTimeout(()=> {setBodyBottomText()},3000)
  // // }

  // useEffect(() => {
  //   showHeaderBottomText()
  //   // showBodyBottomText()
  // },[])
  

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
