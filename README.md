# Lattice Website
## Using Remix

This directory is a brief example of a [Remix](https://remix.run/docs) site that can be deployed to Vercel with zero configuration.

To get started, run the Remix cli with this template

```sh
npx create-remix@latest --template vercel/vercel/examples/remix
```

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/framework-boilerplates/remix&template=remix)

_Live Example: https://remix-run-template.vercel.app_

You can also deploy using the [Vercel CLI](https://vercel.com/docs/cli):

```sh
npm i -g vercel
vercel
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:5173](http://localhost:5173) and you should be ready to go!

## Updating the Documentation (Material for MkDocs)

1. Edit your documentation source files in `docs/docs/` (Markdown files).
2. Build the static site:
   ```sh
   cd docs
   mkdocs build
   ```
3. Copy the built site to the Remix public folder:
   ```sh
   rm -rf ../public/docs && cp -r site ../public/docs
   ```
4. Commit and push your changes.

Your documentation will be available at `/docs` on your deployed site.

## Vercel Deployment Notes
- Vercel will automatically serve static files from the `public/` directory.
- No extra configuration is needed if you follow the above steps.