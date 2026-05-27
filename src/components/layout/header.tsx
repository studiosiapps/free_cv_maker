"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/template/ats", label: "ATS Resume" },
  { href: "/template/modern", label: "Modern" },
  { href: "/template/creative", label: "Creative" },
  { href: "/template/professional", label: "Professional" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold text-text-dark"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FileText className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-light transition-colors hover:bg-gray-100 hover:text-text-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <Link href="/template/ats">Create CV</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
