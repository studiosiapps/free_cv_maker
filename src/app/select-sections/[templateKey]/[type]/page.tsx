"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionCheckboxCard } from "@/components/sections/section-checkbox-card";
import { Button } from "@/components/ui/button";
import {
  SECTION_ICONS,
  SECTION_DETAILS,
  templateTypes,
} from "@/lib/constants";
import { SECTION_NAMES } from "@/lib/section-config";

interface Props {
  params: { templateKey: string; type: string };
}

export default function SelectSectionsPage({ params }: Props) {
  const { templateKey, type } = params;
  const fullTemplateKey = `${type}/${templateKey}`;
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([
    "Personal Information",
    "Professional Summary",
    "Education",
    "Skills",
    "Work Experience",
  ]);
  const typeInfo = templateTypes.find((t) => t.type === type);

  useEffect(() => {
    const saved = sessionStorage.getItem(
      `sections_${fullTemplateKey}_${type}`
    );
    if (saved) {
      setSelected(JSON.parse(saved));
    }

    const savedFormData = sessionStorage.getItem(
      `formData_${fullTemplateKey}_${type}`
    );
    if (savedFormData && saved) {
      router.replace(
        `/fill-sections/${templateKey}/${type}?edit=true`
      );
    }
  }, [templateKey, type, router]);

  const toggleSection = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name]
    );
  };

  const handleContinue = () => {
    sessionStorage.setItem(
      `sections_${fullTemplateKey}_${type}`,
      JSON.stringify(selected)
    );
    router.push(`/fill-sections/${templateKey}/${type}`);
  };

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
                  Select Sections
                </h1>
                <p className="text-sm text-text-light">
                  Choose what to include in your CV
                </p>
              </div>
            </div>

            {type === "ats" && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <Info className="h-5 w-5 mt-0.5 shrink-0 text-blue-600" />
                <p className="text-sm text-blue-800">
                  ATS-friendly resumes work best with standard sections like
                  Professional Summary, Work Experience, Education, and Skills.
                  Avoid graphics and complex formatting.
                </p>
              </div>
            )}

            <div className="space-y-3">
              {SECTION_NAMES.map((name) => (
                <SectionCheckboxCard
                  key={name}
                  title={name}
                  icon={SECTION_ICONS[name] || "FileText"}
                  description={SECTION_DETAILS[name] || ""}
                  checked={selected.includes(name)}
                  onToggle={() => toggleSection(name)}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                disabled={selected.length === 0}
                onClick={handleContinue}
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
