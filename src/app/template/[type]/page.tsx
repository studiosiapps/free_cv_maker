import { notFound } from "next/navigation";
import { Metadata } from "next";
import { templateTypes } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TemplateCard } from "@/components/template/template-card";
import type { TemplateType } from "@/types";

const validTypes = templateTypes.map((t) => t.type);

interface Props {
  params: { type: string };
}

export function generateStaticParams() {
  return validTypes.map((type) => ({ type }));
}

export function generateMetadata({ params }: Props): Metadata {
  const info = templateTypes.find((t) => t.type === params.type);
  if (!info) return { title: "Template Not Found" };
  return {
    title: `${info.title} Resume Template`,
    description: `Create a ${info.title.toLowerCase()} CV online free. ${info.details}`,
    alternates: { canonical: `/template/${params.type}` },
  };
}

export default function TemplateTypePage({ params }: Props) {
  const info = templateTypes.find((t) => t.type === params.type);
  if (!info) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                Choose Your {info.title} Template
              </h1>
              <p className="mt-3 text-base text-text-light">
                {info.details}
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templateTypes.map(({ type: tType, title, icon, description, details }) => (
                <TemplateCard
                  key={tType}
                  type={tType}
                  title={title}
                  iconName={icon}
                  description={description}
                  details={details}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
