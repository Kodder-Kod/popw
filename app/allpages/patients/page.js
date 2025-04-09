'use client';

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { motion } from "framer-motion";


const customers = [
    { name: "Zapier", logo: "/seh_logo.png" },
    { name: "Spotify", logo: "/seh_logo.png" },
    { name: "Zoom", logo: "/seh_logo.png" },
    { name: "Amazon", logo: "/seh_logo.png" },
    { name: "Adobe", logo: "/seh_logo.png" },
    { name: "Netflix", logo: "/seh_logo.png" },
    { name: "Google", logo: "/seh_logo.png" },
    { name: "GitLab", logo: "/seh_logo.png" },
    { name: "Nation", logo: "/seh_logo.png" },
    { name: "Nation", logo: "/seh_logo.png" },
    { name: "Nation", logo: "/seh_logo.png" },
    { name: "Nation", logo: "/seh_logo.png" },
];


const branches = [

    {
        name: "Eldoret Branch",
        hours: [{ day: "Monday to Friday", time: "8:00 AM - 4:30 PM" },
        { day: "Weekends", time: "Closed" },
        ],
        contact: {
            phone: ["0707650804"],
            email: ["eldoret@sabatiaeyehospital.org"],
        },
    },
    {
        name: "Sabatia (Base Hospital) ",
        hours: [
            { day: "Monday to Friday", time: "8:00 AM - 4:30 PM" },
            { day: "Weekends", time: "Only Emergencies" },
        ],
        contact: {
            phone: ["+254723721316", "+254733731013"],
            email: ["sabeyehosp@gmail.com", "info@sabatiaeyehospital.org"],
        },
    },
    {
        name: "Kisumu Clinic",
        hours: [
            { day: "Monday to Friday", time: "8:00 AM - 4:30 PM" },
            { day: "Weekends", time: "Closed" },
        ],
        contact: {
            phone: ["0776169926"],
            email: ["sabatia.kisumu@sabatiaeyehospital.org"],
        },
    },
];

const firstSteps = [
    "Pick a number at the security office ",
    "Registration (present the Consultation fee receipt)",
    "Make payments at (consultation fee) at the Accounts office",
    "Take Visual Acuity at the VA room",
    "See a doctor/Optometrist for Diagnosis/Refraction",
    "Present the prescription to the Pharmacist(Outpatients)",
    "Make Payments for the drugs at the Accounts",
    "Collect drugs"
];

const secondSteps = [
    "See a doctor/Optometrist for Diagnosis/Refraction",
    "Present the prescription to the Pharmacist(Outpatients)",
    "Make Payments for the drugs at the Accounts",
    "Collect drugs"
];


const Patients = () => {

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
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">For Patients</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero section for patients */}

            <div className="bg-white h-auto p-6">
                <div className="w-full sm:max-w-[85%] m-auto  bg-white rounded-lg sm:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Instruction for patients</h2>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center ">

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

                            <p className="text-black  font-medium mb-4">
                                📌 <span className="font-bold">Referral Process:</span> Patients referred to Sabatia Eye Hospital must bring recent medical reports along with a referral letter. After registration, they will be directed to the appropriate specialty clinic.
                            </p>
                            <p className="text-black  font-medium mb-4">
                                📌 <span className="font-bold">Returning Patients:</span> Always carry your patient card for every visit.
                            </p>
                            <p className="text-black font-medium">
                                📌 <span className="font-bold">Payment Policy:</span> All payments should be made at the accounts office, and a receipt must be collected.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-auto bg-blue-100 py-8">
                <div className="absolute inset-0 overflow-hidden">
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

                {/* Accessing Services*/}


                <div className='p-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='max-w-5xl mx-auto rounded-2xl p-5 sm:p-10 bg-[#0b58a5] text-white shadow-lg'
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-5">Process of Accessing Services</h2>
                        <div className="grid md:grid-cols-1 sm:gap-5  gap-1 items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                {firstSteps.map((step, index) => (
                                    <p
                                        key={index}
                                        className={`text-white mb-4  text-md sm:text-xl tracking-wide`}
                                    >
                                        <span className="font-semibold text-2xl text-blue-100">{index + 1}.</span> {step}
                                    </p>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* health Inssuarance*/}




                <div className="flex flex-col items-center py-5 px-6 rounded-xl">
                    <h2 className="sm:text-3xl text-2xl font-bold text-black pt-10 pb-7">Health Insurance</h2>

                    {/* First row: slower movement and proper width */}
                    <motion.div
                        className="flex w-[90vw] gap-6 justify-center mt-4 "
                        animate={{ x: ["0%", "20%", "0%", "-20%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                    >
                        {customers.slice(0, Math.ceil(customers.length / 2)).map((customer, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Image
                                    src={customer.logo}
                                    alt={customer.name}
                                    width={180} // You can specify the width here
                                    height={120}
                                    className="h-14 sm:h-16 md:h-20 lg:h-24 transition-transform duration-300 hover:scale-110 drop-shadow-md"
                                />
                                <p className="m-3">{customer.name}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Second row: slower movement and proper width */}
                    <motion.div
                        className="flex w-[90vw] gap-6 justify-center mt-4 "
                        animate={{ x: ["0%", "-20%", "0%", "20%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                    >
                        {customers.slice(Math.ceil(customers.length / 2)).map((customer, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Image
                                    src={customer.logo}
                                    alt={customer.name}
                                    width={180} // You can specify the width here
                                    height={120}
                                    className="h-14 sm:h-16 md:h-20 lg:h-24 transition-transform duration-300 hover:scale-110 drop-shadow-md"
                                />
                                <p className="m-3">{customer.name}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>;




            </div>

            {/* Working hours */}



            <div className='w-full mx-auto bg-white'>
                <div className="max-w-6xl mx-auto p-8 bg-white rounded-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#0b58a5] pt-3 pb-1 sm:pt-8 sm:pb-6"
                    >
                        Working Hours
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {branches.map((branch, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="border p-6 rounded-2xl shadow-md border-[#0b58a5] transition-transform transform hover:scale-105 hover:shadow-xl"
                            >
                                <h3 className=" text-xl sm:text-2xl font-semibold text-[#0b58a5] mb-4">{branch.name}</h3>
                                <div className="mt-2 space-y-2">
                                    {branch.hours.map((hour, idx) => (
                                        <p key={idx} className="text-black text-md sm:text-lg">
                                            <strong>{hour.day}:</strong> {hour.time}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-6  text-md sm:text-lg">
                                    <h4 className="font-semibold text-[#0b58a5]">Contact Us</h4>
                                    {branch.contact.phone && (
                                        <p className="text-black"><strong>Mobile:</strong> {branch.contact.phone.join(" / ")}</p>
                                    )}
                                    {branch.contact.email && (
                                        <p className="text-black"><strong>Email:</strong> {branch.contact.email.join(", ")}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

               
                </div>
            </div>

        </div>
    )
}

export default Patients