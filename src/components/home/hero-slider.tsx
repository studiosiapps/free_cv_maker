"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, FileText, Sparkles, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Create a Professional CV",
    subtitle: "Stand out from the crowd with a polished, professional CV",
    icon: FileText,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Modern CV Templates",
    subtitle: "Choose from ATS-friendly, creative, and modern designs",
    icon: Sparkles,
    gradient: "from-purple-100 via-primary/5 to-transparent",
  },
  {
    title: "Download & Share",
    subtitle: "Export as PDF and share your CV with employers instantly",
    icon: Download,
    gradient: "from-blue-100 via-primary/5 to-transparent",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background-light to-white pb-16 pt-8 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} rounded-3xl blur-3xl`} />
          <div className="relative animate-fade-in">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 sm:h-20 sm:w-20">
              <Icon className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-base text-text-light sm:text-lg max-w-xl mx-auto">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/template/ats">
                  Create Your CV
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <Link href="/template/modern">View Templates</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? "w-6 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
