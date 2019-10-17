import { default as findPlatformEntityEquivalent } from "../src";

test("find platform entity equivalent returns a string", () => {
  expect(typeof findPlatformEntityEquivalent("date", { platform: "dialogflow" })).toBe("string");
});

test("find platform entity equivalent finds correct result", () => {
  expect(findPlatformEntityEquivalent("date", { platform: "dialogflow" })).toBe("@sys.date");
  expect(findPlatformEntityEquivalent("date", { platform: "amazon" })).toBe("AMAZON.DATE");
});
