import { test, expect, request } from "@playwright/test";

const LOCALES = ["tr", "en"] as const;

const SERVICE_SLUGS = [
  "corporate-web",
  "e-commerce",
  "boutique",
  "portfolio",
  "landing",
  "mobile-app",
  "qr-menu",
  "booking",
  "social-media",
  "ui-ux",
  "branding",
  "ads",
  "seo",
  "maintenance",
  "security",
  "corporate-mail",
];

const SERVICE_PATHS = SERVICE_SLUGS.map((slug) => `/services/${slug}`);

const PAGE_PATHS = [
  "",
  "/about",
  "/projects",
  "/contact",
  ...SERVICE_PATHS,
];

const PAGES = LOCALES.flatMap((locale) =>
  PAGE_PATHS.map((path) => `/${locale}${path}`)
);

test.describe("Site tüm sayfa testleri", () => {
  const consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors.length = 0;

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (err) => {
      consoleErrors.push(`Page error: ${err.message}`);
    });
  });

  for (const pagePath of PAGES) {
    test(`Sayfa test: ${pagePath}`, async ({ page }) => {

      const response = await page.goto(pagePath, {
        waitUntil: "networkidle",
      });

      expect(response?.status(), `Sayfa açılmadı: ${pagePath}`).toBe(200);

      expect(
        consoleErrors,
        `Console hataları bulundu: ${pagePath}\n${consoleErrors.join("\n")}`
      ).toHaveLength(0);

      const title = await page.title();

      expect(title, `Sayfa title boş: ${pagePath}`).not.toBe("");

      const metaDesc = await page
        .locator('meta[name="description"]')
        .getAttribute("content");

      expect(metaDesc, `Meta description eksik: ${pagePath}`).toBeTruthy();

      // image load için kısa bekleme
      await page.waitForTimeout(2000);

      // broken images
      const brokenImages = await page.evaluate(() =>
        Array.from(document.images)
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.src)
      );

      expect(
        brokenImages,
        `Bozuk görseller bulundu: ${pagePath}\n${brokenImages.join("\n")}`
      ).toHaveLength(0);

      // internal link test
      const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a"))
          .map((a) => a.href)
          .filter(
            (href) =>
              href.startsWith(window.location.origin) &&
              !href.includes("#")
          )
      );

      const uniqueLinks = [...new Set(links)];

      const apiContext = await request.newContext();

      for (const link of uniqueLinks) {
        const linkResponse = await apiContext.get(link);

        expect(
          linkResponse.status(),
          `Link hata verdi: ${link}`
        ).toBe(200);
      }

      await apiContext.dispose();
    });
  }

  test("404 sayfası çalışıyor mu", async ({ page }) => {
    const response = await page.goto("/bu-sayfa-yok-123");

    expect(response?.status()).toBe(404);
  });

  test.describe("Mobil viewport testleri", () => {

    test.use({
      viewport: { width: 375, height: 812 },
    });

    for (const pagePath of PAGES) {
      test(`Mobil test: ${pagePath}`, async ({ page }) => {

        const response = await page.goto(pagePath, {
          waitUntil: "networkidle",
        });

        expect(response?.status()).toBe(200);

        const hasHorizontalScroll = await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth
        );

        expect(
          hasHorizontalScroll,
          `Yatay scroll var (layout bozuk): ${pagePath}`
        ).toBe(false);
      });
    }
  });

});