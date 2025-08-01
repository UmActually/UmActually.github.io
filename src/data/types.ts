export interface JobDetails {
    position: string;
    company: string;
    city: string;
}

export interface Project {
    id: string;
    name: string;
    tldr: string;
    job: JobDetails | null;
    date: string;
    shortDescription: string;
    detailedDescription: string | null;
    bulletPoints: string[];
    role: string;
    technologies: string[];
    skills: string[];
    iconURL: string | null;
}
