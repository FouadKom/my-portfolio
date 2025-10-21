import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "faively",
    position: "Apprenticeship in Cybersecurity",
    company: "Faively Transport",
    location: "Tours, France",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-01-01"),
    description: [
        "Assist in implementing cybersecurity measures to protect the company's digital assets and data.",
    ],
    achievements: [
      "Implement the deployment of secure systems and network infrastructure that is adapted to the needs of the organization.",
      "Manage the performance of the organization's systems and networks.",
    ],
    skills: ["Linux", "Windows", "Python"],
    companyUrl: "https://www.wabteccorp.com/",
    logo: "/experience/Faiveley_Transport_Logo.png",
  },
  {
    id: "univ",
    position: "University Lecturer and Research Assistant",
    company: "University of Tours",
    location: "Tours, France",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2023-09-01"),
    description: [
      "Delivered lectures and practical sessions on Java programming, data structures, and algorithms to undergraduate students.",
    ],
    achievements: [
      "Taught Java fundamentals with a focus on data structures and algorithm efficiency, foundational for ML model development.",
      "Introduced students to practical software development, supporting understanding of data handling and programming logic.",
    ],
    skills: ["Java", "MySQL"],
    companyUrl: "https://international.univ-tours.fr/",
    logo: "/experience/Univ_Tours_Logo.png",
  },
  {
    id: "builtdesign",
    position: "SQL Developer",
    company: "Munchy Bytes",
    location: "Beirut, Lebanon",
    startDate: new Date("2016-01-01"),
    endDate: new Date("2018-01-01"),
    description: [
        "Developed and maintained SQL databases to support business operations and data analysis needs.",
    ],
    achievements: [
      "Configuration and scheduling of SSIS jobs to automate data integration processes.",
      "Collaboration with business teams to understand data integration requirements and ensure their effective implementation using SSIS.",
      
    ],
    skills: [ "SQL" ],
    companyUrl: "https://www.linkedin.com/company/munchy-bytes/",
    logo: "/experience/Munchy_Bytes_Logo.png",
  },
];
