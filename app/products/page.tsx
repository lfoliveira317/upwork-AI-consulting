import type { Metadata } from "next";
import { products } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Products — Apex AI",
  description:
    "Production-ready tools and platforms built by Apex AI. Internal products now part of our company portfolio.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Tools we've built and maintain"
        description="These are products developed in-house — some started as internal tools, others as client solutions. They now sit under our company portfolio and are actively maintained."
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article
              key={product.name}
              className="border border-gray-200 rounded-xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h2>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    product.status === "Active"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {product.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
                  Purpose
                </p>
                <p className="text-sm text-gray-700">{product.purpose}</p>
              </div>

              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  View product →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
