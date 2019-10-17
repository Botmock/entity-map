export { Entity } from "./types";

export const map = new Map([
  ["age", { dialogflow: "@sys.age", amazon: "AMAZON.NUMBER" }],
  ["any", { dialogflow: "@sys.any", amazon: undefined }],
  ["city", { dialogflow: "@sys.geo-city", amazon: "AMAZON.City" }],
  ["color", { dialogflow: "@sys.color", amazon: "AMAZON.Color" }],
  ["country", { dialogflow: "@sys.geo-country", amazon: "AMAZON.Country" }],
  ["currency", { dialogflow: "@sys.currency-name", amazon: undefined }],
  ["date", { dialogflow: "@sys.date", amazon: "AMAZON.DATE" }],
  ["dimension", { dialogflow: "@sys.unit-volume", amazon: undefined }],
  ["duration", { dialogflow: "@sys.duration", amazon: "AMAZON.DURATION" }],
  ["email", { dialogflow: "@sys.email", amazon: undefined }],
  ["name", { dialogflow: "@sys.given-name", amazon: undefined }],
  ["number", { dialogflow: "@sys.number", amazon: "AMAZON.NUMBER" }],
  ["ordinal", { dialogflow: "@sys.ordinal", amazon: "AMAZON.Ordinal" }],
  ["phonenumber", { dialogflow: "@sys.phone-number", amazon: "AMAZON.PhoneNumber" }],
]);

interface Options {
  readonly platform: string;
}

/**
 * Finds platform-specific value for entity name
 * @param entityName string the name of the original entity
 * @param options Options 
 * @returns string
 */
export default function findPlatformEntityEquivalent(entityName: string, options: Options): string | void {
  return map.get(entityName)[options.platform];
}
