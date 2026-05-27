import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { FileText } from "lucide-react";

const footerLinks = [
  {
    title: "Templates",
    links: [
      { href: "/template/ats", label: "ATS Friendly Resume" },
      { href: "/template/europass", label: "European CV" },
      { href: "/template/modern", label: "Modern CV" },
      { href: "/template/creative", label: "Creative CV" },
      { href: "/template/professional", label: "Professional CV" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/", label: "Home" },
      { href: "/template/ats", label: "Create Resume" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-text-dark"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <FileText className="h-4 w-4" />
              </div>
              {APP_NAME}
            </Link>
            <p className="mt-3 text-sm text-text-light max-w-xs">
              Create professional CVs and resumes online for free. Choose from
              multiple templates and formats.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-text-dark">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-light transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs text-text-light">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
