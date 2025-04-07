
"use client"

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { useState } from 'react';


const jobs = [
    {
        title: "Front-End Developer",
        company: "Oliv",
        location: "Remote",
        type: "Full-time",
        salary: "$5000 - $10000/monthly",
        skills: ["Ethereum", "React", "JavaScript", "Solidity"],
    },
    {
        title: "Web3 Developer",
        company: "Axoni",
        location: "San Francisco",
        type: "Full-time",
        salary: "$9000 - $16000/monthly",
        skills: ["Solidity", "JavaScript", "GraphQL", "Backend"],
    },
    {
        title: "ReactJS Developer",
        company: "The Nano Foundation",
        location: "New York",
        type: "Full-time",
        salary: "$35000 - $48000/annually",
        skills: ["JavaScript", "React.js"],
    },
    {
        title: "Front-End Developer",
        company: "Oli Labs",
        location: "Spain",
        type: "Part-time",
        salary: "$35000 - $48000/annually",
        skills: ["Frontend Development"],
    },
    {
        title: "Front-End Developer",
        company: "Oliv",
        location: "Remote",
        type: "Full-time",
        salary: "$5000 - $10000/monthly",
        skills: ["Ethereum", "React", "JavaScript", "Solidity"],
    },
    {
        title: "Web3 Developer",
        company: "Axoni",
        location: "San Francisco",
        type: "Full-time",
        salary: "$9000 - $16000/monthly",
        skills: ["Solidity", "JavaScript", "GraphQL", "Backend"],
    },
    {
        title: "ReactJS Developer",
        company: "The Nano Foundation",
        location: "New York",
        type: "Full-time",
        salary: "$35000 - $48000/annually",
        skills: ["JavaScript", "React.js"],
    },
    {
        title: "Front-End Developer",
        company: "Oli Labs",
        location: "Spain",
        type: "Part-time",
        salary: "$35000 - $48000/annually",
        skills: ["Frontend Development"],
    },
    {
        title: "Front-End Developer",
        company: "Oliv",
        location: "Remote",
        type: "Full-time",
        salary: "$5000 - $10000/monthly",
        skills: ["Ethereum", "React", "JavaScript", "Solidity"],
    },
    {
        title: "Web3 Developer",
        company: "Axoni",
        location: "San Francisco",
        type: "Full-time",
        salary: "$9000 - $16000/monthly",
        skills: ["Solidity", "JavaScript", "GraphQL", "Backend"],
    },
    {
        title: "ReactJS Developer",
        company: "The Nano Foundation",
        location: "New York",
        type: "Full-time",
        salary: "$35000 - $48000/annually",
        skills: ["JavaScript", "React.js"],
    },
    {
        title: "Front-End Developer",
        company: "Oli Labs",
        location: "Spain",
        type: "Part-time",
        salary: "$35000 - $48000/annually",
        skills: ["Frontend Development"],
    }, {
        title: "Front-End Developer",
        company: "Oliv",
        location: "Remote",
        type: "Full-time",
        salary: "$5000 - $10000/monthly",
        skills: ["Ethereum", "React", "JavaScript", "Solidity"],
    },
    {
        title: "Web3 Developer",
        company: "Axoni",
        location: "San Francisco",
        type: "Full-time",
        salary: "$9000 - $16000/monthly",
        skills: ["Solidity", "JavaScript", "GraphQL", "Backend"],
    },
    {
        title: "ReactJS Developer",
        company: "The Nano Foundation",
        location: "New York",
        type: "Full-time",
        salary: "$35000 - $48000/annually",
        skills: ["JavaScript", "React.js"],
    },
    {
        title: "Front-End Developer",
        company: "Oli Labs",
        location: "Spain",
        type: "Part-time",
        salary: "$35000 - $48000/annually",
        skills: ["Frontend Development"],
    },
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
                            <h1 className="text-5xl font-extrabold text-shadow-lg ">Careers</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white h-[auto] p-6">
                <div className="max-w-[75%] m-auto bg-white rounded-lg p-2">
                    <h2 className="text-3xl font-bold text-[#0b58a5]  mb-6"></h2>
                    <div className="grid md:grid-cols-2 gap-5 items-center text-lg">

                        <div>
                            <Image
                                src="/seh_logo.png"
                                alt="Kenya Power Workers"
                                width={300}
                                height={300}
                                className="rounded-4xl shadow-md"
                            />
                        </div>
                        <div>
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

                <div className="max-w-6xl mx-auto py-10">
                    {/* Page Title */}
                    <h2 className="text-3xl font-bold text-center mb-6">Job Listings</h2>

                    {/* Search Bar */}
                    <div className="flex justify-center mb-6">
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
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <p className="text-gray-500">{job.company} - {job.location}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {job.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-blue-100 text-[#0b58a5] text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Job Type & Apply Button */}
                                <div className="items-center">
                                    <p className="text-lg text-black font-bold mb-2">{job.type}</p>
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="mt-4 px-4 py-2 bg-[#0b58a5] text-white rounded-xl hover:bg-blue-700" >
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
                                className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                            >
                                Prev
                            </button>

                            <span className="px-4 py-2 bg-gray-100 rounded-lg">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#0b58a5] text-white hover:bg-blue-700'}`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {isOpen && (

                <div 
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 flex items-center justify-center  z-100 backdrop-blur-sm bg-black/30">
                    <div className="  flex items-center justify-center">
                        <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
                            {/* Left Side - Job Details */}
                            <div className="p-8 bg-[#0b58a5] text-white flex flex-col justify-center">
                                <h2 className="text-3xl font-bold">Software Engineer</h2>
                                <p className="mt-2 text-gray-200">We are looking for a talented software engineer to join our dynamic team.</p>

                                <h3 className="mt-6 text-xl font-semibold">Responsibilities</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1">
                                    <li>Develop and maintain web applications.</li>
                                    <li>Collaborate with cross-functional teams.</li>
                                    <li>Write clean and efficient code.</li>
                                    <li>Debug and troubleshoot issues.</li>
                                </ul>

                                <h3 className="mt-6 text-xl font-semibold">Qualifications</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-200 space-y-1">
                                    <li>Bachelor’s degree in Computer Science or related field.</li>
                                    <li>Proficiency in JavaScript, React, and Node.js.</li>
                                    <li>Experience with databases like MySQL or MongoDB.</li>
                                    <li>Good problem-solving skills.</li>
                                </ul>
                            </div>

                            {/* Right Side - How to Apply */}
                            <div className="p-8 bg-white flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-gray-800">How to Apply</h2>
                                <p className="mt-4 text-gray-600">Send your cover letter and CV to:</p>
                                <p className="mt-2 text-blue-600 font-semibold">jobs@company.com</p>

                                <p className="mt-6 text-gray-600">Make sure to include:</p>
                                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
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