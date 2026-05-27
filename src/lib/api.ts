import { API_BASE_URL } from "./constants";
import type { TemplatesResponse, CreateCvResponse, FormDataMap } from "@/types";

export async function fetchCvTemplates(
  type: string
): Promise<TemplatesResponse> {
  const res = await fetch(
    `${API_BASE_URL}/api/cv/templates?type=${encodeURIComponent(type)}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch templates: ${res.statusText}`);
  }
  return res.json();
}

export async function createCv(params: {
  templateKey: string;
  formData: FormDataMap;
  photo?: File | null;
}): Promise<CreateCvResponse> {
  const { templateKey, formData, photo } = params;
  const body = new FormData();
  body.append("templateKey", templateKey);
  body.append("formData", JSON.stringify(formData));
  if (photo) {
    body.append("photo", photo);
  }

  const res = await fetch(`${API_BASE_URL}/api/cv/create`, {
    method: "POST",
    body,
  });

  if (!res.ok) {
    throw new Error(`Failed to create CV: ${res.statusText}`);
  }

  return res.json();
}
