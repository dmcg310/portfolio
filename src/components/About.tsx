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
                src="assets/profile-picture.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-navy">Software Engineer</h3>
            <p className="text-lg text-gray-700">
              @TODO I'm a passionate backend developer with expertise in building scalable,
              efficient, and maintainable software solutions. With a strong foundation in
              [Your Core Technologies], I enjoy tackling complex problems and creating
              elegant solutions.
            </p>
            <p className="text-lg text-gray-700">
              @TODO When I'm not coding, you'll find me [Your Hobbies/Interests]. I believe in
              continuous learning and staying updated with the latest technologies and best practices.
            </p>

            <div className="pt-4">
              <h4 className="text-navy mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                @TODO Use icons here and throughout the site
                <span className="px-3 py-1 bg-navy text-white rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">Python</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">SQL</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">AWS</span>
                <span className="px-3 py-1 bg-navy text-white rounded-full">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;