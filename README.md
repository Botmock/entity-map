# @botmock-api/entity-map 

> map a custom entity name to its platform-specific value

### Installation

```bash
npm i @botmock-api/entity-map
```

##### `findPlatformEntityEquivalent(entityName: string): string`

```ts
import { default as findPlatformEntityEquivalent } from "@botmock-api/entity-map";

findPlatformEntityEquivalent("date", { platform: "dialogflow" });
// @sys.date
findPlatformEntityEquivalent("date", { platform: "amazon" });
// AMAZON.DATE
```
