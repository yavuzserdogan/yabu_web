import { test, expect, request } from '@playwright/test';

const LOCALES = ['tr', 'en'] as const;
const PAGE_PATHS = ['', '/services', '/about', '/projects', '/contact'];

const PAGES = LOCALES.flatMap((locale) =>
  PAGE_PATHS.map((path) => `/${locale}${path}`)
);

test.describe('Site tüm sayfa ve link testi', () => {
  const consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleErrors.length = 0;
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    // cathh page errors (unhandled exceptions)
    page.on('pageerror', (err) => {
      consoleErrors.push(`Page error: ${err.message}`);
    });
  });

  for (const pagePath of PAGES) {
    test(`Sayfa test: ${pagePath}`, async ({ page }) => {
      const response = await page.goto(pagePath, {
        waitUntil: 'networkidle',
      });

      // check if page loaded successfully
      expect(response?.status(), `Sayfa açılmadı: ${pagePath}`).toBe(200);

      // check console errors
      expect(
        consoleErrors,
        `Console hataları bulundu: ${pagePath}\n${consoleErrors.join('\n')}`
      ).toHaveLength(0);

      // <title> is not empty
      const title = await page.title();
      expect(title, `Sayfa title boş: ${pagePath}`).not.toBe('');

      // exist meta description
      const metaDesc = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(
        metaDesc,
        `Meta description eksik: ${pagePath}`
      ).toBeTruthy();
      // check for broken images
      await page.evaluate(() =>
        Promise.all(
          Array.from(document.querySelectorAll('img')).map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
          )
        )
      );

      const brokenImages = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img'))
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.src)
      );

      expect(
        brokenImages,
        `Bozuk görseller: ${pagePath}\n${brokenImages.join('\n')}`
      ).toHaveLength(0);

      // check internal links
      const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a'))
          .map((a) => a.href)
          .filter(
            (href) =>
              href.startsWith(window.location.origin) &&
              !href.includes('#')
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

  // 404 page test
  test('404 sayfası doğru çalışıyor', async ({ page }) => {
    const response = await page.goto('/bu-sayfa-yok-123');
    expect(response?.status()).toBe(404);
  });

  // Mobil viewport testt
  test.describe('Mobil viewport', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    for (const pagePath of PAGES) {
      test(`Mobil test: ${pagePath}`, async ({ page }) => {
        const response = await page.goto(pagePath, {
          waitUntil: 'networkidle',
        });
        expect(response?.status()).toBe(200);

        // mobil scroll test
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