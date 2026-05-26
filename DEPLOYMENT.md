# Production Deployment Guide

## Recommended: Vercel

Use Vercel first for this portfolio because it is a Next.js app using `next/image`, and Vercel deploys Next.js without requiring static export changes.

Steps:

1. Push this repository to GitHub.
2. Open Vercel and import the GitHub repository.
3. Keep the auto-detected framework as Next.js.
4. Use the default commands:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave default
5. Deploy.
6. Share the free production URL: `<project-name>.vercel.app`.

Vercel automatically assigns deployments a `.vercel.app` domain. Custom domains can be added later from the project domain settings.

Source: https://vercel.com/docs/domains/working-with-domains

## Free URL Options

- Vercel: `<project>.vercel.app`
- Netlify: `<site>.netlify.app`
- Cloudflare Pages: `<project>.pages.dev`
- GitHub Pages: `<username>.github.io` or `<username>.github.io/<repo>`

These are the most reliable free ways to make the site publicly available online.

## Alternative: Netlify

Netlify works well for static/frontend sites and gives a free `.netlify.app` subdomain. For this app, Vercel is simpler because Netlify may need more framework-specific handling for Next.js image optimization depending on the deploy mode.

Source: https://docs.netlify.com/manage/domains/domains-fundamentals/understand-domains/

## Alternative: Cloudflare Pages

Cloudflare Pages gives a free `.pages.dev` subdomain. If using Cloudflare Pages as a static export, update the app for `output: "export"` and avoid default `next/image` optimization or configure a custom image loader.

Sources:

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://nextjs.org/docs/14/pages/building-your-application/deploying/static-exports

## Alternative: GitHub Pages

GitHub Pages is free, but this app should be converted to a static export before deploying there. This is a good option only if the site stays fully static.

Source: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Free Domain Notes

The best free domain for a professional portfolio is usually a hosting platform subdomain, especially `.vercel.app` for this project.

`eu.org` can provide free subdomain registration, but approval can take time and it is less polished for a professional portfolio.

Source: https://nic.eu.org/index.html

Avoid relying on Freenom-style free TLDs for production. Freenom currently says new registrations are temporarily out of order.

Source: https://www.freenom.com/en/index.html

## Production QA Checklist

Before sharing the URL:

- Run `npm run lint`.
- Run `npm run build`.
- Open the production URL on desktop and mobile.
- Check that the hero image loads.
- Check that Thai font rendering looks correct.
- Check that the CTA buttons are visible.
- Check that no horizontal scroll appears on mobile.
