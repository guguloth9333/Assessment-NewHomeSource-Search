import { Page, expect } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to homepage
  async goto() {
    await this.page.goto('https://www.newhomesource.com/');
  }

  // Search for a location
  async searchLocation(location: string) {
    await this.page.getByRole('textbox', { name: 'Search location or community' }).click();
    await this.page.getByRole('textbox', { name: 'Search location or community' }).fill(location);
    await this.page.locator('.nhs-n1-c-search-bar-results__item--active').click();
  }

  // Get listing count
  async getListingCount(): Promise<number> {
    return await this.page.locator('.nhs-c-card__content').count();
  }

  // Verify mandatory fields in first listing
  async verifyFirstListing() {
    // Check listing count
    const count = await this.getListingCount();
    expect(count).toBeGreaterThan(0);
    console.log(`Total listings: ${count}`);

    // Check price
    const price = this.page.locator('span[data-qa="price_label"]').first();
    await expect(price).toBeVisible();
    console.log('Price:', await price.textContent());

    // Check address
    const address = this.page.locator('p[data-qa="listing_address"]').first();
    await expect(address).toBeVisible();
    console.log('Location:', await address.textContent());

    // Check community name
    const community = this.page.locator('a[data-card-element="communityName"]').first();
    await expect(community).toBeVisible();
    console.log('Community:', await community.textContent());

    // Check image
    const image = this.page.locator('img[data-card-element="image"]').first();
    const src = await image.getAttribute('src');
    expect(src).toContain('.jpg');
    const loaded = await image.getAttribute('data-load');
    expect(loaded).toBe('true');

    // Check rating
    const rating = this.page.locator('p[data-card-element="ratingsScore"]').first();
    await expect(rating).toBeVisible();
    console.log('Rating:', await rating.textContent());

    // Check brochure button
    const brochure = this.page.locator('button[data-button-action="Download Brochure"]').first();
    await expect(brochure).toBeVisible();
  }


  // Apply price filter
  async applyPriceFilter(minSteps: number, maxSteps: number) {
    // Open price filter dropdown
    await this.page.locator('label[for="price-toggle"]').click();

    // Adjust Min price slider
    const minSlider = this.page.locator('div[data-qa="Minimum_price_slider"]');
    await minSlider.focus();
    for (let i = 0; i < minSteps; i++) {
      await minSlider.press('ArrowRight');
    }

    // Adjust Max price slider
    const maxSlider = this.page.locator('div[data-qa="Maximum_price_slider"]');
    await maxSlider.focus();
    for (let i = 0; i < maxSteps; i++) {
      await maxSlider.press('ArrowLeft');
    }

    // Get selected price values
    const minPrice = await minSlider.getAttribute('aria-valuenow');
    const maxPrice = await maxSlider.getAttribute('aria-valuenow');
    console.log(`Selected price range: $${minPrice} - $${maxPrice}`);

    // Apply price filter
    await this.page.locator('button[data-qa="price_filter_apply"]').click();
    await this.page.waitForTimeout(2000);
  }

  // Apply bed/bath filter
  async applyBedBathFilter(beds: string, baths: string) {
    // Open Bed/Bath filter dropdown
    await this.page.locator('label[for="bedbath-toggle"]').click();

    // Select bedrooms (e.g., "3" for 3+)
    await this.page.locator(`label[data-qa="Beds${beds}"]`).click();

    // Select bathrooms (e.g., "2" for 2+)
    await this.page.locator(`label[data-qa="Baths${baths}"]`).click();

    console.log(`Bedrooms: ${beds}+, Bathrooms: ${baths}+`);

    // Apply bed/bath filter
    await this.page.locator('button[data-qa="Beds/Baths_ApplyFilters"]').click();
    await this.page.waitForTimeout(2000);
  }

  // Verify filters were applied
  async verifyFiltersApplied(initialCount: number) {
    const filteredCount = await this.getListingCount();
    console.log(`Filtered listings: ${filteredCount}`);

    expect(filteredCount).not.toBe(initialCount);
    expect(filteredCount).toBeGreaterThan(0);

    return filteredCount;
  }
}







