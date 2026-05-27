"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SectionCheckboxCardProps {
  title: string;
  icon: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
}

export function SectionCheckboxCard({
  title,
  icon,
  description,
  checked,
  onToggle,
}: SectionCheckboxCardProps) {
  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[icon] || LucideIcons.FileText;

  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition-all",
        checked
          ? "border-primary bg-primary-light"
          : "border-border bg-white hover:border-primary/50"
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
          checked ? "bg-primary text-white" : "bg-primary-icon text-primary"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
          <div
            className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
              checked
                ? "border-primary bg-primary text-white"
                : "border-gray-300"
            )}
          >
            {checked && <Check className="h-3 w-3" />}
          </div>
        </div>
        <p className="mt-0.5 text-xs text-text-light">{description}</p>
      </div>
    </button>
  );
}
