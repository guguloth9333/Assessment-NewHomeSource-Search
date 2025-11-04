// tests/smoke.spec.ts
import { test, expect } from '@playwright/test';
import { SearchPage } from './pages/SearchPage';

test('Search and verify first listing has all required fields', async ({ page }) => {
  const searchPage = new SearchPage(page);

  // 1. Navigate to homepage
  await searchPage.goto();

  // 2. Search for location
  await searchPage.searchLocation('Trenton');

  // 3. Verify first listing has all required fields
  await searchPage.verifyFirstListing();
});
