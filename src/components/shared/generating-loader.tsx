"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function GeneratingLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <FileText className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
            <span className="relative inline-flex h-5 w-5 rounded-full bg-primary" />
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-text-dark">
            Generating Your CV
          </h3>
          <p className="mt-1 text-sm text-text-light">
            Please wait while we create your professional CV...
          </p>
        </div>

        <div className="w-64 max-w-full">
          <Progress value={progress} className="h-2" />
          <p className="mt-2 text-xs text-text-light">
            {Math.min(Math.round(progress), 90)}% complete
          </p>
        </div>
      </div>
    </div>
  );
}
