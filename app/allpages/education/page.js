'use client';


import Navbar from "@/app/componets/navbar/page"
import Image from 'next/image';
import { motion } from "framer-motion";

const Education = () => {

    return (
        <div>
            <div className=" h-[60vh] font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full' >
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative  h-full flex items-center justify-start px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-5xl font-extrabold text-shadow-lg ">Education</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bachelor of Science in Comprehensive Ophthalmology And Cataract Surgery*/}

            <div className="bg-white h-auto p-6">
                <div  className="max-w-[85%] m-auto  bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Bachelor of Science in Comprehensive Ophthalmology And Cataract Surgery</h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">

                        <div >
                            <Image
                                src="/seh_logo.png"
                                alt="Kenya Power Workers"
                                width={600}
                                height={600}
                                className="rounded-4xl shadow-md"
                            />
                        </div>
                        <div>
                            <p className="text-black mb-4 leading-relaxed ">
                                Sabatia Eye Hospital has embraced training of Human Resource for Eye Health as one of its Strategic Directions. The hospital has entered into a partnership with <span className="font-semibold">Jomo Kenyatta University of Science and Technology</span> to provide a <span className="font-semibold">Bachelor of Science degree in Clinical Medicine (Comprehensive Ophthalmology and Cataract Surgery)</span>.
                            </p>
                            <p className="text-black mb-4 leading-relaxed ">
                                This is an in-service training targeting clinical officers and cataract surgeons. The intake has been impressive, with the first group now in their third year, trimester two.
                            </p>
                            <p className="text-black leading-relaxed ">
                                This cadre of trainees will further contribute towards addressing the <span className="font-semibold">Human Resource for Eye Health Challenge</span> in the region, besides improving the quality of clinical care for eye patients.
                            </p>

                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid md:grid-cols-1 gap-5 items-center text-lg mt-2 max-w-2xl bg-[#0b58a5] mx-auto rounded-2xl p-10"
                >
                    <div>
                        <p className="text-white text-2xl font-bold mb-4">Qualification</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-100">Diploma in Clinical Medicine / HND in Clinical Medicine (Cataract Surgery).</li>
                            <li className="text-gray-100">Must be a registered member of the Clinical Officers Council of Kenya (COC).</li>
                        </ul>
                    </div>
                </motion.div>


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

                {/* OSUC */}

                <div className=" h-auto p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}

                        className="max-w-[85%] m-auto  rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Ophthalmic Skills Upgrading Course (OSUC)</h2>
                        <div className="grid md:grid-cols-2 gap-5 items-center text-lg">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="text-black mb-4 leading-relaxed text-lg">
                                    An <span className="font-semibold">ophthalmic skill upgrading training</span> is one strategy the hospital utilizes to reduce the shortage of eye care workers in the country. The uptake of the training has been impressive over the years, as it has not only helped to reduce the gap in human resources but also improved the <span className="font-semibold">quality and accessibility</span> of eye care services in Kenya and other Eastern African countries through prompt and appropriate referrals.
                                </p>
                                <p className="text-black mb-4 leading-relaxed text-lg">
                                    The hospital has trained a total of <span className="font-semibold">408 healthcare workers</span> in ophthalmic skills. Among them, <span className="font-semibold">six were from Rwanda, six from Burundi, three from Malawi, and fourteen from South Sudan</span>. The training is designed to ensure that trainees receive <span className="font-semibold">adequate practical exposure</span> while at the hospital.
                                </p>
                                <p className="text-black leading-relaxed text-lg">
                                    Upon completion, they receive <span className="font-semibold">basic equipment and support visits</span> from the Ministry of Health and Sabatia for onsite assistance. Our trainees have been performing exceptionally well in managing eye conditions across the country, especially in <span className="font-semibold">arid and marginalized areas</span>, where they have been incorporated into various eye health programs. This is evident from the number of <span className="font-semibold">treated and referred patients</span> submitted by our trainees.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}>
                                <Image
                                    src="/seh_logo.png"
                                    alt="Kenya Power Workers"
                                    width={600}
                                    height={600}
                                    className="rounded-4xl shadow-md"
                                />
                            </motion.div>

                        </div>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-auto flex items-center justify-center p-3"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="max-w-5xl bg-[#0b58a5] shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-8"
                        >

                            {/* Left Section */}
                            <div className="w-full md:w-1/3">
                                <h2 className="text-2xl font-bold text-white mb-4">Areas of Specialization</h2>
                                <ul className="text-white space-y-2 list-disc list-inside">
                                    <li>Refractions and Low Vision</li>
                                    <li>Optical Technicians</li>
                                    <li>Theatre Assistants</li>
                                    <li>Osuc General</li>
                                </ul>
                            </div>

                            <div className="h-auto w-1 bg-gray-300 mx-4 md:mx-8"></div>

                            {/* Right Section (Divided into 2) */}
                            <div className="w-full md:w-2/3 flex flex-col">

                                {/* Top Right Section */}
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-4">Minimum Qualification</h2>
                                        <ul className="text-white list-disc pl-5">
                                            <li>Diploma in Nursing</li>
                                            <li>Diploma in Clinical Medicine</li>
                                            <li>Comparable medical qualification</li>
                                        </ul>
                                    </div>

                                    <div className="h-16 w-1 bg-gray-300 mx-4 md:mx-8"></div>

                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-4">Course Duration</h2>
                                        <div className="text-white">
                                            <ul className="list-disc pl-5">
                                                <li>12 Weeks (3 Months)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Right Section */}
                                <div className="mt-8 pt-4 border-t border-gray-300">
                                    <div className="flex flex-col md:flex-row justify-between items-start">
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-white mb-4">Intakes</h2>
                                            <div className="text-white">
                                                <ul className="list-disc pl-5">
                                                    <li>February</li>
                                                    <li>May</li>
                                                    <li>September</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="h-16 w-1 bg-gray-300 mx-4 md:mx-8"></div>

                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-white mb-4">Application</h2>
                                            <p className="text-white">
                                                Application can be made to <br />
                                                <a href="mailto:training@sabatiaeyehospital.org" className="text-white font-medium">
                                                    training@sabatiaeyehospital.org
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>


            {/* Other trainings */}

            <div className="bg-white h-auto p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}

                    className="max-w-[85%] m-auto  bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Other Trainings</h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">

                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative  ">
                            {/* Main Image */}
                            < div className='right-20' >
                                <Image
                                    src="/seh_logo.png" // Replace with your main image path
                                    alt="Doctor smiling"
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg w-[70%] mr-30 mb-20 "
                                />
                            </div>

                            {/* Smaller Image Overlay */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute bottom-1 right-6 bg-white p-1 rounded-lg shadow-lg">

                                <Image
                                    src="/seh_logo.png" // Replace with your second image path
                                    alt="Doctor with patient"
                                    width={300}
                                    height={300}
                                    className="rounded-lg "
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6 }}>
                            <p className="text-black mb-4">
                                Sabatia Eye hospital also works with other training institutions in the Country to provide practical trainings for both Middle and high cadre eye care trainings
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-black">
                                <li>
                                    <span className="font-bold">Registrars:</span> The hospital, in collaboration with the University of Nairobi, trains registrars during their elective term period.
                                </li>
                                <li>
                                    <span className="font-bold">Optometrists:</span> Sabatia Eye Hospital, in collaboration with Masinde Muliro University of Science and Technology (MMUST), trains optometrists during their electives.
                                </li>
                                <li>
                                    <span className="font-bold">Cataract Surgeons, Low Vision Therapists, Optometrists, and Ophthalmic Nurses:</span> Sabatia Eye Hospital provides practical training for ophthalmic healthcare students from the Kenya Medical Training Institute during their elective term.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Education