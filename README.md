# Netflix Conductor Javascript/Typescript SDK

The `conductor-client-typescript` repository provides the client SDKs to build task workers in javascript/typescript.

Building the task workers in javascript mainly consists of the following steps:

1. Setup conductor-client-typescript package
2. [Create and run task workers](workers_sdk.md)
3. [Create workflows using code](workflow_sdk.md)
   
### Setup Conductor Javascript Package

* Get the package from npm

```shell
npm i @com-swiftconductor/conductor-client-typescript
```
or

```shell
yarn add @com-swiftconductor/conductor-client-typescript
```

## Configurations

### Configure API Client

```typescript
/**
 * Application keys generated from the Application menu > Create Application
 * then edit and create Access Keys
 *
 */
import { ConductorApiConfig, conductorClient } from "@com-swiftconductor/conductor-client-typescript";

const config: Partial<ConductorApiConfig> = {
  serverUrl: "http://localhost:8080/api",
};

conductorClient(config).then(client => ..... );

```

### Next: [Create and run task workers](workers_sdk.md)
