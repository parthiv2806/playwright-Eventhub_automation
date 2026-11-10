import { test } from "../fixtures/authfixture.js";
import searchData from "../test_data/searchData.json";

test("Navigate to the event page", async ({ authenticatedPage, Eventpage }) => {
  await Eventpage.Events();
  await Eventpage.expectEventsPage();
});

test("Get all event cards", async ({ authenticatedPage, Eventpage }) => {
  await Eventpage.Events();
  await Eventpage.expectEventsPage();
  await Eventpage.getAllEvents();
});

for (const { searchValue } of searchData.searchTests) {
  test(`Search events for "${searchValue}"`, async ({
    authenticatedPage,
    Eventpage,
  }) => {
    await Eventpage.Events();
    await Eventpage.expectEventsPage();

    const typedValue = await Eventpage.searchData(searchValue);
    const searchResults = await Eventpage.getSearchResults();

     console.log(`Search "${typedValue}" -> ${searchResults.length} result(s)`);

    for (const result of searchResults) {
      console.log(`  ${result.split("\n")[0]}`);
    }

    if (searchResults.length === 0) {
      await Eventpage.expectNoResultsMessage();
    }
  });
}
