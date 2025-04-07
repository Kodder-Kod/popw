'use client';

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { motion } from "framer-motion";


const About = () => {



    const mission = [
        {
            title: "Mission",
            description: "To provide accessible, affordable and sustainable quality healthcare and training through prudent management of resources",
            image: "/test001.jpg",
            link: "#",
        },
        {
            title: "Vision",
            description: "A Centre of excellence committed to quality healthcare. ",
            image: "/test002.png",
            link: "#",
        },

    ];


    return (

        <div>
            <div className=" h-[60vh] font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 bg-fit bg-center  h-[60vh]" style={{ backgroundImage: "url('/test002.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative  h-full flex items-center justify-start px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-5xl font-extrabold text-shadow-lg ">About</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>

            {/* About us */}

            <div className="bg-white h-auto p-6">
                <div
                  
                    className="max-w-[85%] m-auto  bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">
                        <div
                        
                        >
                            <Image
                                src="/seh_logo.png"
                                alt="Kenya Power Workers"
                                width={600}
                                height={600}
                                className="rounded-4xl shadow-md"
                            />
                        </div>
                     
                            <div
                              
                            >
                                <p className="text-black mb-4 leading-relaxed">
                                    We are one of the leading not-for-profit and independent referral eye hospitals based in the western part of Kenya. As one of the few tertiary eye hospitals located in rural Kenya, we serve an estimated <span className="font-semibold">15 million people</span>.
                                </p>
                                <p className="text-black mb-4 leading-relaxed">
                                    Our reach extends across <span className="font-semibold">17 counties</span>, including the <span className="font-semibold">North Rift, western Kenya, and the Lake Basin</span>. Through strategic partnerships and diverse collaborative arrangements, we conduct extensive outreach campaigns to provide essential eye care services.
                                </p>
                                <p className="text-black leading-relaxed">
                                    We offer <span className="font-semibold">competency-based training</span> in various ophthalmological courses. To efficiently deliver on our core mandate, the hospital is structured into three key departments:
                                    <span className="font-semibold"> Clinical, Finance & Administration, and Training</span>.
                                </p>
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

                {/*History */}
                <div className="h-auto p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-[85%] m-auto rounded-lg p-8"
                    >
                        <h2
                            className="text-3xl font-bold text-blue-900 mb-6"
                        >
                            History
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5 items-center text-lg">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="text-black mb-4 leading-relaxed">
                                    <span className="font-semibold">Sabatia Eye Hospital</span>, located in
                                    <span className="font-semibold"> Vihiga County</span>, was founded in
                                    <span className="font-semibold"> 1996</span> through the efforts of the local
                                    community. The initiative was led by former Vice President Hon.
                                    Musalia Mudavadi in collaboration with the{" "}
                                    <span className="font-semibold">
                                        Christoffel Blinden Mission/Christian Blind Mission
                                    </span>
                                    , the <span className="font-semibold">Lions Club of Germany</span>, District
                                    111-MS, the <span className="font-semibold">Lions Club of Kisumu</span>, the{" "}
                                    <span className="font-semibold">Government of Kenya</span>, and the{" "}
                                    <span className="font-semibold">Friends Church at Vokoli</span>.
                                </p>
                                <p className="text-black leading-relaxed">
                                    The hospital was established in response to the{" "}
                                    <span className="font-semibold">total lack of basic eye care services</span> in
                                    western Kenya, aiming to bridge the gap and provide essential medical
                                    support to the region.
                                </p>
                            </motion.div>

                            {/* Image Container */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                {/* Main Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="left-20"
                                >
                                    <Image
                                        src="/seh_logo.png" // Replace with your main image path
                                        alt="Doctor smiling"
                                        width={400}
                                        height={400}
                                        className="rounded-lg shadow-lg w-[90%] ml-30 mb-20"
                                    />
                                </motion.div>

                                {/* Smaller Image Overlay */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute -bottom-6 bg-white p-1 rounded-lg shadow-lg"
                                >
                                    <Image
                                        src="/seh_logo.png" // Replace with your second image path
                                        alt="Doctor with patient"
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>


                {/* Mission and Vision */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="py-10 px-6 w-[85%] mx-auto h-[70vh]">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Believe In</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
                        {mission.map((service, index) => (
                            <div key={index} className="rounded-2xl p-6">
                                < motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image
                                        width={400}
                                        height={400}
                                        src={service.image} alt={service.title} className="w-full h-48 object-fill rounded-2xl mb-4" />

                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="border-t border-gray-400  p-6">
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-2 leading-relaxed">{service.title}</h3>
                                    <p className="text-black leading-relaxed text-lg">{service.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Who are we */}

            <div className="bg-white h-auto p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="max-w-[85%] m-auto  bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Behind the Scenes</h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">

                        <motion.div

                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.3, delay: 0.3 }}

                        >
                            <Image
                                src="/seh_logo.png"
                                alt="Kenya Power Workers"
                                width={600}
                                height={600}
                                className="rounded-4xl shadow-md"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <p className="text-black mb-4 leading-relaxed">
                                We are governed by an Oversight Board of Directors, comprising 12 members drawn from various major stakeholders and partners, including the local community, Friends Church – Vokoli Yearly Meeting, Lions Clubs, and representatives of the national and county governments.
                            </p>
                            <p className="text-black mb-4 leading-relaxed">
                                The day-to-day operations of the hospital are managed by the <span className="font-semibold">Hospital Management Committee (HMC)</span>, led by the Chief Executive Officer. The HMC consists of the Chairman, Chief Executive Officer, Medical Director, Head of Finance and Administration, and Head of Nursing Services.
                            </p>
                            <p className="text-black leading-relaxed">
                                The hospital has <span className="font-semibold">two resident ophthalmologists</span>, <span className="font-semibold">three OCO/cataract surgeons</span>, <span className="font-semibold">twelve nurses</span>, and dedicated administration staff working towards its mission. Additionally, the hospital is supported by <span className="font-semibold">four visiting consultant ophthalmologists</span>. Annually, the staff attends to approximately <span className="font-semibold">35,000 – 40,000 patients</span>.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About