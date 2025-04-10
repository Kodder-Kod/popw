"use client";

import Navbar from "@/app/componets/navbar/page"
import Image from 'next/image';

import { motion, useAnimation, useInView } from "framer-motion";

const Branches = () => {

    return (
        <div>
            <div className=" h-[60vh] font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative  h-full flex items-center justify-start md:px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Branches</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>



            {/* Main  Hopsital */}

            <div className="bg-white h-auto p-6">
                <div className="w-full sm:max-w-[85%] m-auto  bg-white rounded-lg sm:p-8">
                    <h2 className="text-2xl md:text-3xl  font-bold text-blue-900 mb-6">Base Hospital (Sabatia)</h2>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center ">

                        <div>
                            <Image
                                src="/seh_logo.png"
                                alt="base hospital"
                                width={600}
                                height={600}
                                className="rounded-3xl shadow-lg hover:scale-105 transition duration-300 w-[100%] sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto"
                            />
                        </div>
                        <div
                            className=" mt-3 sm:mt-6 md:mt-0 text-black text-md leading-relaxed w-full"
                        >
                            <p className="text-black mb-4 leading-relaxed">
                                The Base Hospital is the main facility of <span className="font-semibold">Sabatia Eye Hospital</span>, located in <span className="font-semibold">Vihiga County</span> along <span className="font-semibold">Kisumu-Chavakali-Kapsabet Road</span>, opposite the <span className="font-semibold">Sabatia Deputy County Commissioner’s Office</span>. Since its establishment in <span className="font-semibold">1996</span>, the hospital has been a key referral center for specialized eye care.
                            </p>
                            <p className="text-black mb-4 leading-relaxed">
                                Serving an estimated <span className="font-semibold">40,000 patients annually</span>, the hospital provides comprehensive <span className="font-semibold">outpatient and inpatient eye care services</span> . In addition to treatment, it also offers specialized training programs to enhance ophthalmological skills, ensuring high standards of eye care across the region.
                            </p>

                            <a
                                href="/allpages/services"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Our Services →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-auto bg-blue-100 py-8">
                <div className="absolute inset-0 pointer-events-none">
                    {[
                        // Enhanced Top-left corner (Fading to South-East)
                        { top: 0, left: 0, count: 16, scaleDir: 1, opacityDir: 1 },
                        // Top-right corner (Fading to South-West)
                        { top: 0, right: 0, count: 16, scaleDir: -1, opacityDir: 1 },
                        // Bottom-left corner (Fading to North-East)

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
                                        opacity: 0.6 - hexIndex * 0.05 * pos.opacityDir,
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


                {/* Kisumu Clinic */}

                <div className=" h-auto  p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="w-full sm:max-w-[85%] m-auto  rounded-lg sm:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Kisumu Clinic</h2>
                        <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center ">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className=" mt-3 sm:mt-6 md:mt-0 text-black text-md leading-relaxed w-full"
                            >
                                <p className="text-black mb-4 leading-relaxed">
                                    The Kisumu Clinic is strategically located in the serene <span className="font-semibold">Milimani area, along Lodwar Road</span>, just a <span className="font-semibold">10-minute walk</span> from Kisumu&apos;s Central Business District. Designed to offer accessible and high-quality eye care, the clinic provides a welcoming environment for patients in the region. It is equipped with modern facilities to ensure accurate diagnosis and effective treatment for various eye conditions.
                                </p>

                                <a
                                    href="/allpages/branches/kisumu"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Get More Details →
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Image
                                    src="/seh_logo.png"
                                     alt="Seh_pic"
                                    width={600}
                                    height={600}
                                    className="rounded-4xl shadow-md"
                                />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Eldoret Clinic */}

            <div className="bg-white h-auto p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}

                    className="w-full sm:max-w-[85%] m-auto  bg-white rounded-lg sm:p-8">
                    <h2 className="text-2xl mdtext-3xl font-bold text-blue-900 mb-6">Eldoret Clinic</h2>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center ">
                        < motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >

                            <Image
                                src="/seh_logo.png"
                                 alt="Seh_pic"
                                width={600}
                                height={600}
                                className="rounded-3xl shadow-md"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className=" mt-3 sm:mt-6 md:mt-0 text-black text-md  leading-relaxed w-full"
                            >
                        

                            <p className="text-black mb-4 leading-relaxed">
                                The Eldoret Clinic, located at  <span className="font-semibold"> Sagaas Plaza 4th Floor </span>, was officially opened on 29th July 2021 to enhance eye care services in  <span className="font-semibold"> Uasin Gishu County</span> and its surroundings. Strategically positioned  <span className="font-semibold"> opposite the Regional Blood Transfusion Centre </span>, the clinic offers affordable, high-quality eye care. Our dedicated staff ensure that patients receive expert consultations, diagnostics, and treatment closer to home.
                            </p>
                            <a
                                href="/allpages/branches/eldoret"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Get More Details →
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Branches