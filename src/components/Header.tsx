import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-navy">DM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-navy hover:text-light-blue font-medium">Home</a>
            <a href="#about" className="text-navy hover:text-light-blue font-medium">About</a>
            <a href="#projects" className="text-navy hover:text-light-blue font-medium">Projects</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <a href="#" className="text-navy hover:text-light-blue font-medium">Home</a>
            <a href="#about" className="text-navy hover:text-light-blue font-medium">About</a>
            <a href="#projects" className="text-navy hover:text-light-blue font-medium">Projects</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;