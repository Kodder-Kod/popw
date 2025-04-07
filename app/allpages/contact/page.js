"use client";

import Navbar from "@/app/componets/navbar/page";
import React, { useState } from "react";


const Contact = () => {

    const [formData, setFormData] = useState({
        enquiryType: "Enquiry",
        name: "",
        email: "",
        mobile: "",
        remark: "",
        hospital: "",      // Added for Compliments, Complaints, and Others
        department: "",    // Added for Complaints
        subject: ""        // Added for Others
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value || "",  // Ensures empty value is handled
        }));
    };


    const handleTabChange = (tab) => {
        setFormData((prevData) => ({
            ...prevData,
            enquiryType: tab,
            hospital: tab === "Compliments" || tab === "Complaints" || tab === "Others" ? prevData.hospital : "",
            department: tab === "Complaints" ? prevData.department : "",
            subject: tab === "Others" ? prevData.subject : "",
        }));
    };



    return (
        <div>
            <div className=" h-[60vh] font-sans ">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-60 h-[50%] blur-sm" style={{ backgroundImage: "url('/seh_logo.png')" }}></div>
                <div className='h-full'>
                    {/* Navbar */}
                    <Navbar />

                    <div className="relative h-full flex items-center justify-start px-40">
                        {/* Centered Content */}
                        <div className="z-10 text-left text-black px-4">
                            <h1 className="text-5xl font-extrabold text-shadow-lg ">Contact Us</h1> {/* Added text shadow */}
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




                <div className="relative pt-5 pb-30">

                    {/* Blue Area */}
                    <div className="bg-[#0b58a5] shadow-lg rounded-3xl p-10 h-[70vh] max-w-7xl mx-auto relative">
                        {/* Wording */}
                        <div className="absolute top-1/4 left-10 text-white max-w-md">
                            <h1 className="text-4xl font-bold">Get in Touch</h1>
                            <p className="text-lg mt-2">
                                We’re here to help! Reach out with any inquiries, and we’ll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>


                    <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/4 bg-white shadow-lg rounded-3xl p-12 max-w-3xl w-full">
                        <p className="text-gray-600 text-base mb-6">
                            If you have any queries, feel free to reach out to us.
                        </p>

                        {/* Tabs */}
                        <div className="flex space-x-3 mb-6">
                            {["Enquiry", "Compliments", "Complaints", "Others"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-5 py-3 text-base rounded ${formData.enquiryType === tab ? "bg-[#0b58a5] text-white" : "bg-gray-200"
                                        }`}
                                    onClick={() => handleTabChange(tab)} // ✅ Ensure tab is passed here
                                >
                                    {tab}
                                </button>
                            ))}

                        </div>

                        {/* Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Show Enquiry Type Only for "Enquiry" */}

                            {/* Name & Email - Common for all */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border p-4 rounded w-full text-base"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-4 rounded w-full text-base"
                            />

                            {/* Mobile - Common for all */}
                            <div className="flex items-center border p-3 rounded w-full text-base">
                                <span className="mr-3">🇰🇪 +254</span>
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter Mobile No."
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="flex-1 outline-none"
                                />
                            </div>

                            {formData.enquiryType === "Enquiry" && (
                                <select
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    className="border p-3 rounded w-full text-base"
                                >
                                    <option value="">Select Enquiry Type</option>
                                    <option value="General">General</option>
                                    <option value="Medical">Medical</option>
                                </select>
                            )}


                            {/* Select Hospital for Compliments & Others */}
                            {(formData.enquiryType === "Compliments" || formData.enquiryType === "Others" || formData.enquiryType === "Complaints") && (
                                <select
                                    name="hospital"
                                    value={formData.hospital}
                                    onChange={handleChange}
                                    className="border p-3 rounded w-full text-base"
                                >
                                    <option value="">Select Hospital</option>
                                    <option value="Base_hosi">Base Hospital</option>
                                    <option value="ksm_clinic">Kisimu Clinic</option>
                                    <option value="eld_clinic">Eldoret Clinic</option>
                                </select>
                            )}

                            {/* Area of Concern for Complaints */}
                            {formData.enquiryType === "Complaints" && (
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Area of Concern (Department)"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="border p-4 rounded w-full text-base"
                                />
                            )}

                            {/* Subject for Others */}
                            {formData.enquiryType === "Others" && (
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="border p-4 rounded w-full text-base"
                                />
                            )}
                        </div>

                        {/* Remark */}
                        <textarea
                            name="remark"
                            placeholder="Please enter remark here"
                            value={formData.remark}
                            onChange={handleChange}
                            className="border p-4 rounded w-full mt-6 text-base"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            className="bg-[#0b58a5] text-white px-8 py-3 mt-6 rounded text-lg w-full"
                            onClick={() => console.log("Submit button clicked", formData)}
                        >
                            Submit
                        </button>


                    </div>



                </div>
            </div>
        </div>
    );
}

export default Contact;
