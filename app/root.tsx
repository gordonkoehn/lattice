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
import React, { useState } from 'react';

export const meta: MetaFunction = () => [
  { title: "Lattice" }
];

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        {/* Favicons for different platforms */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io/android-chrome-512x512.png" />
        <Meta />
        <Links />
        <style>{`body { font-family: 'Inter', sans-serif; margin: 0; background: #fff; } html { scroll-behavior: smooth; }`}</style>
      </head>
      <body>
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            padding: "1.5rem 2rem",
            fontWeight: 600,
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 2px 12px #0001",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "1.3rem",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#222",
              textDecoration: "none",
            }}
          >
            <img src="/lattic.png" alt="Lattice Logo" style={{ height: 32, width: 32, objectFit: "contain" }} />
            Lattice
          </Link>
          <div style={{ flex: 1 }} />
          <Link
            to="/contribute"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            Contribute
          </Link>
          <Link
            to="/curate"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            Curate
          </Link>
          <Link
            to="/consume"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            Consume
          </Link>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              onBlur={() => setTimeout(() => setIsAboutOpen(false), 150)}
              style={{
                color: "#444",
                background: 'none',
                border: 'none',
                padding: "0.25rem 0.5rem",
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
                fontFamily: 'inherit',
                fontSize: 'inherit',
              }}
            >
              About ▾
            </button>
            {isAboutOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: 6,
                padding: '0.5rem',
                marginTop: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                minWidth: '120px',
                zIndex: 1001,
              }}>
                <Link
                  to="/mission"
                  style={{
                    color: "#444",
                    textDecoration: "none",
                    padding: "0.25rem 0.5rem",
                    borderRadius: 4,
                    display: 'block',
                  }}
                  onClick={() => setIsAboutOpen(false)}
                >
                  Mission
                </Link>
                <Link
                  to="/architecture"
                  style={{
                    color: "#444",
                    textDecoration: "none",
                    padding: "0.25rem 0.5rem",
                    borderRadius: 4,
                    display: 'block',
                  }}
                  onClick={() => setIsAboutOpen(false)}
                >
                  Architecture
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div style={{ minHeight: "calc(100vh - 80px)" }}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
