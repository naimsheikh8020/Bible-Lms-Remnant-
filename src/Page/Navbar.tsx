import { Link, useLocation } from "react-router";
import { assets } from "../assets/assets";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileProgramDropdown, setShowMobileProgramDropdown] =
    useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false);
    setShowMobileProgramDropdown(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={assets.Logo} alt="Logo" className="h-10 md:h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
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
              onClick={() => setShowProgramDropdown((x) => !x)}
              className={`flex items-center gap-1 hover:text-cyan-500 transition-colors cursor-pointer ${
                isProgramActive ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              Programs
              <ChevronDown className="w-4 h-4" />
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
              location.pathname === "/event"
                ? "text-cyan-500 font-semibold"
                : ""
            }`}
          >
            Events
          </Link>

          <Link
            to="/partnership"
            className={`hover:text-cyan-500 transition-colors ${
              location.pathname === "/partnership"
                ? "text-cyan-500 font-semibold"
                : ""
            }`}
          >
            Partnership
          </Link>
          <Link
            to="/donation"
            className={`hover:text-cyan-500 transition-colors ${
              location.pathname === "/donation"
                ? "text-cyan-500 font-semibold"
                : ""
            }`}
          >
            Donation
          </Link>

          <Link
            to="/course"
            className={`hover:text-cyan-500 transition-colors ${
              location.pathname === "/course"
                ? "text-cyan-500 font-semibold"
                : ""
            }`}
          >
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

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden text-gray-700 hover:text-cyan-500 transition-colors"
        >
          {showMobileMenu ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              <img src={assets.Logo} alt="Logo" className="h-10" />
            </Link>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="text-gray-700 hover:text-cyan-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`hover:text-cyan-500 transition-colors ${
                location.pathname === "/" ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() =>
                  setShowMobileProgramDropdown(!showMobileProgramDropdown)
                }
                className={`flex items-center justify-between w-full hover:text-cyan-500 transition-colors ${
                  isProgramActive ? "text-cyan-500 font-semibold" : ""
                }`}
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showMobileProgramDropdown ? "rotate-180" : ""}`}
                />
              </button>
              {showMobileProgramDropdown && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link
                    to="/skills-development-school"
                    className={`py-2 hover:text-cyan-600 transition-colors ${
                      location.pathname === "/skills-development-school"
                        ? "text-cyan-500 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Skills Development School
                  </Link>
                  <Link
                    to="/reform"
                    className={`py-2 hover:text-cyan-600 transition-colors ${
                      location.pathname === "/reform"
                        ? "text-cyan-500 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Reform
                  </Link>
                  <Link
                    to="/ignite"
                    className={`py-2 hover:text-cyan-600 transition-colors ${
                      location.pathname === "/ignite"
                        ? "text-cyan-500 font-semibold"
                        : "text-gray-700"
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
                location.pathname === "/event"
                  ? "text-cyan-500 font-semibold"
                  : ""
              }`}
            >
              Events
            </Link>

            <Link
              to="/partnership"
              className={`hover:text-cyan-500 transition-colors ${
                location.pathname === "/partnership"
                  ? "text-cyan-500 font-semibold"
                  : ""
              }`}
            >
              Partnership
            </Link>

            <Link
              to="/donation"
              className={`hover:text-cyan-500 transition-colors ${
                location.pathname === "/donation"
                  ? "text-cyan-500 font-semibold"
                  : ""
              }`}
            >
              Donation
            </Link>

            <Link
              to="/course"
              className={`hover:text-cyan-500 transition-colors ${
                location.pathname === "/course"
                  ? "text-cyan-500 font-semibold"
                  : ""
              }`}
            >
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

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 mt-auto">
              <Link
                to="/login"
                className="px-6 py-2 text-center text-cyan-500 border border-cyan-500 rounded-full hover:bg-cyan-50 transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 text-center text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
