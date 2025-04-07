"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);


  // Scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown visibility with a delay
  const handleMouseEnter = (setOpen) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpen(true);
  };

  const handleMouseLeave = (setOpen) => {
    setDropdownTimeout(setTimeout(() => setOpen(false), 300)); // Delay hiding
  };

  return (
    <nav>
      {/**  desktop view navbar */}
      <div className="flex items-center justify-center">
        <div
          className={`  bg-[#0b58a5]  py-2 px-4 hidden lg:flex justify-around items-center text-white text-md transition-all duration-300 z-50 
          ${isScrolled ? "w-full fixed top-0 rounded-none z-50" : "top-10 fixed w-8/10 rounded-t-xl"}`}
        >
          <a href="/allpages/patients">For Patients</a>
          <a href="/allpages/careers">Careers</a>
          <a href="/allpages/tenders">Tenders</a>
          <a href="/allpages/questions">FAQs</a>
          <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
            USSD *334*200211*
          </a>

        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className={`bg-white px-4 hidden  lg:flex justify-around items-center text-md transition-all duration-300 z-50 
          ${isScrolled ? "w-full fixed top-10 rounded-none shadow-xl z-50" : "top-20 fixed w-8/10 rounded-b-xl shadow-xl"}`}
        >
          <a href="/allpages/home">
            <img src="/seh_logo.png" alt="logo" style={{ width: "130px", height: "70px" }} />
          </a>
          <a href="/allpages/home">Home</a>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setAboutOpen)}
            onMouseLeave={() => handleMouseLeave(setAboutOpen)}
          >
            <a href="/allpages/about">
              <div className="flex items-center">
                About Us
                <FaChevronDown className="ml-1 w-4 h-4" />
              </div>
            </a>
            {aboutOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-md p-2">
                <a href="/allpages/about/board" className="block px-4 py-2 hover:bg-gray-100">
                  Board
                </a>
                <a href="/allpages/about/management" className="block px-4 py-2 hover:bg-gray-100">
                  Management
                </a>
              </div>
            )}
          </div>

          <a href="/allpages/services">Services</a>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setBranchesOpen)}
            onMouseLeave={() => handleMouseLeave(setBranchesOpen)}
          >
            <a href="/allpages/branches">
              <div className="flex items-center">
                Branches
                <FaChevronDown className="ml-1 w-4 h-4" />
              </div>
            </a>
            {branchesOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded-md p-2">
                <a href="/allpages/branches/kisumu" className="block px-4 py-2 hover:bg-gray-100">
                  Kisumu
                </a>
                <a href="/allpages/branches/eldoret" className="block px-4 py-2 hover:bg-gray-100">
                  Eldoret
                </a>
              </div>
            )}
          </div>

          <a href="/allpages/media">Media</a>
          <a href="/allpages/education">Education & Training</a>
          <a href="/allpages/involved">Get Involved</a>
          <a href="/allpages/contact">Contact Us</a>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-4 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/**  Mobile and tablet view navbar */}
        <div className="bg-[#0b58a5] text-white fixed top-0 w-full z-50 shadow-lg  block lg:hidden">

        <div className="flex justify-around items-center py-2 border-b border-gray-200">
          <a href="/allpages/patients" className="text-white hover:text-gray-300">For Patients</a>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">USSD *334*200211* </span>
        </div>

        <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            <FaBars size={24} />
          </button>
          <div className="flex justify-center w-full">
            <img src="/seh_logo.png" alt="logo" className="h-16" />
          </div>
          <div className="flex gap-2 items-center">
            <FaSearch size={20} className="text-black" />
          </div>
        </div>

        {menuOpen && (
          <div className="bg-gray-50 p-4 shadow-xl text-black rounded-lg  block lg:hidden">

            <a href="/allpages/home" className="block py-2 hover:bg-gray-300 rounded">Home</a>
            <div className="flex items-center justify-between py-2 hover:bg-gray-300 rounded cursor-pointer" onClick={() => setAboutOpen(!aboutOpen)}>
              <span>About Us</span>
              <FaChevronDown className="ml-1 w-4 h-4" />
            </div>
            {aboutOpen && (
              <div className="pl-6 bg-gray-400 rounded-md">
                <a href="/allpages/about/board" className="block py-1 hover:bg-gray-300">Board</a>
                <a href="/allpages/about/management" className="block py-1 hover:bg-gray-300">Management</a>

              </div>
            )}
            <a href="/allpages/services" className="block py-2 hover:bg-gray-300 rounded">Services</a>
            <div className="flex items-center justify-between py-2 hover:bg-gray-300 rounded cursor-pointer" onClick={() => setBranchesOpen(!branchesOpen)}>
              <span>Branches</span>
              <FaChevronDown className="ml-1 w-4 h-4" />
            </div>
            {branchesOpen && (
              <div className="pl-6 bg-gray-400 rounded-md">
                <a href="/allpages/branches/kisumu" className="block py-1 hover:bg-gray-300">Kisumu</a>
                <a href="/allpages/branches/eldoret" className="block py-1 hover:bg-gray-300">Eldoret</a>
              </div>
            )}

            <a href="/allpages/media" className="block py-2 hover:bg-gray-300 rounded">Media</a>
            <a href="/allpages/education" className="block py-2 hover:bg-gray-300 rounded">Education & Training</a>
            <a href="/allpages/involved" className="block py-2 hover:bg-gray-300 rounded">Get Involved</a>
            <a href="/allpages/patients" className="block py-2 hover:bg-gray-300 rounded">For Patients</a>
            <a href="/allpages/careers" className="block py-2 hover:bg-gray-300 rounded">Careers</a>
            <a href="/allpages/tenders" className="block py-2 hover:bg-gray-300 rounded">Tenders</a>
            <a href="/allpages/questions" className="block py-2 hover:bg-gray-300 rounded">FAQs</a>
            <a href="/allpages/contact" className="block py-2 hover:bg-gray-300 rounded">Contact Us</a>
          </div>
        )}


      </div>
    </nav>
  );
};

export default Navbar;
