export type WhiskyRegion =
  | "Scotland"
  | "Ireland"
  | "USA"
  | "Japan"
  | "Canada"
  | "Taiwan"
  | "India"
  | "Germany"
  | "Australia"
  | "South Korea"
  | "Other";

export type BarrelTypeDetail = {
  /** 캐스크 타입 */
  name: string;
  subtype?: string;
  usageLevel?: "First Fill" | "Second Fill" | "Refill" | "Virgin" | "Unknown";
};

export type FlavorNoteCategory =
  | "Fruity"
  | "Spicy"
  | "Floral"
  | "Woody"
  | "Smoky"
  | "Nutty"
  | "Herbal"
  | "Sweet"
  | "Savory"
  | "Salty"
  | "Malty"
  | "Earthy"
  | "Other";

export interface WhiskyFlavorNote {
  category: FlavorNoteCategory;
  notes: string[];
}

export interface Whisky {
  name: string;
  img_url: string;

  /* 생산지 */
  origin: {
    country: WhiskyRegion;
    subregion?: string;
    distillery?: string; // 증류소
  };

  /* 숙성 */
  maturation: {
    ageStatement?: number;
    estimatedAgingYears?: number;
    caskTypes: BarrelTypeDetail[];
    finishCaskTypes?: BarrelTypeDetail[];
    environmentInfluence?: string;
  };

  /* 도수 */
  abv: number;

  /* 색상 */
  appearance: {
    colorName: string;
    colorHex?: string;
    addedColoring?: boolean;
  };

  /* 필터링 */
  filtration: {
    chillFiltered?: boolean;
    nonChillFiltered?: boolean;
  };

  /** 향, 맛 */
  flavorProfile: {
    nose: WhiskyFlavorNote[];
    palate: WhiskyFlavorNote[];
    finish: WhiskyFlavorNote[];
    body?: "Light" | "Medium" | "Full";
    texture?: string;
    intensity?: "Mild" | "Moderate" | "Intense";
  };

  /* 분류 타입 */
  type: {
    category:
      | "Single Malt"
      | "Blended Malt"
      | "Grain"
      | "Blended"
      | "Bourbon"
      | "Rye"
      | "Corn"
      | "Other";
    caskStrength?: boolean;
    NAS?: boolean;
  };

  /* 가격 */
  price: {
    currency: string;
    value: number;
    rarity?: "Standard" | "Limited Edition" | "Rare" | "Collectible";
  };

  /* 기타 */
  metadata?: {
    releaseYear?: number;
    bottlingYear?: number;
    bottleCount?: number;
    batchNumber?: string;
    producer?: string;
  };
}

export interface WhiskyFilter {
  name: string;
  origin: {
    country: WhiskyRegion[];
    distillery: string[];
  };

  maturation: {
    ageStatement?: number;
    estimatedAgingYears?: number;
    caskTypes: BarrelTypeDetail[];
    finishCaskTypes?: BarrelTypeDetail[];
    environmentInfluence?: string;
  };

  abv: number;

  appearance: {
    colorName: string[];
  };

  filtration: {
    chillFiltered?: boolean;
    nonChillFiltered?: boolean;
  };

  flavorProfile: {
    nose: WhiskyFlavorNote[];
    palate: WhiskyFlavorNote[];
    finish: WhiskyFlavorNote[];
    body?: "Light" | "Medium" | "Full"[];
    texture?: string[];
    intensity?: "Mild" | "Moderate" | "Intense"[];
  };

  type: {
    category:
      | "Single Malt"
      | "Blended Malt"
      | "Grain"
      | "Blended"
      | "Bourbon"
      | "Rye"
      | "Corn"
      | "Other"[];
    caskStrength?: boolean;
    NAS?: boolean;
  };

  price: {
    value: number;
    rarity?: "Standard" | "Limited Edition" | "Rare" | "Collectible"[];
  };

  metadata: {
    producer: string[];
  };
}
