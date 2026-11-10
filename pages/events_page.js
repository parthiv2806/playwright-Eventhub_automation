import { expect } from "@playwright/test";

export class Event_page {
  constructor(page) {
    this.page = page;
    this.events = page.locator("#nav-events");
    this.eventsHeading = page.getByRole("heading", { name: "Upcoming Events" });
    this.eventsHeading1 = page.getByText(
      "Find your next unforgettable experience",
      { exact: true },
    );
    this.eventCards = page.getByTestId("event-card");
    this.searchInput = page.getByPlaceholder(/Search events, venues/);
    this.searchResults = page.getByTestId("event-card");
    this.noResultsMessage = page.getByRole("heading", {
      name: "No events found",
    });
    this.noResultsHint = page.getByText(
      "Try adjusting your filters or search terms to find what you're looking for.",
    );
  }

  async Events() {
    await this.events.click();
  }

  async expectEventsPage() {
    await expect(this.page).toHaveURL(/\/events$/);
    await expect(this.eventsHeading).toBeVisible();
    await expect(this.eventsHeading1).toBeVisible();
  }

  async getAllEvents() {
    await this.eventCards.first().waitFor();

    const totalCards = await this.eventCards.count();

    console.log("Total Events:", totalCards);

    for (let i = 0; i < totalCards; i++) {
      const card = this.eventCards.nth(i);

      const cardText = await card.innerText();

      console.log(`Event ${i + 1}:`);
      console.log(cardText);
    }
  }
  async searchData(value) {
    await this.searchInput.fill(value);

    await this.page.waitForURL(
      `**/events?search=${encodeURIComponent(value)}`,
    );

    return await this.searchInput.inputValue();
  }

  // Get All Search Results
  async getSearchResults() {
    await expect(
      this.searchResults.first().or(this.noResultsMessage),
    ).toBeVisible();

    return await this.searchResults.allTextContents();
  }

  async expectNoResultsMessage() {
    await expect(this.noResultsMessage).toBeVisible();
    await expect(this.noResultsHint).toBeVisible();
    await expect(this.searchResults).toHaveCount(0);
  }
}
