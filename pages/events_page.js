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
}
