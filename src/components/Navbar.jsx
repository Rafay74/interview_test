import { useState } from "react";
import logo from "../assets/logo.svg";
import us_icon from "../assets/en.svg";
import { navItems } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-dark-bg relative">
      <div className="w-full">
        <div className="flex items-center h-[80px]">
          <div className="flex-shrink-0 pl-12">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-6 ml-auto pr-12">
            <div className="hidden lg:flex items-center gap-8 pl-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-avenir font-medium text-nav leading-nav tracking-nav text-white hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button className="hidden md:flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">
                <img src={us_icon} alt="US" className="w-6 h-6" />
              </span>
            </button>

            <div className="hidden md:block h-6 w-px bg-gray-600"></div>

            <a
              href="#"
              className="font-avenir font-medium text-nav leading-nav tracking-nav text-white hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Sign In
            </a>

            {/* Try Free Button */}
            <button className="font-avenir font-medium text-nav leading-nav tracking-nav text-white border border-white rounded px-6 py-2 hover:bg-white hover:text-dark-bg transition-all whitespace-nowrap">
              Try free
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden flex flex-col space-y-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-12 py-6 space-y-4 bg-dark-bg border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-avenir font-medium text-nav leading-nav tracking-nav text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity mt-4">
              <img src={us_icon} alt="US" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
