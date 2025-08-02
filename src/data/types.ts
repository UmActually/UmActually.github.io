export interface ProjectJobDetails {
    position: string;
    company: string;
    city: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    name: string;
    tldr: string;
    job: ProjectJobDetails | null;
    date: string;
    shortDescription: string;
    detailedDescription: string | null;
    bulletPoints: string[];
    role: string;
    technologies: string[];
    skills: string[];
    links: ProjectLink[];
    iconURL: string | null;
    gallery: string[];
}
