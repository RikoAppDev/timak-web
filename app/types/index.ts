export interface TeamMember {
    id: number;
    name: string;
    role: string;
    specialization: string;
    bio: string;
    image: string;
    email: string;
    github: string;
    skills: string[];
    bachelorThesis?: string;
}

export interface ProjectLog {
    id: number;
    date: string;
    type: 'meeting' | 'development' | 'documentation' | 'deployment' | 'testing';
    title: string;
    description: string;
    attendees?: string[];
    outcomes?: string[];
    nextSteps?: string[];
    hours?: number;
    tags: string[];
}
