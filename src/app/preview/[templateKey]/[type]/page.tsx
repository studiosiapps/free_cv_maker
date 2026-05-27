"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Edit3,
  RefreshCw,
  Download,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ErrorDisplay } from "@/components/shared/error-display";

interface Props {
  params: { templateKey: string; type: string };
}

function ensureFullHtml(html: string): string {
  if (!html || html.includes("<!DOCTYPE") || html.includes("<html")) {
    return html;
  }
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><base href="https://cv.studiosiapps.com"></head><body>${html}</body></html>`;
}

export default function PreviewCvPage({ params }: Props) {
  const { templateKey, type } = params;
  const fullTemplateKey = `${type}/${templateKey}`;
  const router = useRouter();
  const searchParams = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const html = searchParams.get("html");
    if (html) {
      setHtmlContent(ensureFullHtml(html));
    } else {
      setError("No CV content found. Please generate your CV first.");
    }
  }, [searchParams]);

  const handleExportPdf = useCallback(async () => {
    if (!htmlContent) return;
    setExporting(true);
    try {
      const { default: html2canvas } = await import("html2canvas");
      const { default: jsPDF } = await import("jspdf");

      const iframe = iframeRef.current;
      if (!iframe?.contentDocument?.body) {
        throw new Error("Preview not ready");
      }

      const canvas = await html2canvas(iframe.contentDocument.body, {
        scale: 2,
        useCORS: true,
        logging: false,
        height: iframe.contentDocument.body.scrollHeight,
        windowHeight: iframe.contentDocument.body.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = pdfHeight;
      let position = 0;

      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("my-cv.pdf");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to export PDF"
      );
    } finally {
      setExporting(false);
    }
  }, [htmlContent]);

  const handleEditSection = () => {
    router.push(`/fill-sections/${templateKey}/${type}?edit=true`);
  };

  const handleRegenerate = () => {
    router.push(`/fill-sections/${templateKey}/${type}`);
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push(`/fill-sections/${templateKey}/${type}`)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-text-dark sm:text-3xl">
                    CV Preview
                  </h1>
                  <p className="text-sm text-text-light">
                    Review your CV before downloading
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEditSection}
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit Sections
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRegenerate}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
                <Button
                  size="sm"
                  onClick={handleExportPdf}
                  disabled={exporting || !htmlContent}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {exporting ? "Exporting..." : "Save PDF"}
                </Button>
              </div>
            </div>

            {error && !htmlContent && (
              <ErrorDisplay
                message={error}
                onRetry={handleRegenerate}
              />
            )}

            {error && htmlContent && (
              <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            {htmlContent && (
              <div className="rounded-xl border border-border bg-white overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b border-border bg-gray-50 px-4 py-2">
                  <div className="flex items-center gap-2 text-sm text-text-light">
                    <FileText className="h-4 w-4" />
                    CV Preview
                  </div>
                  {!loaded && (
                    <div className="flex items-center gap-2 text-sm text-text-light">
                      <div className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      Loading...
                    </div>
                  )}
                </div>
                <div className="h-[70vh] w-full">
                  <iframe
                    ref={iframeRef}
                    srcDoc={htmlContent}
                    className="h-full w-full"
                    title="CV Preview"
                    onLoad={() => setLoaded(true)}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            )}

            {htmlContent && (
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={handleEditSection}>
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit Sections
                </Button>
                <Button onClick={handleExportPdf} disabled={exporting}>
                  <Download className="mr-2 h-4 w-4" />
                  {exporting ? "Exporting PDF..." : "Download PDF"}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
