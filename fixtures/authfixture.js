import { test as base } from "./basefixture.js";
import login from "../test_data/login.json";

export const test = base.extend({
  authenticatedPage: async ({ loginPage }, use) => {
    await loginPage.open();
    await loginPage.Login_method(
      login.Validlogin.username,
      login.Validlogin.password,
    );
    await use(loginPage);
  },
});


