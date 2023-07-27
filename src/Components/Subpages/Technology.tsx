import React, { useState } from "react";
import Nav from '../Nav'
import '../../Styles/technology.css'
import TechnologyData from '../TechnologyData'
import { AnimatePresence,  motion } from 'framer-motion'

export default function Technology() {

    const [activeTechnology, setActiveTechnology] = useState(0)
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

    function setCurrentTechnology(item: any) {
        if (activeTechnology > item.id-1)
        {
            setDirection(-1)
        } else {
            setDirection(1)
        }
        setActiveTechnology(item.id-1)
    }

    const TechnologyListElements = TechnologyData.map(item => {
        return(
            <li onClick={() => setCurrentTechnology(item)} className= {`px-3 py-1 sm:px-4 sm:py-2 sm:text-xl mx-[10px] lg:my-6 rounded-full hover:bg-zinc-400 duration-300 border-2 border-solid border-white cursor-pointer ${item.id===activeTechnology+1 ? "bg-white text-black " : " bg-transparent text-TertiaryColor "}`}>{item.id}</li>
        )
    })

    return (
        <div className="technology--container">
            <Nav />
        
            <main className="grid place-items-center mt-3  overflow-y-hidden">
                <h1 className="text-TertiaryColor uppercase font-Barlow text-xl tracking-widest sm:mt-7 sm:w-11/12 sm:mb-6 lg:w-10/12 xl:w-11/12 xl:ml-16 2xl:w-10/12 2xl:ml-32"><span className="font-bold opacity-30 mr-4">03</span>Space Launch 101</h1>
            
                <div className="grid place-items-center lg:flex lg:flex-row-reverse  lg:w-screen">
                    <section className="absolute mt-6 top-0 w-screen relative top-0 left-0 lg:right-0 overflow-x-hidden lg:w-1/2">
                            <AnimatePresence initial={false} custom={direction}>
                                <div className="grid place-items-center lg:place-items-end">
                                
                                <motion.img variants={variants}
                                    animate="animate" 
                                    initial="initial" 
                                    exit="exit" 
                                    custom={direction} 
                                    key={TechnologyData[activeTechnology].id} 
                                    src={`${TechnologyData[activeTechnology].images.landscape}`} alt="Technology image" className="w-full relative block lg:hidden"/>

                                </div>

                                <div className="grid place-items-center lg:place-items-end">
                                
                                <motion.img variants={variants}
                                    animate="animate" 
                                    initial="initial" 
                                    exit="exit" 
                                    custom={direction} 
                                    key={TechnologyData[activeTechnology].id} 
                                    src={`${TechnologyData[activeTechnology].images.portrait}`} alt="Technology image" className="w-full lg:w-[450px] relative hidden lg:block 2xl:w-[550px]"/>

                                </div>


                                <div className="Technology--planet-image-divider"></div>

                                <div className=" grid place-items-center lg:absolute ">
                                    <ul className="flex mt-8 lg:hidden">
                                        {TechnologyListElements}
                                    </ul>
                                </div>
                            </AnimatePresence>
                            
                            
                            
                            </section>

                        <section className="w-screen grid place-items-center lg:place-items-start  lg:w-1/2 lg:ml-12">

                                    <ul className="hidden lg:block lg:absolute lg:left-[50px] z-10 2xl:left-[90px]">
                                        {TechnologyListElements}
                                    </ul>
                            <h2 className="uppercase text-SecondaryColor font-Barlow text-xl mt-6 sm:tracking-widest sm:mt-7 lg:ml-[9vw]">The terminology...</h2>

                            <AnimatePresence initial={false} custom={direction}>
                                <div className="overflow-x-hidden relative w-screen top-0 left-0 min-h-[50vh] sm:min-h-[35vh] lg:w-full">
                                    <motion.article variants={variants}
                                            animate="animate" 
                                            initial="initial" 
                                            exit="exit" 
                                            custom={direction} 
                                            key={TechnologyData[activeTechnology].id}
                                            className="absolute w-full mt-2  grid place-items-center">

                                        <h3 className="uppercase font-Bellefair text-center lg:text-left text-TertiaryColor text-2xl lg:w-8/12 lg:ml-4 sm:text-4xl sm:mt-2 2xl:text-4xl">{TechnologyData[activeTechnology].name}</h3>

                                        <p className="text-SecondaryColor text-center lg:text-left w-10/12 mt-6 font-Barlow text-xl  sm:w-7/12 lg:w-8/12 lg:ml-8 2xl:text-2xl">{TechnologyData[activeTechnology].description}</p>
                                    </motion.article>
                                </div>
                            </AnimatePresence>

                        </section>
                    </div>
            </main>
        </div>
    )
}