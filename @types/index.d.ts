declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.svg';

declare module 'resume' {
  export interface ResumeData {
    dataJson: {
      educations: Education[];
      profile: Profile;
      workExperience: Experience[];
      contractExperience: Experience[];
      projects: Experience[];
    };
  }
  export interface Project {
    name: string;
    url: string;
    notes: string;
  }

  export interface Education {
    school: string;
    duration: string;
    location: string;
    degree: string;
  }

  export interface Name {
    lastName: string;
    firstName: string;
    nickName: string;
  }

  export interface Contact {
    email: string;
    github: string;
    linkedIn: string;
    city: string;
  }

  export interface Skills {
    languages: string[];
    database: string[];
    technologies: string[];
    hobbies: string[];
  }

  export interface Profile {
    aboutMe: string[];
    name: Name;
    contact: Contact;
    title: string;
    skills: Skills;
  }

  export interface ExperienceDuration {
    start: string;
    end: string;
  }

  export interface Experience {
    id: number;
    title: string;
    location: string;
    company: string;
    companyUrl?: string;
    duration: ExperienceDuration;
    accomplishments: string[];
  }
}
