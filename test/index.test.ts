import { default as findPlatformEntityEquivalent } from "../src";

test("find platform entity equivalent returns a string", () => {
  expect(typeof findPlatformEntityEquivalent("Date", { platform: "dialogflow" })).toBe("string");
});

test("find platform entity equivalent finds correct result", () => {
  expect(findPlatformEntityEquivalent("Date", { platform: "dialogflow" })).toBe("@sys.date");
  expect(findPlatformEntityEquivalent("Date", { platform: "amazon" })).toBe("AMAZON.DATE");
})
