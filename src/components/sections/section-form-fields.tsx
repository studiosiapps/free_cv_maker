"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SectionField } from "@/types";

interface SectionFormFieldsProps {
  fields: SectionField[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export function SectionFormFields({
  fields,
  values,
  onChange,
}: SectionFormFieldsProps) {
  return (
    <div className="space-y-4">
      {fields
        .filter((f) => !f.isPhotoField)
        .map((field) => (
          <div key={field.key}>
            <Label htmlFor={field.key} className="mb-1.5 block">
              {field.label}
            </Label>
            {field.type === "select" ? (
              <Select
                value={values[field.key] || ""}
                onValueChange={(v) => onChange(field.key, v)}
              >
                <SelectTrigger id={field.key}>
                  <SelectValue placeholder={`Select ${field.label}`} />
                </SelectTrigger>
                <SelectContent>
                  {(field.options || []).map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.multiline ? (
              <Textarea
                id={field.key}
                placeholder={field.placeholder}
                value={values[field.key] || ""}
                onChange={(e) => onChange(field.key, e.target.value)}
                rows={4}
              />
            ) : (
              <Input
                id={field.key}
                type={field.type === "date" ? "text" : "text"}
                placeholder={field.placeholder}
                value={values[field.key] || ""}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}
    </div>
  );
}
