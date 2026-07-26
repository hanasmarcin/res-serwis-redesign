import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("renders complete, indexable content with correct contact destinations", async ({ page }) => {
  await expect(page).toHaveTitle(/RES-SERWIS/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Olsztyna/);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/serwis OZE/);
  await expect(page.getByRole("link", { name: /telefon komórkowy/i })).toHaveAttribute(
    "href",
    "tel:+48502328185",
  );
  await expect(page.getByRole("link", { name: "info@res-serwis.pl" })).toHaveAttribute(
    "href",
    "mailto:info@res-serwis.pl",
  );
  await expect(page.getByRole("link", { name: /telefon stacjonarny/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "www.res-serwis.pl" })).toHaveCount(0);
  await expect(
    page.getByRole("link", {
      name: "ul. Bydgoska 3B, 10-243 Olsztyn, Polska",
    }),
  ).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=ul.+Bydgoska+3B%2C+10-243+Olsztyn%2C+Polska",
  );
});

test("has no detectable WCAG A or AA accessibility violations", async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});

test("does not overflow horizontally", async ({ page }) => {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
});

test("mobile navigation closes with Escape and moves focus after navigation", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile-only navigation behavior");

  const navigation = page.getByRole("navigation", { name: "Główna nawigacja" });
  const menuButton = navigation.getByRole("button");

  await expect(menuButton).toHaveAccessibleName("Otwórz menu");
  await menuButton.click();
  await expect(menuButton).toHaveAccessibleName("Zamknij menu");
  await page.keyboard.press("Escape");
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await navigation.getByRole("link", { name: "O firmie" }).click();

  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator("#about")).toBeFocused();
  await expect(page.locator("#mobile-navigation")).toBeHidden();
});
