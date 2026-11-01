import { test } from "../fixtures/authfixture.js";
import login from "../test_data/login.json";

test("logs in with valid email id and password", async ({
  authenticatedPage,
}) => {
  await authenticatedPage.expectLoginSuccess();
});

test("Login Without email and password", async ({ loginPage }) => {
  // const empty = login.emptyEmailAndPassword;

  // await loginPage.open();
  // await loginPage.Login_method(empty.username, empty.password);

  // await loginPage.loginAs(empty.username, empty.password);
  await loginPage.loginAs(
    login.emptyEmailAndPassword.username,
    login.emptyEmailAndPassword.password,
  );
  await loginPage.expectEmailError(login.errors.email);
  await loginPage.expectPasswordError(login.errors.password);
});

test("Login with only email", async ({ loginPage }) => {
  await loginPage.Onlyemil(login.Onlyemil.username);
  await loginPage.expectPasswordError(login.errors.password);
});

test("Login with only Password", async ({ loginPage }) => {
  await loginPage.Onlypassword(login.OnlyPassword.password);
  await loginPage.expectEmailError(login.errors.email);;
});
