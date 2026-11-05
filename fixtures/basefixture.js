import { test as base } from "@playwright/test";
import { Login_page } from "../pages/Login_page.js";
import { Event_page } from "../pages/events_page.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginOne = new Login_page(page);
    await use(loginOne);
  },
  Eventpage: async ({ page }, use) => {
    const eventpage = new Event_page(page);
    await use(eventpage);
  },
});
