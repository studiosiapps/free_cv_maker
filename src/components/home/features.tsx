import { FileText, Zap, Download, Shield, Palette, Globe } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "ATS-Friendly Templates",
    description:
      "Our templates are optimized for Applicant Tracking Systems, ensuring your CV gets past automated screenings.",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description:
      "Build a professional CV in minutes with our intuitive step-by-step form interface.",
  },
  {
    icon: Download,
    title: "PDF Export",
    description:
      "Download your CV as a high-quality PDF file ready to share with employers.",
  },
  {
    icon: Palette,
    title: "Multiple Designs",
    description:
      "Choose from 5 unique template styles including Modern, Creative, Professional, and more.",
  },
  {
    icon: Globe,
    title: "Web Preview",
    description:
      "Preview your CV in real-time before downloading to ensure everything looks perfect.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data is processed securely. We don't store your personal information.",
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
            Why Choose Free CV Maker?
          </h2>
          <p className="mt-3 text-base text-text-light">
            Create a standout CV that gets you noticed by recruiters
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-icon text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
