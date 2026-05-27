"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CvCard } from "@/components/cv/cv-card";
import { ErrorDisplay } from "@/components/shared/error-display";
import { Button } from "@/components/ui/button";
import { fetchCvTemplates } from "@/lib/api";
import { templateTypes } from "@/lib/constants";
import type { CvTemplate } from "@/types";

interface Props {
  params: { type: string };
}

export default function SelectCvPage({ params }: Props) {
  const { type } = params;
  const router = useRouter();
  const [templates, setTemplates] = useState<CvTemplate[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTemplates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchCvTemplates(type);
      setTemplates(res.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load templates");
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    loadTemplates();
  }, [loadTemplates]);

  const selectedTemplate = templates.find((t) => t.id === selectedId);
  const typeInfo = templateTypes.find((t) => t.type === type);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-text-dark sm:text-3xl">
                  Choose Your CV Design
                </h1>
                <p className="text-sm text-text-light">
                  {typeInfo?.title || type} templates
                </p>
              </div>
            </div>

            {loading && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] animate-pulse rounded-xl bg-gray-100"
                  />
                ))}
              </div>
            )}

            {error && <ErrorDisplay message={error} onRetry={loadTemplates} />}

            {!loading && !error && templates.length === 0 && (
              <div className="text-center py-16">
                <p className="text-text-light">No templates available for this type.</p>
              </div>
            )}

            {!loading && !error && templates.length > 0 && (
              <>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {templates.map((template) => (
                    <CvCard
                      key={template.id}
                      template={template}
                      selected={selectedId === template.id}
                      onSelect={() => setSelectedId(template.id)}
                    />
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    size="lg"
                    disabled={!selectedTemplate}
                    onClick={() => {
                      if (selectedTemplate) {
                        const templateId = selectedTemplate.templateKey.replace(`${type}/`, '');
                        router.push(`/select-sections/${templateId}/${type}`);
                      }
                    }}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
