import type { Metadata } from "next";
import { services } from "../data/siteData";
import { PageHero, Button } from "../components/UI";

export const metadata: Metadata = {
  title: "Services — Apex AI",
  description:
    "AI consulting and full-stack development. From strategy to production-ready tools.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear strategy. Reliable engineering."
        description="We offer two core services: AI consulting to help you figure out what to build, and full-stack development to build it. Both are designed to create lasting value, not vendor dependency."
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {services.map((service, i) => (
          <section key={service.id} className="scroll-mt-24" id={service.id}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left column */}
              <div className="lg:col-span-2">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                  0{i + 1}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400">{service.subtitle}</p>
              </div>

              {/* Right column */}
              <div className="lg:col-span-3">
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                    What this includes
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {i < services.length - 1 && (
              <div className="mt-20 border-t border-gray-200" />
            )}
          </section>
        ))}

        {/* CTA */}
        <section className="pt-8">
          <div className="border border-gray-200 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Not sure which service fits?
              </h3>
              <p className="text-gray-500 text-sm max-w-md">
                Most engagements start with a conversation. Tell us what you're working on and we'll suggest the right approach.
              </p>
            </div>
            <Button href="/contact">Let&apos;s talk</Button>
          </div>
        </section>
      </div>
    </>
  );
}
