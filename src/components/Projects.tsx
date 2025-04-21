// @TODO: Add GitHub API integration to fetch real project data and use icons for stars, etc and github info
// Sample project data (to be replaced with GitHub API data later)
const sampleProjects = [
  {
    id: 1,
    name: "Project One",
    description: "A description of your first project. This will be replaced with real data from your GitHub repositories.",
    tags: ["Node.js", "Express", "MongoDB"],
    repoUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://project-one-demo.com",
  },
  {
    id: 2,
    name: "Project Two",
    description: "A description of your second project. This will be replaced with real data from your GitHub repositories.",
    tags: ["React", "TypeScript", "Firebase"],
    repoUrl: "https://github.com/yourusername/project-two",
    demoUrl: "https://project-two-demo.com",
  },
  {
    id: 3,
    name: "Project Three",
    description: "A description of your third project. This will be replaced with real data from your GitHub repositories.",
    tags: ["Python", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/yourusername/project-three",
    demoUrl: "https://project-three-demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-light-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of my projects!
          </p>
        </div>

        {/* @TODO: Use a carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
            >
              <div className="h-48 bg-gradient-to-r from-navy to-blue flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-light-blue flex items-center gap-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Repository
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-light-blue flex items-center gap-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/dmcg310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md transition-all duration-300 font-medium bg-light-blue text-white hover:bg-blue inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;