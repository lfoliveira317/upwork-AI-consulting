import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-gray-900 mb-3">
              Apex AI
            </p>
            <p className="text-sm text-gray-500 max-w-xs">
              AI consulting and development. We help companies adopt AI with
              clarity and build tools that work.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">Pages</p>
            <ul className="space-y-2">
              {["Services", "Products", "Portfolio", "Team", "Contact"].map(
                (page) => (
                  <li key={page}>
                    <Link
                      href={`/${page.toLowerCase()}`}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {page}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">Get in touch</p>
            <p className="text-sm text-gray-500">hello@apexai.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Apex AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
