// This route redirects /docs to /docs/index.html so static MkDocs docs work in dev mode
import { redirect } from "@remix-run/node";

export const loader = () => redirect("/docs/index.html");

export default function DocsRedirect() {
  return null;
}
