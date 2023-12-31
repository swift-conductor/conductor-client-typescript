import { expect, describe, test } from "@jest/globals";
import { DnsCacheResolver } from "../DnsCache";

const sampleDomain = "swiftconductor.com";
const nonExistingDomain = "non-existing-domain.swiftconductor.com";

describe("dnsResolver", () => {
  test("Should resolve dns", async () => {
    const dnsCacheResolver1 = new DnsCacheResolver();
    const ip = await dnsCacheResolver1.resolve(sampleDomain);
    expect(ip).toBeDefined();
    expect(dnsCacheResolver1.cache.size).toBe(1);
  });

  test("Should return empty if domain could not be resolved", async () => {
    const dnsCacheResolver2 = new DnsCacheResolver();
    const ip = await dnsCacheResolver2.resolve(nonExistingDomain);
    expect(ip).not.toBeDefined();
    expect(dnsCacheResolver2.cache.size).toBe(0);
  });
});
