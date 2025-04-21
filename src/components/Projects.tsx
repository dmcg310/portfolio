import { useState } from 'react';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const { projects, loading, error } = useGitHubProjects('dmcg310', 30);
  const totalPages = projects.length > 0 ? Math.ceil(projects.length / projectsPerPage) : 0;

  const getCurrentPageProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : prevPage
    );
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : prevPage
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-light-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects from GitHub
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-light-blue"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-12">
            <p>Failed to load projects. Using sample data instead.</p>
          </div>
        )}

        {/* Projects gallery with pagination */}
        <div className="relative">
          {/* Navigation arrows */}
          {projects.length > projectsPerPage && (
            <>
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-navy text-white shadow-lg ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-light-blue cursor-pointer'
                  }`}
                aria-label="Previous page"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage >= totalPages - 1}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-navy text-white shadow-lg ${currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-light-blue cursor-pointer'
                  }`}
                aria-label="Next page"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
            {getCurrentPageProjects().map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
              >
                <div className="h-48 bg-gradient-to-r from-navy to-blue flex items-center justify-center p-4">
                  <h3 className="text-2xl font-bold text-white text-center">{project.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 h-20 overflow-hidden">{project.description}</p>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaStar className="text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaCodeBranch />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span className="px-2 py-1 bg-light-blue text-white text-xs rounded-full">
                        {project.language}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-light-blue flex items-center gap-1"
                    >
                      <FaGithub className="w-5 h-5" />
                      Repository
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy hover:text-light-blue flex items-center gap-1"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentPage === index ? 'bg-light-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/dmcg310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md transition-all duration-300 font-medium bg-light-blue text-white hover:bg-blue inline-flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;