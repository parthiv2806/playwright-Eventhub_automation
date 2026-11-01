import { test as base } from "@playwright/test";
import { Login_page } from "../pages/Login_page.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new Login_page(page));
  },
});


