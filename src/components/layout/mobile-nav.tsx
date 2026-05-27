"use client";

import Link from "next/link";
import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/template/ats", label: "ATS Friendly Resume" },
  { href: "/template/europass", label: "European CV" },
  { href: "/template/modern", label: "Modern CV" },
  { href: "/template/creative", label: "Creative CV" },
  { href: "/template/professional", label: "Professional CV" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-4 h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold"
            onClick={onClose}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <FileText className="h-4 w-4" />
            </div>
            {APP_NAME}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-text-light transition-colors hover:bg-primary-light hover:text-text-dark"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <Button asChild className="w-full">
              <Link href="/template/ats" onClick={onClose}>
                Create Your CV Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
