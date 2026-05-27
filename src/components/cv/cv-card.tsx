"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CvTemplate } from "@/types";
import { API_BASE_URL } from "@/lib/constants";

interface CvCardProps {
  template: CvTemplate;
  selected: boolean;
  onSelect: () => void;
}

export function CvCard({ template, selected, onSelect }: CvCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative overflow-hidden rounded-xl border-2 bg-white transition-all",
        selected
          ? "border-primary shadow-lg shadow-primary/10"
          : "border-border hover:border-primary/50 hover:shadow-md"
      )}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
        <Image
        unoptimized
          src={`${API_BASE_URL}/${template.image}`}
          alt={`CV Template ${template.id}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      {selected && (
        <div className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow">
          <Check className="h-4 w-4" />
        </div>
      )}
      <div className="p-3 text-left">
        <p className="text-sm font-medium text-text-dark">
          Template {template.id}
        </p>
      </div>
    </button>
  );
}
