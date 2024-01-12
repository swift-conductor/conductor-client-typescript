## Configurations

### Configure API Client

```typescript
/**
 * Application keys generated from the Application menu > Create Application
 * then edit and create Access Keys
 *
 */
import { ConductorApiConfig, conductorClient } from "@swiftconductor/conductor-client-typescript";

const config: Partial<ConductorApiConfig> = {
  serverUrl: "http://localhost:8080/api",
};

conductorClient(config).then(client => ..... );
```
