'use client';

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { motion } from "framer-motion";
import React, { useState } from "react";




const Involved = () => {


    return (
        <div className='bg-white'>
            <div className=" h-[60vh] font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative  h-full flex items-center justify-start px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-5xl font-extrabold text-shadow-lg ">Get Involved</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>



            {/* Sponsor an Eye Camp */}

            <div className="bg-white h-auto p-6">
                <div className="max-w-[85%] m-auto  bg-white rounded-lg p-8 mb-10">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Sponsor an Eye Camp</h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">
                        <div>
                            <Image
                                src="/seh_logo.png"
                                alt="Kenya Power Workers"
                                width={600}
                                height={600}
                                className="rounded-4xl shadow-md"
                            />
                        </div>

                        <div >
                            <p className="text-lg text-black leading-relaxed mb-6">
                                <strong>Sabatia Eye Hospital</strong> invites you to join in our quest to contribute to the reduction of avoidable blindness in the country and the East African region.
                            </p>

                            <p className="text-lg text-black leading-relaxed mb-6">
                                At Sabatia Eye Hospital, any organization or individual interested in community welfare may sponsor an eye camp. We encourage sponsors to prioritize community needs over political and social agendas.
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-2xl">
                                <h3 className="text-xl font-semibold text-black mb-4">Support Our Outreach Activities</h3>
                                <p className="text-black mb-4">
                                    If you are interested in supporting our outreach efforts, please contact:
                                </p>
                                <p className="text-black font-medium mb-2">The Outreach and Training Coordinator , Sabatia Eye Hospital</p>


                                <p className="text-blue-600 mb-2">
                                    <strong className='text-black'> Email: </strong>  <a href="mailto:training@sabatiaeyehospital.org" className="hover:underline">training@sabatiaeyehospital.org</a> / <a href="mailto:tcoordinatorseh@gmail.com" className="hover:underline">tcoordinatorseh@gmail.com</a>
                                </p>

                                <p className="text-black"> <strong> Mobile: </strong><a href="tel:+254723721316" className="hover:underline">0723 721 316</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-auto bg-blue-100 py-8">
                <div className="absolute inset-0">
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


                {/* Donate and Volunteer */}

                <div className="py-10 px-6 w-[85%] mx-auto h-[70vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5 }}

                            className="rounded-2xl p-6">

                            < motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image
                                    width={400}
                                    height={400}
                                    src="/seh_logo.png"
                                    alt="Donate"
                                    className="w-full h-48 object-fill rounded-2xl mb-4" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white shadow-md rounded-2xl p-6">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Donate</h3>
                                <p className="text-black leading-relaxed md:text-lg">
                                    Make a Difference: The most direct and immediate way to help is by donating money or providing material support. You can contribute to Sabatia Eye Hospital through any of the following methods:
                                </p>
                                <ul className="list-inside list-disc pl-5 mt-3 ">
                                    <li><span className="font-medium text-blue-600">Mobile Money Transfer</span></li>
                                    <li><span className="font-medium text-blue-600">Credit Card</span></li>
                                    <li><span className="font-medium text-blue-600">Contacting our offices directly</span></li>
                                </ul>
                            </motion.div>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl p-6">

                            < motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image
                                    width={400}
                                    height={400}
                                    src="/seh_logo.png"
                                    alt="Volunteer"
                                    className="w-full h-48 object-fill rounded-2xl mb-4" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white shadow-md rounded-2xl p-6">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Volunteer</h3>
                                <p className="text-black leading-relaxed md:text-lg">
                                    Join Us in Making a Difference: Sabatia Eye Hospital welcomes skilled and passionate individuals to volunteer their expertise in the eradication of avoidable blindness. If you would like to volunteer with us, please send your application along with your current resume to:
                                </p>
                                <ul className="list-inside list-disc pl-5 mt-3 text-black">
                                    <li>
                                        <a href="mailto:recruitment@sabatiaeyehospital.org" className="font-medium text-blue-600 hover:underline">
                                            recruitment@sabatiaeyehospital.org
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@sabatiaeyehospital.org" className="font-medium text-blue-600 hover:underline">
                                            info@sabatiaeyehospital.org
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

            </div>


            <div className="bg-white w-[85%] mx-auto p-10 ">
                {/* Report Details */}

                <div className='grid md:grid-cols-2 gap-5 items-center text-lg'>
                    <div >
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Prospectus </h2>
                        <p className="text-lg text-gray-700  p-4   text-justify leading-relaxed">
                            Join us in our mission to combat avoidable blindness and transform lives. Your support can make a profound difference in providing accessible eye care to those in need. Whether through a donation, spreading awareness, or participating in fundraising activities, your involvement empowers us to reach more individuals and families. Together, let’s create a future where everyone has the gift of sight. Take action today and be a beacon of hope for countless individuals affected by vision loss. Together, we can make a lasting impact and bring light into the lives of those in need.

                            <br /><br />
                            Your support is pivotal in realizing this vision and transforming lives.

                            <br /><br />
                           <strong>Email:</strong>  <a href="mailto:funding@sabatiaeyehospital.org" className="text-blue-600 font-semibold hover:underline">funding@sabatiaeyehospital.org</a>
                        </p>


                        {/* Download Button */}
                        <a
                            href="/reports/annual-report-2021.pdf"
                            download
                            className="bg-[#0b58a5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Download Prospectus
                        </a>
                    </div>

                    {/* Report Image */}
                    <div >
                        <Image
                            src="/seh_logo.png"
                            alt='prospectus'
                            width={500}
                            height={500}
                            className="rounded-4xl shadow-lg hover:scale-105 transition duration-300"
                        />
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Involved