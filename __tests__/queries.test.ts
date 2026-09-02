jest.mock("../src/sanity/sanity", () => ({
  client: { fetch: jest.fn() },
}));

jest.mock("next/cache", () => ({
  cacheTag: jest.fn(),
  cacheLife: jest.fn(),
}));

import { client } from "@/src/sanity/sanity";
import {
  getReviews,
  getServicePackages,
  getImagesForGallery,
  getPremiumServicePackages,
} from "@/app/_data/sanity/queries";

const mockFetch = client.fetch as jest.Mock;

describe("sanity queries", () => {
  afterEach(() => {
    mockFetch.mockReset();
    jest.restoreAllMocks();
  });

  describe("getReviews", () => {
    it("returns the fetched reviews on success", async () => {
      const reviews = [{ customer_name: "Alex", stars: 5 }];
      mockFetch.mockResolvedValue(reviews);

      await expect(getReviews()).resolves.toEqual(reviews);
    });

    it("returns an empty array when the fetch fails", async () => {
      mockFetch.mockRejectedValue(new Error("network error"));
      jest.spyOn(console, "error").mockImplementation(() => {});

      await expect(getReviews()).resolves.toEqual([]);
    });
  });

  describe("getServicePackages", () => {
    it("returns the fetched packages on success", async () => {
      const packages = [{ _id: "1", package_name: "Basic", price: 50 }];
      mockFetch.mockResolvedValue(packages);

      await expect(getServicePackages()).resolves.toEqual(packages);
    });

    it("returns an empty array when the fetch fails", async () => {
      mockFetch.mockRejectedValue(new Error("network error"));
      jest.spyOn(console, "error").mockImplementation(() => {});

      await expect(getServicePackages()).resolves.toEqual([]);
    });
  });

  describe("getImagesForGallery", () => {
    it("returns the fetched images on success", async () => {
      const images = [{ image_name: "Detail 1" }];
      mockFetch.mockResolvedValue(images);

      await expect(getImagesForGallery()).resolves.toEqual(images);
    });

    it("returns an empty array when the fetch fails", async () => {
      mockFetch.mockRejectedValue(new Error("network error"));
      jest.spyOn(console, "error").mockImplementation(() => {});

      await expect(getImagesForGallery()).resolves.toEqual([]);
    });
  });

  describe("getPremiumServicePackages", () => {
    it("returns the fetched premium packages on success", async () => {
      const packages = [
        { _id: "1", package_name: "Concours Detail", price: 450 },
      ];
      mockFetch.mockResolvedValue(packages);

      await expect(getPremiumServicePackages()).resolves.toEqual(packages);
    });

    it("returns an empty array when the fetch fails", async () => {
      mockFetch.mockRejectedValue(new Error("network error"));
      jest.spyOn(console, "error").mockImplementation(() => {});

      await expect(getPremiumServicePackages()).resolves.toEqual([]);
    });
  });
});
