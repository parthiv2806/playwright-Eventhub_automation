import { expect } from "@playwright/test";

export class Login_page {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#email");
    this.password = page.locator("#password");
    this.button = page.locator("#login-btn");
    this.logoutButton = page.locator("#logout-btn");
    this.passwordError = page.locator("#password + p");
    this.emailError = page.locator("#email + p");
  }

  async open() {
    await this.page.goto("/login");
  }

  async Login_method(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.button.click();
  }
  async loginAs(username, password) {
    await this.open();
    await this.Login_method(username, password);
  }
  async Onlyemil(username) {
    await this.open();
    await this.username.fill(username);
    await this.button.click();
  }
  async Onlypassword(password) {
    await this.open();
    await this.password.fill(password);
    await this.button.click();
  }

  // async loginAs(username, password) {
  //   await this.open();
  //   await this.Login_method(username, password);
  // }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/\/$/);
    await expect(this.logoutButton).toBeVisible();
  }

  async expectEmailError(message) {
    await expect(this.emailError).toHaveText(message);
  }

  async expectPasswordError(message) {
    await expect(this.passwordError).toHaveText(message);
  }
}
