import Link from "next/link";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl">{description}</p>
      )}
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-20 pb-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-white text-gray-900 border border-gray-300 hover:border-gray-400";

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
