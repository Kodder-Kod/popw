"use client";

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const news = [
    {
        title: "World Glaucoma Week",
        description: "Join us in raising awareness about glaucoma, its prevention, and early detection to prevent vision loss.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Eye Camp Mbale",
        description: "Providing free eye check-ups, consultations, and treatments for the community in Mbale.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Eye Camp Emuhaya",
        description: "Bringing quality eye care services, including screenings and free medication, to residents of Emuhaya.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Cataract Surgery Camp",
        description: "Offering free cataract surgeries for those in need, ensuring better vision and improved quality of life.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Vision Screening Program",
        description: "Conducting eye tests and vision screenings to detect early signs of eye conditions and provide necessary treatment.",
        image: "/seh_logo.png",
        link: "#",
    },
];



const topics = [
    {
        title: "Base Hopsital",
        images: [
            "/test1.JPG", "/test2.JPG", "/test3.JPG", "/test4.JPG", "/test5.JPG",
            "/test6.JPG", "/test7.JPG", "/test8.JPG", "/test9.JPG", "/test10.JPG"
        ]
    },
    {
        title: "Staff",
        images: [
            "/test1.JPG", "/test2.JPG", "/test3.JPG", "/test4.JPG", "/test5.JPG",
            "/test6.JPG", "/test7.JPG", "/test8.JPG", "/test9.JPG", "/test10.JPG"
        ]
    },
    {
        title: "Outreach Programs",
        images: [
            "/test1.JPG", "/test2.JPG", "/test3.JPG", "/test4.JPG", "/test5.JPG",
            "/test6.JPG", "/test7.JPG", "/test8.JPG", "/test9.JPG", "/test10.JPG"
        ]
    }
];

const reports = {
    2018: {
        text: "Our annual report 2018 included a message from the chairman and CEO, eye care service provision, the establishment of Sabatia Eye Hospital, board of directors, hospital’s head of department, partnership developments, hospital management committee members, audited financial statement as of 31st December 2018, challenges, and other partners.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2018.pdf",
    },
    2019: {
        text: "Our annual report 2019 included a message from the chairman and CEO, future plans, challenges, eye care service provision, the establishment of Sabatia Eye Hospital, board of directors, hospital’s head of department, partnership developments, and hospital management committee members.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2019.pdf",
    },
    2020: {
        text: "Year 2020 is one we would all want to forget very fast. Despite the tough times posed by COVID-19, Sabatia Eye Hospital managed to regain its footing, though operations were significantly affected. The total number of patients seen at the Base Hospital dropped by 18% while surgeries declined by 31%, compared to 2019. The hospital also shut down for six weeks, and staff regrettably took pay cuts between April and September 2020.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2020.pdf",
    },
    2021: {
        text: "The year 2021 marked a significant recovery phase, with new initiatives in patient care, partnerships, and outreach programs. The hospital expanded its services and implemented new technological advancements in eye care.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2021.pdf",
    },
    2022: {
        text: "In 2022, Sabatia Eye Hospital strengthened its partnerships and introduced new community health initiatives. The hospital also upgraded its facilities and equipment, leading to improved patient care and service delivery.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2022.pdf",
    },
    2023: {
        text: "The 2023 report highlights the hospital's continued growth, expansion of services, and strategic collaborations to enhance eye care access for underserved populations. The hospital also achieved new milestones in research and development.",
        image: "/seh_logo.png",
        file: "/reports/annual-report-2023.pdf",
    },
};



const Media = () => {


    const [selectedYear, setSelectedYear] = useState(2023); // Default latest year

    return (
        <div className='bg-white'>

            <div className=" h-[60vh] font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative  h-full flex items-center justify-start md:px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Media</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>



            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                pagination={{ clickable: true }}
                className="w-full h-auto"
            >
                {topics.map((topic, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full text-center mb-4">
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#0b58a5] rounded-lg  inline-block">
                                {topic.title}
                            </h1>
                        </div>

                        <div className="relative w-full h-full flex flex-col items-center justify-center bg-white p-6">

                            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-full">
                                {topic.images.map((src, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className={`overflow-hidden rounded-lg shadow-lg 
                  ${imgIndex % 6 === 0 ? "col-span-2 row-span-2" : "col-span-1"} 
                  flex items-center justify-center`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery ${imgIndex + 1}`}
                                            width={800} // You can specify the width here
                                            height={600}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* The News Room */}

            <div className="relative w-full h-auto bg-blue-100 py-8">
                <div className="absolute inset-0 overflow-hidden">
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

                <div className="h-auto bg-blue-100 ">
                    <div className="w-[85%] mx-auto">
                        <h2 className="text-2xl md:text-3xl  font-bold text-black text-center mb-6 relative z-10">Latest Events & News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10 relative z-10">
                            {news.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-2xl rounded-2xl"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={180} // You can specify the width here
                                        height={120}
                                        className="w-full h-48 md:56 object-cover rounded-t-2xl mb-4"
                                    />

                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0b58a5] mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-black leading-relaxed">
                                            {service.description}
                                        </p>
                                        <a
                                            href={service.link}
                                            className="text-blue-600 font-semibold mt-3 sm:mt-4 inline-block text-sm sm:text-base"
                                        >
                                            Learn more →
                                        </a>
                                    </div>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>


            </div>
            <div className="bg-white min-h-auto p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">Annual Reports</h1>

                {/* Tab Design for Year Selection */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {Object.keys(reports).map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-md ${selectedYear === year
                                ? "bg-[#0b58a5] text-white shadow-md"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>


                {/* Report Display Section */}

                <div className="bg-white w-full sm:max-w-7xl mx-auto ">
                    {/* Report Details */}

                    <div className='grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center '>

                        <div
                            className="items-center" >
                            <h2 className="hidden md:block text-xl sm:text:2xl font-bold text-blue-900 mb-4">Annual Report {selectedYear}</h2>
                            <p className="text-md sm:text-lg text-gray-700 mb-7 sm:my-15 p-1">{reports[selectedYear].text}</p>

                            {/* Download Button */}
                            <div className="flex justify-center md:justify-start">
                                <a
                                    href={reports[selectedYear].file}
                                    download
                                    className="bg-[#0b58a5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                                >
                                    Download {selectedYear} Report
                                </a>
                            </div>
                        </div>

                        {/* Report Image */}
                        <div >
                            <Image
                                src={reports[selectedYear].image}
                                alt={`Annual Report ${selectedYear}`}
                                width={500}
                                height={500}
                                className="rounded-4xl shadow-lg hover:scale-105 transition duration-300"
                            />
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Media