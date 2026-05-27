import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FileText, Shield, Download, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "5 Professional Templates",
    description:
      "ATS Friendly, European, Modern, Creative, and Professional — choose the style that fits your career.",
  },
  {
    icon: Shield,
    title: "ATS Compatible",
    description:
      "All templates are designed to pass Applicant Tracking Systems so your CV reaches real recruiters.",
  },
  {
    icon: Download,
    title: "Free PDF Export",
    description:
      "Download your CV as a high-quality PDF instantly. No hidden fees or credit card required.",
  },
  {
    icon: Sparkles,
    title: "Easy to Use",
    description:
      "Simple step-by-step process. Just fill in your details, pick a template, and download.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-text-dark sm:text-4xl">
              About Us
            </h1>

            <div className="mt-6 space-y-4 text-text-dark leading-relaxed">
              <p>
                Free CV Maker helps job seekers create professional, ATS-friendly
                CVs quickly and at no cost. No account needed, no hidden charges
                — just pick a template, fill in your details, and download.
              </p>
              <p>
                Built by{" "}
                <a
                  href="https://sidevelopers.studiosiapps.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Studiosi Apps
                </a>
                , the platform focuses on simplicity and accessibility so that
                anyone — regardless of budget or technical skill — can put
                their best foot forward in the job market.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-primary/5 border border-primary/20 p-8 text-center">
              <h2 className="text-xl font-semibold text-text-dark">
                Ready to create your CV?
              </h2>
              <p className="mt-2 text-text-light">
                It&apos;s free, fast, and easy. Get started in minutes.
              </p>
              <a
                href="/template/ats"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white shadow hover:bg-primary/90 transition-colors"
              >
                Create Your CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
