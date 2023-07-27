import React from "react";
import Nav from '../Nav'
import '../../Styles/home.css'

export default function Home() {
    return (
      <div className="home--container">
           
        <Nav />

        <main className='grid place-items-center pb-4 sm:mt-16 lg:flex'>
          <div className="lg:ml-16 lg:mt-36  lg:w-8/12 grid place-items-center lg:block">
            <header className='text-center  overflow-y-hidden lg:text-left'>
              <h1 className='uppercase text-TertiaryColor mt-6 overflow-y-hidden'>
                  <p className='header--top-text   relative  tracking-widest text-md font-Barlow text-SecondaryColor sm:text-xl'>So, you want to travel to</p>
                  <div className='overflow-y-hidden'>
                      <p className='header--bottom-text  font-Bellefair text-7xl mt-6 sm:text-9xl'  style={{display: 'block'}}>Space</p>
                  </div>
              </h1>
            </header>

            <div className='w-[91%] overflow-y-hidden pb-4 sm:w-8/12 lg:w-12/12'>
              <p className='body--bottom-text   relative text-center text-SecondaryColor text-[14px]  mt-8 sm:text-base lg:text-left'>Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!</p>
            </div>
          </div>

          <button className='home--bottom-button     cursor-pointer duration-300 bg-TertiaryColor uppercase font-Bellefair text-2xl px-7 py-16 rounded-full mt-48 sm:mt-20 lg:mt-80 lg:text-3xl lg:px-12 lg:py-24'>Explore</button>
        </main>
        </div>
    )
}