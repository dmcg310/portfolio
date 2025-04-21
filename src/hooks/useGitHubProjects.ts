import { useState, useEffect } from 'react';

export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    topics: string[];
    stargazers_count: number;
    fork: boolean;
    forks_count: number;
    language: string;
}

export interface ProjectData {
    id: number;
    name: string;
    description: string;
    tags: string[];
    repoUrl: string;
    demoUrl: string | null;
    stars: number;
    forks: number;
    language: string;
}

interface CachedData {
    projects: ProjectData[];
    timestamp: number;
}

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

function toTitleCase(str: string): string {
    // @Hardcode
    if (str === 'gl gfx') {
        return 'GL GFX';
    }

    if (str.length === 2) {
        return str.toUpperCase();
    }

    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function useGitHubProjects(username: string, limit: number = 30) {
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);

                const cacheKey = `github-projects-${username}`;
                const cachedDataString = localStorage.getItem(cacheKey);

                if (cachedDataString) {
                    const cachedData: CachedData = JSON.parse(cachedDataString);
                    const now = Date.now();

                    if (now - cachedData.timestamp < CACHE_EXPIRATION) {
                        console.log('Using cached GitHub projects data');
                        setProjects(cachedData.projects);
                        setLoading(false);
                        return;
                    } else {
                        console.log('Cached GitHub projects data is expired, fetching fresh data');
                    }
                }

                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`);
                if (!response.ok) {
                    throw new Error(`Error fetching GitHub repos: ${response.status}`);
                }

                const repos: GitHubRepo[] = await response.json();

                const projectData: ProjectData[] = repos
                    .filter(repo => !repo.name.includes('.github.io') && !repo.fork && repo.name !== 'portfolio' && repo.name !== username)
                    .map(repo => ({
                        id: repo.id,
                        name: toTitleCase(repo.name.replace(/-/g, ' ').replace(/_/g, ' ')),
                        description: repo.description || 'No description available',
                        tags: [...(repo.topics || []), repo.language].filter(Boolean),
                        repoUrl: repo.html_url,
                        demoUrl: repo.homepage,
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        language: repo.language || 'Unknown'
                    }));

                const cacheData: CachedData = {
                    projects: projectData,
                    timestamp: Date.now()
                };

                try {
                    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
                    console.log('Saved GitHub projects data to localStorage');
                } catch (err) {
                    console.warn('Failed to cache GitHub projects in localStorage:', err);
                }

                setProjects(projectData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error('Failed to fetch GitHub projects:', err);

                try {
                    const cacheKey = `github-projects-${username}`;
                    const cachedDataString = localStorage.getItem(cacheKey);

                    if (cachedDataString) {
                        const cachedData: CachedData = JSON.parse(cachedDataString);
                        console.log('Using expired cached data as fallback after fetch error');
                        setProjects(cachedData.projects);
                    }
                } catch (cacheError) {
                    console.error('Failed to retrieve cached GitHub projects:', cacheError);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [username, limit]);

    return { projects, loading, error };
}