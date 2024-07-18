import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:5173/";

test("Movie Test", async ({ page }) => {
  try {
    await page.goto(baseUrl);

    await page.waitForSelector(".movie");

    const movies = await page.$$eval(".movie", (movies) =>
      movies.map((movie) => movie.textContent.trim())
    );
    expect(movies.length).toBeGreaterThan(0);

    const movieTitles = await page.$$eval(".movie h2", (titles) =>
      titles.map((title) => title.textContent.trim())
    );
    expect(movieTitles.every((title) => title.length > 0)).toBeTruthy();
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  }
});
