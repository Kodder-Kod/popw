"use client";

import Navbar from "@/app/componets/navbar/page";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const news = [
  {
    title: "World Glaucoma Week",
    description: "Join us in raising awareness about glaucoma, its prevention, and early detection to prevent vision loss.",
    image: "/seh_logo.png",
    link: "#",
  },
  {
    title: "Eye Camp Mbale",
    description: "Providing free eye check-ups, consultations, and treatments for the community in Mbale.",
    image: "/seh_logo.png",
    link: "#",
  },
  {
    title: "Eye Camp Emuhaya",
    description: "Bringing quality eye care services, including screenings and free medication, to residents of Emuhaya.",
    image: "/seh_logo.png",
    link: "#",
  },
  {
    title: "Cataract Surgery Camp",
    description: "Offering free cataract surgeries for those in need, ensuring better vision and improved quality of life.",
    image: "/seh_logo.png",
    link: "#",
  },
  {
    title: "Vision Screening Program",
    description: "Conducting eye tests and vision screenings to detect early signs of eye conditions and provide necessary treatment.",
    image: "/seh_logo.png",
    link: "#",
  },
];



const partners = [
  { name: "ATS", image: "/seh_logo.png" },
  { name: "Geminia Life Insurance", image: "/seh_logo.png" },
  { name: "Tata Chemicals Limited", image: "/seh_logo.png" },
  { name: "Social Health Authority", image: "/seh_logo.png" },
  { name: "Sarova Hotels & Resorts", image: "/seh_logo.png" },
  { name: "Tata Chemicals Limited", image: "/seh_logo.png" },
  { name: "Social Health Authority", image: "/seh_logo.png" },
  { name: "Sarova Hotels & Resorts", image: "/seh_logo.png" },
  { name: "Tata Chemicals Limited", image: "/seh_logo.png" },
  { name: "Social Health Authority", image: "/seh_logo.png" },
  { name: "Sarova Hotels & Resorts", image: "/test.jpg" },
];


const services = [
  { title: "Our Services", description: "Explore the wide range of eye care services .", image: "/seh_logo.png", link: "/allpages/services", },
  { title: "Book Appointment", description: "Schedule an appointment with our specialists ", image: "/seh_logo.png", link: "/allpages/appointment", },
  { title: "Education & Training", description: "Learn about eye health to protect your vision.", image: "/seh_logo.png", link: "/allpages/education", },
  { title: "Get Involved", description: "Join us in our mission to provide better eye care ", image: "/seh_logo.png", link: "/allpages/involved", },
];


const slides = [
  {
    image: "/seh_logo.png",
    title: "Our Dedicated Team",
    text: "Meet the compassionate and skilled professionals at Sabatia Eye Hospital, working tirelessly to provide top-tier eye care services.",
  },
  {
    image: "/seh_logo.png",
    title: "Advanced Eye Care Solutions",
    text: "Discover the innovative technologies and treatments used by our expert staff to restore and protect vision.",
  },
  {
    image: "/seh_logo.png",
    title: "Patient-Centered Care",
    text: "Our team of doctors, nurses, and specialists focus on delivering personalized eye care tailored to each patient’s needs.",
  },
  {
    image: "/seh_logo.png",
    title: "Commitment to Excellence",
    text: "With years of expertise, Sabatia Eye Hospital’s staff ensures the highest standards of care in every treatment and procedure.",
  },
  {
    image: "/seh_logo.png",
    title: "A Trusted Eye Care Provider",
    text: "Our dedicated team is committed to improving the eye health of the community, with patient satisfaction at the heart of everything we do.",
  },
];



const Homepage = () => {


  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);


  return (

    <div className="w-screen"  >

      <div className="h-[80vh] font-sans relative w-full">

        {/* Background & Content Swiper */}

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center h-full"
                style={{ backgroundImage: `url('${slide.image}')` }}>
              </div>


              {/* Centered Content */}
              <div className="relative h-full flex items-center justify-start px-4 sm:px-10 md:px-20 lg:px-40">

                <div className="z-10 text-left text-white px-4 mt-40  bg-black/40 backdrop-blur-lg rounded-xl h-[28vh]  ">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-shadow-lg mt-2">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-shadow">
                    {slide.text}
                  </p>

                  <button className="mt-6 bg-[#0b58a5] py text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>


        {/* Navbar (Fixed) */}
        <div>
          <Navbar />
        </div>
      </div>

      {/* Quick services section*/}

      <section ref={sectionRef} className="py-10 px-6 text-center bg-white shadow-inner">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">

          {services.map((service, index) => (
            <motion.a
              href={service.link}  // Link for the motion div
              target="_blank"      // Opens the link in a new tab
              key={index}
              className="p-6 bg-gray-100 shadow-md rounded-2xl hover:shadow-lg transition duration-300 border border-gray-200 sm:h-24 md:h-48  lg:h-56 text-left bg-cover bg-center relative flex flex-col hover:scale-105"

              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%), url(${service.image})`,
              }}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {/* Title at the top */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white p-2 rounded-lg inline-block mt-10">

                {service.title}
              </h3>

              {/* Description hidden on mobile */}
              <p className="hidden sm:inline-block text-white p-2 rounded-lg text-base sm:text-lg">
                {service.description}
              </p>

            </motion.a>

          ))}

        </div>
      </section>

      {/* Who are we */}

      <div
        className="bg-white h-auto p-1 sm:p-4 md:p-6"

      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full sm:max-w-[85%] m-auto bg-white rounded-lg sm:p-8"


        >
          <h2 className="text-2xl md:text-3xl  font-bold text-[#0b58a5] mb-6">
            Who We Are
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-16  items-center text-base sm:text-lg px-4 sm:px-6 lg:px-12 py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full mx-auto"
            >
              <Image
                src="/seh_logo.png"
                alt="who we are"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 w-[100%] sm:w-[95%] md:max-w-lg lg:max-w-full mx-auto"


              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className=" mt-3 sm:mt-6 md:mt-0 text-black text-md sm:text-lg  leading-relaxed w-full"
            >
              <p className="text-black mb-4 leading-relaxed">
                <span className="font-semibold">Sabatia Eye Hospital</span> is a leading <span className="font-semibold">not-for-profit</span> and independent referral eye hospital based in the western part of Kenya. As one of the few tertiary eye hospitals located in rural Kenya, it serves an estimated <span className="font-semibold">15 million people</span>.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                These regions include the North Rift, western Kenya, and the Lake Basin, covering <span className="font-semibold">17 counties</span>. The hospital extends its services through <span className="font-semibold">outreach campaigns</span>, made possible by strategic partnerships and collaborative initiatives.
              </p>
              <p className="text-black leading-relaxed">
                In addition to healthcare services, Sabatia Eye Hospital offers <span className="font-semibold">competency-based training</span> in various ophthalmological courses. To efficiently fulfill its mission, the hospital is structured into three key departments: <span className="font-semibold">Clinical, Finance & Administration, and Training</span>.
              </p>
            </motion.div>
          </div>



        </motion.div>
      </div>


      {/* The News Room */}

      <div className="relative w-full h-auto bg-blue-100 py-8">
        <div className="absolute inset-0  overflow-hidden">
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

        <div className="h-auto bg-blue-100 ">
          <div className="w-[85%] mx-auto">
            <h2 className="text-2xl md:text-3xl  font-bold text-black text-center mb-6 relative z-10">Latest Events & News</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10 relative z-10">
              {news.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-2xl rounded-2xl"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={180} // You can specify the width here
                    height={120}
                    className="w-full h-48 md:56 object-cover rounded-t-2xl mb-4"
                  />

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0b58a5] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="text-blue-600 font-semibold mt-3 sm:mt-4 inline-block text-sm sm:text-base"
                    >
                      Learn more →
                    </a>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>


      </div>

      {/* Our Partners */}

      <div className="bg-white py-12 px-6  overflow-hidden">
        <h2 className="text-2xl md:text-3xl  font-bold text-[#0b58a5] text-center  mb-2 md:mb-15">Our Partners</h2>
        <div className="relative w-full flex overflow-hidden mb-0  md:my-5 ">
          {/* Mobile Grid View */}
          <div className="grid grid-cols-3 gap-2 px-2 sm:hidden">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.image}
                alt={partner.name}
                width={180}
                height={120}
                className="h-20 object-contain mx-auto"
              />
            ))}
          </div>

          {/* Scrolling View for Tablet and Up */}
      
          <motion.div
            className="hidden sm:flex min-w-full"
            animate={{ x: ["0%", "-100%"] }} // Move only half the duplicated content
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <Image key={index} src={partner.image} alt={partner.name} width={180} // You can specify the width here
                height={120} className="h-20 md:h-28 object-contain mx-4" />
            ))}
          </motion.div>

        </div>
      </div>

    </div>
  );
}


export default Homepage