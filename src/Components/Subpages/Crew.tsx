import React, { useState } from "react";
import Nav from '../Nav'
import '../../Styles/crew.css'
import CrewData from '../CrewData'
import { AnimatePresence,  motion } from 'framer-motion'


export default function Crew() {
    const [activeCrew, setActiveCrew] = useState(0)
    const [direction, setDirection] = useState(0)

    const variants = {
        initial: (direction: any) => {
            return {
                x: direction > 0 ? 200 : -200,
                opacity: 0,       
            }

        },
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: any) => {
            return {
                x: direction > 0 ? -200 : 200,
                opacity: 0,    
            }

        },
    }

    function setCurrentCrew(item: any) {
        if (activeCrew > item.id-1)
        {
            setDirection(-1)
        } else {
            setDirection(1)
        }
        setActiveCrew(item.id-1)
    }

    const CrewListElements = CrewData.map(item => {
        return(
            <li onClick={() => setCurrentCrew(item)} className= {`w-4 h-4 mx-[10px] rounded-2xl hover:bg-gray-500 duration-300 cursor-pointer ${item.id===activeCrew+1 ? "bg-white" : " bg-neutral-700"}`}></li>
        )
    })

    return (
        <div className="crew--container">
            <div className="bg-black/[.35] w-screen min-h-[100vh]">
                <Nav />

                <main className="grid place-items-center mt-3">
                    <h1 className="text-TertiaryColor uppercase font-Barlow text-xl tracking-widest	sm:w-11/12 sm:mt-7 lg:w-10/12 xl:w-11/12 xl:ml-16 2xl:w-10/12 2xl:ml-32"><span className="font-bold opacity-30 mr-4">02</span>Meet your crew</h1>
                
                    <section className="absolute mt-6 bottom-0  w-11/12 relative sm:absolute left-0  sm:h-[80.4vh] sm:w-screen lg:right-0 ">
                        <AnimatePresence initial={false} custom={direction}>
                            <div className="grid place-items-center  sm:absolute sm:w-screen sm:bottom-0 lg:right-4 lg:w-[500px]">
                                <motion.img variants={variants}
                                animate="animate" 
                                initial="initial" 
                                exit="exit" 
                                custom={direction} 
                                key={CrewData[activeCrew].id} 
                                src={`${CrewData[activeCrew].images.webp}`} alt="crew image" className="w-48 lg:w-[450px] sm:w-[220px] relative"/>
                            </div>

                            <div className="crew--planet-image-divider sm:hidden"></div>

                            <div className=" grid place-items-center sm:absolute sm:bottom-[370px] sm:w-screen lg:place-items-start lg:ml-[75px] lg:w-5/12 lg:bottom-[250px] 2xl:bottom-[300px] 2xl:ml-[190px]">
                                <ul className="flex mt-8">
                                    {CrewListElements}
                                </ul>
                            </div>
                        </AnimatePresence>
                    </section>
                        
                    <section className="mt-8 w-screen relative">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.article className="grid place-items-center lg:place-items-start lg:ml-[85px] absolute top-0  sm:w-screen lg:w-3/4 2xl:ml-48" 
                                variants={variants}
                                animate="animate" 
                                initial="initial" 
                                exit="exit" 
                                custom={direction} 
                                key={CrewData[activeCrew].id}>
                                    
                                    <h2 className="font-Bellefair uppercase text-TertiaryColor opacity-50 text-lg sm:text-2xl lg:text-3xl">{CrewData[activeCrew].role}</h2>

                                    <h3 className="text-TertiaryColor font-Bellefair uppercase text-2xl mt-1 mb-6 sm:text-4xl sm:mt-3 lg:text-5xl">{CrewData[activeCrew].name}</h3>

                                    <p className="text-center lg:text-left text-SecondaryColor w-11/12 text-xl font-Barlow sm:w-8/12 lg:text-2xl lg:w-1/2">{CrewData[activeCrew].bio}</p>                                
                                </motion.article>
                            </AnimatePresence>
                    </section>

                </main>
            </div>
        </div>
    )
}