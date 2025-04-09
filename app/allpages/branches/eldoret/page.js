'use client';

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { motion } from "framer-motion";


const services = [
    {
        title: "General Ophthalmology",
        description: "Comprehensive eye care services, including diagnosis, treatment, and management of various eye conditions.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Paediatric Ophthalmology",
        description: "Specialized eye care for children, including early detection and treatment of vision problems.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Cataract Surgery",
        description: "Restoring vision through advanced cataract surgery, ensuring clear sight for a better quality of life.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Squint Surgery",
        description: "Correcting eye misalignment to improve vision, depth perception, and overall eye health.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Low Vision Therapy",
        description: "Helping individuals with vision impairments maximize their remaining sight through specialized therapy and assistive devices.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Optical Services",
        description: "Providing prescription glasses, contact lenses, and professional eye exams to enhance visual clarity.",
        image: "/seh_logo.png",
        link: "#",
    },
    {
        title: "Eye Health Training",
        description: "Educating communities and professionals on eye care, prevention, and early detection of eye diseases.",
        image: "/seh_logo.png",
        link: "#",
    },

];



const Eldoret = () => {

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
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Eldoret Branch</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero section Eldorect  */}

            <div className="bg-white h-auto p-6">

                <div className="w-full sm:max-w-[85%] m-auto  bg-white rounded-lg sm:p-8">
                    <h2 className="text-2xl md:text-3xl  font-bold text-blue-900 mb-6">Eldoret Clinic</h2>
                    <div className="grid md:grid-cols-2  gap-5 md:gap-10 lg:gap-16 items-center ">
                        <div>
                            <Image
                                src="/seh_logo.png"
                                 alt="Seh_pic"
                                width={600}
                                height={600}
                                className="rounded-3xl shadow-lg hover:scale-105 transition duration-300 w-[100%] sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto"
                            />
                        </div>
                        <div
                         className='mt-3 sm:mt-6 md:mt-0  text-black text-md md:text-lg  leading-relaxed w-full'
                        >
                            <p className="text-black leading-relaxed mb-4">
                                Located at <span className="font-semibold">Sagaas Plaza, 4th Floor</span>, opposite the <span className="font-semibold"> Regional Blood Transfusion Centre</span> and next to AIC Fellowship, our Eldoret Clinic is easily accessible for eye care services.
                            </p>
                            <p className="text-black leading-relaxed">
                                Since its official opening on <span className="font-semibold">29th July 2021</span>, the clinic has been instrumental in improving eye care in <span className="font-semibold">Uasin Gishu County </span> and beyond. Our committed team ensures that patients receive high-quality, affordable eye treatment in a welcoming environment.
                            </p>
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
                                        opacity: 0.3 - hexIndex * 0.05 * pos.opacityDir,
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


                {/* Services Eldoret Clinic */}

                <div className="sm:py-5 px-6 w-full sm:w-[75%] mx-auto h-auto">
                    <h2 className=" text-2xl sm:text-3xl font-bold text-blue-900 m-10">Our Services</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-15 ">
                        {services.map((service, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                key={index} className="bg-white shadow-md rounded-2xl ">
                                <div className="p-3 pb-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={180} // You can specify the width here
                                        height={120} // You can specify the height here
                                        className="w-full h-48 object-cover rounded-md mb-4" // Optional: You can still use Tailwind classes if needed
                                    />

                                </div>

                                <div className="pb-6 pr-6 pl-6">
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2 ">{service.title}</h3>
                                    <p className="text-black">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eldoret