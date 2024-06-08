"use client"
import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsMenuOpen(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 300); // Allow some time for the menu to open
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-red-500' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-white">Logo</h1>
          </div>
          <div className="flex items-center">
            <button onClick={handleSearchClick} className="text-white focus:outline-none">
              <FiSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-gray-800 text-white px-4 pt-4 pb-8">
          <ul className="space-y-2">
            <li className="px-2 py-1">Item 1</li>
            <li className="px-2 py-1">Item 2</li>
            <li className="px-2 py-1">Item 3</li>
            <li className="px-2 py-1">Item 4</li>
            <li className="px-2 py-1">Item 5</li>
            <li className="px-2 py-1">Item 6</li>
          </ul>
          <div className="mt-4">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
