import { Link } from "react-router";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 px-4 md:px-8 py-8">
        <div>
          <img src={assets.Logo} alt="Logo" className="h-10 md:h-12" />
          <p className="mt-2 text-base text-gray-600 max-w-xs">
            A modern learning platform for spiritual growth and academic
            excellence.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Event
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                PartnerShip
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Donation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Resource</h3>
          <ul className="space-y-1">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Support
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>
              {/* <Mail className="inline mr-2 w-5 font-normal" /> */}
              <img
                src={assets.mailbox}
                alt="Mailbox"
                className="inline mr-2 w-5 h-5"
              />
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Support
              </Link>
            </li>
            <li>
              <img
                src={assets.phone}
                alt="Mailbox"
                className="inline mr-2 w-5 h-5"
              />
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                FAQs
              </Link>
            </li>
            <li>
              <img
                src={assets.location}
                alt="Mailbox"
                className="inline mr-2 w-5 h-5"
              />
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 px-4 md:px-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Remnant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
