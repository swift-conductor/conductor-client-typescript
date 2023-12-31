import type { ConductorHttpRequest } from "../common";
import { baseAuthConductorClient } from "./BaseAuthConductorClient";

const defaultRequestHandler: ConductorHttpRequest = (
  request,
  config,
  options
) => request(config, options);
/**
 * Takes a config with keyId and keySecret returns a promise with an instance of ConductorClient
 *
 * @param config ConductorClientConfig with keyId and keySecret
 * @param requestHandler (optional) ConductorHttpRequest handler
 * @returns
 */
export const conductorClient = baseAuthConductorClient(
  fetch,
  defaultRequestHandler
);
