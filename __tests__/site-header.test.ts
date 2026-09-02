import { isActiveLink } from "@/app/components/site-header";

describe("isActiveLink", () => {
  it("marks the home link active only on an exact match", () => {
    expect(isActiveLink("/", "/")).toBe(true);
    expect(isActiveLink("/", "/services")).toBe(false);
  });

  it("marks a section link active on an exact match", () => {
    expect(isActiveLink("/services", "/services")).toBe(true);
  });

  it("marks a section link active on a nested path", () => {
    expect(isActiveLink("/services", "/services/detail")).toBe(true);
  });

  it("marks a section link inactive on an unrelated path", () => {
    expect(isActiveLink("/services", "/")).toBe(false);
    expect(isActiveLink("/services", "/team")).toBe(false);
  });

  it("treats any pathname sharing the link's prefix as active", () => {
    // Documents current behaviour: startsWith matching means "/team-building"
    // would also be reported active for the "/team" link.
    expect(isActiveLink("/team", "/team-building")).toBe(true);
  });
});
