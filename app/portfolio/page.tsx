import type { Metadata } from "next";
import { portfolio } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Portfolio — Apex AI",
  description:
    "Selected work from Apex AI. Real problems, practical approaches, measurable outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work"
        description="Each entry follows the same structure: what was the problem, how we approached it, and what happened. No embellishment."
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {portfolio.map((entry, i) => (
            <article
              key={i}
              className="border border-gray-200 rounded-xl p-8 md:p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 max-w-2xl">
                  {entry.title}
                </h2>
                <span className="text-sm text-gray-400 font-mono shrink-0 ml-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                    Problem
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {entry.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                    Approach
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {entry.approach}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                    Outcome
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {entry.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 border border-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
