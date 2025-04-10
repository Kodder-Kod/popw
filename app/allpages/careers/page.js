
"use client"

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { useState } from 'react';


const jobs = [
    {
        title: "Ophthalmologist",
        company: "Sabatia Eye Hospital",
        location: "Sabatia",
        type: "Full-time",
        salary: "KSh 500,000 - KSh 800,000 monthly",
        skills: ["Ophthalmic Surgery", "Patient Care", "Diagnostic Tools"],
        description: "We are looking for a talented ophthalmologist to join our specialized team of eye care professionals.",
        responsibilities: [
            "Perform eye surgeries and treatments.",
            "Examine patients' eyes and diagnose conditions.",
            "Prescribe glasses or contact lenses when necessary.",
            "Collaborate with other medical professionals for comprehensive patient care."
        ],
        qualifications: [
            "Medical degree with specialization in Ophthalmology.",
            "Experience in performing advanced eye surgeries.",
            "Strong diagnostic skills and ability to work under pressure.",
            "Good communication and interpersonal skills."
        ]
    },
    {
        title: "Nurse (Ophthalmic Ward)",
        company: "Sabatia Eye Hospital",
        location: "Kisumu (KSM)",
        type: "Full-time",
        salary: "KSh 50,000 - KSh 75,000 monthly",
        skills: ["Patient Monitoring", "IV Therapy", "Pre/Post-op Care"],
        description: "We are seeking a compassionate and dedicated nurse to work in our ophthalmic ward and assist with patient care.",
        responsibilities: [
            "Monitor patient progress and vital signs.",
            "Assist in eye exams and surgical procedures.",
            "Administer medications as prescribed.",
            "Educate patients about eye care and post-operative instructions."
        ],
        qualifications: [
            "Registered Nurse (RN) with a valid license.",
            "Experience in ophthalmic or surgical nursing.",
            "Strong communication and patient care skills.",
            "Ability to work in a fast-paced, high-pressure environment."
        ]
    },
    {
        title: "Pharmacist",
        company: "Sabatia Eye Hospital",
        location: "Eldoret",
        type: "Full-time",
        salary: "KSh 80,000 - KSh 120,000 monthly",
        skills: ["Prescription Management", "Drug Interaction Knowledge", "Inventory Control"],
        description: "We are looking for an experienced pharmacist to manage the dispensing of medications and provide patient counseling.",
        responsibilities: [
            "Dispense medications as prescribed by doctors.",
            "Provide patients with advice on the proper use of medications.",
            "Maintain accurate medication records.",
            "Collaborate with other healthcare providers to optimize patient care."
        ],
        qualifications: [
            "Bachelor’s degree in Pharmacy (BPharm).",
            "Valid pharmacist license.",
            "Experience in a hospital or clinical setting.",
            "Strong attention to detail and communication skills."
        ]
    },
    {
        title: "Cleaning Staff",
        company: "Sabatia Eye Hospital",
        location: "Sabatia",
        type: "Shift-based",
        salary: "KSh 15,000 - KSh 25,000 monthly",
        skills: ["Sanitation Procedures", "Attention to Detail", "Disinfection Protocols"],
        description: "We are looking for a reliable cleaning staff member to maintain the cleanliness and hygiene of the hospital environment.",
        responsibilities: [
            "Clean patient rooms, common areas, and medical equipment.",
            "Disinfect high-touch surfaces regularly.",
            "Ensure all hospital areas are tidy and organized.",
            "Report any maintenance issues to the relevant authorities."
        ],
        qualifications: [
            "Previous experience in hospital or commercial cleaning.",
            "Knowledge of cleaning chemicals and disinfectants.",
            "Ability to follow cleaning protocols and standards.",
            "Good physical stamina and attention to detail."
        ]
    },
    {
        title: "Cook (Patient Meals)",
        company: "Sabatia Eye Hospital",
        location: "Kisumu (KSM)",
        type: "Part-time",
        salary: "KSh 25,000 - KSh 40,000 monthly",
        skills: ["Meal Prep", "Dietary Restrictions", "Food Safety"],
        description: "We need a part-time cook to prepare nutritious meals for patients in accordance with dietary needs.",
        responsibilities: [
            "Prepare and cook meals for patients based on dietary requirements.",
            "Maintain cleanliness in the kitchen and food preparation areas.",
            "Monitor food inventory and assist with ordering supplies.",
            "Ensure food safety and hygiene standards are met."
        ],
        qualifications: [
            "Experience in cooking in a hospital or restaurant environment.",
            "Knowledge of food safety and hygiene protocols.",
            "Ability to follow dietary restrictions and meal plans.",
            "Good organizational and time-management skills."
        ]
    },
    {
        title: "Business Development Officer",
        company: "Sabatia Eye Hospital",
        location: "Eldoret",
        type: "Full-time",
        salary: "KSh 100,000 - KSh 150,000 monthly",
        skills: ["Sales Strategy", "Partnerships", "Healthcare Marketing"],
        description: "We are seeking a dynamic business development officer to help grow the hospital's services and partnerships.",
        responsibilities: [
            "Identify and pursue new business opportunities.",
            "Develop relationships with potential partners and clients.",
            "Collaborate with marketing teams to promote hospital services.",
            "Monitor market trends and competitor activities."
        ],
        qualifications: [
            "Bachelor’s degree in Business Administration, Marketing, or related field.",
            "Proven experience in business development or sales.",
            "Strong negotiation and communication skills.",
            "Ability to work independently and meet targets."
        ]
    },
    {
        title: "Front-End Developer",
        company: "Sabatia Eye Hospital",
        location: "Sabatia",
        type: "Full-time",
        salary: "KSh 100,000 - KSh 150,000 monthly",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        description: "We are looking for a front-end developer to help improve our hospital's website and patient portal interface.",
        responsibilities: [
            "Develop and maintain the hospital’s website and web applications.",
            "Collaborate with the design team to ensure a user-friendly experience.",
            "Write clean and efficient code.",
            "Test and debug applications to ensure functionality."
        ],
        qualifications: [
            "Bachelor’s degree in Computer Science or related field.",
            "Experience with JavaScript, React, HTML, and CSS.",
            "Familiarity with web development tools and libraries.",
            "Good problem-solving skills and attention to detail."
        ]
    },
    {
        title: "Front Desk Receptionist",
        company: "Sabatia Eye Hospital",
        location: "Eldoret",
        type: "Part-time",
        salary: "KSh 20,000 - KSh 30,000 monthly",
        skills: ["Customer Service", "Scheduling", "Communication"],
        description: "We are seeking a friendly and professional front desk receptionist to assist patients and visitors.",
        responsibilities: [
            "Greet patients and visitors with a friendly demeanor.",
            "Schedule patient appointments and manage the appointment calendar.",
            "Answer phone calls and direct inquiries.",
            "Handle patient check-in and check-out procedures."
        ],
        qualifications: [
            "Previous experience in customer service or receptionist roles.",
            "Strong communication and organizational skills.",
            "Ability to work under pressure and multitask.",
            "Basic knowledge of hospital procedures is a plus."
        ]
    }
];



const Career = () => {

    const [isOpen, setIsOpen] = useState(false); // Modal state

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6; // Number of jobs per page

    // Filter jobs based on search input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);




    const [selectedJob, setSelectedJob] = useState(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setIsOpen(true);
    };

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
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Careers</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white h-[auto] p-6">
                <div className="w-full sm:max-w-[75%] m-auto bg-white rounded-lg sm:p-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b58a5]  mb-6"></h2>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16  items-center">

                        <div>
                            <Image
                                src="/seh_logo.png"
                                alt="Seh_pic"
                                width={300}
                                height={300}
                                className="rounded-3xl shadow-lg hover:scale-105 transition duration-300 w-[100%] sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto"

                            />
                        </div>
                        <div
                            className='mt-3 sm:mt-6 md:mt-0  text-black text-md  leading-relaxed w-full'
                        >
                            <p className="text-black mb-4">
                                Sabatia Eye Hospital is committed to excellence in eye care and is always looking for talented professionals to join our team. We offer a dynamic work environment where passion and expertise come together to transform lives.
                            </p>
                            <p className="text-black mb-4">
                                Our hospital provides exciting career opportunities across various fields, including ophthalmology, nursing, administration, and support services.
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

                <div className="max-w-6xl mx-auto sm:py-3 p-2">
                    {/* Page Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Job Listings</h2>

                    {/* Search Bar */}
                    <div className="flex justify-center mb-6 sm:px-0 px-6">
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-xl p-3 border border-gray-800 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-3">
                        {currentJobs.length > 0 ? currentJobs.map((job, index) => (
                            <div key={index} className="bg-white shadow-2xl p-6 rounded-2xl flex justify-between items-center">
                                {/* Job Details */}
                                <div>
                                    <h3 className="text-lg sm:text-md font-semibold">{job.title}</h3>
                                    <p className="text-gray-500 text-sm">{job.company} - {job.location}</p>
                                    <div className="mt-1 sm:mt-2 flex flex-wrap gap-1">
                                        {job.skills.map((skill, i) => (
                                            <span key={i} className="sm:px-3 px-2 py-1 bg-blue-100 text-[#0b58a5] text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Job Type & Apply Button */}
                                <div className="items-center">
                                    <p className="text-md text-black font-bold mb-2">{job.type}</p>


                                    <button
                                        onClick={() => handleApplyClick(jobs[index])} // Replace with dynamic job selection
                                        className="mt-4 px-4 py-2 bg-[#0b58a5] text-white rounded-xl hover:bg-blue-100 hover:text-black text-md"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        )) : (
                            <p className="text-center text-gray-500">No jobs found.</p>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-6 space-x-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-100 hover:text-black'}`}
                            >
                                Prev
                            </button>

                            <span className="px-4 py-2 bg-gray-100 rounded-lg">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#0b58a5] text-white hover:bg-blue-100 hover:text-black'}`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {isOpen && selectedJob && (

                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 flex items-center justify-center z-100 backdrop-blur-sm bg-black/30 sm:overflow-hidden  ">
                    <div className="flex items-center justify-center overflow-y-auto max-h-[95vh]  sm:p-0 pt-100">
                        <div className="bg-white shadow-lg rounded-2xl  overflow-hidden max-w-4xl w-full  grid grid-cols-1 md:grid-cols-2">
                            {/* Left Side - Job Details */}

                            <div className="p-8 bg-[#0b58a5] text-white flex flex-col justify-center ">
                                <h2 className="sm:text-2xl text-xl font-bold">{selectedJob.title}</h2>
                                <p className="mt-2 text-gray-200 text-md">{selectedJob.description}</p>

                                <h3 className="mt-6  text-lg sm:text-xl font-semibold">Responsibilities</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1 text-md">
                                    {selectedJob.responsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <h3 className="mt-6 text-lg sm:text-xl font-semibold">Qualifications</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1 text-md">
                                    {selectedJob.qualifications.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side - How to Apply */}
                            <div className="p-8 bg-white flex flex-col justify-center">
                                <h2 className="sm:text-2xl text-xl font-bold text-gray-800">How to Apply</h2>
                                <p className="mt-4 text-gray-600 text-md">Send your cover letter and CV to:</p>
                                <p className="mt-2 text-blue-600 font-semibold text-md">jobs@company.com</p>

                                <p className="mt-6 text-gray-600 text-md">Make sure to include:</p>
                                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 text-md">
                                    <li>Your updated CV.</li>
                                    <li>A cover letter explaining why you’re a great fit.</li>
                                    <li>Links to past projects (if available).</li>
                                </ul>


                            </div>
                        </div>
                    </div>

                </div>

            )}
        </div>
    )
}

export default Career