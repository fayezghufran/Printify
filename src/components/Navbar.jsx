import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-white shadow-md border-b border-gray-200">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-3" src={logo} alt="logo" />
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              SoftEdge
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 border border-blue-500 rounded-md text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-teal-500 py-2 px-4 rounded-md text-white hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
            >
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle navigation menu">
              {mobileDrawerOpen ? (
                <X className="text-gray-900 w-8 h-8" />
              ) : (
                <Menu className="text-gray-900 w-8 h-8" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-10 flex flex-col justify-center items-center lg:hidden shadow-lg border-t border-gray-200">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="text-center">
                  <a
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-8">
              <a
                href="#"
                className="py-2 px-4 border border-blue-500 rounded-md text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-teal-500 py-2 px-4 rounded-md text-white hover:from-blue-600 hover:to-teal-600 transition-all duration-300 text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
