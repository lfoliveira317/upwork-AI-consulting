import Link from "next/link";
import { company, services, products, portfolio } from "./data/siteData";
import { SectionHeader, Button } from "./components/UI";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            AI Consulting &amp; Development
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl leading-[1.1]">
            {company.tagline}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {company.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start a conversation</Button>
            <Button href="/services" variant="secondary">
              What we do
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ────────────────────────── */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Services"
            title="Two ways we work with you"
            description="Whether you need a clear strategy or a production-ready product, we cover both."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{service.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-block mt-6 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Products Preview ─────────────────────────── */}
      <section className="py-20 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Products"
            title="What we've built"
            description="Tools and platforms developed in-house, now part of our company portfolio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.name}
                className="border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/products" variant="secondary">
              View all products
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Selected Work Preview ────────────────────── */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected work"
            description="Real problems, practical approaches, measurable outcomes."
          />

          <div className="space-y-8">
            {portfolio.slice(0, 2).map((entry, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {entry.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {entry.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                      Approach
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {entry.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                      Outcome
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {entry.outcome}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/portfolio" variant="secondary">
              See all work
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-20 border-t border-gray-200 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to talk?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Whether you need a strategy session or a full build, we'd like to hear what you're working on.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
