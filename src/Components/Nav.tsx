import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import App from '../App'
import '../Styles/nav.css'




export default function Nav() {

  const [mobileAsideNav, setMobileAsideNav] = useState(false)

  const OpenedNav = () => {
    return (
      <section className='aside--mobile-navigation       overflow-x-hidden fixed w-[67%] h-screen z-20 right-0 top-0'>
          <img src='images/shared/icon-close.svg' alt='close navigation menu icon' className='z-30 absolute w-7 right-6 top-6 cursor-pointer' onClick={() => setMobileAsideNav(false)}/>

          <ul className="mt-24 ml-8 text-TertiaryColor font-Barlow uppercase">
            <li className=" text-xl mb-8 relative cursor-pointer"><NavLink className={({ isActive }) =>
            isActive ? 'nav--mobile-active-link  nav--mobile-link' : 'nav--mobile-link'} to="Space-tourism-website-main--React-Tailwind-Ts/"><span className="font-bold mr-4">00</span> Home</NavLink></li>

            <li className="text-xl mb-8 relative cursor-pointer"><NavLink className={({ isActive }) =>
            isActive ? 'nav--mobile-active-link nav--mobile-link' : ' nav--mobile-link'} to="/Destination"><span className="font-bold mr-4">01</span> Destination</NavLink></li>
          
            <li className=" text-xl mb-8 relative cursor-pointer"><NavLink className={({ isActive }) =>
            isActive ? 'nav--mobile-active-link  nav--mobile-link' : 'nav--mobile-link'} to="/Crew"><span className="font-bold mr-4">02</span> Crew</NavLink></li>

            <li className=" text-xl mb-8 relative cursor-pointer"><NavLink className={({ isActive }) =>
            isActive ? 'nav--mobile-active-link  nav--mobile-link' : 'nav--mobile-link'} to="/Technology"><span className="font-bold mr-4">03</span> Technology</NavLink></li>


          </ul>
      </section>
    )
}

  return (
      
      <nav className='bg-transparent w-full px-7 py-6 sm:px-0 sm:py-0 sm:pl-5 flex justify-between items-center pb-4'>
        <img src='./images/shared/logo.svg' alt='company logo'/>
        
        
        <div className="sm:hidden">
          <img src='./images/shared/icon-hamburger.svg' alt='hamburger icon' className='cursor-pointer w-7' onClick={() => setMobileAsideNav(true)}/>
          {mobileAsideNav && <OpenedNav />}
        </div>

          <section className="hidden sm:block h-full bg-white/[.04] backdrop-blur-2xl sm:pt-8">
            <ul className="ml-4 text-TertiaryColor font-Barlow uppercase flex tracking-widest">
                <li className=" text-xl sm:text-lg mb-8 mx-4 ml-8 cursor-pointer"><NavLink className={({ isActive }) =>
                isActive ? 'nav--desktop-active-link nav--desktop-link' : ' nav--desktop-link'} to="/"><span className="hidden lg:inline font-bold mr-1">00</span> Home</NavLink></li>

                <li className="text-xl sm:text-lg mb-8 mx-4 cursor-pointer"><NavLink className={({ isActive }) =>
                isActive ? 'nav--desktop-active-link nav--desktop-link' : ' nav--desktop-link'} to="/Destination"><span className="hidden lg:inline font-bold mr-1">01</span> Destination</NavLink></li>
              
                <li className=" text-xl sm:text-lg mb-8 mx-4 cursor-pointer"><NavLink className={({ isActive }) =>
                isActive ? 'nav--desktop-active-link nav--desktop-link' : ' nav--desktop-link'} to="/Crew"><span className="hidden lg:inline font-bold mr-1">02</span> Crew</NavLink></li>

                <li className=" text-xl sm:text-lg mb-8 mx-4 mr-8 lg:mr-[22vw] cursor-pointer"><NavLink className={({ isActive }) =>
                isActive ? 'nav--desktop-active-link nav--desktop-link' : ' nav--desktop-link'} to="/Technology"><span className="hidden lg:inline font-bold mr-1">03</span> Technology</NavLink></li>

            </ul>

              <span className="hidden lg:block absolute top-12 -left-[18vw] bg-white/[.1] xl:-left-[24.5vw] xl:w-[26vw] 2xl:-left-[35vw] 2xl:w-[36vw]  w-[20vw] h-[1px]"></span>
          </section>
      </nav>
  )
}
