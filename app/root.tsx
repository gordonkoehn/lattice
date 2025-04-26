import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Link,
  Outlet,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
              fontSize: "1.3rem",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#222",
              textDecoration: "none",
            }}
          >
            Lattice
          </Link>
          <div style={{ flex: 1 }} />
          <Link
            to="/about"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            About
          </Link>
          <Link
            to="/mission"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            Mission
          </Link>
          <a
            href="/docs/"
            style={{
              color: "#444",
              textDecoration: "none",
              padding: "0.25rem 0.5rem",
              borderRadius: 6,
              transition: "background 0.2s",
            }}
          >
            Docs
          </a>
        </nav>
        <div style={{ minHeight: "80vh" }}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
