import { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import type { ProjectData } from '../hooks/useGitHubProjects';

interface ProjectCarouselProps {
    projects: ProjectData[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    useEffect(() => {
        if (projects.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    const goToProject = useCallback((index: number) => {
        let newIndex = index;
        if (index < 0) {
            newIndex = projects.length - 1;
        } else if (index >= projects.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    }, [projects.length]);

    const nextProject = useCallback(() => {
        goToProject(currentIndex + 1);
    }, [currentIndex, goToProject]);

    const prevProject = useCallback(() => {
        goToProject(currentIndex - 1);
    }, [currentIndex, goToProject]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextProject();
        }
        if (isRightSwipe) {
            prevProject();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextProject();
            } else if (e.key === 'ArrowLeft') {
                prevProject();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextProject, prevProject]);

    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project) => (
                        <div key={project.id} className="w-full flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4">
                                <div className="h-48 bg-gradient-to-r from-navy to-blue flex items-center justify-center p-4">
                                    <h3 className="text-2xl font-bold text-white text-center">{project.name}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4 h-24 overflow-y-auto">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 4).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                                                +{project.tags.length - 4} more
                                            </span>
                                        )}
                                    </div>
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            {projects.length > 1 && (
                <>
                    <button
                        onClick={prevProject}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-navy bg-opacity-70 hover:bg-opacity-100 text-white p-2 rounded-r-md transition-all z-10"
                        aria-label="Previous project"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-navy bg-opacity-70 hover:bg-opacity-100 text-white p-2 rounded-l-md transition-all z-10"
                        aria-label="Next project"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Navigation dots */}
            {projects.length > 1 && (
                <div className="flex justify-center mt-4">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToProject(index)}
                            className={`w-3 h-3 rounded-full mx-1 transition-all ${index === currentIndex ? 'bg-light-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCarousel;