export { Entity } from "./types";

export const map = new Map([
  ["age", { dialogflow: "@sys.age", amazon: "AMAZON.NUMBER" }],
  ["any", { dialogflow: "@sys.any", amazon: "AMAZON.TIME" }],
  ["city", { dialogflow: "@sys.geo-city", amazon: "AMAZON.City" }],
  ["color", { dialogflow: "@sys.color", amazon: "AMAZON.Color" }],
  ["country", { dialogflow: "@sys.geo-country", amazon: "AMAZON.Country" }],
  ["currency", { dialogflow: "@sys.currency-name", amazon: "AMAZON.FinancialService" }],
  ["date", { dialogflow: "@sys.date", amazon: "AMAZON.DATE" }],
  ["dimension", { dialogflow: "@sys.unit-volume", amazon: "AMAZON.SpeedUnit" }],
  ["duration", { dialogflow: "@sys.duration", amazon: "AMAZON.DURATION" }],
  ["email", { dialogflow: "@sys.email", amazon: "AMAZON.EmailAddress" }],
  ["name", { dialogflow: "@sys.given-name", amazon: "AMAZON.US_FIRST_NAME" }],
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
