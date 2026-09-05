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
 };

 contentPage: {
  features: {
   image: {
    mobile: string;
    desktop: string;
   };
   title: string;
   description: string;
  };
  bezel: {
   image: {
    mobile: string;
    desktop: string;
   };
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
   };
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
   };
   title: string;
   highlights: {
    title: string;
    description: string;
   }[];
  }[];
 };

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
  };
 };
}
export const rolexWatches: RolexWatch[] = [
 {
  id: "126711CHNR-0002",
  collection: "GMT-Master II",
  reference: "126711CHNR",
  slug: "gmt-master-ii",
  strapType: "Oyster bracelet",
  name: "GMT-Master II",
  title: "Oyster, 40 mm, Oystersteel and Everose gold",
  sourceUrl: "/watches/gmt-master-ii/126711chnr-0002",
  price: 20050,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126711chnr-0002",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
    },
    title: "In connection with the world",
    description: "The Oyster Perpetual GMT-Master II in Oystersteel and Everose gold with a black dial and an Oyster bracelet.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126711chnr-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126711chnr-0002",
    },
    title: "24-Hour Rotatable Bezel",
    highlights: [
     {
      title: "Innovative high-technology",
      description:
       "This model features a black dial and a two-colour Cerachrom bezel insert in brown and black ceramic. In addition to conventional hour, minute and seconds hands, the GMT-Master II features an arrow-tipped hand, which circles the dial once every 24 hours, as well as a bidirectional rotatable 24-hour graduated bezel.",
     },
     {
      title: "",
      description:
       "The distinctively coloured 24-hour hand displays the “home” reference time in a first time zone which can be read on the graduations on the bezel. The traveller’s local time is easily set by “jumping” from hour to hour, thanks to an ingenious mechanism operated via the winding crown: the hour hand can be adjusted forwards or backwards independently of the minute and seconds hands. This allows travellers to adapt to their new time zone without affecting the precision of their timekeeping.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126711chnr-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126711chnr-0002",
    },
    title: "Black Dial",
    highlights: [
     {
      title: "High legibility in all circumstances",
      description:
       "Like all Rolex Professional watches, the GMT-Master II offers exceptional legibility in all circumstances, and especially in the dark, thanks to its Chromalight display",
     },
     {
      title: "",
      description:
       "The broad hands and hour markers in simple shapes – triangles, circles, rectangles – are filled with a luminescent material emitting a long-lasting glow.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "Everose Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description:
        "The Oyster bracelet is a perfect alchemy of form and function, aesthetics and technology, designed to be both robust and comfortable. It is equipped with an Oysterlock folding clasp, which prevents accidental opening and the Easylink comfort extension link, also exclusive to Rolex.",
      },
      {
       title: "",
       description:
        "This ingenious system allows the wearer to increase the bracelet length by approximately 5 mm, providing additional comfort in any circumstance.",
      },
     ],
    },
   ],
  },
  case: {
   model: "GMT-Master II Oyster, 40 mm, Oystersteel and Everose gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "Everose Rolesor - combination of Oystersteel and Everose gold",
   bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour brown and black Cerachrom insert in ceramic, moulded numerals and graduations",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding, GMT function",
   calibre: "3285, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: {
   type: "Oyster, three-piece solid links",
   material: "Everose Rolesor - combination of Oystersteel and Everose gold",
   clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126711chnr-0002",
    description: "string",
   },
  },
 },
 {
  id: "126713GRNR-0001",
  collection: "GMT-Master II",
  reference: "126713GRNR",
  slug: "gmt-master-ii",
  strapType: "Jubilee bracelet",
  name: "GMT-Master II",
  title: "Oyster, 40 mm, Oystersteel and yellow gold",
  sourceUrl: "/watches/gmt-master-ii/126713grnr-0001",
  price: 20450,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126713grnr-0001",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
    },
    title: "In connection with the world",
    description: "The Oyster Perpetual GMT-Master II in Oystersteel and yellow gold with a black dial and a Jubilee bracelet.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126713grnr-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126713grnr-0001",
    },
    title: "24-Hour Rotatable Bezel",
    highlights: [
     {
      title: "Innovative high-technology",
      description:
       "This model features a black dial and a two-colour Cerachrom bezel insert in grey and black ceramic. In addition to conventional hour, minute and seconds hands, the GMT-Master II features an arrow-tipped hand, which circles the dial once every 24 hours, as well as a bidirectional rotatable 24-hour graduated bezel.",
     },
     {
      title: "",
      description:
       "The distinctively coloured 24-hour hand displays the “home” reference time in a first time zone which can be read on the graduations on the bezel. The traveller’s local time is easily set by “jumping” from hour to hour, thanks to an ingenious mechanism operated via the winding crown: the hour hand can be adjusted forwards or backwards independently of the minute and seconds hands. This allows travellers to adapt to their new time zone without affecting the precision of their timekeeping.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126713grnr-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126713grnr-0001",
    },
    title: "Black Dial",
    highlights: [
     {
      title: "High legibility in all circumstances",
      description:
       "Like all Rolex Professional watches, the GMT-Master II offers exceptional legibility in all circumstances, and especially in the dark, thanks to its Chromalight display.",
     },
     {
      title: "",
      description:
       "The broad hands and hour markers in simple shapes – triangles, circles, rectangles – are filled with a luminescent material emitting a long-lasting glow.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "Yellow Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "The Jubilee bracelet",
     highlights: [
      {
       title: "Supple and comfortable",
       description:
        "This version of the GMT-Master II is fitted with a Jubilee bracelet. Supple and comfortable, the five-piece link Jubilee bracelet was specially created for the launch of the Oyster Perpetual Datejust model in 1945.",
      },
      {
       title: "",
       description:
        "The Jubilee bracelet on this model is equipped with a Rolex-designed, patented Oysterlock folding safety clasp, which prevents accidental opening. It also features the Easylink comfort extension link, developed by the brand, which allows the bracelet length to be increased by approximately 5 mm. A concealed attachment system ensures seamless visual continuity between the bracelet and case.",
      },
     ],
    },
   ],
  },
  case: {
   model: "GMT-Master II Oyster, 40 mm, Oystersteel and yellow gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour grey and black Cerachrom insert in ceramic, moulded numerals and graduations",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding, GMT function",
   calibre: "3285, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: {
   type: "Jubilee, five-piece links",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126713grnr-0001",
    image: "",
    description: "string",
   },
  },
 },
 {
  id: "126710BLNR-0002",
  collection: "GMT-Master II",
  reference: "126710BLNR",
  slug: "gmt-master-ii",
  strapType: "Jubilee bracelet",
  name: "GMT-Master II",
  title: "Oyster, 40 mm, Oystersteel",
  sourceUrl: "/watches/gmt-master-ii/126710blnr-0002",
  price: 12000,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126710blnr-0002",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii",
    },
    title: "In connection with the world",
    description: "The Oyster Perpetual GMT-Master II with a black and a jubilee bracelet.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126710blnr-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126710blnr-0002",
    },
    title: "24-Hour Rotatable Bezel",
    highlights: [{ title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a blue and black Cerachrom ceramic insert." }],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126710blnr-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_640/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126710blnr-0002",
    },
    title: "Black Dial",
    highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }],
   },
   rolesor: [{ image: { mobile: "", desktop: "" }, title: "Oystersteel", highlights: [{ title: "Materials", description: "Oystersteel." }] }],
  },
  case: {
   model: "GMT-Master II Oyster, 40 mm, Oystersteel",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "Oystersteel",
   bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour blue and black Cerachrom insert in ceramic, moulded numerals and graduations",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding, GMT function",
   calibre: "3285, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: { type: "Jubilee, five-piece links", material: "Oystersteel", clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126710blnr-0002",
    description: "string",
   },
  },
 },
 {
  id: "126729VTNR-0001",
  collection: "GMT-Master II",
  reference: "126729VTNR",
  slug: "gmt-master-ii",
  strapType: "Oyster bracelet",
  name: "GMT-Master II",
  title: "Oyster, 40 mm, white gold",
  sourceUrl: "/watches/gmt-master-ii/126729vtnr-0001",
  price: 54700,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126729vtnr-0001",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii-portrait",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-gmt-master-ii-portrait",
    },
    title: "In connection with the world",
    description: "The Oyster Perpetual GMT-Master II with a green ceramic and a oyster bracelet.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126729vtnr-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126729vtnr-0001",
    },
    title: "24-Hour Rotatable Bezel",
    highlights: [
     { title: "Innovative high-technology", description: "Bidirectional 24-hour graduated bezel with a green and black Cerachrom ceramic insert." },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126729vtnr-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126729vtnr-0001",
    },
    title: "Green ceramic Dial",
    highlights: [{ title: "Highly legible", description: "Chromalight display with long-lasting blue luminescence." }],
   },
   rolesor: [{ image: { mobile: "", desktop: "" }, title: "18 kt white gold", highlights: [{ title: "Materials", description: "18 kt white gold." }] }],
  },
  case: {
   model: "GMT-Master II Oyster, 40 mm, white gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "18 kt white gold",
   bezel: "Bidirectional rotatable 24-hour graduated bezel. Two-colour green and black Cerachrom insert in ceramic, moulded numerals and graduations",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding, GMT function",
   calibre: "3285, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour, minute and seconds hands. 24-hour display. Second time zone with independent rapid-setting of the hour hand. Instantaneous date. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: {
   type: "Oyster, three-piece solid links",
   material: "18 kt white gold",
   clasp: "Folding Oysterlock safety clasp with Easylink 5 mm comfort extension link",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126729vtnr-0001",
    description: "string",
   },
  },
 },
 {
  id: "126500LN-0001",
  collection: "Cosmograph Daytona",
  reference: "126500LN",
  slug: "cosmograph-daytona",
  strapType: "Oyster, three-piece solid links",
  name: "Cosmograph Daytona",
  title: "Cosmograph Daytona Oyster, 40 mm, Oystersteel",
  sourceUrl: "/watches/cosmograph-daytona/126500ln-0001",
  price: 16900,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126500ln-0001",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona-ceramic-bezel",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona-ceramic-bezel",
    },
    title: "The triumph of endurance",
    description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126500ln-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126500ln-0001",
    },
    title: "The tachymetric scale",
    highlights: [
     {
      title: "High-performance chronograph",
      description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126500ln-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126500ln-0001",
    },
    title: "White, black counter rings Dial",
    highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }],
   },
   rolesor: [{ image: { mobile: "", desktop: "" }, title: "Oystersteel", highlights: [{ title: "Materials", description: "Oystersteel." }] }],
  },
  case: {
   model: "Oyster, 40 mm, Oystersteel",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "Oystersteel",
   bezel: "Black Cerachrom bezel with tachymetric scale",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical chronograph, self-winding",
   calibre: "4131, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 72 hours",
  },
  bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterlock safety clasp" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126500ln-0001",
    description: "string",
   },
  },
 },
 {
  id: "126509-0003",
  collection: "Cosmograph Daytona",
  reference: "126509",
  slug: "cosmograph-daytona",
  strapType: "Oyster, three-piece solid links",
  name: "Cosmograph Daytona",
  title: "Cosmograph Daytona Oyster, 40 mm, 18 kt white gold",
  sourceUrl: "/watches/cosmograph-daytona/126509-0003",
  price: 59100,
  priceNew: 219,
  currency: "MYR",
  images: {
   main: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126509-0003",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona",
    },
    title: "The triumph of endurance",
    description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126509-0003",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126509-0003",
    },
    title: "The tachymetric scale",
    highlights: [
     {
      title: "High-performance chronograph",
      description: "The tachymetric scale allows average speed to be read over a given distance based on elapsed time.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126509-0003",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126509-0003",
    },
    title: "Steel and bright black Dial",
    highlights: [{ title: "Chronograph counters", description: "Highly legible dial designed for precise timing." }],
   },
   rolesor: [{ image: { mobile: "", desktop: "" }, title: "18 kt white gold", highlights: [{ title: "Materials", description: "18 kt white gold." }] }],
  },
  case: {
   model: "Oyster, 40 mm, 18 kt white gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "18 kt white gold",
   bezel: "18 kt white gold bezel with engraved tachymetric scale",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical chronograph, self-winding",
   calibre: "4131, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 72 hours",
  },
  bracelet: { type: "Oyster, three-piece solid links", material: "18 kt white gold", clasp: "Folding Oysterlock safety clasp" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126509-0003",
    description: "string",
   },
  },
 },
 {
  id: "126518LN-0012",
  collection: "Cosmograph Daytona",
  reference: "126518LN",
  slug: "cosmograph-daytona",
  strapType: "Oysterflex bracelet",
  name: "Cosmograph Daytona",
  title: "Cosmograph Daytona Oyster, 40 mm, 18 kt yellow gold",
  sourceUrl: "/watches/cosmograph-daytona/126518ln-0012",
  price: 42700,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126518ln-0012",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona-ceramic-bezel",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona-ceramic-bezel",
    },
    title: "The triumph of endurance",
    description: "The Oyster Perpetual Cosmograph Daytona combines a high-performance chronograph with Rolex craftsmanship.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126518ln-0012",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126518ln-0012",
    },
    title: "The tachymetric scale",
    highlights: [
     {
      title: "High-performance chronograph",
      description:
       "A key part of the model’s identity is the bezel moulded with a tachymetric scale for measuring average speeds of up to 400 miles or kilometres per hour. Blending high technology with sleek aesthetics, the black bezel is reminiscent of the 1965 model that was fitted with a black Plexiglas bezel insert.",
     },
     {
      title: "",
      description:
       "The monobloc Cerachrom bezel in high-tech ceramic offers a number of advantages: it is corrosion resistant, virtually scratchproof and the colour is unaffected by UV rays. This extremely durable bezel also offers an exceptionally legible tachymetric scale, thanks to the deposition of a thin layer of platinum in the numerals and graduations via a PVD (Physical Vapour Deposition) process. The monobloc Cerachrom bezel is made in a single piece and holds the crystal firmly in place on the middle case, ensuring waterproofness.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126518ln-0012",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126518ln-0012",
    },
    title: "Golden and bright black dial",
    highlights: [
     {
      title: "With chronograph counters",
      description:
       "This model features a golden and bright black dial with snailed counters, 18 ct gold applique hour markers and hands with a Chromalight display, a highly-legible luminescent material.",
     },

     {
      title: "",
      description: "The dial allows drivers to accurately map out their track times and tactics without fail.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "18 ct yellow gold",
     highlights: [
      {
       title: "Commitment to excellence",
       description:
        "By operating its own exclusive foundry, Rolex has the unrivalled ability to cast the highest quality 18 ct gold alloys. According to the proportion of silver, copper, platinum or palladium added, different types of 18 ct gold are obtained: yellow, pink or white.",
      },
      {
       title: "",
       description:
        "They are made with only the purest metals and meticulously inspected in an in-house laboratory with state-of-the-art equipment, before the gold is formed and shaped with the same painstaking attention to quality. Rolex's commitment to excellence begins at the source.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 40 mm, 18 kt yellow gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "18 kt yellow gold",
   bezel: "Black Cerachrom bezel with tachymetric scale",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical chronograph, self-winding",
   calibre: "4131, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 72 hours",
  },
  bracelet: { type: "Oysterflex bracelet", material: "Black elastomer blades over flexible metal blade", clasp: "Folding Oysterlock safety clasp" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126518ln-0012",
    description: "string",
   },
  },
 },
 {
  id: "126503-0002",
  collection: "Cosmograph Daytona",
  reference: "126503",
  slug: "cosmograph-daytona",
  strapType: "Oyster, three-piece solid links",
  name: "Cosmograph Daytona",
  title: "Cosmograph Daytona Oyster, 40 mm, Oystersteel and yellow gold",
  sourceUrl: "/watches/cosmograph-daytona/126503-0002",
  price: 23400,
  priceNew: 219,
  currency: "MYR",
  images: {
   main: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126503-0002",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-cosmograph-daytona",
    },
    title: "The triumph of endurance",
    description:
     "This Oyster Perpetual Cosmograph Daytona in Oystersteel and yellow gold, with a bright black and golden, diamond-set dial and an Oyster bracelet, features a yellow gold bezel with an engraved tachymetric scale.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126503-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126503-0002",
    },
    title: "Bright black and golden dial",
    highlights: [
     {
      title: "With chronograph counters",
      description:
       "This model features a bright black and golden, diamond-set dial with spray-coated counters, 18 ct gold applique hour markers and hands with a Chromalight display, a highly-legible luminescent material.",
     },
     {
      title: "High-performance chronograph",
      description: "The dial allows drivers to accurately map out their track times and tactics without fail.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126503-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126503-0002",
    },
    title: "The tachymetric scale",
    highlights: [
     {
      title: "High-performance chronograph",
      description:
       "With its tachymetric scale, its three counters and its pushers, the Cosmograph Daytona was designed to be the ultimate timing tool for endurance racing drivers. The bezel features a tachymetric scale to read average speed over a given distance based on elapsed time.",
     },
     {
      title: "",
      description:
       "This scale offers optimal legibility, making the Cosmograph Daytona the ideal instrument for measuring speeds up to 400 units per hour, expressed in kilometres or miles.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "Yellow Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description:
        "The design, development and production of Rolex bracelets and clasps, as well as the stringent tests they face, involve advanced high technology. And, as with all the components of the watch, aesthetic controls by the human eye guarantee impeccable beauty.",
      },
      {
       title: "",
       description:
        "The Oyster bracelet is a perfect alchemy of form and function. First introduced in the late 1930s, this particularly robust and comfortable metal bracelet with its broad, flat three-piece links remains the most universal bracelet in the Oyster collection.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 40 mm, Oystersteel and yellow gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "40 mm",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   bezel: "Yellow gold bezel with engraved tachymetric scale",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical chronograph, self-winding",
   calibre: "4131, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions:
    "Centre hour and minute hands, small seconds hand at 6 o'clock. Chronograph via centre seconds hand, 30-minute counter at 3 o'clock and 12-hour counter at 9 o'clock. Stop seconds for exact time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 72 hours",
  },
  bracelet: {
   type: "Oyster, three-piece solid links",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   clasp: "Folding Oysterlock safety clasp",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126503-0002",
    description: "string",
   },
  },
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
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust",
    },
    title: "Make a date of a day",
    description: "The Oyster Perpetual Datejust 41 in Oystersteel and white gold with a silver dial and an Oyster bracelet.",
   },
   bezel: {
    image: {
     mobile: "",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126334-0003",
    },
    title: "Fluted bezel",
    highlights: [
     {
      title: "A Rolex signature",
      description:
       "The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch.",
     },
     {
      title: "",
      description:
       "It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, in gold on this Datejust 41.",
     },
    ],
   },
   dial: {
    image: {
     mobile: "",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0003",
    },
    title: "Silver Dial",
    highlights: [
     {
      title: "A watchmaking technique",
      description:
       "The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial.",
     },
     {
      title: "",
      description:
       "Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist. Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.",
     },
    ],
   },
   rolesor: [
    {
     image: {
      mobile: "",
      desktop: "https://w.ladicdn.com/60a1f7e18b7784001369fedb/anim-bracelet-material-portrait-126710blnr-79200-0000-20250423065431-vdkje.avif",
     },
     title: "White Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
    {
     image: {
      mobile: "",
      desktop: "https://w.ladicdn.com/60a1f7e18b7784001369fedb/anim-bracelet-material-portrait-126710blnr-79200-0000-20250423065431-vdkje.avif",
     },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description: "The Oyster bracelet is a perfect alchemy of form and function, aesthetics and technology, designed to be both robust and comfortable.",
      },
      {
       title: "",
       description:
        "It is equipped with an Oysterclasp and the Easylink comfort extension link, also exclusive to Rolex. This ingenious system allows the wearer to increase the bracelet length by approximately 5 mm, providing additional comfort in any circumstance.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 41 mm, Oystersteel and white gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "41 mm",
   material: "White Rolesor - combination of Oystersteel and white gold",
   bezel: "Fluted",
   windingCrown: "Screw-down, Twinlock double waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding",
   calibre: "3235, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterclasp with Easylink 5 mm comfort extension link" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "/",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126334-0003",
    description: "string",
   },
  },
 },
 {
  id: "126334-0017",
  collection: "Datejust",
  reference: "126334",
  slug: "datejust",
  strapType: "Oyster bracelet",
  name: "Datejust 41",
  title: "Datejust 41 Oyster, 41 mm, Oystersteel and white gold",
  sourceUrl: "/watches/datejust/126334-0017",
  price: 11650,
  priceNew: 219,
  currency: "MYR",
  images: {
   main: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126334-0017",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_240/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust-portrait 240w",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-datejust",
    },
    title: "Make a date of a day",
    description: "The Oyster Perpetual Datejust 41 in Oystersteel and white gold with a bright black dial and an Oyster bracelet.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126334-0017",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126334-0017",
    },
    title: "Fluted bezel",
    highlights: [
     {
      title: "A Rolex signature",
      description:
       "The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch.",
     },
     {
      title: "",
      description:
       "It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, in gold on this Datejust 41.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
    },
    title: "Bright black Dial",
    highlights: [
     {
      title: "A watchmaking technique",
      description:
       "The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial.",
     },
     {
      title: "",
      description:
       "Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist. Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description: "The Oyster bracelet is a perfect alchemy of form and function, aesthetics and technology, designed to be both robust and comfortable.",
      },
      {
       title: "",
       description:
        "It is equipped with an Oysterclasp and the Easylink comfort extension link, also exclusive to Rolex. This ingenious system allows the wearer to increase the bracelet length by approximately 5 mm, providing additional comfort in any circumstance.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "White Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 41 mm, Oystersteel and white gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "41 mm",
   material: "White Rolesor - combination of Oystersteel and white gold",
   bezel: "Fluted",
   windingCrown: "Screw-down, Twinlock double waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 100 metres / 330 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding",
   calibre: "3235, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: { type: "Oyster, three-piece solid links", material: "Oystersteel", clasp: "Folding Oysterclasp with Easylink 5 mm comfort extension link" },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126334-0017",
    description: "string",
   },
  },
 },
 {
  id: "126613LN-0002",
  collection: "Submariner",
  reference: "126613LN",
  slug: "submariner",
  strapType: "Oyster bracelet",
  name: "Submariner Date",
  title: "Submariner Date Oyster, 41 mm, Oystersteel and yellow gold",
  sourceUrl: "/watches/submariner/126613ln-0002",
  price: 19450,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126613ln-0002",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-submariner",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-submariner",
    },
    title: "Deep confidence",
    description: "The Oyster Perpetual Submariner Date with a black Cerachrom bezel insert and black dial with large luminescent hour markers.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126613ln-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126613ln-0002",
    },
    title: "Unidirectional Rotatable Bezel",
    highlights: [
     { title: "An underwater tool", description: "The 60-minute graduated bezel allows divers to monitor diving time and decompression stops." },
     {
      title: "",
      description:
       "Manufactured by Rolex from a hard, corrosion-resistant ceramic, the Cerachrom bezel insert is virtually scratchproof. A luminescent capsule on the zero marker ensures legibility, no matter how dark the environment. The bezel’s knurled edge is carefully designed to offer excellent grip under water, even with gloves.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126613ln-0002",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126613ln-0002",
    },
    title: "Black Dial",
    highlights: [
     {
      title: "For legibility underwater",
      description:
       "The dial’s luminescent Chromalight display is an innovation that improved visibility in dark environments, an essential feature for divers.",
     },
     {
      title: "",
      description:
       "Hour markers in simple shapes – triangles, circles, rectangles – and broad hour and minute hands enable instant and reliable reading to prevent any risk of confusion underwater.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "Yellow Rolesor",
     highlights: [
      {
       title: "A meeting of two metals",
       description:
        "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties.",
      },
      {
       title: "",
       description:
        "A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster Perpetual collection.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description: "The Oyster bracelet is a perfect alchemy of form and function, aesthetics and technology, designed to be both robust and comfortable.",
      },
      {
       title: "",
       description:
        "It is equipped with an Oysterlock clasp, which prevents accidental opening, and an ingenious Glidelock, allowing fine adjustments of the bracelet without using any tools — and allowing it to be worn comfortably over a diving suit.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 41 mm, Oystersteel and yellow gold",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "41 mm",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   bezel: "Unidirectional rotatable 60-minute graduated, scratch-resistant Cerachrom insert in black ceramic, numerals and graduations coated in platinum",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 300 metres / 1,000 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding",
   calibre: "3235, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: {
   type: "Oyster, three-piece solid links",
   material: "Yellow Rolesor - combination of Oystersteel and yellow gold",
   clasp: "Folding Oysterlock safety clasp with Rolex Glidelock extension system",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126613ln-0002",
    description: "string",
   },
  },
 },
 {
  id: "126610LN-0001",
  collection: "Submariner",
  reference: "126610LN",
  slug: "submariner",
  strapType: "Oyster bracelet",
  name: "Submariner Date",
  title: "Submariner Date Oyster, 41 mm, Oystersteel",
  sourceUrl: "/watches/submariner/126610ln-0001",
  price: 11350,
  priceNew: 219,
  currency: "MYR",
  images: {
   main:
    "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126610ln-0001",
   nightMode: "",
  },
  dial: {
   image:
    "https://media.rolex.com/image/upload/q_auto/f_auto/$path_!a677b2c664f6:catalogue:2026:raw-dial-constant-size-with-shadow:m126334-0013!/t_v7-model-variation/c_limit,w_320/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126334-0017",
  },
  contentPage: {
   features: {
    image: {
     mobile: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-submariner",
     desktop: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/bg/model-intro/intro-background-submariner",
    },
    title: "Deep confidence",
    description: "The Oyster Perpetual Submariner Date with a black Cerachrom bezel insert and black dial with large luminescent hour markers.",
   },
   bezel: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126610ln-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/bezel-constant-size-with-shadow/m126610ln-0001",
    },
    title: "Unidirectional Rotatable Bezel",
    highlights: [
     { title: "An underwater tool", description: "The 60-minute graduated bezel allows divers to monitor diving time and decompression stops. " },
     {
      title: "",
      description:
       "Manufactured by Rolex from a hard, corrosion-resistant ceramic, the Cerachrom bezel insert is virtually scratchproof. A luminescent capsule on the zero marker ensures legibility, no matter how dark the environment. The bezel’s knurled edge is carefully designed to offer excellent grip under water, even with gloves.",
     },
    ],
   },
   dial: {
    image: {
     mobile:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126610ln-0001",
     desktop:
      "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/raw-dial-constant-size-with-shadow/m126610ln-0001",
    },
    title: "Black Dial",
    highlights: [
     {
      title: "For legibility underwater",
      description:
       "The dial’s luminescent Chromalight display is an innovation that improved visibility in dark environments, an essential feature for divers. ",
     },
     {
      title: "",
      description:
       "Hour markers in simple shapes – triangles, circles, rectangles – and broad hour and minute hands enable instant and reliable reading to prevent any risk of confusion underwater.",
     },
    ],
   },
   rolesor: [
    {
     image: { mobile: "", desktop: "" },
     title: "Oystersteel",
     highlights: [
      {
       title: "Highly resistant to corrosion",
       description:
        "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential.",
      },
      {
       title: "",
       description:
        "Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
      },
     ],
    },
    {
     image: { mobile: "", desktop: "" },
     title: "The Oyster bracelet",
     highlights: [
      {
       title: "Alchemy of form and function",
       description: "The Oyster bracelet is a perfect alchemy of form and function, aesthetics and technology, designed to be both robust and comfortable.",
      },
      {
       title: "",
       description:
        "It is equipped with an Oysterlock clasp, which prevents accidental opening, and an ingenious Glidelock, allowing fine adjustments of the bracelet without using any tools — and allowing it to be worn comfortably over a diving suit.",
      },
     ],
    },
   ],
  },
  case: {
   model: "Oyster, 41 mm, Oystersteel",
   architecture: "Monobloc middle case, screw-down case back and winding crown",
   diameter: "41 mm",
   material: "Oystersteel",
   bezel: "Unidirectional rotatable 60-minute graduated, scratch-resistant Cerachrom insert in black ceramic, numerals and graduations coated in platinum",
   windingCrown: "Screw-down, Triplock triple waterproofness system",
   crystal: "Scratch-resistant sapphire, Cyclops lens over the date",
   waterResistance: "Waterproof to 300 metres / 1,000 feet",
  },
  movement: {
   type: "Perpetual, mechanical, self-winding",
   calibre: "3235, Manufacture Rolex",
   precision: "-2/+2 sec/day, after casing",
   functions: "Centre hour, minute and seconds hands. Instantaneous date with rapid setting. Stop-seconds for precise time setting",
   oscillator: "Paramagnetic blue Parachrom hairspring. High-performance Paraflex shock absorbers",
   winding: "Bidirectional self-winding via Perpetual rotor",
   powerReserve: "Approximately 70 hours",
  },
  bracelet: {
   type: "Oyster, three-piece solid links",
   material: "Oystersteel",
   clasp: "Folding Oysterlock safety clasp with Rolex Glidelock extension system",
  },
  certification: "Superlative Chronometer (official chronometer certification + Rolex certification after casing)",
  documents: {
   userGuide: "",
   brochure: {
    link: "",
    image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/showcase/m126610ln-0001",
    description: "string",
   },
  },
 },
];

export default rolexWatches;
