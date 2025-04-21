import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState({
    shown: false,
    parts: ['dmcgportfolio', '@', 'gmail', '.', 'com']
  });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email.shown) {
      const assembled = email.parts.join('');
      window.location.href = `mailto:${assembled}`;
      setEmail({ ...email, shown: true });
    }
  };

  return (
    <footer className="bg-dark-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="https://github.com/dmcg310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-light-blue transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dmcg310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-light-blue transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="#"
              onClick={handleEmailClick}
              className="text-gray-400 hover:text-light-blue transition-colors"
              aria-label="Email"
              title="Click to email me"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Darragh McGurk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;