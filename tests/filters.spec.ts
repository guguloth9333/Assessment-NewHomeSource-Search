// tests/filters.spec.ts
import { test, expect } from '@playwright/test';
import { SearchPage } from './pages/SearchPage';

test('Apply price and bed/bath filters', async ({ page }) => {
  const searchPage = new SearchPage(page);

  // 1. Navigate to homepage
  await searchPage.goto();

  // 2. Search for location
  await searchPage.searchLocation('Trenton');

  // 3. Get initial listing count
  const initialCount = await searchPage.getListingCount();
  console.log(`Initial listings: ${initialCount}`);

  // 4. Apply price filter (15 steps for min, 15 steps for max)
  await searchPage.applyPriceFilter(15, 15);

  // 5. Apply bed/bath filter (3+ beds, 2+ baths)
  await searchPage.applyBedBathFilter('3', '2');

  // 6. Verify filters applied
  await searchPage.verifyFiltersApplied(initialCount);
});
