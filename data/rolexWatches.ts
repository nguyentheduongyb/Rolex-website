export interface RolexWatch {
  id: string;
  collection: string;
  reference: string;
  slug: string;
  strapType: string;
  name: string;
  title: string;
  sourceUrl: string;
  price: number;
  priceNew: number;
  currency: string;

  images: {
    main: string;
    nightMode?: string;
  };
  dial: {
    image: string;
  }

  contentPage: {
    features: {
    image: {
        mobile: string;
        desktop: string;
    }
    title: string;
    description: string;
  };
  bezel: {
    image: {
        mobile: string;
        desktop: string;
    }
    title: string;
    highlights: {
        title: string;
        description: string;
        }[];
  };
  dial: {
    image: {
        mobile: string;
        desktop: string;
    }
    title: string;
    highlights: {
        title: string;
        description: string;
        }[];
  };
  rolesor: {
    image: {
        mobile: string;
        desktop: string;
    }
    title: string;
    highlights: {
        title: string;
        description: string;
        }[];
  };
  }

  case: {
    model: string;
    architecture: string;
    diameter: string;
    material: string;
    bezel: string;
    windingCrown: string;
    crystal: string;
    waterResistance: string;
  };

  movement: {
    type: string;
    calibre: string;
    precision: string;
    functions: string;
    oscillator: string;
    winding: string;
    powerReserve: string;
  };

  bracelet: {
    type: string;
    material: string;
    clasp: string;
  };


  certification: string;

  documents: {
    userGuide: string;
    brochure: {
        link: string;
        image: string;
        description: string;
    }
  };
}
export const rolexWatches: RolexWatch[] = [
  {
    id: "126711CHNR-0002", collection: "GMT-Master II", reference: "126711CHNR", slug: "gmt-master-ii", strapType: "Oyster bracelet",
    name: "GMT-Master II", title: "Oyster, 40 mm, Oystersteel and Everose gold", sourceUrl: "/watches/gmt-master-ii/126711chnr-0002",
    price: 20050, priceNew: 219, currency: "MYR",
    images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "In connection with the world", description: "The Oyster Perpetual GMT-Master II with a black and a oyster bracelet." },
      bezel: { image: { mobile: "", desktop: "" }, title: "24-Hour Rotatable Bezel", highlights: [{ title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a brown and black Cerachrom ceramic insert." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Everose Rolesor - combination of Oystersteel and Everose gold", highlights: [{ title: "Materials", description: "Everose Rolesor - combination of Oystersteel and Everose gold." }] }
    },
    case: { model: "GMT-Master II Oyster, 40 mm, Oystersteel and Everose gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "Everose Rolesor - combination of Oystersteel and Everose gold", bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour brown and black Cerachrom insert in ceramic, moulded numerals and graduations", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding, GMT function", calibre: "3285, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Everose Rolesor - combination of Oystersteel and Everose gold", clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
    documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126713GRNR-0001", collection: "GMT-Master II", reference: "126713GRNR", slug: "gmt-master-ii", strapType: "Jubilee bracelet",
    name: "GMT-Master II", title: "Oyster, 40 mm, Oystersteel and yellow gold", sourceUrl: "/watches/gmt-master-ii/126713grnr-0001",
    price: 20450, priceNew: 219, currency: "MYR",
    images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "In connection with the world", description: "The Oyster Perpetual GMT-Master II with a black and a jubilee bracelet." },
      bezel: { image: { mobile: "", desktop: "" }, title: "24-Hour Rotatable Bezel", highlights: [{ title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a grey and black Cerachrom ceramic insert." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Yellow Rolesor - combination of Oystersteel and yellow gold", highlights: [{ title: "Materials", description: "Yellow Rolesor - combination of Oystersteel and yellow gold." }] }
    },
    case: { model: "GMT-Master II Oyster, 40 mm, Oystersteel and yellow gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour grey and black Cerachrom insert in ceramic, moulded numerals and graduations", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding, GMT function", calibre: "3285, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Jubilee, five-piece links", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
    documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126710BLNR-0002", collection: "GMT-Master II", reference: "126710BLNR", slug: "gmt-master-ii", strapType: "Jubilee bracelet",
    name: "GMT-Master II", title: "Oyster, 40 mm, Oystersteel", sourceUrl: "/watches/gmt-master-ii/126710blnr-0002",
    price: 12000, priceNew: 219, currency: "MYR",
    images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "In connection with the world", description: "The Oyster Perpetual GMT-Master II with a black and a jubilee bracelet." },
      bezel: { image: { mobile: "", desktop: "" }, title: "24-Hour Rotatable Bezel", highlights: [{ title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a blue and black Cerachrom ceramic insert." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Oystersteel", highlights: [{ title: "Materials", description: "Oystersteel." }] }
    },
    case: { model: "GMT-Master II Oyster, 40 mm, Oystersteel", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "Oystersteel", bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour blue and black Cerachrom insert in ceramic, moulded numerals and graduations", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding, GMT function", calibre: "3285, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Jubilee, five-piece links", material: "Oystersteel", clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
    documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126729VTNR-0001", collection: "GMT-Master II", reference: "126729VTNR", slug: "gmt-master-ii", strapType: "Oyster bracelet",
    name: "GMT-Master II", title: "Oyster, 40 mm, white gold", sourceUrl: "/watches/gmt-master-ii/126729vtnr-0001",
    price: 54700, priceNew: 219, currency: "MYR",
    images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "In connection with the world", description: "The Oyster Perpetual GMT-Master II with a green ceramic and a oyster bracelet." },
      bezel: { image: { mobile: "", desktop: "" }, title: "24-Hour Rotatable Bezel", highlights: [{ title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a green and black Cerachrom ceramic insert." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Green ceramic Dial", highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "18 kt white gold", highlights: [{ title: "Materials", description: "18 kt white gold." }] }
    },
    case: { model: "GMT-Master II Oyster, 40 mm, white gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "18 kt white gold", bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour green and black Cerachrom insert in ceramic, moulded numerals and graduations", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding, GMT function", calibre: "3285, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "18 kt white gold", clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
    documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126500LN-0001", collection: "Cosmograph Daytona", reference: "126500LN", slug: "cosmograph-daytona", strapType: "Oyster, three-piece solid links",
    name: "Cosmograph Daytona", title: "Cosmograph Daytona Oyster, 40 mm, Oystersteel", sourceUrl: "/watches/cosmograph-daytona/126500ln-0001",
    price: 16900, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "The triumph of endurance", description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship." },
      bezel: { image: { mobile: "", desktop: "" }, title: "The tachymetric scale", highlights: [{ title: "High-performance chronograph", description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "White, black counter rings Dial", highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Oystersteel", highlights: [{ title: "Materials", description: "Oystersteel." }] }
    },
    case: { model: "Oyster, 40 mm, Oystersteel", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "Oystersteel", bezel: "Black Cerachrom bezel with tachymetric scale", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical chronograph, self-winding", calibre: "4131, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 72 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterlock safety clasp" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126509-0003", collection: "Cosmograph Daytona", reference: "126509", slug: "cosmograph-daytona", strapType: "Oyster, three-piece solid links",
    name: "Cosmograph Daytona", title: "Cosmograph Daytona Oyster, 40 mm, 18 kt white gold", sourceUrl: "/watches/cosmograph-daytona/126509-0003",
    price: 59100, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "The triumph of endurance", description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship." },
      bezel: { image: { mobile: "", desktop: "" }, title: "The tachymetric scale", highlights: [{ title: "High-performance chronograph", description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Steel and bright black Dial", highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "18 kt white gold", highlights: [{ title: "Materials", description: "18 kt white gold." }] }
    },
    case: { model: "Oyster, 40 mm, 18 kt white gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "18 kt white gold", bezel: "18 kt white gold bezel with engraved tachymetric scale", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical chronograph, self-winding", calibre: "4131, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 72 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "18 kt white gold", clasp: "Folding Oysterlock safety clasp" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126518LN-0012", collection: "Cosmograph Daytona", reference: "126518LN", slug: "cosmograph-daytona", strapType: "Oysterflex bracelet",
    name: "Cosmograph Daytona", title: "Cosmograph Daytona Oyster, 40 mm, 18 kt yellow gold", sourceUrl: "/watches/cosmograph-daytona/126518ln-0012",
    price: 42700, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "The triumph of endurance", description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship." },
      bezel: { image: { mobile: "", desktop: "" }, title: "The tachymetric scale", highlights: [{ title: "High-performance chronograph", description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Golden and bright black Dial", highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "18 kt yellow gold", highlights: [{ title: "Materials", description: "18 kt yellow gold." }] }
    },
    case: { model: "Oyster, 40 mm, 18 kt yellow gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "18 kt yellow gold", bezel: "Black Cerachrom bezel with tachymetric scale", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical chronograph, self-winding", calibre: "4131, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 72 hours" },
    bracelet: { type: "Oysterflex bracelet", material: "Black elastomer blades over flexible metal blade", clasp: "Folding Oysterlock safety clasp" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126503-0002", collection: "Cosmograph Daytona", reference: "126503", slug: "cosmograph-daytona", strapType: "Oyster, three-piece solid links",
    name: "Cosmograph Daytona", title: "Cosmograph Daytona Oyster, 40 mm, Oystersteel and yellow gold", sourceUrl: "/watches/cosmograph-daytona/126503-0002",
    price: 23400, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "The triumph of endurance", description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship." },
      bezel: { image: { mobile: "", desktop: "" }, title: "The tachymetric scale", highlights: [{ title: "High-performance chronograph", description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Yellow Rolesor - combination of Oystersteel and yellow gold", highlights: [{ title: "Materials", description: "Yellow Rolesor - combination of Oystersteel and yellow gold." }] }
    },
    case: { model: "Oyster, 40 mm, Oystersteel and yellow gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "40 mm", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", bezel: "Yellow gold bezel with engraved tachymetric scale", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical chronograph, self-winding", calibre: "4131, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 72 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", clasp: "Folding Oysterlock safety clasp" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126334-0003", 
    collection: "Datejust", 
    reference: "126334", 
    slug: "datejust", 
    strapType: "Oyster bracelet", 
    name: "Datejust 41",
    title: "Datejust 41 Oyster, 41 mm, Oystersteel and white gold", 
    sourceUrl: "/watches/datejust/126334-0003",
    price: 11650, 
    priceNew: 219, 
    currency: "MYR", 
    images: { 
        main: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126334-0003", 
        nightMode: "" 
            },
            dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust" }, title: "Make a date of a day", description: "The Oyster Perpetual Datejust 41 in Oystersteel and white gold with a silver dial and an Oyster bracelet." },
      bezel: { image: { 
        mobile: "", 
        desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126334-0003" }, title: "Fluted bezel", highlights: [{ title: "A Rolex signature", description: "The fluted bezel is a distinctive Rolex design signature." }] },
      dial: { image: { mobile: "", desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0003" }, title: "Silver Dial", highlights: [{ title: "Chromalight display", description: "Highly legible display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "https://w.ladicdn.com/60a1f7e18b7784001369fedb/anim-bracelet-material-portrait-126710blnr-79200-0000-20250423065431-vdkje.avif" }, title: "White Rolesor", highlights: [{ title: "A meeting of two metals", description: "White Rolesor combines Oystersteel and white gold." }] }
    },
    case: { model: "Oyster, 41 mm, Oystersteel and white gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "41 mm", material: "White Rolesor - combination of Oystersteel and white gold", bezel: "Fluted", windingCrown: "Screw-down, Twinlock double waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding", calibre: "3235, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterclasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "/",
        image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126334-0003",
        description: "string",
    } }
  },
  {
    id: "126334-0017", collection: "Datejust", reference: "126334", slug: "datejust", strapType: "Oyster bracelet", name: "Datejust 41",
    title: "Datejust 41 Oyster, 41 mm, Oystersteel and white gold", sourceUrl: "/watches/datejust/126334-0017",
    price: 11650, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "Make a date of a day", description: "The Oyster Perpetual Datejust 41 in Oystersteel and white gold with a bright black dial and an Oyster bracelet." },
      bezel: { image: { mobile: "", desktop: "" }, title: "Fluted bezel", highlights: [{ title: "A Rolex signature", description: "The fluted bezel is a distinctive Rolex design signature." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Bright black Dial", highlights: [{ title: "Chromalight display", description: "Highly legible display with long-lasting blue luminescence." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "White Rolesor", highlights: [{ title: "A meeting of two metals", description: "White Rolesor combines Oystersteel and white gold." }] }
    },
    case: { model: "Oyster, 41 mm, Oystersteel and white gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "41 mm", material: "White Rolesor - combination of Oystersteel and white gold", bezel: "Fluted", windingCrown: "Screw-down, Twinlock double waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 100 metres / 330 feet" },
    movement: { type: "Perpetual, mechanical, self-winding", calibre: "3235, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterclasp with Easylink 5 mm comfort extension link" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126613LN-0002", collection: "Submariner", reference: "126613LN", slug: "submariner", strapType: "Oyster bracelet", name: "Submariner Date",
    title: "Submariner Date Oyster, 41 mm, Oystersteel and yellow gold", sourceUrl: "/watches/submariner/126613ln-0002",
    price: 19450, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "Deep confidence", description: "The Oyster Perpetual Submariner Date with a black Cerachrom bezel insert and black dial with large luminescent hour markers." },
      bezel: { image: { mobile: "", desktop: "" }, title: "Unidirectional Rotatable Bezel", highlights: [{ title: "An underwater tool", description: "The 60-minute graduated bezel allows divers to monitor diving time and decompression stops." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Chromalight", description: "Large luminescent hour markers provide excellent legibility." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Yellow Rolesor - combination of Oystersteel and yellow gold", highlights: [{ title: "Materials", description: "Yellow Rolesor - combination of Oystersteel and yellow gold." }] }
    },
    case: { model: "Oyster, 41 mm, Oystersteel and yellow gold", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "41 mm", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", bezel: "Unidirectional rotatable 60-minute graduated, scratch-resistant Cerachrom insert in black ceramic, numerals and graduations coated in platinum", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 300 metres / 1,000 feet" },
    movement: { type: "Perpetual, mechanical, self-winding", calibre: "3235, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Yellow Rolesor - combination of Oystersteel and yellow gold", clasp: "Folding Oysterlock safety clasp with Rolex Glidelock extension system" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  },
  {
    id: "126610LN-0001", collection: "Submariner", reference: "126610LN", slug: "submariner", strapType: "Oyster bracelet", name: "Submariner Date",
    title: "Submariner Date Oyster, 41 mm, Oystersteel", sourceUrl: "/watches/submariner/126610ln-0001",
    price: 11350, priceNew: 219, currency: "MYR", images: { main: "", nightMode: "" },
dial: {
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
    contentPage: {
      features: { image: { mobile: "", desktop: "" }, title: "Deep confidence", description: "The Oyster Perpetual Submariner Date with a black Cerachrom bezel insert and black dial with large luminescent hour markers." },
      bezel: { image: { mobile: "", desktop: "" }, title: "Unidirectional Rotatable Bezel", highlights: [{ title: "An underwater tool", description: "The 60-minute graduated bezel allows divers to monitor diving time and decompression stops." }] },
      dial: { image: { mobile: "", desktop: "" }, title: "Black Dial", highlights: [{ title: "Chromalight", description: "Large luminescent hour markers provide excellent legibility." }] },
      rolesor: { image: { mobile: "", desktop: "" }, title: "Oystersteel", highlights: [{ title: "Materials", description: "Oystersteel." }] }
    },
    case: { model: "Oyster, 41 mm, Oystersteel", architecture: "Monobloc middle case, screw-down case back and winding crown", diameter: "41 mm", material: "Oystersteel", bezel: "Unidirectional rotatable 60-minute graduated, scratch-resistant Cerachrom insert in black ceramic, numerals and graduations coated in platinum", windingCrown: "Screw-down, Triplock triple waterproofness system", crystal: "Scratch-resistant sapphire, Cyclops lens over the date", waterResistance: "Waterproof to 300 metres / 1,000 feet" },
    movement: { type: "Perpetual, mechanical, self-winding", calibre: "3235, Manufacture Rolex", precision: "-2/+2 sec/day, after casing", functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting", oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers", winding: "Bidirectional self-winding via Perpetual rotor", powerReserve: "Approximately 70 hours" },
    bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterlock safety clasp with Rolex Glidelock extension system" },
    certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)", documents: { userGuide: "", brochure: {
        link: "",
        image: "",
        description: "string",
    } }
  }
];

export default rolexWatches;

