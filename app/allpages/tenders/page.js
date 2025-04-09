"use client"

import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';
import { useState } from 'react';


const Tenders = () => {

    const tenders = [
        {
            date: "2025-03-13",
            title: "Tender Ad - 1. IP-CCTV 2. Transformer Oil 3. Renovation Hamza 4. Cable 5. Cylindrical Tank 6. SCADA 7. Laptops 8. IP Phones",
            deadline: "2025-03-20",
            status: "Open",
            downloadLink: "#",
        },
        {
            date: "2025-03-13",
            title: "Invitation to Attend Supplier Conference - Youth Women PWD",
            deadline: "2025-03-18",
            status: "Closed",
            downloadLink: "#",
        },
        {
            date: "2025-03-04",
            title: "Tender Ad - 1. MCB Boxes 2. Power Txs 3. Tools Equip & Instrum for O&M 4. CORS Project",
            deadline: "2025-03-10",
            status: "Open",
            downloadLink: "#",
        },
        {
            date: "2025-03-03",
            title: "Procurement Of Automotive Fuel & Lubricants For Mandera And Elwak Depots For A Period Of Three Years",
            deadline: "2025-03-15",
            status: "Closed",
            downloadLink: "#",
        },
        {
            date: "2025-02-25",
            title: "Tender Ad - 1. Utility Poles 2. Transportation 3. 3rd Party Garages 4. Tx Repair Sheds 5. Test Equip",
            deadline: "2025-03-05",
            status: "Open",
            downloadLink: "#",
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const tendersPerPage = 10;

    const filteredTenders = tenders.filter((tender) =>
        tender.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastTender = currentPage * tendersPerPage;
    const indexOfFirstTender = indexOfLastTender - tendersPerPage;
    const currentTenders = filteredTenders.slice(indexOfFirstTender, indexOfLastTender);

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
                            <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Tenders</h1> {/* Added text shadow */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white h-auto p-6">
                <div className="w-full sm:max-w-[75%] m-auto  bg-white rounded-lg sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6"></h2>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 items-center ">

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
                           className='mt-3 sm:mt-6 md:mt-0  text-black text-md md:text-lg  leading-relaxed w-full'
                           >
                            <p className="text-black mb-4">
                                Sabatia Eye Hospital invites eligible suppliers and service providers to participate in our tendering process. We are committed to transparency and fairness in procurement.
                            </p>
                            <p className="text-black mb-4">
                                Opportunities include the supply of medical equipment, pharmaceuticals, and general services. Interested parties can access tender documents through our procurement office or here on our website.
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

                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="text-xl sm:text-2xl font-bold m-5">Latest Tenders</h1>
                    <input
                        type="text"
                        placeholder="Search tenders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border rounded-xl mb-4"
                    />
                    <div className="space-y-4">
                        {currentTenders.map((tender, index) => (
                            <div key={index} className="border-b pb-2">
                                <p className="text-black text-sm">Notice Date: {tender.date}</p>
                                <p className="text-md font-semibold">{tender.title}</p>
                                <p className="text-black text-sm">Deadline: {tender.deadline}</p>
                                <div className="text-black text-sm flex items-center">
                                    <span>Status:</span>
                                    <span
                                        className={`text-white text-sm px-3 py-1 rounded-md ml-2 ${tender.status === "Open" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    >
                                        {tender.status}
                                    </span>
                                </div>


                                <a href={tender.downloadLink} className="text-blue-600 underline">Download</a>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span>Page {currentPage}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => (indexOfLastTender < filteredTenders.length ? prev + 1 : prev))}
                            disabled={indexOfLastTender >= filteredTenders.length}
                            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tenders