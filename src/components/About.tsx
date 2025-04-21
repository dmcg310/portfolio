import profilePicture from '../assets/profile-picture.jpg';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { SiAmazon, SiC, SiCplusplus, SiRust, SiGo, SiNodedotjs } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-16 h-1 bg-light-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square rounded-xl overflow-hidden border-4 border-navy shadow-xl max-w-sm mx-auto">
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-navy">Software Engineer</h3>
            <p className="text-lg text-gray-700">
              I'm a software engineer with a passion for building efficient and robust systems. I focus on low-level programming, graphics engineering, and full-stack development, focusing on creating performant solutions with clean, maintainable code.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-navy mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiGo /> Go
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiC /> C
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiCplusplus /> C++
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiRust /> Rust
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <FaJava /> Java
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiNodedotjs /> Node.js
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <FaDatabase /> SQL
                </span>
                <span className="px-3 py-2 bg-navy text-white rounded-full flex items-center gap-2">
                  <SiAmazon /> AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;