import React, { useState } from "react";
import Nav from '../Nav'
import '../../Styles/destination.css'
import PlanetsData from '../DestinationData'
import { AnimatePresence,  motion } from 'framer-motion'

export default function Destination() {
    const [activePlanet, setActivePlanet] = useState(0)
    const [direction, setDirection] = useState(0)

    const variants = {
        initial: (direction: any) => {
            return {
                x: direction > 0 ? 100 : -100,
                opacity: 0,       
            }

        },
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: any) => {
            return {
                x: direction > 0 ? -100 : 100,
                opacity: 0,    
            }

        },
    }

    function setCurrentPlanet(item: any) {
        if (activePlanet > item.id-1)
        {
            setDirection(-1)
        } else {
            setDirection(1)
        }
        setActivePlanet(item.id-1)
    }

    const PlanetsListElements = PlanetsData.map(item => {
        return(
            <li onClick={() => setCurrentPlanet(item)} className= {`uppercase cursor-pointer mx-2 font-Barlow text-lg tracking-wider border-b-4 duration-[400ms] border-solid hover:border-slate-500 sm:text-xl lg:mx-3 ${item.id===activePlanet+1 ? "border-white/1" : "border-white/0"}`}>{item.name}</li>
        )
    })

    const PlanetsInformations = PlanetsData.map(item => { 
        return (
                <motion.article  
                    variants={variants}
                    animate="animate" 
                    initial="initial" 
                    exit="exit" 
                    custom={direction}
                    key={item.id}  className="w-10/12 absolute top-0 grid place-items-center lg:place-items-start mt-10 lg:ml-3">

                    <h2 className="text-TertiaryColor font-Bellefair text-6xl uppercase sm:mb-8">{item.name}</h2>
                    <p className="destination--planet-descritption  text-center text-SecondaryColor lg:text-left">{item.description}</p>

                <div className="w-full grid place-items-center text-center sm:flex sm:justify-around sm:items-center lg:justify-start lg:text-left">
                    <div>
                        <h3 className="text-SecondaryColor uppercase mt-6 font-Barlow text-lg tracking-wider">Avg. distance</h3>
                        <p className="text-TertiaryColor text-3xl uppercase mt-2 font-Bellefair">{item.distance}</p>
                    </div>
                    
                    <div className="lg:ml-24">
                        <h4 className="text-SecondaryColor uppercase mt-6 font-Barlow text-lg tracking-wider">Est. travel time</h4>
                        <p className="text-TertiaryColor text-3xl uppercase mt-2 font-Bellefair mb-14 sm:mb-0">{item.travel}</p>
                    </div>
                </div>
                </motion.article>
        )
    })

    return (
        <div className="destination--container">
            <Nav />
            <main className="grid place-items-center mt-2 sm:mt-12 ">
                <h1 className="text-TertiaryColor uppercase font-Barlow text-xl tracking-widest	sm:w-11/12 lg:w-10/12"><span className="font-bold opacity-30 mr-4">01</span>Pick your destination</h1>


                <div className="grid place-items-center w-full lg:flex lg:justify-center">
                    <div className="overflow-x-hidden relative w-full grid place-items-center top-0 lg:-top-16 lg:-left-0  h-64 lg:h-96 lg:w-full xl:h-[450px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img variants={variants}
                            animate="animate" 
                            initial="initial" 
                            exit="exit" 
                            custom={direction} 
                            key={PlanetsData[activePlanet].id} 
                            src={`${PlanetsData[activePlanet].images.webp}`} alt="planet image" className="w-48 mt-10 absolute top-0 lg:w-80 xl:w-[400px]"/>
                        </AnimatePresence>
                    </div>

                    <div className="grid place-items-center w-full lg:place-items-start lg:pl-12">
                        <ul className="text-TertiaryColor flex items-center mt-6 ">
                            {PlanetsListElements}
                        </ul>

                        <section className="overflow-x-hidden relative w-full grid place-items-center lg:place-items-start top-0 left-0 h-[550px]">
                            <AnimatePresence initial={false} custom={direction}>
                                {PlanetsInformations[activePlanet]}
                            </AnimatePresence>
                        </section>
                    </div>
                </div>
            </main>

        </div>
    )
}