import { describe, expect, it } from "vitest";
import { Cache } from "../pokecache.js";

describe("Cache", () => {
  it("stores and retrieves values", () => {
    const cache = new Cache(1000);

    cache.add("test", { name: "pikachu" });

    expect(cache.get("test")).toEqual({ name: "pikachu" });

    cache.stopReapLoop();
  });
});