// export const countryData = {
//   argentina: {
//     id: "argentina",
//     name: "MEATS OF ARGENTINA",
//     flag: "/images/countries/argentina.jpg",
//     description:
//       "Argentina is renowned for its exceptional beef quality, particularly from the Pampas region. The cattle are primarily grass-fed, resulting in leaner, more flavorful meat with a distinct taste that's celebrated worldwide.",
//   },
//   ireland: {
//     id: "ireland",
//     name: "MEATS OF IRELAND",
//     flag: "/images/countries/ireland.png",
//     description:
//       "Irish beef is known for its sustainable, grass-fed practices. The emerald pastures and temperate climate create perfect conditions for raising cattle, resulting in tender, flavorful meat.",
//   },
//   uruguay: {
//     id: "uruguay",
//     name: "MEATS OF URUGUAY",
//     flag: "/images/countries/uruguay.jpg",
//     description:
//       "Uruguayan beef is celebrated for its natural, grass-fed qualities. The vast pastures and traditional farming methods produce beef that's both sustainable and exceptionally tasty.",
//   },
//   usa: {
//     id: "usa",
//     name: "MEATS OF USA",
//     flag: "/images/countries/usa.jpg",
//     description:
//       "American beef is known for its high-quality grain-finishing process, resulting in well-marbled, tender meat. Our selection comes from premium farms committed to quality and taste.",
//   },
//   germany: {
//     id: "germany",
//     name: "MEATS OF GERMANY",
//     flag: "/images/countries/germany.jpg",
//     description:
//       "German meat is known for its traditional cuts and high-quality standards. The country's strict regulations ensure premium quality meat with excellent taste and texture.",
//   },
//   newzealand: {
//     id: "newzealand",
//     name: "MEATS OF NEW ZEALAND",
//     flag: "/images/countries/newzealand.jpg",
//     description:
//       "New Zealand is famous for its grass-fed lamb and beef. The pristine environment and sustainable farming practices produce some of the world's finest quality meat.",
//   },
// };

export const allProducts = {
  countries: {
    argentina: {
      id: "argentina",
      name: "MEATS OF ARGENTINA",
      flag: "/images/countries/argentina.jpg",
      description:
        "Argentina is renowned for its exceptional beef quality, particularly from the Pampas region. The cattle are primarily grass-fed, resulting in leaner, more flavorful meat with a distinct taste that's celebrated worldwide.",
      products: [
        {
          id: 1,
          name: "HÜFTSTEAK ARGENTINIEN",
          description:
            "Lean and flavorful steak, ideal for grilling or pan-searing.",
          price: 29.95,
          image: "/images/products/countries/argentina/product-1.webp",
          perfectFor: ["GRILLING", "PAN-SEARING"],
        },
        {
          id: 2,
          name: "PICANHA ARGENTINIEN",
          description:
            "Premium cut from Argentina, perfect for grilling. Known for its rich flavor and tenderness.",
          price: 39.95,
          image: "/images/products/countries/argentina/product-2.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 3,
          name: "RIB-EYE STEAK ARGENTINIEN",
          description:
            "Juicy and marbled steak, delivering an intense beefy flavor.",
          price: 44.95,
          image: "/images/products/countries/argentina/product-3.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 4,
          name: "RUMPSTEAK ARGENTINIEN",
          description: "A versatile and tender steak with a bold taste.",
          price: 34.95,
          image: "/images/products/countries/argentina/product-4.webp",
          perfectFor: ["GRILLING", "PAN-SEARING"],
        },
        {
          id: 5,
          name: "FILET ARGENTINIEN",
          description:
            "Extremely tender and lean cut, perfect for an elegant meal.",
          price: 54.95,
          image: "/images/products/countries/argentina/product-5.webp",
          perfectFor: ["GRILLING", "PAN-SEARING"],
        },
        {
          id: 6,
          name: "FILETSTEAK ARGENTINIEN",
          description:
            "The finest cut of beef, known for its supreme tenderness and rich taste.",
          price: 59.95,
          image: "/images/products/countries/argentina/product-6.webp",
          perfectFor: ["GRILLING", "GOURMET-COOKING"],
        },
        {
          id: 7,
          name: "HÜFTE ARGENTINIEN",
          description: "A lean and robust cut, great for roasting or grilling.",
          price: 27.95,
          image: "/images/products/countries/argentina/product-7.webp",
          perfectFor: ["GRILLING", "ROASTING"],
        },
        {
          id: 8,
          name: "RIB-EYE ARGENTINIEN",
          description: "Highly marbled and flavorful, ideal for steak lovers.",
          price: 46.95,
          image: "/images/products/countries/argentina/product-8.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 9,
          name: "ROASTBEEF ARGENTINIEN",
          description: "Classic roast beef cut with a juicy and rich flavor.",
          price: 42.95,
          image: "/images/products/countries/argentina/product-9.webp",
          perfectFor: ["ROASTING", "GRILLING"],
        },
      ],
    },
    ireland: {
      id: "ireland",
      name: "MEATS OF IRELAND",
      flag: "/images/countries/ireland.png",
      description:
        "Irish beef is known for its sustainable, grass-fed practices. The emerald pastures and temperate climate create perfect conditions for raising cattle, resulting in tender, flavorful meat.",
      products: [
        {
          id: 1,
          name: "TOMAHAWK-STEAK DRY AGED IRLAND",
          description:
            "Impressive dry-aged tomahawk steak from Ireland, known for its intense flavor.",
          price: 89.95,
          image: "/images/products/countries/ireland/product-1.webp",
          perfectFor: ["GRILLING", "SPECIAL-OCCASIONS"],
        },
        {
          id: 2,
          name: "T-BONE-STEAK IRLAND",
          description:
            "Classic Irish T-bone steak, combining tenderloin and sirloin for a perfect balance.",
          price: 74.95,
          image: "/images/products/countries/ireland/product-2.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 3,
          name: "TOMAHAWK-STEAK IRLAND",
          description:
            "Thick and flavorful tomahawk steak from Ireland, ideal for grilling.",
          price: 84.95,
          image: "/images/products/countries/ireland/product-3.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 4,
          name: "FLANKSTEAK IRLAND",
          description:
            "Premium Irish flank steak, lean and full of flavor, perfect for grilling.",
          price: 34.95,
          image: "/images/products/countries/ireland/product-4.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
      ],
    },
    uruguay: {
      id: "uruguay",
      name: "MEATS OF URUGUAY",
      flag: "/images/countries/uruguay.jpg",
      description:
        "Uruguayan beef is celebrated for its natural, grass-fed qualities. The vast pastures and traditional farming methods produce beef that's both sustainable and exceptionally tasty.",
      products: [
        {
          id: 1,
          name: "ROASTBEEF-BRATEN URUGUAY",
          description:
            "Traditional Uruguayan roast beef, perfect for slow roasting.",
          price: 45.95,
          image: "/images/products/countries/uruguay/product-1.webp",
          perfectFor: ["ROASTING", "SLOW-COOKING"],
        },
        {
          id: 2,
          name: "ROASTBEEF URUGUAY",
          description:
            "Juicy and flavorful roast beef cut, ideal for grilling or roasting.",
          price: 42.95,
          image: "/images/products/countries/uruguay/product-2.webp",
          perfectFor: ["GRILLING", "ROASTING"],
        },
        {
          id: 3,
          name: "ROASTBEEF-STEAK URUGUAY",
          description: "Thick and succulent steak cut from premium roast beef.",
          price: 44.95,
          image: "/images/products/countries/uruguay/product-3.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 4,
          name: "FILET URUGUAY",
          description:
            "Extremely tender and lean filet cut, perfect for a gourmet experience.",
          price: 54.95,
          image: "/images/products/countries/uruguay/product-4.webp",
          perfectFor: ["GRILLING", "GOURMET-COOKING"],
        },
        {
          id: 5,
          name: "RIB-EYE URUGUAY",
          description:
            "Richly marbled rib-eye steak with an intense beefy flavor.",
          price: 46.95,
          image: "/images/products/countries/uruguay/product-5.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 6,
          name: "HÜFTFILET URUGUAY",
          description:
            "Lean and flavorful beef cut, ideal for grilling or roasting.",
          price: 39.95,
          image: "/images/products/countries/uruguay/product-6.webp",
          perfectFor: ["GRILLING", "ROASTING"],
        },
        {
          id: 7,
          name: "ANGUS HÜFTSTEAK URUGUAY",
          description:
            "Premium Angus beef cut, offering a balance of tenderness and flavor.",
          price: 41.95,
          image: "/images/products/countries/uruguay/product-7.webp",
          perfectFor: ["GRILLING", "STEAK-LOVERS"],
        },
        {
          id: 8,
          name: "ANGUS RUMPSTEAK URUGUAY",
          description:
            "Bold and juicy rump steak, a favorite among steak lovers.",
          price: 38.95,
          image: "/images/products/countries/uruguay/product-8.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 9,
          name: "FLANKSTEAK URUGUAY",
          description:
            "Lean and flavorful flank steak, ideal for grilling or marinating.",
          price: 37.95,
          image: "/images/products/countries/uruguay/product-9.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 10,
          name: "STEAKHÜFTE URUGUAY",
          description:
            "Tender and juicy steak cut from the sirloin, great for grilling.",
          price: 36.95,
          image: "/images/products/countries/uruguay/product-10.webp",
          perfectFor: ["GRILLING", "STEAK-LOVERS"],
        },
        {
          id: 11,
          name: "HÜFTSTEAK URUGUAY",
          description:
            "A lean and robust cut, excellent for grilling or pan-searing.",
          price: 34.95,
          image: "/images/products/countries/uruguay/product-11.webp",
          perfectFor: ["GRILLING", "PAN-SEARING"],
        },
        {
          id: 12,
          name: "ANGUS RIB-EYE-STEAK URUGUAY",
          description:
            "Premium Angus rib-eye steak, known for its rich marbling and bold flavor.",
          price: 48.95,
          image: "/images/products/countries/uruguay/product-12.webp",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 13,
          name: "CHATEAU-STÜCK URUGUAY",
          description: "Premium cut from Uruguay, known for its tenderness.",
          price: 49.95,
          image: "/images/products/countries/uruguay/product-13.webp",
          perfectFor: ["GRILLING", "SPECIAL-OCCASIONS"],
        },
        {
          id: 14,
          name: "ANGUS FILETSTEAK URUGUAY",
          description:
            "The finest Angus filet cut, delivering unparalleled tenderness.",
          price: 57.95,
          image: "/images/products/countries/uruguay/product-14.webp",
          perfectFor: ["GRILLING", "GOURMET-COOKING"],
        },
        {
          id: 15,
          name: "ANGUS ROASTBEEF URUGUAY",
          description:
            "Top-quality Angus roast beef, offering a rich and juicy taste.",
          price: 50.95,
          image: "/images/products/countries/uruguay/product-15.webp",
          perfectFor: ["ROASTING", "SPECIAL-MEALS"],
        },
      ],
    },
    usa: {
      id: "usa",
      name: "MEATS OF USA",
      flag: "/images/countries/usa.jpg",
      description:
        "American beef is known for its high-quality grain-finishing process, resulting in well-marbled, tender meat. Our selection comes from premium farms committed to quality and taste.",
      products: [
        {
          id: 1,
          name: "FLANK-STEAK USA",
          description: "Classic American flank steak, perfect for marinating.",
          price: 29.95,
          image: "/images/products/countries/usa/product-1.webp",
          perfectFor: ["GRILLING", "MARINATING"],
        },
        {
          id: 2,
          name: "ROAST-BEEF USA",
          description: "Perfect for slow smoking and BBQ, with rich marbling.",
          price: 32.95,
          image: "/images/products/countries/usa/product-2.webp",
          perfectFor: ["BBQ", "SMOKING"],
        },

        {
          id: 3,
          name: "RIB-EYE USA",
          description: "Perfectly marinated beef ribs for BBQ.",
          price: 39.95,
          image: "/images/products/countries/usa/product-3.webp",
          perfectFor: ["BBQ", "GRILLING"],
        },
      ],
    },
    australia: {
      id: "australia",
      name: "MEATS OF AUSTRALIA",
      flag: "/images/countries/australia.jpg",
      description:
        "Premium-Maisrindfleisch aus ausgewählten australischen Farmen",
      products: [
        {
          id: 1,
          name: "Roastbeef Australia",
          description:
            "Zartes australisches Roastbeef, perfekt für saftige Braten oder feine Steakscheiben.",
          price: "ab 11,49€ / 100g",
          image: "/images/products/countries/australia/product-1.webp",
          perfectFor: ["BBQ", "GRILLING"],
        },
        {
          id: 2,
          name: "Ribeye Australia",
          description:
            "Marmoriertes australisches Ribeye für ein intensives Geschmackserlebnis vom Grill oder aus der Pfanne.",
          price: "ab 13,49€ / 100g",
          image: "/images/products/countries/australia/product-2.webp",
          perfectFor: ["BBQ", "GRILLING"],
        },
        {
          id: 3,
          name: "Filet Australia",
          description:
            "Extrem zartes Filet aus australischem Rindfleisch – die edelste Wahl für besondere Anlässe.",
          price: "ab 15,99€ / 100g",
          image: "/images/products/countries/australia/product-3.webp",
          perfectFor: ["BBQ", "GRILLING"],
        },
      ],
    },
    japan: {
      id: "japan",
      name: "MEATS OF JAPAN",
      flag: "/images/countries/japan.jpg",
      description:
        "Premium-Maisrindfleisch aus ausgewählten australischen Farmen",
      products: [
        {
          id: 1,
          name: "Roastbeef Japan",
          description:
            "Zartes australisches Roastbeef, perfekt für saftige Braten oder feine Steakscheiben.",
          price: "ab 11,49€ / 100g",
          image: "/images/products/countries/japan/product-1.webp",
          perfectFor: ["BBQ", "GRILLING"],
        },
        {
          id: 2,
          name: "Ribeye Japan",
          description:
            "Marmoriertes australisches Ribeye für ein intensives Geschmackserlebnis vom Grill oder aus der Pfanne.",
          price: "ab 13,49€ / 100g",
          image: "/images/products/countries/japan/product-2.png",
          perfectFor: ["BBQ", "GRILLING"],
        },
        {
          id: 3,
          name: "Filet Japan",
          description:
            "Extrem zartes Filet aus australischem Rindfleisch – die edelste Wahl für besondere Anlässe.",
          price: "ab 15,99€ / 100g",
          image: "/images/products/countries/japan/product-3.png",
          perfectFor: ["BBQ", "GRILLING"],
        },
      ],
    },
  },
  cuts: {
    hueftsteak: [
      {
        id: 1,
        name: "UCKERMÄRKER HÜFTSTEAK",
        description:
          "High-quality Uckermärker Hüftsteak, known for its tenderness and rich flavor.",
        price: 29.95,
        image: "/images/products/cuts/huft-steak/product-1.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 2,
        name: "ANGUS HÜFTSTEAK URUGUAY",
        description:
          "Premium Angus beef Hüftsteak from Uruguay, perfect for grilling.",
        price: 32.95,
        image: "/images/products/cuts/huft-steak/product-2.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 3,
        name: "HÜFTFILET URUGUAY",
        description:
          "Tender and flavorful Hüftfilet from Uruguay, ideal for gourmet dishes.",
        price: 35.95,
        image: "/images/products/cuts/huft-steak/product-3.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 4,
        name: "HÜFTSTEAK URUGUAY",
        description:
          "Classic Uruguayan Hüftsteak, a favorite for grilling and roasting.",
        price: 30.95,
        image: "/images/products/cuts/huft-steak/product-4.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 5,
        name: "HÜFTSTEAK",
        description:
          "Versatile and flavorful Hüftsteak, suitable for various cooking styles.",
        price: 28.95,
        image: "/images/products/cuts/huft-steak/product-5.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 6,
        name: "HÜFTFILET BARREL CUT",
        description:
          "Special barrel-cut Hüftfilet, offering a rich texture and deep flavor.",
        price: 36.95,
        image: "/images/products/cuts/huft-steak/product-6.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 7,
        name: "HÜFTSTEAK ARGENTINIEN",
        description:
          "Premium Hüftsteak from Argentina, known for its world-class beef quality.",
        price: 33.95,
        image: "/images/products/cuts/huft-steak/product-7.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 8,
        name: "HÜFTE ARGENTINIEN",
        description:
          "Argentinian Hüfte cut, offering a perfect balance of texture and taste.",
        price: 31.95,
        image: "/images/products/cuts/huft-steak/product-8.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 9,
        name: "HÜFTSTEAK URUGUAY",
        description:
          "Argentinian Hüfte cut, offering a perfect balance of texture and taste.",
        price: 31.95,
        image: "/images/products/cuts/huft-steak/product-9.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
    ],
    ribeye: [
      {
        id: 1,
        name: "RIB-EYE USA",
        description:
          "Premium Rib-Eye steak from the USA, known for its marbling and flavor.",
        price: 42.95,
        image: "/images/products/cuts/rib-eye-steak/product-1.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 2,
        name: "TOMAHAWKSTEAK IRLAND",
        description:
          "Impressive Tomahawk steak from Ireland, perfect for special-occasions.",
        price: 89.95,
        image: "/images/products/cuts/rib-eye-steak/product-2.webp",
        perfectFor: ["BBQ", "SPECIAL-OCCASIONS"],
      },
      {
        id: 3,
        name: "RIB-EYE ARGENTINIEN",
        description:
          "Authentic Argentinian Rib-Eye steak, famous for its tenderness and rich taste.",
        price: 39.95,
        image: "/images/products/cuts/rib-eye-steak/product-3.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 4,
        name: "RIB-EYE-STEAK ARGENTINIEN",
        description:
          "Classic Rib-Eye steak from Argentina, well-marbled and juicy.",
        price: 41.95,
        image: "/images/products/cuts/rib-eye-steak/product-4.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 5,
        name: "ANGUS RIB-EYE-STEAK URUGUAY",
        description:
          "Angus Rib-Eye steak from Uruguay, offering premium taste and tenderness.",
        price: 45.95,
        image: "/images/products/cuts/rib-eye-steak/product-5.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 6,
        name: "PRIME RIB-EYE-STEAK",
        description:
          "Top-quality Prime Rib-Eye steak, aged for extra flavor and juiciness.",
        price: 49.95,
        image: "/images/products/cuts/rib-eye-steak/product-6.webp",
        perfectFor: ["BBQ", "STEAKHOUSE"],
      },
      {
        id: 7,
        name: "RIB-EYE URUGUAY",
        description: "Uruguayan Rib-Eye steak, known for its deep beefy taste.",
        price: 38.95,
        image: "/images/products/cuts/rib-eye-steak/product-7.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 8,
        name: "RIB-EYE-STEAK",
        description:
          "Classic Rib-Eye steak, ideal for steak lovers who enjoy rich flavors.",
        price: 37.95,
        image: "/images/products/cuts/rib-eye-steak/product-8.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
    ],
    rinderfilet: [
      {
        id: 1,
        name: "FILET URUGUAY",
        description:
          "Premium Uruguayan filet, known for its tenderness and exquisite taste.",
        price: 52.95,
        image: "/images/products/cuts/rinder-filet/product-1.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 2,
        name: "FILETSTEAK ARGENTINIEN",
        description:
          "Argentinian Filetsteak, a top-quality choice for fine dining.",
        price: 54.95,
        image: "/images/products/cuts/rinder-filet/product-2.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 3,
        name: "RINDER-FILESPIEßE",
        description:
          "Tender beef filet skewers, perfect for grilling or quick cooking.",
        price: 34.95,
        image: "/images/products/cuts/rinder-filet/product-3.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 4,
        name: "FILET ARGENTINIEN",
        description:
          "Argentinian filet, prized for its incredible texture and juicy bite.",
        price: 51.95,
        image: "/images/products/cuts/rinder-filet/product-4.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 5,
        name: "ANGUS FILETSTEAK ARGENTINIEN",
        description:
          "Premium Angus filetsteak from Argentina, delivering world-class quality.",
        price: 58.95,
        image: "/images/products/cuts/rinder-filet/product-5.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 6,
        name: "CHATEAU-STÜCK URUGUAY",
        description:
          "Exquisite Chateau-Stück from Uruguay, perfect for special-occasions.",
        price: 59.95,
        image: "/images/products/cuts/rinder-filet/product-6.webp",
        perfectFor: ["GOURMET-COOKING", "SPECIAL-OCCASIONS"],
      },
      {
        id: 7,
        name: "FILETSTEAK",
        description:
          "Classic filet steak, offering a melt-in-your-mouth experience.",
        price: 49.95,
        image: "/images/products/cuts/rinder-filet/product-7.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 8,
        name: "FILETSPITZEN",
        description:
          "Premium filet tips, great for sautéing or making filet dishes.",
        price: 44.95,
        image: "/images/products/cuts/rinder-filet/product-8.webp",
        perfectFor: ["GOURMET-COOKING", "STEAKHOUSE"],
      },
    ],
    roastbeef: [
      {
        id: 1,
        name: "ROASTBEEF USA",
        description:
          "High-quality Roastbeef from the USA, known for its rich marbling and deep flavor.",
        price: 47.95,
        image: "/images/products/cuts/roastbeef/product-1.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 2,
        name: "ROASTBEEF-STEAK URUGUAY",
        description:
          "Premium Uruguayan Roastbeef-Steak, ideal for grilling and pan-searing.",
        price: 45.95,
        image: "/images/products/cuts/roastbeef/product-2.webp",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 3,
        name: "ROASTBEEF-BRATEN URUGUAY",
        description:
          "Classic Uruguayan Roastbeef-Braten, perfect for roasting and slow-cooking.",
        price: 42.95,
        image: "/images/products/cuts/roastbeef/product-3.webp",
        perfectFor: ["SLOW-COOKING", "SPECIAL-OCCASIONS"],
      },
      {
        id: 4,
        name: "ROASTBEEF ARGENTINIEN",
        description:
          "Argentinian Roastbeef, well-marbled and highly regarded for its tenderness.",
        price: 49.95,
        image: "/images/products/cuts/roastbeef/product-4.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
      {
        id: 5,
        name: "ROASTBEEF URUGUAY",
        description:
          "Top-quality Uruguayan Roastbeef, ideal for steaks or roasts.",
        price: 46.95,
        image: "/images/products/cuts/roastbeef/product-5.webp",
        perfectFor: ["STEAKHOUSE", "GRILLING"],
      },
      {
        id: 6,
        name: "ANGUS ROASTBEEF URUGUAY",
        description:
          "Premium Angus Roastbeef from Uruguay, offering exceptional taste and texture.",
        price: 52.95,
        image: "/images/products/cuts/roastbeef/product-6.webp",
        perfectFor: ["STEAKHOUSE", "GOURMET-COOKING"],
      },
    ],
    rumpsteak: [
      {
        id: 1,
        name: "ROASTBEEF ARGENTINIEN",
        description:
          "Juicy and flavorful Argentinian Roastbeef, ideal for grilling or roasting.",
        price: 48.95,
        image: "/images/products/cuts/rumpsteak/product-1.webp",
        perfectFor: ["STEAKHOUSE", "SPECIAL-OCCASIONS"],
      },
      {
        id: 2,
        name: "ROASTBEEF URUGUAY",
        description:
          "Premium Uruguayan Roastbeef, known for its tenderness and deep flavor.",
        price: 46.95,
        image: "/images/products/cuts/rumpsteak/product-2.webp",
        perfectFor: ["BBQ", "GOURMET-COOKING"],
      },
      {
        id: 3,
        name: "ROASTBEEF USA",
        description:
          "High-quality Roastbeef from the USA, offering a bold, beefy taste.",
        price: 49.95,
        image: "/images/products/cuts/rumpsteak/product-3.webp",
        perfectFor: ["GRILLING", "STEAKHOUSE"],
      },
      {
        id: 4,
        name: "ROASTBEEF STEAK URUGUAY",
        description:
          "Tender and juicy Roastbeef-Steak from Uruguay, great for steak lovers.",
        price: 45.95,
        image: "/images/products/cuts/rumpsteak/product-4.webp",
        perfectFor: ["BBQ", "GOURMET-COOKING"],
      },
      {
        id: 5,
        name: "RUMPSTEAK",
        description:
          "Classic Rumpsteak with a rich beefy flavor, perfect for grilling or pan-searing.",
        price: 39.95,
        image: "/images/products/cuts/rumpsteak/product-5.webp",
        perfectFor: ["GRILLING", "STEAKHOUSE"],
      },
      {
        id: 6,
        name: "UCKERMÄRKER RUMPSTEAK",
        description:
          "High-quality Uckermärker Rumpsteak, known for its tenderness and fine marbling.",
        price: 41.95,
        image: "/images/products/cuts/rumpsteak/product-6.webp",
        perfectFor: ["GRILLING", "GOURMET-COOKING"],
      },
      {
        id: 7,
        name: "RUMPSTEAK ARGENTINIEN",
        description:
          "Premium Argentinian Rumpsteak, famous for its exceptional taste and texture.",
        price: 44.95,
        image: "/images/products/cuts/rumpsteak/product-7.webp",
        perfectFor: ["STEAKHOUSE", "BBQ"],
      },
      {
        id: 8,
        name: "ANGUS RUMPSTEAK URUGUAY",
        description:
          "Top-quality Angus Rumpsteak from Uruguay, well-marbled and full of flavor.",
        price: 47.95,
        image: "/images/products/cuts/rumpsteak/product-8.webp",
        perfectFor: ["GRILLING", "STEAKHOUSE"],
      },
    ],
    tbone: [
      {
        id: 1,
        name: "T-BONE-STEAK IRLAND",
        description:
          "Premium Irish T-Bone steak, offering the perfect combination of tenderloin and strip steak.",
        price: 54.95,
        image: "/images/products/cuts/tbone/product-1.webp",
        perfectFor: ["GRILLING", "STEAKHOUSE"],
      },
      {
        id: 2,
        name: "T-BONE-STEAK DRY AGED USA",
        description:
          "High-quality dry-aged T-Bone steak from the USA, known for its intense flavor and tenderness.",
        price: 69.95,
        image: "/images/products/cuts/tbone/product-2.webp",
        perfectFor: ["GOURMET-COOKING", "SPECIAL-OCCASIONS"],
      },
      {
        id: 3,
        name: "PORTERHOUSE STEAK DRY AGED USA",
        description:
          "A massive Porterhouse steak, dry-aged to perfection, delivering a rich and beefy taste.",
        price: 79.95,
        image: "/images/products/cuts/tbone/product-3.webp",
        perfectFor: ["STEAKHOUSE", "GRILLING"],
      },
    ],
  },
};
