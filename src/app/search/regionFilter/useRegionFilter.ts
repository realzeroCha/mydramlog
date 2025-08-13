import { RegionFilterProps } from "./types";

export const useRegionFilter = (props: RegionFilterProps) => {
  const whiskyRegions: string[] = [
    "Scotland",
    "Ireland",
    "USA",
    "Japan",
    "Canada",
    "Taiwan",
    "India",
    "Other",
  ];

  return { whiskyRegions };
};
