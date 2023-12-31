import { expect, describe, test } from "@jest/globals";
import { dnsResolver } from "../DnsResolver";

const sampleDomain = "swiftconductor.com";
const nonExistingDomain = "non-existing-domain.swiftconductor.com";

describe("dnsResolver", () => {
  test("should resolve dns", async () => {
    const ip = await dnsResolver(sampleDomain);
    expect(ip).toBeDefined();
  });
  test("Should return empty if domain could not be resolved", async () => {
    const ip = await dnsResolver(nonExistingDomain);
    expect(ip).not.toBeDefined();
  });
});
