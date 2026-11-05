import { expect } from "@playwright/test";

export class Event_page {
  constructor(page) {
    this.page = page;
    this.events = page.locator("#nav-events");
    this.eventsHeading = page.getByRole("heading", { name: "Upcoming Events" });
  }

  async Events() {
    await this.events.click();
  }

  async expectEventsPage() {
    await expect(this.page).toHaveURL(/\/events$/);
    await expect(this.eventsHeading).toBeVisible();
  }
}
