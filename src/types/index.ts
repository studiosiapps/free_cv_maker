export interface SectionField {
  key: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  isPhotoField?: boolean;
  type?: "text" | "date" | "select";
  options?: string[];
}

export interface SectionConfig {
  multiple: boolean;
  fields: SectionField[];
}

export interface CvTemplate {
  id: number;
  image: string;
  templateKey: string;
}

export interface TemplatesResponse {
  data: CvTemplate[];
}

export interface CreateCvResponse {
  html: string;
}

export interface FormDataMap {
  [sectionName: string]: Record<string, string>[];
}

export interface SelectOption {
  value: string;
  label: string;
}

export type TemplateType = "ats" | "europass" | "modern" | "creative" | "professional";

export interface TemplateTypeInfo {
  type: TemplateType;
  title: string;
  icon: string;
  description: string;
  details: string;
}
