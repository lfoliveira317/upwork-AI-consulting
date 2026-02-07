"use client";

import { useState, type FormEvent } from "react";
import { company } from "../data/siteData";
import { PageHero } from "../components/UI";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Replace with your form handler (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're working on. We'll get back to you within one business day."
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-green-200 bg-green-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-green-700">
                  Thanks for reaching out. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    What are you looking for?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="consulting">AI Consulting</option>
                    <option value="development">AI Full-Stack Development</option>
                    <option value="both">Both</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow resize-none"
                    placeholder="What problem are you trying to solve? What does success look like?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                Email
              </p>
              <a
                href={`mailto:${company.email}`}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                {company.email}
              </a>
            </div>

            {company.calendarLink && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                  Schedule a call
                </p>
                <a
                  href={company.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-900 border border-gray-300 rounded-lg px-5 py-2.5 hover:border-gray-400 transition-colors"
                >
                  Book a time →
                </a>
              </div>
            )}

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
                Response time
              </p>
              <p className="text-sm text-gray-600">
                We respond within one business day. If your project is time-sensitive, mention that in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
