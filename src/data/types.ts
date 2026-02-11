interface ProjectJobDetails {
    position: string;
    company: string;
    city: string;
}

interface ExternalLink {
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
    links: ExternalLink[];
    iconURL: string | null;
    gallery: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    technologies: string[];
    skills: string[];
    links: ExternalLink[];
    iconURL: string | null;
}
