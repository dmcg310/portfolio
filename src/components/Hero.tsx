import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-navy to-blue py-24 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-light-blue font-extrabold">Darragh</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            A passionate Software Engineer focused TODO
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md transition-all duration-300 font-medium bg-light-blue text-white hover:bg-white hover:text-navy flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 14.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://github.com/dmcg310"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md transition-all duration-300 font-medium bg-transparent border-2 border-white hover:bg-white hover:text-navy flex items-center gap-2"
            >
              <FaGithub className="text-xl" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative wave shape at the bottom */}
      <div className="mt-16 md:mt-24">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#FFFFFF"
            d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,48C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;