# @botmock-api/entity-map 

> map entity name to its platform-specific value

### Installation

```bash
npm i @botmock-api/entity-map
```

##### `findPlatformEntityEquivalent(entityName: string): string`

```ts
import { default as findPlatformEntityEquivalent } from "@botmock-api/entity-map";

findPlatformEntityEquivalent("Date", { platform: "dialogflow" });
// @sys.date
findPlatformEntityEquivalent("Date", { platform: "amazon" });
// AMAZON.DATE
```
