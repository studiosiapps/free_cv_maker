import type { SectionConfig } from "@/types";

export const SECTION_NAMES = [
  "Personal Information",
  "Professional Summary",
  "Education",
  "Skills",
  "Work Experience",
  "Internships",
  "Projects",
  "Certifications",
  "Achievements",
  "Volunteer Experience",
  "Languages",
  "Interests",
  "Career Objective",
  "Publications",
  "Job Preferences",
  "References",
] as const;

export const sectionInputConfig: Record<string, SectionConfig> = {
  "Personal Information": {
    multiple: false,
    fields: [
      { key: "fullName", label: "Full Name", placeholder: "John Doe" },
      { key: "email", label: "Email", placeholder: "john@example.com" },
      { key: "phone", label: "Phone", placeholder: "+1 234 567 8900" },
      { key: "address", label: "Address", placeholder: "New York, USA" },
      {
        key: "linkedin",
        label: "LinkedIn URL",
        placeholder: "https://linkedin.com/in/johndoe",
      },
      {
        key: "website",
        label: "Website",
        placeholder: "https://johndoe.com",
      },
      { key: "photo", label: "Photo", isPhotoField: true },
    ],
  },
  "Professional Summary": {
    multiple: false,
    fields: [
      {
        key: "summary",
        label: "Professional Summary",
        placeholder: "Experienced professional with...",
        multiline: true,
      },
    ],
  },
  Education: {
    multiple: true,
    fields: [
      {
        key: "degree",
        label: "Degree",
        placeholder: "Bachelor of Science in Computer Science",
      },
      { key: "institution", label: "Institution", placeholder: "University Name" },
      { key: "location", label: "Location", placeholder: "City, Country" },
      { key: "startDate", label: "Start Date", placeholder: "2018", type: "date" },
      { key: "endDate", label: "End Date", placeholder: "2022", type: "date" },
      {
        key: "currentlyStudying",
        label: "Currently Studying",
        type: "select",
        options: ["No", "Yes"],
      },
      {
        key: "description",
        label: "Description",
        placeholder: "Relevant coursework, achievements...",
        multiline: true,
      },
    ],
  },
  Skills: {
    multiple: true,
    fields: [
      {
        key: "skillName",
        label: "Skill Name",
        placeholder: "JavaScript, Python, Project Management...",
      },
      {
        key: "proficiencyLevel",
        label: "Proficiency Level",
        type: "select",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
      },
    ],
  },
  "Work Experience": {
    multiple: true,
    fields: [
      { key: "jobTitle", label: "Job Title", placeholder: "Software Engineer" },
      { key: "employer", label: "Employer", placeholder: "Company Name" },
      { key: "location", label: "Location", placeholder: "City, Country" },
      { key: "startDate", label: "Start Date", placeholder: "2020", type: "date" },
      { key: "endDate", label: "End Date", placeholder: "2023", type: "date" },
      {
        key: "currentlyWorking",
        label: "Currently Working",
        type: "select",
        options: ["No", "Yes"],
      },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your responsibilities and achievements...",
        multiline: true,
      },
    ],
  },
  Internships: {
    multiple: true,
    fields: [
      { key: "title", label: "Title", placeholder: "Intern Software Engineer" },
      { key: "organization", label: "Organization", placeholder: "Company Name" },
      { key: "location", label: "Location", placeholder: "City, Country" },
      { key: "startDate", label: "Start Date", placeholder: "2019", type: "date" },
      { key: "endDate", label: "End Date", placeholder: "2019", type: "date" },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your responsibilities...",
        multiline: true,
      },
    ],
  },
  Projects: {
    multiple: true,
    fields: [
      {
        key: "projectTitle",
        label: "Project Title",
        placeholder: "E-commerce Website",
      },
      {
        key: "technologies",
        label: "Technologies Used",
        placeholder: "React, Node.js, MongoDB",
      },
      {
        key: "link",
        label: "Project Link",
        placeholder: "https://github.com/username/project",
      },
      { key: "startDate", label: "Start Date", placeholder: "2022", type: "date" },
      { key: "endDate", label: "End Date", placeholder: "2023", type: "date" },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe the project, your role, and impact...",
        multiline: true,
      },
    ],
  },
  Certifications: {
    multiple: true,
    fields: [
      {
        key: "certificationName",
        label: "Certification Name",
        placeholder: "AWS Solutions Architect",
      },
      { key: "issuer", label: "Issuer", placeholder: "Amazon Web Services" },
      { key: "date", label: "Date", placeholder: "2023", type: "date" },
      { key: "link", label: "Credential Link", placeholder: "https://credential.example.com" },
      {
        key: "description",
        label: "Description",
        placeholder: "Brief description...",
        multiline: true,
      },
    ],
  },
  Achievements: {
    multiple: true,
    fields: [
      { key: "title", label: "Title", placeholder: "Employee of the Month" },
      { key: "date", label: "Date", placeholder: "2023", type: "date" },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe the achievement...",
        multiline: true,
      },
    ],
  },
  "Volunteer Experience": {
    multiple: true,
    fields: [
      { key: "role", label: "Role", placeholder: "Volunteer Teacher" },
      { key: "organization", label: "Organization", placeholder: "NGO Name" },
      { key: "location", label: "Location", placeholder: "City, Country" },
      { key: "startDate", label: "Start Date", placeholder: "2020", type: "date" },
      { key: "endDate", label: "End Date", placeholder: "2021", type: "date" },
      {
        key: "description",
        label: "Description",
        placeholder: "Describe your volunteer work...",
        multiline: true,
      },
    ],
  },
  Languages: {
    multiple: true,
    fields: [
      {
        key: "language",
        label: "Language",
        placeholder: "English, Spanish, French...",
      },
      {
        key: "proficiencyLevel",
        label: "Proficiency Level",
        type: "select",
        options: [
          "Native",
          "Fluent",
          "Advanced",
          "Intermediate",
          "Basic",
        ],
      },
    ],
  },
  Interests: {
    multiple: true,
    fields: [
      {
        key: "interest",
        label: "Interest",
        placeholder: "Reading, Photography, Traveling...",
      },
    ],
  },
  "Career Objective": {
    multiple: false,
    fields: [
      {
        key: "objective",
        label: "Career Objective",
        placeholder: "To leverage my skills in...",
        multiline: true,
      },
    ],
  },
  Publications: {
    multiple: true,
    fields: [
      {
        key: "title",
        label: "Publication Title",
        placeholder: "Title of your publication",
      },
      { key: "publisher", label: "Publisher/Journal", placeholder: "Journal Name" },
      { key: "date", label: "Date", placeholder: "2023", type: "date" },
      {
        key: "description",
        label: "Description",
        placeholder: "Brief description of the publication...",
        multiline: true,
      },
      { key: "link", label: "Link", placeholder: "https://doi.org/..." },
    ],
  },
  "Job Preferences": {
    multiple: false,
    fields: [
      {
        key: "desiredRole",
        label: "Desired Role",
        placeholder: "Senior Software Engineer",
      },
      {
        key: "employmentType",
        label: "Employment Type",
        type: "select",
        options: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
      },
      {
        key: "preferredLocation",
        label: "Preferred Location",
        placeholder: "City, Country or Remote",
      },
      {
        key: "expectedSalary",
        label: "Expected Salary",
        placeholder: "$80,000 - $100,000",
      },
      {
        key: "availability",
        label: "Availability",
        placeholder: "Immediate / 2 weeks notice",
      },
    ],
  },
  References: {
    multiple: true,
    fields: [
      {
        key: "fullName",
        label: "Full Name",
        placeholder: "Jane Smith",
      },
      { key: "jobTitle", label: "Job Title", placeholder: "Senior Manager" },
      { key: "company", label: "Company", placeholder: "Company Name" },
      { key: "email", label: "Email", placeholder: "jane@example.com" },
      { key: "phone", label: "Phone", placeholder: "+1 234 567 8900" },
      {
        key: "relationship",
        label: "Relationship",
        placeholder: "Former Manager",
      },
    ],
  },
};
