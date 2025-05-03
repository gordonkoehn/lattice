import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Link,
  Outlet,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { MetaFunction } from "@vercel/remix";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  { title: "Lattice" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io/android-chrome-512x512.png" />

        <Meta />
        <Links />

        {/* Minimal custom styling */}
        <style>{`body { font-family: 'Inter', sans-serif; background: #fff; } html { scroll-behavior: smooth; }`}</style>
      </head>

      <body className="bg-icyWhite min-h-screen">
        <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-800 hover:text-black">
              <img src="/lattic.png" alt="Lattice Logo" className="h-7 w-7 object-contain" />
              Lattice
            </Link>

            {/* Nav Links + CTA */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <ul className="flex gap-6">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-black px-2 py-1 rounded transition hover:bg-gray-100 hover:shadow-sm">
                    README
                  </Link>
                </li>
                <li>
                  <Link to="/vision" className="text-gray-700 hover:text-black px-2 py-1 rounded transition hover:bg-gray-100 hover:shadow-sm">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-700 hover:text-black px-2 py-1 rounded transition hover:bg-gray-100 hover:shadow-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/for-builders" className="text-gray-700 hover:text-black px-2 py-1 rounded transition hover:bg-gray-100 hover:shadow-sm">
                    For Builders
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-black px-2 py-1 rounded transition hover:bg-gray-100 hover:shadow-sm">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="ml-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition shadow-sm"
              >
                Join Lattice
              </Link>
            </div>
          </div>
        </nav>

        <div className="min-h-screen">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
