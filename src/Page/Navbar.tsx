import { Link, useLocation } from "react-router";
import { assets } from "../assets/assets";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const programPages = ["/skills-development-school", "/reform", "/ignite"];
  const isProgramActive = programPages.includes(location.pathname);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProgramDropdown(false);
      }
    };

    if (showProgramDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProgramDropdown]);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
        <img src={assets.Logo} alt="Logo" className="h-12" />
        </Link>
      </div>

      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <Link
          to="/"
          className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/" ? "text-cyan-500 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowProgramDropdown(!showProgramDropdown)}
            className={`flex items-center gap-1 hover:text-cyan-500 transition-colors cursor-pointer ${
              isProgramActive ? "text-cyan-500 font-semibold" : ""
            }`}
          >
            Programs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showProgramDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-3 px-4 min-w-[250px] z-50">
              <Link
                to="/skills-development-school"
                onClick={() => setShowProgramDropdown(false)}
                className={`block py-2 hover:text-cyan-600 transition-colors ${
                  location.pathname === "/skills-development-school"
                    ? "text-cyan-500"
                    : "text-black-500"
                }`}
              >
                Skills Development School
              </Link>
              <Link
                to="/reform"
                onClick={() => setShowProgramDropdown(false)}
                className={`block py-2 hover:text-cyan-600 transition-colors ${
                  location.pathname === "/reform"
                    ? "text-cyan-500 "
                    : "text-black-500"
                }`}
              >
                Reform
              </Link>
              <Link
                to="/ignite"
                onClick={() => setShowProgramDropdown(false)}
                className={`block py-2 hover:text-cyan-600 transition-colors ${
                  location.pathname === "/ignite"
                    ? "text-cyan-500 font-bold"
                    : "text-black-500"
                }`}
              >
                Ignite
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/event"
          className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/event" ? "text-cyan-500 font-semibold" : ""
          }`}
        >
          Events
        </Link>

       <Link to="/partnership" className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/partnership"
              ? "text-cyan-500 font-semibold"
              : ""
          }`}>
          Partnership
        </Link>
        <Link to="/donation" className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/donation"
              ? "text-cyan-500 font-semibold"
              : ""
          }`}>
          Donation
        </Link>

        <Link to="/course" className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/course"
              ? "text-cyan-500 font-semibold"
              : ""
          }`}>
          Courses
        </Link>


        <Link
          to="/contact"
          className={`hover:text-cyan-500 transition-colors ${
            location.pathname === "/contact"
              ? "text-cyan-500 font-semibold"
              : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="px-6 py-2 text-cyan-500 border border-cyan-500 rounded-full hover:bg-cyan-50 transition-colors"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
