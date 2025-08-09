export const WhiskyList = [
  {
    name: "The Macallan 18 Year Old Sherry Oak",
    img_url:
      "https://theliquorstore.com/cdn/shop/products/macallan-sherry-oak-cask-18-year-750ml_2.jpg?v=1651085886",
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Macallan",
    },
    maturation: {
      ageStatement: 18,
      estimatedAgingYears: 18,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "First Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Riverside and Speyside's rich soil.",
    },
    abv: 43,
    appearance: {
      colorName: "Rich Mahogany",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried Fruits", "Citrus", "Orange"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Sherry"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Dark Chocolate", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Nutmeg", "Clove"],
        },
        {
          category: "Fruity",
          notes: ["Dried Figs", "Raisins"],
        },
      ],
      finish: [
        {
          category: "Woody",
          notes: ["Oak"],
        },
        {
          category: "Spicy",
          notes: ["Ginger"],
        },
        {
          category: "Fruity",
          notes: ["Lingering Dried Fruits"],
        },
      ],
      body: "Full",
      texture: "Oily, Smooth",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 350,
      rarity: "Standard",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Ardbeg 10 Year Old",
        img_url: 'https://store.whiskyadvocate.com/cdn/shop/products/ard10.jpg?v=1667576609',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Ardbeg",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "First Fill",
        },
        {
          name: "Sherry",
          usageLevel: "Refill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Salty, Peaty.",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Peat Smoke", "Tar", "Smoked Fish"],
        },
        {
          category: "Salty",
          notes: ["Sea Spray"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Lemon"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense Peat Smoke", "Black Pepper"],
        },
        {
          category: "Sweet",
          notes: ["Malt", "Licorice"],
        },
        {
          category: "Herbal",
          notes: ["Menthol"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, Smoky finish"],
        },
        {
          category: "Salty",
          notes: ["Salty"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Moët Hennessy",
    },
  },
  {
    name: "Yamazaki 12 Year Old",
        img_url: 'https://dekanta.com/cdn/shop/files/Untitled_design_2.png?v=1728050628',
    origin: {
      country: "Japan",
      subregion: "Shimamoto",
      distillery: "Yamazaki",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Mizunara",
        },
        {
          name: "Sherry",
        },
        {
          name: "Bourbon",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Unique climate near Kyoto with high humidity.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Peach", "Pineapple", "Grapefruit"],
        },
        {
          category: "Woody",
          notes: ["Mizunara Sandalwood", "Oak"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
        {
          category: "Woody",
          notes: ["Japanese Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweet vanilla"],
        },
        {
          category: "Woody",
          notes: ["Light Mizunara"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 150,
      rarity: "Standard",
    },
    metadata: {
      producer: "Suntory",
    },
  },
  {
    name: "Glenfiddich 12 Year Old",
        img_url: 'https://thirstie-prod.s3.us-east-1.amazonaws.com/cklb371qt0io6u0qsprywq613/attachments/cl80tjc2m06xp0qnuk4lzmbm1-1.0.0.1000.1000.full.png',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfiddich",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Speyside region's fresh water and valley location.",
    },
    abv: 40,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Pear", "Apple"],
        },
        {
          category: "Sweet",
          notes: ["Malty", "Honey"],
        },
        {
          category: "Floral",
          notes: ["Subtle Floral"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweet Malt", "Butterscotch"],
        },
        {
          category: "Fruity",
          notes: ["Pineapple", "Creamy Pear"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Woody",
          notes: ["Short, crisp finish"],
        },
        {
          category: "Sweet",
          notes: ["Faint sweetness"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 50,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "Talisker 10 Year Old",
        img_url: 'https://images.ctfassets.net/glsfy1cpffmh/2ktRHCYRsYyKUenlzM0dya/77cf9c7bc06b7f447b65d8727e041522/talisker-10-year-old-2-transparent.png?f=&fit=fill&fm=webp&h=1166&q=75&w=1166',
    origin: {
      country: "Scotland",
      subregion: "Isle of Skye",
      distillery: "Talisker",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Salty, Maritime.",
    },
    abv: 45.8,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Peat Smoke", "Sea Salt", "Pepper"],
        },
        {
          category: "Salty",
          notes: ["Coastal, Iodine"],
        },
        {
          category: "Fruity",
          notes: ["Lemon"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Peat Smoke"],
        },
        {
          category: "Spicy",
          notes: ["Black Pepper", "Chili"],
        },
        {
          category: "Sweet",
          notes: ["Dried Fruit"],
        },
        {
          category: "Salty",
          notes: ["Briny"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm pepper finish"],
        },
        {
          category: "Smoky",
          notes: ["Peat Smoke"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Lagavulin 16 Year Old",
        img_url: 'https://images.ctfassets.net/6xd9bjrzzm9l/857c10c724d0b2d83b83de118ab96f22/01b30f7e863e99eaa11f4cf512e4ff57/lagavulin-16yo_front.png?fit=pad&fm=webp&q=100&w=520',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Lagavulin",
    },
    maturation: {
      ageStatement: 16,
      estimatedAgingYears: 16,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Peaty, with a long fermentation process.",
    },
    abv: 43,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Heavy Peat Smoke", "Iodine", "Medicinal"],
        },
        {
          category: "Salty",
          notes: ["Seaweed"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Sherry"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense Peat", "Smoke"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Fruity sweetness"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Very long, smoky and savory finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweet notes"],
        },
      ],
      body: "Full",
      texture: "Oily, Chewy",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 110,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Glenlivet 12 Year Old",
        img_url: 'https://ik.imagekit.io/cvygf2xse/theglenlivet/wp-content/uploads/2024/09/TGL_12YO_OF_1x1_clean-aspect-ratio-13-12-1.jpg?tr=q-80%2Cw-1080%2Ch-997%2Cfo-cover',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Glenlivet",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's clear springs and fertile glens.",
    },
    abv: 40,
    appearance: {
      colorName: "Bright Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Pineapple", "Citrus"],
        },
        {
          category: "Floral",
          notes: ["Spring Flowers"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Apple", "Pear"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Honey"],
        },
      ],
      finish: [
        {
          category: "Woody",
          notes: ["Subtle oak"],
        },
        {
          category: "Spicy",
          notes: ["Spicy"],
        },
        {
          category: "Sweet",
          notes: ["Lingering sweetness"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 50,
      rarity: "Standard",
    },
    metadata: {
      producer: "Pernod Ricard",
    },
  },
  {
    name: "Laphroaig 10 Year Old",
        img_url: 'https://epicurious.reservebar.com/cdn/shop/products/laph10yo_medal_1200x.jpg?v=1619810250',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Laphroaig",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Peat from the local moors, coastal air.",
    },
    abv: 40,
    appearance: {
      colorName: "Full Bright Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Seaweed", "Medicinal"],
        },
        {
          category: "Salty",
          notes: ["Brine"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Strong peat smoke", "Phenolic"],
        },
        {
          category: "Salty",
          notes: ["Sea salt"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, warm and lingering smoky finish"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Bowmore 12 Year Old",
        img_url: 'https://www.bowmore.com/sites/default/files/styles/original/public/2025-06/Bowmore%2012%20Year%20Old%20Whisky%20Bottle%20with%20box%20front.png.webp?itok=PDwf2m4G',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bowmore",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Islay's coastal climate and ancient peat.",
    },
    abv: 40,
    appearance: {
      colorName: "Warm Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Light peat smoke"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Honey"],
        },
        {
          category: "Salty",
          notes: ["Sea salt"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Smoky", "Peat"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Honey"],
        },
        {
          category: "Salty",
          notes: ["Brine"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Peat smoke"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Oban 14 Year Old",
        img_url: 'https://tastersclub.com/cdn/shop/files/oban-14-year-old.png?v=1746456504',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Oban",
    },
    maturation: {
      ageStatement: 14,
      estimatedAgingYears: 14,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Coastal town with a mix of Highland and Island styles.",
    },
    abv: 43,
    appearance: {
      colorName: "Rich Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Slightly smoky"],
        },
        {
          category: "Salty",
          notes: ["Coastal, Sea salt"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Lemon"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Nutmeg"],
        },
        {
          category: "Salty",
          notes: ["Briny"],
        },
      ],
      finish: [
        {
          category: "Woody",
          notes: ["Long, dry oak"],
        },
        {
          category: "Spicy",
          notes: ["Pepper"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 100,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Glenmorangie The Original 10 Year Old",
        img_url: 'https://www.folsomwinespirits.com/cdn/shop/files/img1_0eaaad76-023c-4829-ab24-f7a227c0971a_530x%402x.webp?v=1683904538',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glenmorangie",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          subtype: "American White Oak",
          usageLevel: "First Fill",
        },
        {
          name: "Bourbon",
          subtype: "American White Oak",
          usageLevel: "Second Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Highland's rich agricultural land and pure water source.",
    },
    abv: 40,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Citrus", "Lemon", "Peach"],
        },
        {
          category: "Floral",
          notes: ["Geranium", "Rose"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Honey"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Apricot", "Orange"],
        },
        {
          category: "Spicy",
          notes: ["Nutmeg"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 55,
      rarity: "Standard",
    },
    metadata: {
      producer: "The Glenmorangie Company",
    },
  },
  {
    name: "Dalwhinnie 15 Year Old",
        img_url: 'https://cdn11.bigcommerce.com/s-d24ojig/images/stencil/1280x1280/products/291/631/2014_06_20_02.33.21__84350.1403627497.jpg?c=2',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Dalwhinnie",
    },
    maturation: {
      ageStatement: 15,
      estimatedAgingYears: 15,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Highland's cold, high-altitude location.",
    },
    abv: 43,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Floral",
          notes: ["Heather", "Floral"],
        },
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Malt", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Ginger"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Spicy", "Pepper"],
        },
        {
          category: "Sweet",
          notes: ["Lingering sweetness"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 80,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Balvenie DoubleWood 12 Year Old",
        img_url: 'https://www.blackwellswines.com/cdn/shop/products/2FF96051-D469-4CF6-AFE9-E9686B9021C0_1_201_a.jpg?v=1640555192',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Balvenie",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      environmentInfluence:
        "Speyside's traditional distilling methods and farm location.",
    },
    abv: 40,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Red fruits"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Sherry"],
        },
      ],
      palate: [
        {
          category: "Nutty",
          notes: ["Nutty"],
        },
        {
          category: "Sweet",
          notes: ["Cinnamon spice", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Subtle spice"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Spicy"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "GlenDronach 12 Year Old",
        img_url: 'https://vintagemattituck.com/cdn/shop/products/grnob.12yov4_1024x1024.jpg?v=1654720787',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "GlenDronach",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          subtype: "Pedro Ximenez",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Highland's cold climate and traditional methods.",
    },
    abv: 43,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Raisin", "Dried fig"],
        },
        {
          category: "Sweet",
          notes: ["Sugar cane"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy vanilla", "Ginger"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Brown-Forman",
    },
  },
  {
    name: "Hakushu 12 Year Old",
        img_url: 'https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/3840w/products/26562/21164/18526__83895.1754421031.png?compression=lossy',
    origin: {
      country: "Japan",
      subregion: "Kaomizaka",
      distillery: "Hakushu",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "High-altitude forest distillery, pure alpine water.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Pear", "Apple"],
        },
        {
          category: "Floral",
          notes: ["Mint", "Eucalyptus"],
        },
        {
          category: "Woody",
          notes: ["Light smoke"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
        {
          category: "Fruity",
          notes: ["Yuzu"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, clean, spicy finish"],
        },
        {
          category: "Smoky",
          notes: ["Hint of smoke"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 150,
      rarity: "Standard",
    },
    metadata: {
      producer: "Suntory",
    },
  },
  {
    name: "Hibiki Harmony",
        img_url: 'https://curiada.com/cdn/shop/files/HibikiSuntoryWhiskeyTransp_1024x1024.png?v=1701109236',
    origin: {
      country: "Japan",
      distillery: "Suntory",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Sherry",
        },
        {
          name: "Bourbon",
        },
        {
          name: "Mizunara",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Blended from various Suntory distilleries.",
    },
    abv: 43,
    appearance: {
      colorName: "Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Orange Peel", "Apricot"],
        },
        {
          category: "Floral",
          notes: ["Rose", "Lily"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "White Chocolate"],
        },
        {
          category: "Fruity",
          notes: ["Orange marmalade"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Gentle spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Mizunara Oak"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "Suntory",
    },
  },
  {
    name: "Nikka From The Barrel",
        img_url: 'https://bottlebuzz.com/cdn/shop/products/nikka-whisky-from-the-barrel-309196.jpg?v=1699196330',
    origin: {
      country: "Japan",
      distillery: "Nikka",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Sherry",
        },
        {
          name: "Bourbon",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Blended from various Nikka distilleries.",
    },
    abv: 51.4,
    appearance: {
      colorName: "Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Fruity", "Orange peel"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Bold spices", "Nutmeg"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Blended",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "Asahi",
    },
  },
  {
    name: "Ledaig 10 Year Old",
        img_url: 'https://lovescotch.com/cdn/shop/products/Ledaig_Year_Old_Single_Malt_Scotch_Whisky_LoveScotch_7.jpg?v=1654982999',
    origin: {
      country: "Scotland",
      subregion: "Isle of Mull",
      distillery: "Tobermory",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, peated malt from the Isle of Mull.",
    },
    abv: 46.3,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Seaweed"],
        },
        {
          category: "Salty",
          notes: ["Sea salt", "Brine"],
        },
        {
          category: "Herbal",
          notes: ["Herbal notes"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Tar"],
        },
        {
          category: "Spicy",
          notes: ["Black pepper"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky and spicy finish"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Burn Stewart Distillers",
    },
  },
  {
    name: "Tobermory 12 Year Old",
        img_url: 'https://tobermorydistillery.com/cdn/shop/products/Tobermory-Core-ProductsArtboard-22.png?v=1699615724&width=580',
    origin: {
      country: "Scotland",
      subregion: "Isle of Mull",
      distillery: "Tobermory",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, with a non-peated style.",
    },
    abv: 46.3,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Citrus", "Lemon", "Green apple"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Malt", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Spices"],
        },
        {
          category: "Salty",
          notes: ["Slightly salty"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Spicy"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 80,
      rarity: "Standard",
    },
    metadata: {
      producer: "Burn Stewart Distillers",
    },
  },
  {
    name: "Buffalo Trace",
        img_url: 'https://www.buffalotracedistillery.com/content/dam/sazerac/final/north-america/homeplaces/buffalo-trace-distillery/images/media-kit/Buffalo-Trace-KSBW-90prf-750ml-Glass-Bottle-Shot-BT-Media-Kit.jpg',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Buffalo Trace",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's humid climate.",
    },
    abv: 45,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
        {
          category: "Spicy",
          notes: ["Mint"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Brown sugar", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Oak"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, smooth and sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 30,
      rarity: "Standard",
    },
    metadata: {
      producer: "Sazerac Company",
    },
  },
  {
    name: "Eagle Rare 10 Year Old",
        img_url: 'https://canawineco.com/cdn/shop/files/Untitleddesign-2024-06-12T103720.928_700x700.png?v=1718206659',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Buffalo Trace",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's humid climate.",
    },
    abv: 45,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Toffee", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Orange peel"],
        },
        {
          category: "Spicy",
          notes: ["Oak", "Spices"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Honey"],
        },
        {
          category: "Fruity",
          notes: ["Red fruits"],
        },
        {
          category: "Spicy",
          notes: ["Light spice", "Oak"],
        },
      ],
      finish: [
        {
          category: "Woody",
          notes: ["Long, dry oak finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 40,
      rarity: "Standard",
    },
    metadata: {
      producer: "Sazerac Company",
    },
  },
  {
    name: "Woodford Reserve",
        img_url: 'https://www.woodfordreserve.com/wp-content/uploads/2019/12/Bourbon-Bottle.png',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Woodford Reserve",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's limestone water and temperate climate.",
    },
    abv: 45.2,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Mint", "Tobacco"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Toffee", "Butterscotch"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Pepper"],
        },
        {
          category: "Fruity",
          notes: ["Citrus", "Orange"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Creamy",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 40,
      rarity: "Standard",
    },
    metadata: {
      producer: "Brown-Forman",
    },
  },
  {
    name: "Elijah Craig Small Batch",
        img_url: 'https://www.missionliquor.com/cdn/shop/files/Elijah-Craig-Small-Batch-Kentucky-Bourbon-94-Proof-750ml.jpg?v=1732580867',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Heaven Hill",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 47,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
        {
          category: "Spicy",
          notes: ["Mint", "Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Butterscotch"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 35,
      rarity: "Standard",
    },
    metadata: {
      producer: "Heaven Hill Brands",
    },
  },
  {
    name: "Four Roses Small Batch",
        img_url:'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h6a/hf9/29628118761502.png',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Four Roses",
    },
    maturation: {
      estimatedAgingYears: 7,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 45,
    appearance: {
      colorName: "Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Fruity", "Red berries"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice", "Mint"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Pepper"],
        },
        {
          category: "Fruity",
          notes: ["Cherry", "Plum"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, smooth and spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 40,
      rarity: "Standard",
    },
    metadata: {
      producer: "Kirin Holdings",
    },
  },
  {
    name: "Wild Turkey 101",
        img_url: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/15795/16862/wild-turkey-101-kentucky-straight-bourbon__59077.1718767132.jpg?c=2',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Wild Turkey",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 50.5,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Caramel", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice", "Cinnamon"],
        },
        {
          category: "Woody",
          notes: ["Charred Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Bold spices", "Pepper"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Full",
      texture: "Rich",
      intensity: "Intense",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 25,
      rarity: "Standard",
    },
    metadata: {
      producer: "Campari Group",
    },
  },
  {
    name: "Maker's Mark",
        img_url: 'https://icdn.bottlenose.wine/images/full/551237.jpg?fit=crop&min-h=200&min-w=200',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Maker's Mark",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 45,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Sweet vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Soft vanilla", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
        {
          category: "Fruity",
          notes: ["Fruit notes"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, smooth, sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Creamy",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 35,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Jameson Irish Whiskey",
        img_url: 'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h73/h69/14361814433822.png',
    origin: {
      country: "Ireland",
      distillery: "Midleton",
    },
    maturation: {
      estimatedAgingYears: 4,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Irish climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
        {
          category: "Woody",
          notes: ["Woody notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla", "Honey"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, smooth and spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 25,
      rarity: "Standard",
    },
    metadata: {
      producer: "Irish Distillers",
    },
  },
  {
    name: "Redbreast 12 Year Old",
        img_url: 'https://www.redbreastwhiskey.com/wp-content/uploads/2024/01/redbreast-12-year-old.webp',
    origin: {
      country: "Ireland",
      distillery: "Midleton",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "First Fill",
        },
        {
          name: "Bourbon",
          usageLevel: "First Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Irish climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Deep Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Citrus", "Cherry"],
        },
        {
          category: "Spicy",
          notes: ["Nutmeg", "Ginger", "Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Toasted nuts", "Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Other",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 80,
      rarity: "Standard",
    },
    metadata: {
      producer: "Irish Distillers",
    },
  },
  {
    name: "Knob Creek 9 Year Old",
        img_url: 'https://curiada.com/cdn/shop/products/KnobCreek9YrTransp.png?v=1633174360',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Jim Beam",
    },
    maturation: {
      ageStatement: 9,
      estimatedAgingYears: 9,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 50,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Caramel", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice"],
        },
        {
          category: "Woody",
          notes: ["Charred Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Pepper"],
        },
        {
          category: "Woody",
          notes: ["Bold oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Full",
      texture: "Rich",
      intensity: "Intense",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 45,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Basil Hayden's",
        img_url: 'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h21/h6f/28724185399326.png',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Jim Beam",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice", "Pepper"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice", "Mint"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Light, spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 45,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Angel's Envy Bourbon",
        img_url: 'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h4b/h30/12151243440158.png',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Angel's Envy",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [
        {
          name: "Port",
        },
      ],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 43.3,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Maple Syrup"],
        },
        {
          category: "Fruity",
          notes: ["Red fruits", "Cherry"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Port wine", "Blackberry"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 50,
      rarity: "Standard",
    },
    metadata: {
      producer: "Bacardi",
    },
  },
  {
    name: "Pappy Van Winkle's Family Reserve 23 Year Old",
        img_url: 'https://whiskyandwhiskey.com/cdn/shop/products/image_16f12713-a875-4bd4-99f2-4382ffc7d193.webp?v=1670794746',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Buffalo Trace",
    },
    maturation: {
      ageStatement: 23,
      estimatedAgingYears: 23,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 47.8,
    appearance: {
      colorName: "Deep Mahogany",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Caramel", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Oak", "Nutmeg"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Butterscotch", "Brown sugar"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Allspice"],
        },
        {
          category: "Woody",
          notes: ["Bold oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 3000,
      rarity: "Collectible",
    },
    metadata: {
      producer: "Sazerac Company",
      bottlingYear: 2024,
    },
  },
  {
    name: "Blanton's Original Single Barrel",
        img_url: 'https://bottlebuzz.com/cdn/shop/products/blantons-original-single-barrel-203069.webp?v=1710464157',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Buffalo Trace",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 46.5,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Citrus", "Orange"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Toffee", "Butterscotch"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Nutmeg"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, smooth and spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Bourbon",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Limited Edition",
    },
    metadata: {
      producer: "Sazerac Company",
    },
  },
  {
    name: "Michter's US 1 Single Barrel Rye",
        img_url: 'https://michters.com/wp-content/uploads/2024/01/Michters-US1-Bourbon-2023-WhiskeyPage.png',
    origin: {
      country: "USA",
      subregion: "Kentucky",
      distillery: "Michter's",
    },
    maturation: {
      estimatedAgingYears: 5,
      caskTypes: [
        {
          name: "Rye",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Kentucky's ideal aging climate.",
    },
    abv: 42.4,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Spicy",
          notes: ["Spicy rye", "Pepper"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
        {
          category: "Sweet",
          notes: ["Caramel", "Vanilla"],
        },
      ],
      palate: [
        {
          category: "Spicy",
          notes: ["Spicy", "Rye", "Ginger"],
        },
        {
          category: "Sweet",
          notes: ["Caramel", "Butterscotch"],
        },
        {
          category: "Fruity",
          notes: ["Orange peel"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Rye",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 50,
      rarity: "Standard",
    },
    metadata: {
      producer: "Michter's Distillery LLC",
    },
  },
  {
    name: "WhistlePig 10 Year Old Small Batch Rye",
        img_url: 'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h49/hf1/16621236682782.png',
    origin: {
      country: "USA",
      subregion: "Vermont",
      distillery: "WhistlePig",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Rye",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Vermont's rural climate.",
    },
    abv: 50,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
    },
    flavorProfile: {
      nose: [
        {
          category: "Spicy",
          notes: ["Spicy rye", "Mint", "Cinnamon"],
        },
        {
          category: "Fruity",
          notes: ["Caramel", "Vanilla"],
        },
      ],
      palate: [
        {
          category: "Spicy",
          notes: ["Bold rye spice", "Pepper"],
        },
        {
          category: "Sweet",
          notes: ["Brown sugar", "Maple"],
        },
        {
          category: "Floral",
          notes: ["Subtle floral notes"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Full",
      texture: "Rich",
      intensity: "Intense",
    },
    type: {
      category: "Rye",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 85,
      rarity: "Standard",
    },
    metadata: {
      producer: "WhistlePig LLC",
    },
  },
  {
    name: "Canadian Club 1858",
        img_url: 'https://www.canadianclub.com/sites/default/files/styles/original/public/2024-05/canadian-club-bottle-whisky-1858.png.webp?itok=fcWgosur',
    origin: {
      country: "Canada",
      distillery: "Hiram Walker & Sons",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Canadian climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
        {
          category: "Spicy",
          notes: ["Rye spice"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Soft sweetness", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Light spice", "Rye"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Smooth and spicy finish"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 20,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Crown Royal",
        img_url: 'https://aem.lcbo.com/content/dam/lcbo/products/0/0/1/4/001487.jpg.thumb.1280.1280.jpg',
    origin: {
      country: "Canada",
      distillery: "Gimli",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Canadian climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Light fruity notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Subtle spices"],
        },
        {
          category: "Fruity",
          notes: ["Fruity notes"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Smooth and sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Creamy",
      intensity: "Moderate",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 30,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Kavalan Solist Vinho Barrique",
        img_url: 'https://www.kavalanwhisky.com/data/goods/cover/1583220337249224493.png',
    origin: {
      country: "Taiwan",
      distillery: "Kavalan",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Wine",
          subtype: "Vinho",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Taiwan's high humidity and subtropical climate accelerate aging.",
    },
    abv: 58.6,
    appearance: {
      colorName: "Dark Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Blackberry", "Grape", "Melon"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Butterscotch"],
        },
        {
          category: "Fruity",
          notes: ["Plum", "Grape"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Pepper"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet and fruity finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 200,
      rarity: "Limited Edition",
    },
    metadata: {
      producer: "King Car Food Industrial Co.",
    },
  },
  {
    name: "Amrut Fusion",
        img_url: 'https://applejack.com/site/images/Amrut-Fusion-Indian-Single-Malt-Whiskey-750-ml_1.png',
    origin: {
      country: "India",
      distillery: "Amrut",
    },
    maturation: {
      estimatedAgingYears: 4,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Bengaluru's hot and humid climate accelerates aging.",
    },
    abv: 50,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Tropical fruits"],
        },
        {
          category: "Smoky",
          notes: ["Light peat smoke"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Smoky",
          notes: ["Lightly peated"],
        },
        {
          category: "Spicy",
          notes: ["Oak", "Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Smoky",
          notes: ["Peat smoke"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Amrut Distilleries",
    },
  },
  {
    name: "Loch Lomond 12 Year Old",
        img_url: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/23417/25317/loch-lomond-12-year-old-single-malt-scotch__36438.1725025739.jpg?c=2',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Loch Lomond",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Refill",
        },
        {
          name: "Recharred",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "By Loch Lomond, offering a mix of styles.",
    },
    abv: 46,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Peach", "Green Apple"],
        },
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Woody",
          notes: ["Light oak"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Pear", "Citrus"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Loch Lomond Group",
    },
  },
  {
    name: "Mortlach 16 Year Old",
        img_url: 'https://m.media-amazon.com/images/I/81eRm6ZEC-L._UF1000,1000_QL80_.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Mortlach",
    },
    maturation: {
      ageStatement: 16,
      estimatedAgingYears: 16,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's unique water and distillation process.",
    },
    abv: 43.4,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Plum"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Cinnamon"],
        },
        {
          category: "Sweet",
          notes: ["Toffee", "Molasses"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Honey"],
        },
        {
          category: "Savory",
          notes: ["Umami", "Meaty"],
        },
        {
          category: "Spicy",
          notes: ["Pepper", "Ginger"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
        {
          category: "Fruity",
          notes: ["Lingering dried fruit"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 150,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Glenfarclas 105 Cask Strength",
        img_url: 'https://cdn11.bigcommerce.com/s-d24ojig/images/stencil/1280x1280/products/408/767/2014_07_01_02.35.08__51805.1404419253.jpg?c=2',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfarclas",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Speyside's long tradition of sherry cask maturation.",
    },
    abv: 60,
    appearance: {
      colorName: "Deep Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits", "Orange peel"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Sherry"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Bold spices", "Cinnamon"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy and warm finish"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "J. & G. Grant",
    },
  },
  {
    name: "Macallan A Night on Earth",
        img_url: 'https://theliquorstore.com/cdn/shop/files/macob.non187.jpg?v=1701906064',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Macallan",
    },
    maturation: {
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          subtype: "European and American Oak",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's traditional methods.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Toffee"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Dried figs", "Dates"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Butterscotch"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Medium finish with spices"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 110,
      rarity: "Limited Edition",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Glenfiddich Fire & Cane",
        img_url: 'https://areleskosherwine.com/cdn/shop/files/glenfiddich-experimental-series-fire-cane-p1707-12399_zoom-Photoroom.jpg?v=1731591001',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfiddich",
    },
    maturation: {
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Peated",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Rum",
        },
      ],
      environmentInfluence: "Speyside, with peated and rum cask finishes.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Smoky", "Peat"],
        },
        {
          category: "Fruity",
          notes: ["Tropical fruits", "Apple"],
        },
        {
          category: "Sweet",
          notes: ["Toffee", "Vanilla"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Toffee"],
        },
        {
          category: "Smoky",
          notes: ["Soft peat smoke"],
        },
        {
          category: "Spicy",
          notes: ["Oak spice"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky and sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "Talisker Distiller's Edition",
        img_url: 'https://cdn.ecommercedns.uk/files/8/258138/7/39213057/talisker-distillers-edition-2022-collection-whisky.jpg',
    origin: {
      country: "Scotland",
      subregion: "Isle of Skye",
      distillery: "Talisker",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          subtype: "Amoroso",
        },
      ],
      environmentInfluence: "Coastal, Salty, Maritime.",
    },
    abv: 45.8,
    appearance: {
      colorName: "Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Peat Smoke", "Seaweed"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
        {
          category: "Salty",
          notes: ["Briny"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits", "Raisins"],
        },
        {
          category: "Spicy",
          notes: ["Black pepper", "Chili"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and peppery finish"],
        },
        {
          category: "Fruity",
          notes: ["Lingering dried fruit"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Glenmorangie Quinta Ruban 14 Year Old",
        img_url: 'https://www.glenmorangie.com/cdn/shop/files/Glenmorangie_Quinta_Ruban_bottle.png?v=1712754078&width=800',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glenmorangie",
    },
    maturation: {
      ageStatement: 14,
      estimatedAgingYears: 14,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Port",
        },
      ],
      environmentInfluence: "Highland's rich agricultural land.",
    },
    abv: 46,
    appearance: {
      colorName: "Ruby Red",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Dark chocolate", "Mint"],
        },
        {
          category: "Fruity",
          notes: ["Blackberry", "Orange"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Chocolate", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Blackcurrant", "Plum"],
        },
        {
          category: "Spicy",
          notes: ["Nutmeg"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet and chocolate finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "The Glenmorangie Company",
    },
  },
  {
    name: "The Balvenie Caribbean Cask 14 Year Old",
        img_url: 'https://thirstie-prod.s3.us-east-1.amazonaws.com/ckt33u4o704uhtfqsk38dskk3/attachments/cl3w22g2k08e30qmo8bzoz2ac-3.0.0.1000.1000.full.png',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Balvenie",
    },
    maturation: {
      ageStatement: 14,
      estimatedAgingYears: 14,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Rum",
        },
      ],
      environmentInfluence:
        "Speyside's traditional methods with a rum cask finish.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Tropical fruits", "Passion fruit", "Apple"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy toffee", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Banana", "Mango"],
        },
        {
          category: "Spicy",
          notes: ["Light spice", "Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Lingering sweetness"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "GlenDronach Parliament 21 Year Old",
        img_url: 'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/grnob.21yo.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "GlenDronach",
    },
    maturation: {
      ageStatement: 21,
      estimatedAgingYears: 21,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          subtype: "Pedro Ximenez",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Highland's cold climate and traditional methods.",
    },
    abv: 48,
    appearance: {
      colorName: "Deep Mahogany",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Plum", "Raisin"],
        },
        {
          category: "Sweet",
          notes: ["Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Nutmeg"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Chocolate", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Blackcurrant", "Cherry"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Fruity",
          notes: ["Long, fruity finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily, Chewy",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 250,
      rarity: "Standard",
    },
    metadata: {
      producer: "Brown-Forman",
    },
  },
  {
    name: "Yamazaki Distiller's Reserve",
        img_url: 'https://www.whiskyshop.com/media/catalog/product/y/a/yamazaki_distillersreserve_2020_ps.jpg?width=2500&store=whiskyshop&image-type=image',
    origin: {
      country: "Japan",
      subregion: "Shimamoto",
      distillery: "Yamazaki",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Mizunara",
        },
        {
          name: "Sherry",
        },
        {
          name: "Bourbon",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Unique climate near Kyoto with high humidity.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Strawberry", "Cherry"],
        },
        {
          category: "Floral",
          notes: ["Subtle floral"],
        },
        {
          category: "Woody",
          notes: ["Mizunara Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Coconut"],
        },
        {
          category: "Fruity",
          notes: ["Raspberry"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, sweet and spicy finish"],
        },
        {
          category: "Woody",
          notes: ["Mizunara Oak"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 110,
      rarity: "Standard",
    },
    metadata: {
      producer: "Suntory",
    },
  },
  {
    name: "Hakushu Distiller's Reserve",
        img_url: 'https://www.stillspirit.com/cdn/shop/files/hakushu-distillers-reserve-all-spirits-45481530360089.jpg?v=1745487440',
    origin: {
      country: "Japan",
      subregion: "Kaomizaka",
      distillery: "Hakushu",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "High-altitude forest distillery, pure alpine water.",
    },
    abv: 43,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Green apple", "Pear"],
        },
        {
          category: "Floral",
          notes: ["Mint", "Eucalyptus"],
        },
        {
          category: "Smoky",
          notes: ["Light smoke"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Kiwi", "Lemon"],
        },
        {
          category: "Spicy",
          notes: ["Subtle spice"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Subtle, clean smoke"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 100,
      rarity: "Standard",
    },
    metadata: {
      producer: "Suntory",
    },
  },
  {
    name: "Laphroaig Quarter Cask",
        img_url: 'https://www.laphroaig.com/sites/default/files/styles/original/public/2024-07/Quarter_Casks_Packaging.png.webp?itok=TbPfVVvF',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Laphroaig",
    },
    maturation: {
      estimatedAgingYears: 5,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Quarter Cask",
        },
      ],
      environmentInfluence: "Peat from the local moors, coastal air.",
    },
    abv: 48,
    appearance: {
      colorName: "Rich Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Coconut"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
        {
          category: "Salty",
          notes: ["Seaweed"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Strong peat smoke", "Ash"],
        },
        {
          category: "Sweet",
          notes: ["Creamy sweetness", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, warm and smoky finish"],
        },
        {
          category: "Sweet",
          notes: ["Lingering sweetness"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  {
    name: "Ardbeg Uigeadail",
        img_url: 'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/abgob.non2.jpg',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Ardbeg",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Salty, Peaty.",
    },
    abv: 54.2,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Tar", "Bacon"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits", "Raisins"],
        },
        {
          category: "Sweet",
          notes: ["Caramel"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Soot"],
        },
        {
          category: "Sweet",
          notes: ["Syrup", "Honey", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, sweet and smoky finish"],
        },
      ],
      body: "Full",
      texture: "Oily, Chewy",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "Moët Hennessy",
    },
  },
  {
    name: "Ardbeg Corryvreckan",
        img_url: 'https://www.ardbeg.com/on/demandware.static/-/Sites-mh-master/default/dw92d26fd1/images/large/ardbeg/packshots/Ardbeg%20Corryvreckan%20PDP-2.png?',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Ardbeg",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "French Oak",
        },
      ],
      environmentInfluence: "Coastal, Salty, Peaty.",
    },
    abv: 57.1,
    appearance: {
      colorName: "Deep Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Seaweed"],
        },
        {
          category: "Fruity",
          notes: ["Dark fruits"],
        },
        {
          category: "Spicy",
          notes: ["Pepper", "Spices"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Tar"],
        },
        {
          category: "Spicy",
          notes: ["Black pepper", "Chili"],
        },
        {
          category: "Fruity",
          notes: ["Dark chocolate", "Blackcurrant"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, powerful and smoky finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily, Chewy",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 110,
      rarity: "Standard",
    },
    metadata: {
      producer: "Moët Hennessy",
    },
  },
  {
    name: "Glenlivet Founders Reserve",
        img_url: 'https://www.theglenlivet.com/wp-content/uploads/2021/10/Founders-Reserve-Bottle-70cl.png',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Glenlivet",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
        {
          name: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's clear springs and fertile glens.",
    },
    abv: 40,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Orange", "Lemon"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Caramel"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Pear"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Short, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 40,
      rarity: "Standard",
    },
    metadata: {
      producer: "Pernod Ricard",
    },
  },
  {
    name: "Aberlour A'bunadh",
        img_url: 'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/ablob.non13.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Aberlour",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's traditional sherry cask maturation.",
    },
    abv: 59.6,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Cherry", "Orange peel"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Sherry"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Chocolate"],
        },
        {
          category: "Fruity",
          notes: ["Raisin", "Dried fig"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: true,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 110,
      rarity: "Standard",
    },
    metadata: {
      producer: "Pernod Ricard",
    },
  },
  {
    name: "Lagavulin Distiller's Edition",
        img_url: 'https://images.ctfassets.net/glsfy1cpffmh/7B5h5erIveOVlTLyyjrvr9/9ff811df916ce87364bcb92ceacba648/LagavulinDistillersEdition_5000281072227_BWC_70cl.jpg?fm=webp&fit=fill&q=75&f=&h=1166&w=1166',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Lagavulin",
    },
    maturation: {
      ageStatement: 16,
      estimatedAgingYears: 16,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          subtype: "Pedro Ximenez",
        },
      ],
      environmentInfluence: "Coastal, Peaty, with a long fermentation process.",
    },
    abv: 43,
    appearance: {
      colorName: "Deep Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Iodine"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits", "Raisins"],
        },
        {
          category: "Sweet",
          notes: ["Caramel"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense peat", "Smoke"],
        },
        {
          category: "Fruity",
          notes: ["Dark fruits", "Cherry"],
        },
        {
          category: "Sweet",
          notes: ["Rich sweetness"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Very long, smoky and sweet finish"],
        },
      ],
      body: "Full",
      texture: "Oily, Chewy",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 130,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Bruichladdich The Classic Laddie",
        img_url: 'https://www.bruichladdich.com/cdn/shop/files/Classic_Laddie_Dark.png?v=1746531018',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bruichladdich",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
        {
          name: "Wine",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Unpeated Islay whisky.",
    },
    abv: 50,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Floral",
          notes: ["Floral notes", "Eucalyptus"],
        },
        {
          category: "Fruity",
          notes: ["Green apple", "Citrus"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Peach"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet and refreshing finish"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Remy Cointreau",
    },
  },
  {
    name: "Bunnahabhain 12 Year Old",
        img_url: 'https://m.media-amazon.com/images/I/81+krOzrPLL._UF1000,1000_QL80_.jpg',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bunnahabhain",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, unpeated Islay whisky.",
    },
    abv: 46.3,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Nutty",
          notes: ["Nuts"],
        },
        {
          category: "Salty",
          notes: ["Coastal", "Sea salt"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Toffee", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Salty",
          notes: ["Salty notes"],
        },
      ],
      finish: [
        {
          category: "Salty",
          notes: ["Long, slightly salty finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "Distell Group",
    },
  },
  {
    name: "Caol Ila 12 Year Old",
        img_url: 'https://crownwineandspirits.com/cdn/shop/products/caol-ila-scotch-caol-ila-12-year-old-single-malt-scotch-whisky-750ml-31515756560477.jpg?v=1664304115',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Caol Ila",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Coastal, peaty, with a clear view of the Paps of Jura.",
    },
    abv: 43,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Light peat smoke", "Eucalyptus"],
        },
        {
          category: "Salty",
          notes: ["Sea salt"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Subtle peat smoke"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Medium, smoky and sweet finish"],
        },
        {
          category: "Salty",
          notes: ["Salty notes"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 80,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Bunnahabhain Stiùireadair",
        img_url: 'https://bunnahabhain.com/cdn/shop/products/Bunnahabhain-Product-ContentBUNNA-STIU-_HERO.png?v=1626889607',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bunnahabhain",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Sherry",
          usageLevel: "First Fill",
        },
        {
          name: "Bourbon",
          usageLevel: "Refill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, unpeated Islay whisky.",
    },
    abv: 46.3,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Salty",
          notes: ["Sea salt", "Caramel"],
        },
        {
          category: "Nutty",
          notes: ["Toasted nuts"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Salty",
          notes: ["Briny notes"],
        },
      ],
      finish: [
        {
          category: "Salty",
          notes: ["Long, salty finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 55,
      rarity: "Standard",
    },
    metadata: {
      producer: "Distell Group",
    },
  },
  {
    name: "Kilchoman Machir Bay",
        img_url: 'https://www.kilchomandistillery.com/wp-content/uploads/2018/06/MachirBay70cl_BC_Low.png',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Kilchoman",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      environmentInfluence: "Farm distillery on Islay.",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Citrus"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Tropical fruits"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Sweetness"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Pear"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky and sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Kilchoman Distillery",
    },
  },
  {
    name: "Bruichladdich Islay Barley",
        img_url: 'https://www.bruichladdich.com/cdn/shop/files/BruichladdichOrganicBarley2012700ml_35c37dc9-fc2d-4070-9ab2-8f2fb3809263.png?crop=center&height=1080&v=1697550648&width=1080',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bruichladdich",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Unpeated Islay whisky, showcasing local barley.",
    },
    abv: 50,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Green apple", "Grapefruit"],
        },
        {
          category: "Floral",
          notes: ["Wildflower"],
        },
        {
          category: "Sweet",
          notes: ["Malt", "Honey"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Lemon", "Peach"],
        },
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Malty",
          notes: ["Malty notes"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Malty",
          notes: ["Malty notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Remy Cointreau",
    },
  },
  {
    name: "Kilkerran 12 Year Old",
        img_url: 'https://kilkerran.scot/wp-content/uploads/2024/04/12yo.png',
    origin: {
      country: "Scotland",
      subregion: "Campbeltown",
      distillery: "Glengyle",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Campbeltown's unique characteristics.",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Light peat smoke", "Coastal"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Apple"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Subtle smoke", "Peat"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Medium, smoky and spicy finish"],
        },
        {
          category: "Salty",
          notes: ["Salty notes"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "J. & A. Mitchell & Co.",
    },
  },
  {
    name: "Longrow Peated",
        img_url: 'https://www.houseofmalt.co.uk/wp-content/uploads/2023/12/Longrow-Peated-1.jpg',
    origin: {
      country: "Scotland",
      subregion: "Campbeltown",
      distillery: "Springbank",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, peated Campbeltown whisky.",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Ash"],
        },
        {
          category: "Salty",
          notes: ["Coastal", "Seaweed"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Tar"],
        },
        {
          category: "Sweet",
          notes: ["Caramel", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky and spicy finish"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 85,
      rarity: "Standard",
    },
    metadata: {
      producer: "J. & A. Mitchell & Co.",
    },
  },
  {
    name: "Springbank 10 Year Old",
        img_url: 'https://www.whiskymarketplace.kr/image/2/0/700/2/images/shops/www.htfw.com/lp7057_2_1.jpg',
    origin: {
      country: "Scotland",
      subregion: "Campbeltown",
      distillery: "Springbank",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, slightly peated Campbeltown whisky.",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Pear", "Citrus"],
        },
        {
          category: "Smoky",
          notes: ["Slightly smoky"],
        },
        {
          category: "Salty",
          notes: ["Briny"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Salty",
          notes: ["Salty notes"],
        },
      ],
      finish: [
        {
          category: "Salty",
          notes: ["Long, briny finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "J. & A. Mitchell & Co.",
    },
  },
  {
    name: "Kavalan Distillery Select No. 1",
        img_url: 'https://eluenheng.luenheng.com/wp-content/uploads/2021/04/Kavalan-Select-No.1-box.jpg',
    origin: {
      country: "Taiwan",
      distillery: "Kavalan",
    },
    maturation: {
      estimatedAgingYears: 5,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Taiwan's high humidity and subtropical climate accelerate aging.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Tropical fruits", "Mango"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Tropical fruits"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Medium, sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "King Car Food Industrial Co.",
    },
  },
  {
    name: "Amrut Indian Single Malt",
        img_url: 'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/india_amr6.jpg',
    origin: {
      country: "India",
      distillery: "Amrut",
    },
    maturation: {
      estimatedAgingYears: 4,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Bengaluru's hot and humid climate accelerates aging.",
    },
    abv: 46,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Barley sugar", "Honey"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Apricot"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Tropical fruits"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Amrut Distilleries",
    },
  },
  {
    name: "Compass Box Peat Monster",
        img_url: 'https://www.compassboxwhisky.com/cdn/shop/files/ThePeatMonster.jpg?v=1722005321&width=1946',
    origin: {
      country: "Scotland",
      distillery: "Blended",
    },
    maturation: {
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Blended from various distilleries (Islay, Mull, etc.).",
    },
    abv: 46,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke", "Medicinal", "Sea salt"],
        },
        {
          category: "Fruity",
          notes: ["Green apple"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Peat smoke", "Tar"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Blended Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Compass Box Whisky Company",
    },
  },
  {
    name: "Compass Box Spice Tree",
        img_url: 'https://www.compassboxwhisky.com/cdn/shop/files/WEB_GreyBG_TheSpiceTree_1800x2025_41968913-975f-4f02-acad-7cebbbbdcab1.jpg?v=1730126856&width=1445',
    origin: {
      country: "Scotland",
      distillery: "Blended",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "French Oak",
          subtype: "Inner Staves",
        },
      ],
      environmentInfluence:
        "Blended from various distilleries (Highland, Speyside).",
    },
    abv: 46,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Spicy",
          notes: ["Cloves", "Ginger"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Lemon"],
        },
      ],
      palate: [
        {
          category: "Spicy",
          notes: ["Intense spices", "Pepper"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Baked apple"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Full",
      texture: "Rich",
      intensity: "Intense",
    },
    type: {
      category: "Blended Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Compass Box Whisky Company",
    },
  },
  {
    name: "The Famous Grouse",
        img_url: 'https://www.tauruswines.co.uk/cdn/shop/products/theFG-bottle.png?v=1600077722',
    origin: {
      country: "Scotland",
      distillery: "Blended",
    },
    maturation: {
      estimatedAgingYears: 5,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Blended from various distilleries (Highland Park, Macallan).",
    },
    abv: 40,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Caramel", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
        {
          category: "Malty",
          notes: ["Malty notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Light fruity notes"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Medium, sweet and spicy finish"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 20,
      rarity: "Standard",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Johnnie Walker Black Label",
        img_url: 'https://www.whiskymarketplace.kr/image/2/0/800/2/images/shops/www.thewhiskyexchange.com/blend_joh67.jpg',
    origin: {
      country: "Scotland",
      distillery: "Blended",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Blended from various distilleries (Highland, Islay, Speyside).",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Smoky",
          notes: ["Light peat smoke"],
        },
        {
          category: "Fruity",
          notes: ["Red fruits"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Toffee"],
        },
        {
          category: "Smoky",
          notes: ["Subtle smoke"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Medium, smoky and sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 35,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Chivas Regal 12 Year Old",
        img_url: 'https://www.whiskymarketplace.kr/image/2/0/800/2/images/shops/www.masterofmalt.com/chivas-regal-12-year-old-whisky.jpg',
    origin: {
      country: "Scotland",
      distillery: "Strathisla",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Blended from various distilleries (Speyside, Highland).",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Apple", "Honey"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Creamy", "Honey", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Pear"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Blended",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 40,
      rarity: "Standard",
    },
    metadata: {
      producer: "Pernod Ricard",
    },
  },
  {
    name: "Monkey Shoulder",
        img_url: 'https://images.ctfassets.net/miw9xo325qds/42soZaWJmnXGhujdijXjuM/e0b69419317244c6b9a183a34993edd2/NEW_Bottle_Image_Orange_Background.png',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Blended",
    },
    maturation: {
      estimatedAgingYears: 6,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "First Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Blended from three Speyside distilleries (Balvenie, Glenfiddich, Kininvie).",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Orange", "Vanilla"],
        },
        {
          category: "Floral",
          notes: ["Subtle floral"],
        },
        {
          category: "Sweet",
          notes: ["Malty notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweet vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Pear", "Apple"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Medium, smooth and sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Creamy",
      intensity: "Moderate",
    },
    type: {
      category: "Blended Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 35,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "The Glenmorangie Ealanta",
        img_url: 'https://www.wine-searcher.com/images/labels/36/69/10443669.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glenmorangie",
    },
    maturation: {
      ageStatement: 19,
      estimatedAgingYears: 19,
      caskTypes: [
        {
          name: "Bourbon",
          subtype: "Virgin Oak",
          usageLevel: "Virgin",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Highland's rich agricultural land.",
    },
    abv: 46,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Tropical fruits", "Passion fruit"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Butterscotch"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Orange"],
        },
        {
          category: "Spicy",
          notes: ["Oak spice", "Cinnamon"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet and creamy finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 150,
      rarity: "Limited Edition",
    },
    metadata: {
      producer: "The Glenmorangie Company",
    },
  },
  {
    name: "The Macallan Double Cask 12 Year Old",
        img_url: 'https://cdn.ecommercedns.uk/files/8/258138/7/39212967/the-macallan-12-year-old-double-cask-whisky.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Macallan",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "American Oak",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          subtype: "European Oak",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's traditional methods.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Ginger"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 80,
      rarity: "Standard",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Old Pulteney 12 Year Old",
        img_url: 'https://shop.oldpulteney.com/cdn/shop/products/Old_Pulteney_12_Years_Old_-_The_Maritime_Malt_detail.png?v=1632822312',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Old Pulteney",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, maritime aging in Wick.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Salty",
          notes: ["Sea salt", "Coastal"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Apple"],
        },
        {
          category: "Sweet",
          notes: ["Honey"],
        },
      ],
      palate: [
        {
          category: "Salty",
          notes: ["Briny notes"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Salty",
          notes: ["Medium, salty finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "International Beverage Holdings",
    },
  },
  {
    name: "Glengoyne 10 Year Old",
        img_url: 'https://www.whiskymarketplace.kr/image/2/0/800/2/images/shops/www.thewhiskyexchange.com/ggoob.10yov1.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glengoyne",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Highland's clear water and traditional unpeated distillation.",
    },
    abv: 43,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Green notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Toffee", "Shortbread"],
        },
        {
          category: "Fruity",
          notes: ["Green apple"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Medium, spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Light",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 55,
      rarity: "Standard",
    },
    metadata: {
      producer: "Ian Macleod Distillers Ltd.",
    },
  },
  {
    name: "Glenfiddich Project XX",
        img_url: 'https://images-svetnapojov-cdn.rshop.sk/gallery-big/products/2c7c82952603e96080f3b8fa6f8929ed.png',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfiddich",
    },
    maturation: {
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
        {
          name: "Port",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's unique methods from 20 malt masters.",
    },
    abv: 47,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Apple", "Pear", "Summer fruits"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
        {
          category: "Nutty",
          notes: ["Almonds"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Red fruits", "Cherry"],
        },
        {
          category: "Sweet",
          notes: ["Honey", "Chocolate"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Oak"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "Glenlivet 15 Year Old French Oak Reserve",
        img_url: 'https://ik.imagekit.io/cvygf2xse/theglenlivet/wp-content/uploads/2024/12/The-Glenlivet-15-Year-Old-French-Oak-Reserve-Bottle-E-shop.png?tr=q-80,w-378',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Glenlivet",
    },
    maturation: {
      ageStatement: 15,
      estimatedAgingYears: 15,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "French Oak",
          usageLevel: "Unknown",
        },
      ],
      environmentInfluence: "Speyside's fertile glens.",
    },
    abv: 40,
    appearance: {
      colorName: "Deep Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Mango", "Orange", "Apricot"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Vanilla", "Caramel"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Woody",
          notes: ["French oak"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "Pernod Ricard",
    },
  },
  {
    name: "Oban Little Bay",
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowqxvnySNtxPaTRajL0s3ilHH2ihxetP0ZQ&s',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Oban",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      environmentInfluence:
        "Coastal town with a mix of Highland and Island styles.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Salty",
          notes: ["Sea salt"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Orange"],
        },
        {
          category: "Woody",
          notes: ["Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Honey"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
        {
          category: "Salty",
          notes: ["Briny notes"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Medium, spicy finish"],
        },
        {
          category: "Salty",
          notes: ["Salty notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Highland Park 12 Year Old",
        img_url: 'https://cdn11.bigcommerce.com/s-d24ojig/images/stencil/1280x1280/products/90/4689/12-year-old-pack-768x1039__44467.1539734075.jpg?c=2',
    origin: {
      country: "Scotland",
      subregion: "Orkney Islands",
      distillery: "Highland Park",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "European and American Oak",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Orkney Islands' temperate climate and unique peat.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Light peat smoke", "Honey"],
        },
        {
          category: "Floral",
          notes: ["Heather"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Honey", "Vanilla"],
        },
        {
          category: "Smoky",
          notes: ["Subtle smoke"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, sweet and smoky finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Talisker Skye",
        img_url: 'https://m.media-amazon.com/images/I/81g4MZ2djbL.jpg',
    origin: {
      country: "Scotland",
      subregion: "Isle of Skye",
      distillery: "Talisker",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Refill",
        },
        {
          name: "Recharred",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, Salty, Maritime.",
    },
    abv: 45.8,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Light peat smoke"],
        },
        {
          category: "Fruity",
          notes: ["Citrus", "Orange"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Subtle peat smoke"],
        },
        {
          category: "Spicy",
          notes: ["Pepper", "Chili"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
        {
          category: "Smoky",
          notes: ["Smoke notes"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 60,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Port Charlotte 10 Year Old",
        img_url:'https://www.bruichladdich.com/cdn/shop/files/PortCharlotte10-Bottle-Shopify.png?v=1727279522',
    origin: {
      country: "Scotland",
      subregion: "Islay",
      distillery: "Bruichladdich",
    },
    maturation: {
      ageStatement: 10,
      estimatedAgingYears: 10,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal, heavily peated Islay whisky.",
    },
    abv: 50,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Smoky",
          notes: ["Heavy peat smoke", "Soot", "Medicinal"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Salty",
          notes: ["Brine"],
        },
      ],
      palate: [
        {
          category: "Smoky",
          notes: ["Intense peat smoke"],
        },
        {
          category: "Sweet",
          notes: ["Malt", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Pepper"],
        },
      ],
      finish: [
        {
          category: "Smoky",
          notes: ["Long, smoky and warm finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Full",
      texture: "Oily",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 85,
      rarity: "Standard",
    },
    metadata: {
      producer: "Remy Cointreau",
    },
  },
  {
    name: "Macallan Sherry Oak 12 Year Old",
        img_url:'https://brand-assets.edrington.com/transform/492bfa47-903c-4f8c-8349-7c24679ed3c6/MAC-2025-SO12-BottlePackFront-Transparent-1x1-RGB-150dpi?format=jpg&quality=100&io=transform%3Afit%2Cwidth%3A1200%2Cheight%3A1200',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "The Macallan",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso",
          usageLevel: "European Oak",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's traditional methods.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Citrus"],
        },
        {
          category: "Spicy",
          notes: ["Ginger", "Cinnamon"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Sherry"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Caramel", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Dried figs", "Raisins"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 75,
      rarity: "Standard",
    },
    metadata: {
      producer: "Edrington",
    },
  },
  {
    name: "Glenfiddich 15 Year Old Solera Reserve",
        img_url:'https://www.whiskymarketplace.kr/image/2/0/700/2/images/shops/www.htfw.com/lp8688_2_1.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfiddich",
    },
    maturation: {
      ageStatement: 15,
      estimatedAgingYears: 15,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Solera Vat maturation process.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Ginger"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Plum", "Raisin"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 85,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "Glenmorangie Lasanta 12 Year Old",
        img_url:'https://www.glenmorangie.com/cdn/shop/products/Glenmorangie-Lasanta-70cl-packshot-bottleandcarton-2022-RGB_medium.width-1280x-prop.png?v=1658995651&width=1445',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glenmorangie",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [
        {
          name: "Sherry",
          subtype: "Oloroso and Pedro Ximenez",
        },
      ],
      environmentInfluence: "Highland's rich agricultural land.",
    },
    abv: 43,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Dried fruits", "Raisins"],
        },
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Spicy",
          notes: ["Nutmeg"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Red berries", "Cherry"],
        },
        {
          category: "Sweet",
          notes: ["Toffee", "Chocolate"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "The Glenmorangie Company",
    },
  },
  {
    name: "Glenfiddich 18 Year Old Small Batch Reserve",
        img_url:'https://www.whisky.com/fileadmin/_processed_/f/3/csm_0_438546_gfidd18sb_aw_f6dac9fd25.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Glenfiddich",
    },
    maturation: {
      ageStatement: 18,
      estimatedAgingYears: 18,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Speyside's traditional methods and small batch process.",
    },
    abv: 40,
    appearance: {
      colorName: "Deep Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Baked apple", "Spiced fruits"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Oak"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Rich sweetness", "Butterscotch"],
        },
        {
          category: "Fruity",
          notes: ["Dried fruits"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Full",
      texture: "Smooth",
      intensity: "Intense",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 150,
      rarity: "Standard",
    },
    metadata: {
      producer: "William Grant & Sons",
    },
  },
  {
    name: "Balblair 12 Year Old",
        img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvgjA3WxNNnrrhKfU-iQhxLm6vlrTwBP5Gw&s',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Balblair",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "First Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal Highland, near the Dornoch Firth.",
    },
    abv: 46,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Green apple", "Orange"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla", "Toffee"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      palate: [
        {
          category: "Fruity",
          notes: ["Citrus", "Pear"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon", "Ginger"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Inver House Distillers",
    },
  },
  {
    name: "Cardhu 12 Year Old",
        img_url:'https://images-svetnapojov-cdn.rshop.sk/gallery-big/products/4e93dd63de0a529ad2cfdcb6bbe4d6c0.jpg',
    origin: {
      country: "Scotland",
      subregion: "Speyside",
      distillery: "Cardhu",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Speyside's clear springs and mild climate.",
    },
    abv: 40,
    appearance: {
      colorName: "Golden",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Pear", "Pineapple"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Pear"],
        },
        {
          category: "Spicy",
          notes: ["Spices"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Short, sweet finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Mild",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 55,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Dalwhinnie Winter's Gold",
        img_url:'https://m.media-amazon.com/images/I/81LwVXF7aGL._UF1000,1000_QL80_.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Dalwhinnie",
    },
    maturation: {
      estimatedAgingYears: 8,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Highland's cold, high-altitude location.",
    },
    abv: 43,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: true,
    },
    filtration: {
      chillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Fruity",
          notes: ["Green apple", "Pear"],
        },
        {
          category: "Floral",
          notes: ["Honey"],
        },
        {
          category: "Sweet",
          notes: ["Vanilla"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Citrus"],
        },
        {
          category: "Spicy",
          notes: ["Light spice"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet finish"],
        },
        {
          category: "Spicy",
          notes: ["Spicy notes"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: true,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Clynelish 14 Year Old",
        img_url:'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/clyob.14yo.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Clynelish",
    },
    maturation: {
      ageStatement: 14,
      estimatedAgingYears: 14,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "Coastal Highland, near Brora.",
    },
    abv: 46,
    appearance: {
      colorName: "Golden",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Other",
          notes: ["Waxy notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Malt"],
        },
        {
          category: "Floral",
          notes: ["Floral notes"],
        },
        {
          category: "Other",
          notes: ["Waxy texture"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, spicy finish"],
        },
        {
          category: "Sweet",
          notes: ["Sweetness"],
        },
      ],
      body: "Medium",
      texture: "Waxy, Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 90,
      rarity: "Standard",
    },
    metadata: {
      producer: "Diageo",
    },
  },
  {
    name: "Deanston 12 Year Old",
        img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FnNHuKtiJgyXRJ2r-G52pFtpDfyjl9NlTw&s',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Deanston",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "First Fill",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence:
        "Located in a former cotton mill, uses a water turbine.",
    },
    abv: 46.3,
    appearance: {
      colorName: "Pale Gold",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Honey", "Vanilla"],
        },
        {
          category: "Fruity",
          notes: ["Citrus", "Green apple"],
        },
        {
          category: "Malty",
          notes: ["Malty notes"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Sweetness", "Honey"],
        },
        {
          category: "Fruity",
          notes: ["Lemon", "Pineapple"],
        },
        {
          category: "Woody",
          notes: ["Oak", "Spices"],
        },
      ],
      finish: [
        {
          category: "Sweet",
          notes: ["Long, sweet and malty finish"],
        },
      ],
      body: "Medium",
      texture: "Smooth",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 65,
      rarity: "Standard",
    },
    metadata: {
      producer: "Distell Group",
    },
  },
  {
    name: "Glen Garioch 12 Year Old",
        img_url:'https://www.whiskymarketplace.kr/workspace/images/shops/www.thewhiskyexchange.com/ggrob.12yo.jpg',
    origin: {
      country: "Scotland",
      subregion: "Highland",
      distillery: "Glen Garioch",
    },
    maturation: {
      ageStatement: 12,
      estimatedAgingYears: 12,
      caskTypes: [
        {
          name: "Bourbon",
          usageLevel: "Unknown",
        },
        {
          name: "Sherry",
          usageLevel: "Unknown",
        },
      ],
      finishCaskTypes: [],
      environmentInfluence: "One of Scotland's oldest distilleries.",
    },
    abv: 48,
    appearance: {
      colorName: "Golden Amber",
      addedColoring: false,
    },
    filtration: {
      chillFiltered: false,
      nonChillFiltered: true,
    },
    flavorProfile: {
      nose: [
        {
          category: "Sweet",
          notes: ["Vanilla", "Caramel"],
        },
        {
          category: "Fruity",
          notes: ["Orange", "Lemon"],
        },
        {
          category: "Spicy",
          notes: ["Cinnamon"],
        },
      ],
      palate: [
        {
          category: "Sweet",
          notes: ["Honey", "Toffee"],
        },
        {
          category: "Fruity",
          notes: ["Apple", "Pear"],
        },
        {
          category: "Spicy",
          notes: ["Spices", "Ginger"],
        },
      ],
      finish: [
        {
          category: "Spicy",
          notes: ["Long, warm and spicy finish"],
        },
      ],
      body: "Medium",
      texture: "Oily",
      intensity: "Moderate",
    },
    type: {
      category: "Single Malt",
      caskStrength: false,
      NAS: false,
    },
    price: {
      currency: "USD",
      value: 70,
      rarity: "Standard",
    },
    metadata: {
      producer: "Beam Suntory",
    },
  },
  // {
  //   name: "Glen Scotia Double Cask",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Glen Scotia",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximenez",
  //       },
  //     ],
  //     environmentInfluence: "Coastal, Campbeltown's unique characteristics.",
  //   },
  //   abv: 46,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Fruity notes"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Coastal, sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Rich sweetness", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Raisins", "Dried fruits"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Salty",
  //         notes: ["Long, salty finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Loch Lomond Group",
  //   },
  // },
  // {
  //   name: "Hazelburn 10 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Springbank",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence:
  //       "Coastal, triple distilled, unpeated Campbeltown whisky.",
  //   },
  //   abv: 46,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Malty",
  //         notes: ["Malty notes"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, smooth and sweet finish"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 80,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "J. & A. Mitchell & Co.",
  //   },
  // },
  // {
  //   name: "Glenfiddich Winter Storm",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: 21,
  //     estimatedAgingYears: 21,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Icewine",
  //       },
  //     ],
  //     environmentInfluence: "Finished in Canadian icewine casks.",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruits", "Candied fruits"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Vanilla"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Lychee", "Grape", "Sweet wine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Creamy sweetness", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet and fruity finish"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 250,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Yamazaki Puncheon",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Shimamoto",
  //     distillery: "Yamazaki",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         subtype: "Puncheon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Unique climate near Kyoto with high humidity.",
  //   },
  //   abv: 48,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Green apple", "Citrus"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Pineapple"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Hakushu Distiller's Reserve",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Kaomizaka",
  //     distillery: "Hakushu",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence:
  //       "High-altitude forest distillery, pure alpine water.",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Green apple", "Pear"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Mint", "Eucalyptus"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Light smoke"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Kiwi", "Lemon"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Subtle spice"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle, clean smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 100,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Nikka Yoichi Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Hokkaido",
  //     distillery: "Yoichi",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Coastal, cold climate of Hokkaido.",
  //   },
  //   abv: 45,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Lemon", "Apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Caramel"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salty notes"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long, smoky and spicy finish"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Asahi",
  //   },
  // },
  // {
  //   name: "Nikka Miyagikyo Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Sendai",
  //     distillery: "Miyagikyo",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Miyagi's pure water and humid climate.",
  //   },
  //   abv: 45,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Fruity notes", "Cherry", "Pear"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral notes"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Red fruits"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium, sweet finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Light spice"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Asahi",
  //   },
  // },
  // {
  //   name: "The Yamazaki 25 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Shimamoto",
  //     distillery: "Yamazaki",
  //   },
  //   maturation: {
  //     ageStatement: 25,
  //     estimatedAgingYears: 25,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Spanish Oak",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Mizunara",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Unique climate near Kyoto with high humidity.",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Deep Mahogany",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruits", "Plum", "Raisins"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon", "Nutmeg"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Mizunara Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Rich sweetness", "Honey", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Black cherry", "Red fruits"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Very long, spicy and fruity finish"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily, Chewy",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 1500,
  //     rarity: "Collectible",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Ichiro's Malt & Grain",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     distillery: "Chichibu",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Blended from Chichibu and other world whiskies.",
  //   },
  //   abv: 46,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Lemon"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Light spice"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Caramel"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Apricot"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium, sweet finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 80,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Venture Whisky",
  //   },
  // },
  // {
  //   name: "Kavalan King Car Conductor",
  //       img_url:
  //   origin: {
  //     country: "Taiwan",
  //     distillery: "Kavalan",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence:
  //       "Taiwan's high humidity and subtropical climate accelerate aging.",
  //   },
  //   abv: 46,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Mango", "Green apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral notes"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruits"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Light spice"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium, sweet finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "King Car Food Industrial Co.",
  //   },
  // },
  // {
  //   name: "Suntory The Chita Single Grain",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     distillery: "Chita",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Wine",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Japan's humid climate.",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Grapefruit", "Lemon"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral notes"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["White chocolate"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Light spice"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Short, sweet finish"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Grain",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 60,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Bowmore 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bowmore",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //       },
  //     ],
  //     environmentInfluence: "Islay's coastal climate and ancient peat.",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Dark Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Light peat smoke", "Dark chocolate"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Raisins", "Dried fruits"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle peat smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Chocolate"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruits"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long, sweet and smoky finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Johnnie Walker Green Label",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     distillery: "Blended Malt",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence:
  //       "Blended from various distilleries (Caol Ila, Talisker, Cragganmore, Linkwood).",
  //   },
  //   abv: 43,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Coastal"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Red fruits", "Citrus"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Wood"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Vanilla"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle peat smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Pepper"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long, smoky and spicy finish"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Blended Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Brora 38 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highland",
  //     distillery: "Brora",
  //   },
  //   maturation: {
  //     ageStatement: 38,
  //     estimatedAgingYears: 38,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Highland's coastal aging.",
  //   },
  //   abv: 48.6,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruits", "Orange peel"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Light peat smoke"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Rich sweetness", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruits"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle peat smoke"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Very long, complex finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily, Waxy",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 1500,
  //     rarity: "Collectible",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //     releaseYear: 2016,
  //   },
  // },
  // {
  //   name: "Rosebank 31 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Lowland",
  //     distillery: "Rosebank",
  //   },
  //   maturation: {
  //     ageStatement: 31,
  //     estimatedAgingYears: 31,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Lowland's traditional triple distillation.",
  //   },
  //   abv: 48.1,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruits", "Mango"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Honey"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral notes"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Caramel"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Lemon", "Citrus"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet finish"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 2500,
  //     rarity: "Collectible",
  //   },
  //   metadata: {
  //     producer: "Ian Macleod Distillers Ltd.",
  //     releaseYear: 2021,
  //   },
  // },
  // {
  //   name: "Macallan The Harmony Collection Intense Arabica",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Macallan",
  //   },
  //   maturation: {
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Speyside's traditional methods.",
  //   },
  //   abv: 44,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Tiramisu", "Espresso"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Cherry"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Dark chocolate", "Brown sugar"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Blackcurrant", "Coffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Clove"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet and coffee finish"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily, Chewy",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 180,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Glenmorangie Signet",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highland",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Highland's rich agricultural land.",
  //   },
  //   abv: 46,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Coffee", "Chocolate"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Apricot"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Espresso", "Molasses", "Dark chocolate"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger", "Cinnamon"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Red fruits"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet and chocolate finish"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Velvety",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 250,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "The Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Talisker Port Ruighe",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Isle of Skye",
  //     distillery: "Talisker",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Port",
  //       },
  //     ],
  //     environmentInfluence: "Coastal, Salty, Maritime.",
  //   },
  //   abv: 45.8,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Red fruits"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Coastal"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Spices"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruits", "Plum"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long, smoky and sweet finish"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Lingering red fruits"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Lagavulin 8 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Lagavulin",
  //   },
  //   maturation: {
  //     ageStatement: 8,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Coastal, Peaty, with a long fermentation process.",
  //   },
  //   abv: 48,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Charcoal"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Lemon"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Intense peat smoke", "Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long, warm and smoky finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Ardnahoe Islay Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Ardnahoe",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [],
  //     environmentInfluence: "Coastal, peaty, from the newest Islay distillery.",
  //   },
  //   abv: 50,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Light peat smoke", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus", "Pear"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salty notes"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Malt"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Green apple"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Medium, smoky finish"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy notes"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Hunter Laing",
  //   },
  // },
  // {
  //   name: "Bunnahabhain Eirigh Na Greine",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bunnahabhain",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Red Wine",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     environmentInfluence: "Coastal, unpeated Islay whisky.",
  //   },
  //   abv: 46.3,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruits", "Citrus"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweetness", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Red berries", "Plum"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long, sweet and fruity finish"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Distell Group",
  //   },
  // },
  // {
  //   name: "Glenfiddich 21 Year Old Gran Reserva",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: 21,
  //     estimatedAgingYears: 21,
  //     caskTypes: [
  //       {
  //         name: "American Oak",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Rum",
  //         subtype: "Caribbean Rum Cask",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Dark Gold",
  //     colorHex: "#D5A021",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Banana", "Fig", "Toffee"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Molasses"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper", "Ginger"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Lime"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Fruit cake"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger", "Spicy"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Dry"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 250,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Highland Park 18 Year Old Viking Pride",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Highland Park",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European Oak",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "American Oak",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Rich Copper",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Heather smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Toffee"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Oak"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     releaseYear: 2017,
  //   },
  // },
  // {
  //   name: "Yamazaki 18 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Shimamoto",
  //     distillery: "Yamazaki",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Mizunara",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Apricot"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Mizunara"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Black cherry", "Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Long", "Spicy", "Oak"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Silky",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 1200,
  //     rarity: "Rare",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Nikka Coffey Malt",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     distillery: "Nikka",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 45.0,
  //   appearance: {
  //     colorName: "Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Mango", "Pineapple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruits"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Grain",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Nikka Whisky Distilling Co.",
  //   },
  // },
  // {
  //   name: "Laphroaig Lore",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Laphroaig",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Quarter Cask",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 48.0,
  //   appearance: {
  //     colorName: "Rich Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Iodine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Seaweed"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Chili pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 125,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Ardbeg Wee Beastie",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Ardbeg",
  //   },
  //   maturation: {
  //     ageStatement: 5,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Oloroso Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 47.4,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Charcoal"],
  //       },
  //       {
  //         category: "Herbal",
  //         notes: ["Pine resin"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Chocolate", "Creosote"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Pear"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salt"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Silky",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     releaseYear: 2020,
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Talisker 57° North",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Isle of Skye",
  //     distillery: "Talisker",
  //   },
  //   maturation: {
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 57.0,
  //   appearance: {
  //     colorName: "Bright Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Fruity"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Pepper"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     releaseYear: 2008,
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Glenlivet 18 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Glenlivet",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Old Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Dried fruit"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Pear"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 130,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Chivas Brothers",
  //   },
  // },
  // {
  //   name: "Bowmore 18 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bowmore",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Mellow Mahogany",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Soft peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Chocolate", "Orange"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Lagavulin 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Lagavulin",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 56.5,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Intense peat smoke"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Earthy"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salt"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Dry", "Peat"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Glenmorangie A Tale of Forest",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Other",
  //         subtype: "Pine Cask",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Herbal",
  //         notes: ["Juniper", "Coriander"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Pine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Orange"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Herbal",
  //         notes: ["Rosemary", "Mint"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cloves"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Long", "Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     releaseYear: 2021,
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Balvenie 14 Year Old The Week of Peat",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Balvenie",
  //   },
  //   maturation: {
  //     ageStatement: 14,
  //     estimatedAgingYears: 14,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 48.3,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     releaseYear: 2017,
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "GlenDronach 18 Year Old Allardice",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "GlenDronach",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximénez (PX)",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Bright Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fig", "Dates"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Brown sugar"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Stewed fruit", "Cherry"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Fruity",
  //         notes: ["Long", "Sherry"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Walnuts"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Brown-Forman",
  //   },
  // },
  // {
  //   name: "Dalwhinnie 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Dalwhinnie",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Floral",
  //         notes: ["Heather", "Honey"],
  //       },
  //       {
  //         category: "Malty",
  //         notes: ["Malt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle smoke"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Talisker Port Ruighe",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Isle of Skye",
  //     distillery: "Talisker",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Port",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 45.8,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Red berries"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Spicy"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Sweet fruit", "Caramel"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Fruity",
  //         notes: ["Long", "Fruity", "Peat"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 80,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "The Balvenie Caribbean Cask 14 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Balvenie",
  //   },
  //   maturation: {
  //     ageStatement: 14,
  //     estimatedAgingYears: 14,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Rum",
  //         subtype: "Caribbean Rum Cask",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Bright Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Passion fruit", "Apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Mango", "Passion fruit"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Long", "Warm", "Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Glenmorangie Lasanta 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximénez (PX)",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Light Russet",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Orange"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Grape", "Orange"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Walnut"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Glenfiddich 15 Year Old Solera Reserve",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Virgin",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Honey"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Marzipan"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "The Macallan Double Cask 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Macallan",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European Oak",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "American Oak",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Apple"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Glenfiddich Project XX",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Port",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 47.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Almonds"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Grape"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate", "Toffee"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Sweet", "Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Johnnie Walker Gold Label Reserve",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Peach", "Dried fruit"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Creamy"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Chivas Regal 18 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Strathisla",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Amber Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Cherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Butterscotch"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Peach"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spice"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Velvety",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Chivas Brothers",
  //   },
  // },
  // {
  //   name: "Compass Box Hedonism",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Cream", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Coconut", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Creamy",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended Grain",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Compass Box",
  //   },
  // },
  // {
  //   name: "Maker's 46",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Maker's Mark",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 6,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Other",
  //         subtype: "French Oak Staves",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 47.0,
  //   appearance: {
  //     colorName: "Dark Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Pepper"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Spicy"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 45,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Woodford Reserve Double Oaked",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Woodford Reserve",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 7,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Other",
  //         subtype: "Heavily Toasted Cask",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 45.2,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Apple"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Chocolate"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Creamy", "Honey"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Brown-Forman",
  //   },
  // },
  // {
  //   name: "Elijah Craig Barrel Proof",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Heaven Hill",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 60.6,
  //   appearance: {
  //     colorName: "Deep Copper",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon", "Black pepper"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy", "Warm"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: true,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     releaseYear: 2021,
  //     producer: "Heaven Hill",
  //   },
  // },
  // {
  //   name: "Four Roses Single Barrel",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Four Roses",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 50.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Pear"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Maple syrup"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Rye"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Apricot"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 50,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Kirin Holdings",
  //   },
  // },
  // {
  //   name: "Wild Turkey Rare Breed",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Wild Turkey",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 6,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 58.4,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper", "Rye"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Campari Group",
  //   },
  // },
  // {
  //   name: "Redbreast 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Ireland",
  //     subregion: "County Cork",
  //     distillery: "Midleton",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Citrus peel"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Peach"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Ginger"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Nutty"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Irish Distillers",
  //   },
  // },
  // {
  //   name: "Knob Creek Single Barrel Reserve",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Jim Beam",
  //   },
  //   maturation: {
  //     ageStatement: 9,
  //     estimatedAgingYears: 9,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 60.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Nutty",
  //         notes: ["Peanuts"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: true,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Basil Hayden's",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Jim Beam",
  //   },
  //   maturation: {
  //     ageStatement: 8,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Spicy",
  //         notes: ["Rye", "Pepper"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Cherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Spicy",
  //         notes: ["Rye", "Mint"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Short", "Spicy"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 45,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Angel's Envy Bourbon",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Louisville Distilling Co.",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 6,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Port",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.3,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Red berries", "Raisin"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Orange"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Maple syrup"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Warm", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Bacardi",
  //   },
  // },
  // {
  //   name: "Blanton's Gold Edition",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Buffalo Trace",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 51.5,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Rye", "Pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Cherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Bourbon",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Rare",
  //   },
  //   metadata: {
  //     bottlingYear: 2021,
  //     producer: "Sazerac Company",
  //   },
  // },
  // {
  //   name: "Michter's US 1 Single Barrel Rye",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Kentucky",
  //     distillery: "Michter's",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Rye",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 42.4,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Spicy",
  //         notes: ["Rye"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Butterscotch"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Rye",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 50,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Michter's",
  //   },
  // },
  // {
  //   name: "WhistlePig 10 Year Old Small Batch Rye",
  //       img_url:
  //   origin: {
  //     country: "USA",
  //     subregion: "Vermont",
  //     distillery: "WhistlePig",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //       {
  //         name: "Rye",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 50.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Spicy",
  //         notes: ["Rye", "Mint"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Cherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Spicy",
  //         notes: ["Rye", "Cinnamon"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Plum"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Rye",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "WhistlePig",
  //   },
  // },
  // {
  //   name: "Kavalan Solist Vinho Barrique",
  //       img_url:
  //   origin: {
  //     country: "Taiwan",
  //     subregion: "Yilan County",
  //     distillery: "Kavalan",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 7,
  //     caskTypes: [
  //       {
  //         name: "Wine",
  //         subtype: "Shaved, Toasted, Recharred",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 58.6,
  //   appearance: {
  //     colorName: "Deep Mahogany",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Blackberry", "Plum"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Chocolate"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Marzipan", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Fruity",
  //         notes: ["Long", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 200,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "King Car Food Industrial Co.",
  //   },
  // },
  // {
  //   name: "Amrut Fusion",
  //       img_url:
  //   origin: {
  //     country: "India",
  //     subregion: "Bangalore",
  //     distillery: "Amrut",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 4,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 50.0,
  //   appearance: {
  //     colorName: "Rich Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus", "Spicy"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruit", "Apricot"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Amrut Distilleries",
  //   },
  // },
  // {
  //   name: "Old Pulteney 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Old Pulteney",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Brine"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Salty",
  //         notes: ["Salt"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Salty",
  //         notes: ["Long", "Salty", "Dry"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 50,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Inver House Distillers",
  //   },
  // },
  // {
  //   name: "Glengoyne 10 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glengoyne",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Green fruit"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Ian Macleod Distillers",
  //   },
  // },
  // {
  //   name: "Clynelish 14 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Clynelish",
  //   },
  //   maturation: {
  //     ageStatement: 14,
  //     estimatedAgingYears: 14,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Other",
  //         notes: ["Wax"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Spicy", "Wax"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Deanston 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Deanston",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.3,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Malty",
  //         notes: ["Malt"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Medium", "Oak"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Burn Stewart Distillers",
  //   },
  // },
  // {
  //   name: "Glen Garioch 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glen Garioch",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 48.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus", "Apricot"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Spicy", "Warm"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Glen Scotia Double Cask",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Glen Scotia",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximénez (PX)",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Peach"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Dried fruit"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salt"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Loch Lomond Group",
  //   },
  // },
  // {
  //   name: "Springbank 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Springbank",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Fig"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle smoke"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Brine"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Dark chocolate"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Dry", "Peat"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "J. & A. Mitchell & Co Ltd",
  //   },
  // },
  // {
  //   name: "Hazelburn 10 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Springbank",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Apple"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Apricot"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Pepper"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Medium", "Dry", "Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "J. & A. Mitchell & Co Ltd",
  //   },
  // },
  // {
  //   name: "Longrow Peated",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Campbeltown",
  //     distillery: "Springbank",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 6,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Brine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Smoke"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salty"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "J. & A. Mitchell & Co Ltd",
  //   },
  // },
  // {
  //   name: "Kilchoman Machir Bay",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Kilchoman",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 6,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Citrus"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruit"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Kilchoman Distillery",
  //   },
  // },
  // {
  //   name: "Bunnahabhain Stiùireadair",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bunnahabhain",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 46.3,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Roasted nuts"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Brine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Cream", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Salty",
  //         notes: ["Long", "Salty", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Distell Group Limited",
  //   },
  // },
  // {
  //   name: "Caol Ila 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Caol Ila",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Brine", "Seaweed"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Bunnahabhain 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bunnahabhain",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.3,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Nutty"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Toasted nuts"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Distell Group Limited",
  //   },
  // },
  // {
  //   name: "Ardnahoe Islay Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Ardnahoe",
  //   },
  //   maturation: {
  //     ageStatement: 5,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Ex-bourbon",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Ex-sherry",
  //       },
  //     ],
  //   },
  //   abv: 50.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Oily"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus", "Green apple"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Vanilla"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Brine"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Black pepper"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Warm", "Smoky"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Hunter Laing & Co.",
  //   },
  // },
  // {
  //   name: "Bunnahabhain Eirigh Na Greine",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bunnahabhain",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Various",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Various",
  //       },
  //     ],
  //   },
  //   abv: 46.3,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Peach"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Red berries"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt", "Brine"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Fruity",
  //         notes: ["Long", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Distell Group Limited",
  //   },
  // },
  // {
  //   name: "Bowmore 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bowmore",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Dark Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dark fruit", "Raisin"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Salty"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Chocolate"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Dry", "Peat"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Loch Lomond 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Loch Lomond",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Refill",
  //         usageLevel: "Refill",
  //       },
  //       {
  //         name: "Recharred",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Peach", "Pear"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle smoke"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Green apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Medium", "Oak", "Dry"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 50,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Loch Lomond Group",
  //   },
  // },
  // {
  //   name: "Laphroaig Quarter Cask",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Laphroaig",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Other",
  //         subtype: "Quarter Cask",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 48.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Coconut"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Salt"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Ardbeg Corryvreckan",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Ardbeg",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "French Oak",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 57.1,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Spicy"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Blackcurrant", "Cherry"],
  //       },
  //       {
  //         category: "Earthy",
  //         notes: ["Seaweed"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Black pepper"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Dark chocolate"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Intense", "Smoky"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Glenfiddich Fire & Cane",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Rum",
  //         subtype: "Latin Rum Cask",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Brown sugar"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Green apple"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Medium", "Sweet", "Smoke"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Glenmorangie Quinta Ruban 14 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: 14,
  //     estimatedAgingYears: 14,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Port",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Ruby Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Cherry"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Walnut"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Red berries"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Fruity",
  //         notes: ["Long", "Sweet", "Orange"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "GlenDronach Parliament 21 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "GlenDronach",
  //   },
  //   maturation: {
  //     ageStatement: 21,
  //     estimatedAgingYears: 21,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximénez (PX)",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 48.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Blackberry", "Cherry"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate", "Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Stewed fruit", "Raisin"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Walnut"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Rich", "Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 250,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Brown-Forman",
  //   },
  // },
  // {
  //   name: "Aberlour A'bunadh",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Aberlour",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 59.6,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried apricot", "Orange peel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Raisin"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Ginger"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Chivas Brothers",
  //   },
  // },
  // {
  //   name: "Johnnie Walker Green Label",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Cut grass", "Citrus"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spice"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Peach", "Cherry"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Nikka Yoichi Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Yoichi",
  //     distillery: "Yoichi",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 45.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Pepper"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Nikka Whisky Distilling Co.",
  //   },
  // },
  // {
  //   name: "Nikka Miyagikyo Single Malt",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Miyagi",
  //     distillery: "Miyagikyo",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 45.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Nikka Whisky Distilling Co.",
  //   },
  // },
  // {
  //   name: "Kavalan King Car Conductor",
  //       img_url:
  //   origin: {
  //     country: "Taiwan",
  //     subregion: "Yilan County",
  //     distillery: "Kavalan",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Wine",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Dark Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Tropical fruit", "Banana"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Mango", "Pear"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet", "Warm"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "King Car Food Industrial Co.",
  //   },
  // },
  // {
  //   name: "Suntory The Chita Single Grain",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Aichi Prefecture",
  //     distillery: "Chita",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Wine",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Lemon peel"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Creamy"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Short", "Sweet", "Clean"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Grain",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 60,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Ichiro's Malt & Grain",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Chichibu",
  //     distillery: "Chichibu",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Mizunara",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Peach"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Lemon", "Tropical fruit"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Venture Whisky Co.",
  //   },
  // },
  // {
  //   name: "The Yamazaki 18 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Shimamoto",
  //     distillery: "Yamazaki",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Mizunara",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Apricot"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Mizunara"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Black cherry", "Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Long", "Spicy", "Oak"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Silky",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 1200,
  //     rarity: "Rare",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "Nikka From The Barrel",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 51.4,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Peach", "Apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Caramel"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Spicy",
  //         notes: ["Pepper", "Cinnamon"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange peel"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Nikka Whisky Distilling Co.",
  //   },
  // },
  // {
  //   name: "Hibiki Japanese Harmony",
  //       img_url:
  //   origin: {
  //     country: "Japan",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Mizunara",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Floral",
  //         notes: ["Rose", "Lychee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange peel", "White chocolate"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "White chocolate"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet", "Mizunara"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Suntory",
  //   },
  // },
  // {
  //   name: "The Balvenie DoubleWood 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Balvenie",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Sherry"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Nutty",
  //         notes: ["Nutty"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Warm"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Macallan Double Cask 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Macallan",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European Oak",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "American Oak",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Apple"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Laphroaig 10 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Laphroaig",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Seaweed", "Brine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Smoky", "Dry"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 60,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Beam Suntory",
  //   },
  // },
  // {
  //   name: "Lagavulin 16 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Lagavulin",
  //   },
  //   maturation: {
  //     ageStatement: 16,
  //     estimatedAgingYears: 16,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Iodine"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sherry", "Vanilla"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Seaweed"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Very long", "Dry", "Smoky"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Ardbeg Uigeadail",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Ardbeg",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 54.2,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Tar"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat", "Smoke"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Black pepper", "Chili"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Long", "Intense", "Peat"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Bruichladdich The Classic Laddie",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Islay",
  //     distillery: "Bruichladdich",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Wine",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 50.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Peach", "Green apple"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Pear", "Citrus"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Medium", "Dry", "Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 65,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Rémy Cointreau",
  //   },
  // },
  // {
  //   name: "Mortlach 16 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Mortlach",
  //   },
  //   maturation: {
  //     ageStatement: 16,
  //     estimatedAgingYears: 16,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.4,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Sherry"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin", "Plum"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon", "Pepper"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Glenfarclas 105 Cask Strength",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfarclas",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 8,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 60.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry", "Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon", "Pepper"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Warm", "Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Oily",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: true,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "J. & G. Grant",
  //   },
  // },
  // {
  //   name: "The Macallan A Night on Earth",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Macallan",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European Oak",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Orange"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Fig"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Toffee", "Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet", "Warm"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     releaseYear: 2021,
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Glenfiddich Project XX",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Glenfiddich",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Port",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 47.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Almonds"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Grape"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Chocolate", "Toffee"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Sweet", "Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 70,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "Highland Park 18 Year Old Viking Pride",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Highland Park",
  //   },
  //   maturation: {
  //     ageStatement: 18,
  //     estimatedAgingYears: 18,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European Oak",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "American Oak",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Rich Copper",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Heather smoke"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Cherry", "Toffee"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke", "Oak"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spicy"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Smooth",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     releaseYear: 2017,
  //   },
  // },
  // {
  //   name: "Oban 14 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Oban",
  //   },
  //   maturation: {
  //     ageStatement: 14,
  //     estimatedAgingYears: 14,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Lemon"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Light peat"],
  //       },
  //       {
  //         category: "Salty",
  //         notes: ["Sea salt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Smoke"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Dry", "Spice"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 90,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Glenmorangie The Original 10 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: 10,
  //     estimatedAgingYears: 10,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus", "Peach"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Clean", "Sweet"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 55,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "Dalwhinnie 15 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Dalwhinnie",
  //   },
  //   maturation: {
  //     ageStatement: 15,
  //     estimatedAgingYears: 15,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Refill",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Pale Gold",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Floral",
  //         notes: ["Heather", "Honey"],
  //       },
  //       {
  //         category: "Malty",
  //         notes: ["Malt"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Sweet malt", "Honey"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy"],
  //       },
  //       {
  //         category: "Smoky",
  //         notes: ["Subtle smoke"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 85,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "GlenDronach 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "GlenDronach",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "Oloroso",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         subtype: "Pedro Ximénez (PX)",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 43.0,
  //   appearance: {
  //     colorName: "Deep Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit", "Pear"],
  //       },
  //       {
  //         category: "Nutty",
  //         notes: ["Walnut"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Sherry", "Raisin"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Cinnamon"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Long", "Spicy", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 75,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Brown-Forman",
  //   },
  // },
  // {
  //   name: "The Famous Grouse",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Citrus"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Caramel"],
  //       },
  //       {
  //         category: "Floral",
  //         notes: ["Floral"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Malt"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Short", "Dry", "Oak"],
  //       },
  //     ],
  //     body: "Light",
  //     texture: "Smooth",
  //     intensity: "Mild",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 25,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Johnnie Walker Black Label",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Various",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat smoke"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Raisin"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Smoky",
  //         notes: ["Peat"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Smoky",
  //         notes: ["Medium", "Smoky", "Dry"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 35,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Diageo",
  //   },
  // },
  // {
  //   name: "Chivas Regal 12 Year Old",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Strathisla",
  //   },
  //   maturation: {
  //     ageStatement: 12,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Unknown",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Amber",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple", "Pear"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Vanilla"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apple"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Spicy",
  //         notes: ["Medium", "Spicy", "Sweet"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 35,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Chivas Brothers",
  //   },
  // },
  // {
  //   name: "Monkey Shoulder",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "Various",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 5,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //     ],
  //   },
  //   abv: 40.0,
  //   appearance: {
  //     colorName: "Golden",
  //     addedColoring: true,
  //   },
  //   filtration: {
  //     chillFiltered: true,
  //     nonChillFiltered: false,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Fruity",
  //         notes: ["Orange", "Pear"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Honey"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Brown sugar", "Creamy"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Sweet", "Smooth"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Creamy",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Blended Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 40,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "William Grant & Sons",
  //   },
  // },
  // {
  //   name: "The Glenmorangie Ealanta",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: 19,
  //     estimatedAgingYears: 19,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "Virgin",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Rich Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Vanilla", "Toffee"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Apricot", "Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Fruity",
  //         notes: ["Lemon", "Orange"],
  //       },
  //       {
  //         category: "Sweet",
  //         notes: ["Honey", "Butterscotch"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Woody",
  //         notes: ["Long", "Spicy", "Oak"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: false,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 110,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     releaseYear: 2013,
  //     producer: "Glenmorangie Company",
  //   },
  // },
  // {
  //   name: "The Macallan The Harmony Collection Intense Arabica",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Speyside",
  //     distillery: "The Macallan",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 12,
  //     caskTypes: [
  //       {
  //         name: "Sherry",
  //         subtype: "European and American Oak",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //     finishCaskTypes: [
  //       {
  //         name: "Other",
  //         subtype: "Arabica Coffee Casks",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 44.0,
  //   appearance: {
  //     colorName: "Espresso Gold",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Espresso", "Tiramisu"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Dark cherry", "Raisin"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Coffee", "Chocolate"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices", "Cinnamon"],
  //       },
  //       {
  //         category: "Woody",
  //         notes: ["Oak"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Medium", "Dry", "Sweet coffee"],
  //       },
  //     ],
  //     body: "Medium",
  //     texture: "Smooth",
  //     intensity: "Moderate",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 150,
  //     rarity: "Limited Edition",
  //   },
  //   metadata: {
  //     releaseYear: 2021,
  //     producer: "Edrington",
  //   },
  // },
  // {
  //   name: "Glenmorangie Signet",
  //       img_url:
  //   origin: {
  //     country: "Scotland",
  //     subregion: "Highlands",
  //     distillery: "Glenmorangie",
  //   },
  //   maturation: {
  //     ageStatement: null,
  //     estimatedAgingYears: 20,
  //     caskTypes: [
  //       {
  //         name: "Bourbon",
  //         usageLevel: "First Fill",
  //       },
  //       {
  //         name: "Sherry",
  //         usageLevel: "Unknown",
  //       },
  //     ],
  //   },
  //   abv: 46.0,
  //   appearance: {
  //     colorName: "Deep Amber",
  //     addedColoring: false,
  //   },
  //   filtration: {
  //     chillFiltered: false,
  //     nonChillFiltered: true,
  //   },
  //   flavorProfile: {
  //     nose: [
  //       {
  //         category: "Sweet",
  //         notes: ["Espresso", "Tiramisu"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Plum", "Dried fruit"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Ginger"],
  //       },
  //     ],
  //     palate: [
  //       {
  //         category: "Sweet",
  //         notes: ["Dark chocolate", "Coffee"],
  //       },
  //       {
  //         category: "Spicy",
  //         notes: ["Spices"],
  //       },
  //       {
  //         category: "Fruity",
  //         notes: ["Orange"],
  //       },
  //     ],
  //     finish: [
  //       {
  //         category: "Sweet",
  //         notes: ["Long", "Rich", "Sweet coffee"],
  //       },
  //     ],
  //     body: "Full",
  //     texture: "Velvety",
  //     intensity: "Intense",
  //   },
  //   type: {
  //     category: "Single Malt",
  //     caskStrength: false,
  //     NAS: true,
  //   },
  //   price: {
  //     currency: "USD",
  //     value: 250,
  //     rarity: "Standard",
  //   },
  //   metadata: {
  //     producer: "Glenmorangie Company",
  //   },
  // },
];
