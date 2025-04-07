import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const footerSections = [
    {
      title: "Sabatia Eye Hospital",
      items: [
        <a
          key="base-hospital" // Added k
          href="/allpages/about"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Base Hospital: 6 km from Chavakali Market, Opp. Sabatia Deputy County Commissioners Office
        </a>,
        <a
          key="kisumu-clinic" // Added k
          href="/allpages/branches/kisumu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Kisumu Clinic: Milimani, Lodwar Road, next to Nightingale Hospital
        </a>,
        <a
          key="eldoret-clinic" // Added k
          href="/allpages/branches/eldoret"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Eldoret Clinic: Sagaas Centre, 4th Floor, Nandi Rd (Off Naivas MTRH RD Opp. AIC Fellowship Church)
        </a>,
      ],
    },
    {
      title: "Quick Links",
      items: [
        "Home",
        "About Us",
        "Our Services",
        "Hospitals",
        "Resources",
        "For Patients",
        "Education & Training",
        "Get Involved",
        "Contact Us",
        "Careers",
        "Tenders",
      ],
      links: [
        "/",
        "/allpages/about",
        "/allpages/services",
        "/allpages/hospitals",
        "/allpages/resources",
        "/allpages/patients",
        "/allpages/education",
        "/allpages/involved",
        "/allpages/contact",
        "/allpages/careers",
        "allpages/tenders"
      ],
    },
    {
      title: "Follow Us",
      items: [],
    },
    {
      title: "Contact Us",
      items: [],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 w-full max-w-full w-full">
      {/* Main container with background color and padding */}
      <div className="mx-auto px-6">
        {/* Grid layout for footer sections - responsive with 1, 2, or 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Loop through each footer section */}
          {footerSections.map((section, index) => (
            <div key={index}>
              {/* Section title */}
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>

              {/* List of items in the section */}
              <ul className="text-gray-400 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:text-gray-200">
                    {/* Check if the section has links and if the current item has a link */}
                    {section.links && section.links[i] ? (
                      <a href={section.links[i]} className="hover:text-white">
                        {item}
                      </a>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>

              {/* Conditional rendering for the "Follow Us" section */}
              {section.title === "Follow Us" && (
                <div className="flex flex-col space-y-2 mt-4">
                  {/* Facebook link */}
                  <a
                    href="https://www.facebook.com/sabatiaeyehospital"
                    className="text-gray-400 hover:text-white flex items-center space-x-2"
                  >
                    <FaFacebookF className="text-2xl" />
                    <span>: Sabatia Eye Hospital</span>
                  </a>
                  {/* Twitter link */}
                  <a
                    href="https://x.com/SabatiaEye"
                    className="text-gray-400 hover:text-white flex items-center space-x-2"
                  >
                    <FaXTwitter className="text-2xl" />
                    <span>: Sabatia Eye Hospital</span>
                  </a>
                  {/* YouTube link */}
                  <a
                    href="https://www.youtube.com/@sabatiaeyehospital8524"
                    className="text-gray-400 hover:text-white flex items-center space-x-2"
                  >
                    <FaYoutube className="text-2xl" />
                    <span>: Sabatia Eye Hospital</span>
                  </a>
                </div>
              )}

              {/* Conditional rendering for the "Contact Us" section */}
              {section.title === "Contact Us" && (
                <div className="space-y-4 mt-4 text-gray-400">
                  {/* Base Hospital contact information */}
                  <div className="p-4 rounded-md border border-gray-200">
                    <h4 className="text-lg">Base Hospital</h4>
                    <p>Phone: +254 723 721 316 / +254 733 731 013</p>
                    <p>Email: sabeyehosp@gmail.com, info@sabatiaeyehospital.org</p>
                  </div>
                  {/* Kisumu Clinic contact information */}
                  <div className="p-4 rounded-md border border-gray-200">
                    <h4 className="text-lg">Kisumu Clinic</h4>
                    <p>Phone: +254 776 169 926</p>
                    <p>Email: sabatia.kisumu@sabatiaeyehospital.org</p>
                  </div>
                  {/* Eldoret Clinic contact information */}
                  <div className="p-4 rounded-md border border-gray-200">
                    <h4 className="text-lg">Eldoret Clinic</h4>
                    <p>Phone: +254 707 650 804</p>
                    <p>Email: eldoret@sabatiaeyehospital.org</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer bottom section with copyright text */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sabatia Eye Hospital. All Rights Reserved.
        </div>
      </div>
    </footer>

  );
};

export default Footer;
