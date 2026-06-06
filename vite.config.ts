import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { siteConfig } from "./src/config/site";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const siteHtmlMeta = (): Plugin => ({
  name: "site-html-meta",
  transformIndexHtml(html) {
    const replacements: Record<string, string> = {
      "%SITE_TITLE%": siteConfig.seo.title,
      "%SITE_DESCRIPTION%": siteConfig.seo.description,
      "%SITE_NAME%": siteConfig.name,
      "%OG_IMAGE%": siteConfig.seo.ogImage,
      "%OG_LOCALE%": siteConfig.seo.locale,
    };

    return Object.entries(replacements).reduce(
      (current, [token, value]) => current.replaceAll(token, escapeHtml(value)),
      html,
    );
  },
});

export default defineConfig({
  plugins: [react(), siteHtmlMeta()],
});
