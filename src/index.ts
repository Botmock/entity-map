export { Entity } from "./types";

export const map = new Map([
  ["Age", { dialogflow: "@sys.age", amazon: "AMAZON.NUMBER" }],
  ["Any", { dialogflow: "@sys.any", amazon: undefined }],
  ["City", { dialogflow: "@sys.geo-city", amazon: "AMAZON.City" }],
  ["Color", { dialogflow: "@sys.color", amazon: "AMAZON.Color" }],
  ["Country", { dialogflow: "@sys.geo-country", amazon: "AMAZON.Country" }],
  ["Currency", { dialogflow: "@sys.currency-name", amazon: undefined }],
  ["Date", { dialogflow: "@sys.date", amazon: "AMAZON.DATE" }],
  ["Dimension", { dialogflow: "@sys.unit-volume", amazon: undefined }],
  ["Duration", { dialogflow: "@sys.duration", amazon: "AMAZON.DURATION" }],
  ["Email", { dialogflow: "@sys.email", amazon: undefined }],
  ["Name", { dialogflow: "@sys.given-name", amazon: undefined }],
  ["Number", { dialogflow: "@sys.number", amazon: "AMAZON.NUMBER" }],
  ["Ordinal", { dialogflow: "@sys.ordinal", amazon: "AMAZON.Ordinal" }],
  ["Phone Number", { dialogflow: "@sys.phone-number", amazon: "AMAZON.PhoneNumber" }],
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
