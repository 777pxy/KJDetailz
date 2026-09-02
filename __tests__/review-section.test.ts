jest.mock("../src/sanity/sanity", () => ({
  client: { fetch: jest.fn() },
}));

import { getInitials } from "@/app/components/review-section";

describe("getInitials", () => {
  it("falls back to JD when the name is undefined", () => {
    expect(getInitials(undefined)).toBe("JD");
  });

  it("returns a single uppercase initial for a one-word name", () => {
    expect(getInitials("cher")).toBe("C");
  });

  it("returns two uppercase initials for a two-word name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  it("returns one initial per word for a multi-word name", () => {
    expect(getInitials("Mary Jane Watson")).toBe("MJW");
  });

  it("uppercases initials regardless of input casing", () => {
    expect(getInitials("john doe")).toBe("JD");
  });
});
