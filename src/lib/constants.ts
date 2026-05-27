export const API_BASE_URL = "https://cv.studiosiapps.com";

export const APP_NAME = "Free CV Maker";
export const APP_DESCRIPTION =
  "Create professional CVs and resumes online for free. Choose from ATS-friendly, modern, creative, and professional templates.";
export const APP_URL = "https://freecvmaker.com";

export const templateTypes = [
  {
    type: "ats" as const,
    title: "ATS Friendly",
    icon: "FileText",
    description: "ATS Friendly Resume",
    details:
      "Applicant Tracking System (ATS) compatible format. Ensures your resume passes automated screening systems used by recruiters.",
  },
  {
    type: "europass" as const,
    title: "European CV",
    icon: "Euro",
    description: "European CV Format",
    details:
      "Standard European format widely accepted across EU countries. Clean and organized layout preferred by European employers.",
  },
  {
    type: "modern" as const,
    title: "Modern",
    icon: "LayoutDashboard",
    description: "Modern CV Design",
    details:
      "Contemporary design with a fresh look. Stand out with sleek typography and balanced sections.",
  },
  {
    type: "creative" as const,
    title: "Creative",
    icon: "Palette",
    description: "Creative CV Layout",
    details:
      "Unleash your creativity with unique layouts. Perfect for design and media professionals.",
  },
  {
    type: "professional" as const,
    title: "Professional",
    icon: "Briefcase",
    description: "Professional CV Template",
    details:
      "Traditional professional layout trusted by executives. Timeless design that commands respect.",
  },
] as const;

export const SECTION_ICONS: Record<string, string> = {
  "Personal Information": "User",
  "Professional Summary": "FileText",
  Education: "GraduationCap",
  Skills: "Zap",
  "Work Experience": "Briefcase",
  Internships: "Building2",
  Projects: "FolderGit2",
  Certifications: "Award",
  Achievements: "Trophy",
  "Volunteer Experience": "Heart",
  Languages: "Languages",
  Interests: "Heart",
  "Career Objective": "Target",
  Publications: "BookOpen",
  "Job Preferences": "Settings",
  References: "Users",
};

export const SECTION_DETAILS: Record<string, string> = {
  "Personal Information": "Your name, contact details, and professional links",
  "Professional Summary": "Brief overview of your qualifications and career goals",
  Education: "Your academic background and qualifications",
  Skills: "Technical and professional skills",
  "Work Experience": "Your professional work history",
  Internships: "Internship experiences",
  Projects: "Notable projects you've worked on",
  Certifications: "Professional certifications and licenses",
  Achievements: "Key accomplishments and awards",
  "Volunteer Experience": "Volunteer work and community service",
  Languages: "Languages you speak",
  Interests: "Personal interests and hobbies",
  "Career Objective": "Your career aspirations and goals",
  Publications: "Published works and research papers",
  "Job Preferences": "Your job preferences and requirements",
  References: "Professional references",
};
