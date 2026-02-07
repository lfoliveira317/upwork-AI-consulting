import type { Metadata } from "next";
import { team } from "../data/siteData";
import { PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Team — Apex AI",
  description: "Meet the people behind Apex AI.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind the work"
        description="A small, senior team. Everyone here builds, consults, or both. No account managers, no layers."
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="border border-gray-200 rounded-xl p-8"
            >
              {/* Photo placeholder */}
              <div className="w-20 h-20 rounded-full bg-gray-100 mb-6 flex items-center justify-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-300">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
