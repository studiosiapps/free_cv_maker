"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CvTemplate } from "@/types";
import { API_BASE_URL } from "@/lib/constants";

interface CvCardProps {
  template: CvTemplate;
  selected: boolean;
  onSelect: () => void;
}

export function CvCard({ template, selected, onSelect }: CvCardProps) {
  const [loaded, setLoaded] = useState(false);

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
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        )}
        <Image
          unoptimized
          src={`${API_BASE_URL}/${template.image}`}
          alt={`CV Template ${template.id}`}
          fill
          className={cn(
            "object-cover transition-transform group-hover:scale-105",
            loaded ? "opacity-100" : "opacity-0"
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onLoad={() => setLoaded(true)}
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
