"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { PhotoUpload } from "@/components/shared/photo-upload";
import { SectionFormFields } from "@/components/sections/section-form-fields";
import { GeneratingLoader } from "@/components/shared/generating-loader";
import { ErrorDisplay } from "@/components/shared/error-display";
import { createCv } from "@/lib/api";
import { sectionInputConfig } from "@/lib/section-config";
import { SECTION_ICONS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FormDataMap } from "@/types";

interface Props {
  params: { templateKey: string; type: string };
}

export default function FillSectionsPage({ params }: Props) {
  const { templateKey, type } = params;
  const fullTemplateKey = `${type}/${templateKey}`;
  const router = useRouter();
  const [sections, setSections] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataMap>({});
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedSections = sessionStorage.getItem(
      `sections_${fullTemplateKey}_${type}`
    );
    const savedFormData = sessionStorage.getItem(
      `formData_${fullTemplateKey}_${type}`
    );

    if (!savedSections) {
      router.replace(`/select-sections/${templateKey}/${type}`);
      return;
    }

    const parsedSections: string[] = JSON.parse(savedSections);
    setSections(parsedSections);
    setExpandedSections(new Set(parsedSections));

    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    } else {
      const initial: FormDataMap = {};
      parsedSections.forEach((section) => {
        const config = sectionInputConfig[section];
        if (config?.multiple) {
          initial[section] = [{}];
        } else {
          initial[section] = [{}];
        }
      });
      setFormData(initial);
    }
  }, [templateKey, type, router]);

  const updateField = useCallback(
    (section: string, index: number, key: string, value: string) => {
      setFormData((prev) => {
        const updated = { ...prev };
        const entries = [...(updated[section] || [{}])];
        entries[index] = { ...entries[index], [key]: value };
        updated[section] = entries;
        return updated;
      });
    },
    []
  );

  const addEntry = useCallback((section: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), {}],
    }));
  }, []);

  const removeEntry = useCallback((section: string, index: number) => {
    setFormData((prev) => {
      const entries = (prev[section] || []).filter((_, i) => i !== index);
      return {
        ...prev,
        [section]: entries.length === 0 ? [{}] : entries,
      };
    });
  }, []);

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const validate = (): string | null => {
    const personalInfo = formData["Personal Information"]?.[0];
    if (personalInfo) {
      if (!personalInfo.fullName?.trim()) return "Full Name is required";
      if (!personalInfo.email?.trim()) return "Email is required";
      if (!personalInfo.phone?.trim()) return "Phone is required";
    }
    return null;
  };

  const handleGenerate = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setGenerating(true);
    setError(null);

    try {
      sessionStorage.setItem(
        `formData_${fullTemplateKey}_${type}`,
        JSON.stringify(formData)
      );

      const result = await createCv({ templateKey: fullTemplateKey, formData, photo });
      setGenerating(false);
      router.push(
        `/preview/${templateKey}/${type}?html=${encodeURIComponent(result.html)}`
      );
    } catch (err) {
      setGenerating(false);
      setError(
        err instanceof Error ? err.message : "Failed to generate CV"
      );
    }
  };

  if (sections.length === 0) return null;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-text-dark sm:text-3xl">
                  Fill Your CV Sections
                </h1>
                <p className="text-sm text-text-light">
                  Complete the information for each selected section
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              {sections.map((section) => {
                const config = sectionInputConfig[section];
                if (!config) return null;
                const isExpanded = expandedSections.has(section);
                const entries = formData[section] || [{}];
                const Icon =
                  (LucideIcons as unknown as Record<string, LucideIcon>)[
                    SECTION_ICONS[section] || "FileText"
                  ] || LucideIcons.FileText;

                return (
                  <div
                    key={section}
                    className="rounded-xl border border-border bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section)}
                      className="flex w-full items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-icon text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-sm font-semibold text-text-dark">
                            {section}
                          </h3>
                          {config.multiple && (
                            <p className="text-xs text-text-light">
                              {entries.length} entry
                              {entries.length !== 1 ? "ies" : "y"}
                            </p>
                          )}
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="border-t border-border p-4 space-y-6">
                        {section === "Personal Information" && (
                          <PhotoUpload
                            value={photoPreview}
                            onChange={(file, dataUrl) => {
                              setPhoto(file);
                              setPhotoPreview(dataUrl);
                            }}
                          />
                        )}

                        {entries.map((entry, idx) => (
                          <div key={idx}>
                            {config.multiple && entries.length > 1 && (
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-medium text-text-light">
                                  Entry {idx + 1}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeEntry(section, idx)}
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </Button>
                              </div>
                            )}
                            <SectionFormFields
                              fields={config.fields}
                              values={entry}
                              onChange={(key, value) =>
                                updateField(section, idx, key, value)
                              }
                            />
                            {idx < entries.length - 1 && (
                              <div className="my-4 border-t border-border" />
                            )}
                          </div>
                        ))}

                        {config.multiple && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addEntry(section)}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Another Entry
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={generating}
                className="min-w-[200px]"
              >
                {generating ? "Generating..." : "Generate CV"}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {generating && <GeneratingLoader />}
    </>
  );
}
