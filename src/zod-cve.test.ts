import { describe, expect, test } from "vitest";
import zodPkg from "zod/package.json";

// GHSA-mrhx-c7xc-m3w5 affects zod versions before the 4.6.6 fix.
// This regression test pins the resolved dependency to the fixed line.
describe("zod dependency security", () => {
  test("resolves a zod version at least 4.6.6", () => {
    const installed = zodPkg.version.split(".").map((n) => Number(n));
    const fixed = [4, 6, 6];
    expect(installed.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(installed[i], `zod ${zodPkg.version} is below fixed 4.6.6`).toBeGreaterThanOrEqual(fixed[i]);
      if (installed[i] > fixed[i]) break;
    }
  });
});
