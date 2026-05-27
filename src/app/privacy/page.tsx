import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-text-dark sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-text-light">
              Last updated: January 1, 2025
            </p>

            <div className="mt-8 space-y-6 text-text-dark leading-relaxed">
              <p>
                Studiosi Apps (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we handle your information when you use our CV
                building service.
              </p>

              <h2 className="text-xl font-semibold mt-8">
                1. Information We Process
              </h2>
              <p>
                We process the information you provide while creating your CV,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>CV Content:</strong> Name, contact details, work
                  experience, education, skills, projects, and other
                  professional information you enter
                </li>
                <li>
                  <strong>Profile Photos:</strong> Images you choose to upload
                  for your CV
                </li>
              </ul>
              <p className="text-sm text-text-light italic">
                Note: We do not require you to create an account or provide any
                personal information to use our service.
              </p>

              <h2 className="text-xl font-semibold mt-8">
                2. How We Process Your Data
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To generate and format your CV document</li>
                <li>To allow you to preview and download your CV as PDF</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8">
                3. Data Storage and Retention
              </h2>
              <p>
                Your CV data is sent to our server only at the moment of CV
                generation. It is processed temporarily and deleted immediately
                after the PDF is created. We do not store, retain, or archive
                your CV data or uploaded photos on our servers.
              </p>
              <p className="mt-2">
                While you are building your CV, all data stays exclusively in
                your browser&apos;s session storage and is automatically cleared
                when you close your browser tab.
              </p>

              <h2 className="text-xl font-semibold mt-8">
                4. Third-Party Services
              </h2>
              <p>
                We do not sell, trade, or share your personal information with
                third parties. Your data is processed solely for the purpose of
                generating your CV and is not transferred to any external
                service or third party.
              </p>

              <h2 className="text-xl font-semibold mt-8">5. Cookies</h2>
              <p>
                We do not use cookies, tracking scripts, or any form of
                analytics. We do not track your browsing behavior or collect any
                usage data.
              </p>

              <h2 className="text-xl font-semibold mt-8">6. Data Security</h2>
              <p>
                Since your data is processed in real-time and not stored, there
                is no persistent data at risk. During transmission, we use
                industry-standard encryption to protect your information.
              </p>

              <h2 className="text-xl font-semibold mt-8">7. Your Rights</h2>
              <p>
                Because we do not store your personal data, there is no data to
                access, modify, or delete. Simply closing your browser tab
                removes all data from your session. If you have any concerns,
                you can contact us anytime.
              </p>

              <h2 className="text-xl font-semibold mt-8">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:studiosiapps@gmail.com"
                  className="text-primary hover:underline"
                >
                  studiosiapps@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
