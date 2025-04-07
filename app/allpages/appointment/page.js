"use client";

import { useState } from "react";
import Image from 'next/image';

const Appointment = () => {

    const [activeTab, setActiveTab] = useState("Booking");
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        appointmentMethod: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        hospital: "", // For Booking
        referenceNumber: "", // For Reschedule, Check, Cancel
        newDate: "", // For Reschedule
        rescheduleTime: "", // For Reschedule
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isWeekendOrHoliday = (date) => {
        const day = new Date(date).getDay();
        return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100  text-black">
            <div className="bg-white p-10 rounded-lg shadow-lg w-2xl max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-bold leading-relaxed">Sabatia Eye Hospital Booking Appointment Form</h1>
                    <Image
                        src="/seh_logo.png"
                        alt="Hospital Logo"
                        width={180} // You can specify the width here
                        height={120} // You can specify the height here
                        className="w-45 h-30" // Optional: You can still use Tailwind classes if needed
                    />
                </div>

                <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="flex justify-center gap-4 mb-6">
                {["Booking", "Reschedule", "Check", "Cancel"].map((tab) => (
                    <button
                        key={tab}
                        className={`border-2 border-blue-600 px-4 py-2 rounded-lg font-semibold ${
                            activeTab === tab ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "Booking" && (
                <form className="space-y-4">
                    <label className="block font-medium">Full Name:</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <label className="block font-medium">Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <label className="block font-medium">Choose Hospital:</label>
                    <select name="hospital" value={formData.hospital} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
                        <option value="" disabled>Select hospital</option>
                        <option value="Base Hospital">Base Hospital</option>
                        <option value="Kisumu Clinic">Kisumu Clinic</option>
                        <option value="Eldoret Clinic">Eldoret Clinic</option>
                    </select>

                    <label className="block font-medium">Appointment Method:</label>
                    <select name="appointmentMethod" value={formData.appointmentMethod} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
                        <option value="" disabled>Select method</option>
                        <option value="In-Person Visit">In-Person Visit</option>
                        <option value="Virtual Consultation">Virtual Consultation</option>
                    </select>

                    <label className="block font-medium">Service:</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
                        <option value="" disabled>Select service</option>
                        <option value="General Ophthalmology">General Ophthalmology</option>
                        <option value="Paediatric Ophthalmology">Paediatric Ophthalmology</option>
                        <option value="Cataract Surgery">Cataract Surgery</option>
                        <option value="Squint Surgery">Squint Surgery</option>
                        <option value="Low Vision Therapy">Low Vision Therapy</option>
                        <option value="Optical Services">Optical Services</option>
                        <option value="Eye Health Training">Eye Health Training</option>
                        <option value="Laser Treatment">Laser Treatment</option>
                        <option value="Vitreo Retinal Surgery">Vitreo Retinal Surgery</option>
                    </select>

                    <label className="block font-medium">Preferred Date:</label>
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <label className="block font-medium">Preferred Time:</label>
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
                        <option value="" disabled>Select time slot</option>
                        <option value="8:00am - 10:00am">8:00am - 10:00am</option>
                        <option value="11:00am - 1:00pm">11:00am - 1:00pm</option>
                        <option value="2:00pm - 4:00pm">2:00pm - 4:00pm</option>
                    </select>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Book Appointment</button>
                </form>
            )}

            {activeTab === "Reschedule" && (
                <form className="space-y-4">
                    <label className="block font-medium">Reference Number:</label>
                    <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <label className="block font-medium">New Date:</label>
                    <input type="date" name="newDate" value={formData.newDate} onChange={(e) => !isWeekendOrHoliday(e.target.value) && handleChange(e)} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <label className="block font-medium">Preferred Time:</label>
                    <select name="rescheduleTime" value={formData.rescheduleTime} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required>
                        <option value="" disabled>Select time slot</option>
                        <option value="8:00am - 10:00am">8:00am - 10:00am</option>
                        <option value="11:00am - 1:00pm">11:00am - 1:00pm</option>
                        <option value="2:00pm - 4:00pm">2:00pm - 4:00pm</option>
                    </select>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Reschedule</button>
                </form>
            )}

            {activeTab === "Check" && (
                <form className="space-y-4">
                    <label className="block font-medium">Reference Number:</label>
                    <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Check</button>
                </form>
            )}

            {activeTab === "Cancel" && (
                <form className="space-y-4">
                    <label className="block font-medium">Reference Number:</label>
                    <input type="text" name="referenceNumber" value={formData.referenceNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg" required />

                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">Cancel</button>
                </form>
            )}
        </div>
            </div>
        </div>
    );
};

export default Appointment;
