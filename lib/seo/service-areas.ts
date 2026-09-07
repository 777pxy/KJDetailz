export type ServiceArea = {
  town: string;
  county: string;
  postcodeDistricts: string[];
};

export const serviceAreas: ServiceArea[] = [
  { town: "Bournemouth", county: "Dorset", postcodeDistricts: ["BH1", "BH2", "BH3", "BH4", "BH5", "BH6", "BH7", "BH8", "BH9", "BH10", "BH11"] },
  { town: "Poole", county: "Dorset", postcodeDistricts: ["BH12", "BH13", "BH14", "BH15", "BH16", "BH17"] },
  { town: "Christchurch", county: "Dorset", postcodeDistricts: ["BH23"] },
  { town: "Ferndown", county: "Dorset", postcodeDistricts: ["BH22"] },
  { town: "Wimborne Minster", county: "Dorset", postcodeDistricts: ["BH21"] },
  { town: "Verwood", county: "Dorset", postcodeDistricts: ["BH31"] },
  { town: "Wareham", county: "Dorset", postcodeDistricts: ["BH20"] },
  { town: "Swanage", county: "Dorset", postcodeDistricts: ["BH19"] },
  { town: "Dorchester", county: "Dorset", postcodeDistricts: ["DT1", "DT2"] },
  { town: "Weymouth", county: "Dorset", postcodeDistricts: ["DT3", "DT4"] },
  { town: "Sherborne", county: "Dorset", postcodeDistricts: ["DT9"] },
  { town: "Sturminster Newton", county: "Dorset", postcodeDistricts: ["DT10"] },
  { town: "Stalbridge", county: "Dorset", postcodeDistricts: ["DT10"] },
  { town: "Shaftesbury", county: "Dorset", postcodeDistricts: ["SP7"] },
  { town: "Gillingham", county: "Dorset", postcodeDistricts: ["SP8"] },
  { town: "Ringwood", county: "Hampshire", postcodeDistricts: ["BH24"] },
  { town: "Fordingbridge", county: "Hampshire", postcodeDistricts: ["SP6"] },
  { town: "Salisbury", county: "Wiltshire", postcodeDistricts: ["SP1", "SP2", "SP3", "SP4", "SP5"] },
  { town: "Wilton", county: "Wiltshire", postcodeDistricts: ["SP2"] },
  { town: "Mere", county: "Wiltshire", postcodeDistricts: ["BA12"] },
  { town: "Wincanton", county: "Somerset", postcodeDistricts: ["BA9"] },
];

export const serviceAreaCounties = [
  "Dorset",
  "Hampshire",
  "Wiltshire",
  "Somerset",
] as const;

export function townsByCounty(county: string): ServiceArea[] {
  return serviceAreas.filter((area) => area.county === county);
}
