"use client";

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { motion, useAnimation, useInView } from "framer-motion";


const people = [
    {
        name: "John Doe",
        position: "CEO, TechCorp",
        image: "/seh_logo.png",
    },
    {
        name: "Jane Smith",
        position: "CTO, InnovateX",
        image: "/seh_logo.png",
    },
    {
        name: "Michael Brown",
        position: "Head of Marketing, BrandBoost",
        image: "/seh_logo.png",
    },
    {
        name: "Emily White",
        position: "Lead Designer, CreativCo",
        image: "/seh_logo.png",
    },
];


const Board = () => {

    return (
        <div>
            <div className=" h-[60vh] font-sans ">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative h-full flex items-center justify-start md:px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Board of Members</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Board of Members */}

            <div className="relative w-full h-auto bg-blue-100 py-8">
        <div className="absolute inset-0  overflow-hidden">
          {[
            // Enhanced Top-left corner (Fading to South-East)
            { top: 0, left: 0, count: 16, scaleDir: 1, opacityDir: 1 },
            // Top-right corner (Fading to South-West)
            { top: 0, right: 0, count: 16, scaleDir: -1, opacityDir: 1 },
            // Bottom-left corner (Fading to North-East)
            { bottom: 0, left: 0, count: 16, scaleDir: 1, opacityDir: -1 },
            // Bottom-right corner (Fading to North-West)

          ].map((pos, index) => (
            <div
              key={index}
              className="absolute grid grid-cols-4 grid-rows-4 gap-1"
              style={pos}
            >
              {Array.from({ length: pos.count }).map((_, hexIndex) => (
                <div
                  key={hexIndex}
                  className="flex items-center justify-center"
                  style={{
                    transform: `scale(${1 - hexIndex * 0.05 * pos.scaleDir})`,
                    opacity: 0.95 - hexIndex * 0.05 * pos.opacityDir,
                  }}
                >
                  <div
                    className="w-10 h-10 bg-blue-300"
                    style={{
                      clipPath:
                        'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>

            <div className="py-5 px-6 w-[75%] mx-auto h-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {people.map((person, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            key={index}
                            className="relative h-48 md:h-64 rounded-2xl shadow-md overflow-hidden bg-cover  bg-center"
                            style={{ backgroundImage: `url(${person.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0  bg-opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-lg md:text-xl font-bold">{person.name}</h3>
                                <p className=" text-md font-medium">{person.position}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

</div>

        </div>
    )
}

export default Board