import { expect, describe, it } from "@jest/globals";
import { optionEquals } from "../helpers";
import { WorkerProcessOptions } from "../types";

describe("helpers", () => {
  it("Should return true if both options are equals", () => {
    const someOptions: WorkerProcessOptions = {
      workerID: "some-worker-id",
      domain: "mydomain",
      pollInterval: 1000,
      concurrency: 1,
      batchPollingTimeout: 1000,
    };
    const otherOptions: WorkerProcessOptions = {
      ...someOptions,
    };
    expect(optionEquals(someOptions, otherOptions)).toBeTruthy();

    expect(optionEquals(otherOptions, someOptions)).toBeTruthy();
  });

  it("Should return true if both options are equals", () => {
    const someOptions: WorkerProcessOptions = {
      workerID: "some-worker-id",
      domain: "mydomain",
      pollInterval: 1000,
      concurrency: 1,
      batchPollingTimeout: 1000,
    };
    const otherOptions: WorkerProcessOptions = {
      ...someOptions,
      batchPollingTimeout: 2000,
    };
    expect(optionEquals(someOptions, otherOptions)).not.toBeTruthy();

    expect(optionEquals(otherOptions, someOptions)).not.toBeTruthy();
  });
  it("Should return false if options are only equal in some properties", () => {
    const someOptions: WorkerProcessOptions = {
      workerID: "some-worker-id",
      domain: "mydomain",
      pollInterval: 1000,
      concurrency: 1,
      batchPollingTimeout: 1000,
    };

    const someOptionsPrime: WorkerProcessOptions = {
      workerID: "some-worker-id",
      domain: "mydomain",
    };

    expect(optionEquals(someOptions, someOptionsPrime)).not.toBeTruthy();
    expect(optionEquals(someOptionsPrime, someOptions)).not.toBeTruthy();
  });
});
