"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Euro,
  LayoutDashboard,
  Palette,
  Briefcase,
} from "lucide-react";
import type { TemplateType } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Euro,
  LayoutDashboard,
  Palette,
  Briefcase,
};

interface TemplateCardProps {
  type: TemplateType;
  title: string;
  iconName: string;
  description: string;
  details: string;
}

export function TemplateCard({
  type,
  title,
  iconName,
  description,
  details,
}: TemplateCardProps) {
  const Icon = iconMap[iconName] || FileText;

  return (
    <Card className="group transition-all hover:shadow-lg hover:-translate-y-0.5">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-icon text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-light leading-relaxed">{details}</p>
        <Button asChild className="mt-4 w-full">
          <Link href={`/select-cv/${type}`}>
            Choose Template
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
