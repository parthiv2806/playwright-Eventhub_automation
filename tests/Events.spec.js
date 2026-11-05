import { test } from "../fixtures/authfixture.js";

test("Navigate to the event page", async ({ authenticatedPage, Eventpage }) => {
  await Eventpage.Events();
  await Eventpage.expectEventsPage();
});
