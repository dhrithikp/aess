import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/src/assets/ieee-aess-logo.png" alt="IEEE AESS Logo" className="h-10" />
              <span className="font-bold text-xl">IEEE AESS</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advancing the science and technology of aerospace electronic systems.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aess.bmsit/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-secondary transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-secondary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: aess@ieee.org</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: IEEE AESS Society, University Campus</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-dark/50 border border-gray-700 rounded-l-md p-2 text-white focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent w-full"
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-2 px-4 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} IEEE AESS Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
