import Navbar from '@/app/componets/navbar/page';
import Image from 'next/image';



const faq = [
  {
    question: "What are the visiting hours at Sabatia Eye Hospital?",
    answer: "Our visiting hours are from 8:00 AM to 6:00 PM, Monday to Saturday. We recommend arriving early for consultations, as certain procedures may take longer."
  },
  {
    question: "How do I book an appointment?",
    answer: "Appointments can be booked via our website, by calling our reception desk at (XXX) XXX-XXXX, or in person at the hospital. We also offer online consultations for some services."
  },
  {
    question: "What documents do I need for an eye consultation?",
    answer: "For your consultation, please bring a valid government-issued ID, any previous eye prescriptions or medical records, and insurance details if applicable. New patients may also be required to complete a short health history form."
  },
  {
    question: "Does Sabatia Eye Hospital offer eye surgeries?",
    answer: "Yes, we offer a wide range of eye surgeries, including cataract surgery, LASIK vision correction, glaucoma treatments, and retina surgeries. Consultations with our ophthalmologists will help determine the right procedure for you."
  },
  {
    question: "What types of eye tests are available?",
    answer: "We provide several diagnostic tests, including Visual Acuity tests, slit-lamp exams, retinal scans, OCT (Optical Coherence Tomography), eye pressure tests (for glaucoma), and more. These help our doctors diagnose and monitor various eye conditions."
  },
  {
    question: "Is there a pharmacy at Sabatia Eye Hospital?",
    answer: "Yes, we have an in-house pharmacy located on the hospital premises. You can fill your prescriptions here, as well as purchase over-the-counter eye care products such as eye drops, glasses, and contact lenses."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept a variety of health insurance providers, including major national and local plans. It's always best to check with our billing department to confirm if your specific insurance is accepted, and for any co-pays or coverage details."
  },
  {
    question: "What should I do if I have an eye emergency?",
    answer: "In case of an eye emergency, please visit our emergency department immediately. We are equipped to handle injuries, sudden vision loss, infections, and other urgent conditions. You can also call our emergency hotline at (XXX) XXX-XXXX for guidance."
  },
  {
    question: "Do I need a referral to see a specialist?",
    answer: "While you can directly book an appointment with our general ophthalmologists, certain specialized services (like retinal treatment or LASIK) may require a referral from your primary healthcare provider or another specialist."
  },
  {
    question: "Can I get glasses or contact lenses at Sabatia Eye Hospital?",
    answer: "Yes, we offer comprehensive eye exams and fittings for glasses and contact lenses. Our on-site optical shop also provides a wide selection of frames and lenses, and our optometrists are available for personalized recommendations."
  },
  {
    question: "Is Sabatia Eye Hospital child-friendly?",
    answer: "Absolutely! We provide specialized pediatric eye care, including eye exams for children of all ages. Our pediatric ophthalmologists are experienced in handling young patients, and our hospital environment is designed to be comfortable for children."
  },
  {
    question: "How much do eye consultations cost?",
    answer: "Consultation fees vary depending on the type of service required. A general eye consultation typically costs between $X and $Y. We also offer packages for routine eye exams and specialized consultations. For exact pricing, please contact our reception desk."
  },
  {
    question: "What is the wait time for an appointment?",
    answer: "Wait times for appointments can vary depending on the day and time. We strive to accommodate all patients as quickly as possible. Typically, you can expect to wait anywhere from 10-30 minutes for an appointment, though peak hours may result in longer wait times."
  },
  {
    question: "Do you offer any eye care packages?",
    answer: "Yes, we offer various eye care packages that include routine exams, screenings for common eye diseases (like glaucoma or cataracts), and follow-up consultations. These packages are designed to provide comprehensive care at an affordable rate."
  }
];


const Questions = () => {

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
              <h1 className="text-3xl md:text-5xl font-extrabold text-shadow-lg ">Frequently Asked Questions</h1> {/* Added text shadow */}
            </div>
          </div>
        </div>
      </div>


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

        <div className="grid md:grid-cols-2 gap-10 items-center  max-w-7xl mx-auto rounded-2xl sm:p-0 p-6 ">
          <div className="sm:mb-6">
            {faq.slice(0, 7).map((step, index) => (
              <div key={index} className='mb-10 sm:mb-20'>
                <p className="text-[#0b58a5]  mb-2 sm:text-xl text:lg ">
                  <strong>{index + 1}. {step.question}</strong>
                </p>
                <p className="text-black mb-4 text:md ">{step.answer}</p>
              </div>
            ))}
          </div>

          <div>
            {faq.slice(7).map((step, index) => (
              <div key={index + 8} className='sm:mb-20 mb-10'>
                <p className="text-[#0b58a5]  mb-2 sm:text-xl text:lg ">
                  <strong >{index + 8}. {step.question}</strong>
                </p>
                <p className="text-black mb-4 text:md">{step.answer}</p>
              </div>
            ))}
          </div>
        </div>


      </div>

    </div>
  )
}

export default Questions