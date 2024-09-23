import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-40 py-4 bg-white shadow-md border-b border-gray-200">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-3" src={logo} alt="logo" />
            <span className="text-3xl font-bold tracking-tight text-emerald-500">
              Printify
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(index)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-900 hover:text-emerald-500 transition-colors duration-300 flex items-center"
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-2">
                      {dropdownOpen === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  )}
                </a>
                {item.dropdown && dropdownOpen === index && (
                  <div className="absolute pb-5 pt-5">
                    <ul className="z-10 top-full mt-2 left-0 bg-white shadow-lg border border-gray-200 rounded-md w-48">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="border-b last:border-b-0">
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-900 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Sign In / Sign Up */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 border border-emerald-400 rounded-md text-gray-900 hover:bg-emerald-700 hover:text-white transition-all duration-300"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-emerald-400 py-2 px-4 rounded-md text-white hover:bg-emerald-700 transition-all duration-300"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
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
            <ul className="space-y-6 w-full text-center">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    className="text-gray-900 hover:text-emerald-500 transition-colors duration-300 flex items-center justify-center"
                    onClick={() => item.dropdown && toggleDropdown(index)}
                  >
                    {item.label}
                    {item.dropdown && (
                      <span className="ml-2">
                        {dropdownOpen == index ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </div>
                  {item.dropdown && dropdownOpen === index && (
                    <ul className="mt-2 space-y-2 bg-white shadow-lg border border-gray-200 rounded-md">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-center">
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-900 hover:text-emerald-500 transition-all duration-300"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-8 w-full">
              <a
                href="#"
                className="py-2 px-4 border border-emerald-500 rounded-md text-gray-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 text-center"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-emerald-500 py-2 px-4 rounded-md text-white hover:bg-emerald-600 transition-all duration-300 text-center"
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
