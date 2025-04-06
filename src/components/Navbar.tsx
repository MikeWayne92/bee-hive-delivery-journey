
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bee-white bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="hex w-10 h-11 flex items-center justify-center">
            <span className="text-white font-bold text-lg">DB</span>
          </div>
          <span className={`font-bold text-xl ${isScrolled ? "text-bee-black" : "text-white"}`}>
            DeliverBee
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className={`${
              isScrolled ? "text-bee-black" : "text-white"
            } hover:text-bee-honey transition-colors font-medium`}
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className={`${
              isScrolled ? "text-bee-black" : "text-white"
            } hover:text-bee-honey transition-colors font-medium`}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className={`${
              isScrolled ? "text-bee-black" : "text-white"
            } hover:text-bee-honey transition-colors font-medium`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="bee-button ml-4"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-bee-honey" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bee-white py-4 px-4 shadow-md animate-slide-down">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="text-bee-black hover:text-bee-honey transition-colors font-medium"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-bee-black hover:text-bee-honey transition-colors font-medium"
              onClick={toggleMobileMenu}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-bee-black hover:text-bee-honey transition-colors font-medium"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bee-button text-center"
              onClick={toggleMobileMenu}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
