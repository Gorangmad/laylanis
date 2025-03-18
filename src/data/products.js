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
          name: "PICANHA ARGENTINIEN",
          description:
            "Premium cut from Argentina, perfect for grilling. Known for its rich flavor and tenderness.",
          price: 39.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "BBQ"],
        },
        {
          id: 2,
          name: "GAUCHO-SPIEßE",
          description: "Traditional South American beef skewers.",
          price: 32.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "BBQ"],
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
          name: "TOMAHAWKSTEAK DRY AGED IRLAND",
          description: "Impressive dry-aged tomahawk steak from Ireland.",
          price: 89.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
        },
        {
          id: 2,
          name: "FLANKSTEAK IRLAND",
          description: "Premium Irish flank steak, perfect for grilling.",
          price: 34.95,
          image: "/images/products/product1.png",
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
          name: "CHATEAU-STÜCK URUGUAY",
          description: "Premium cut from Uruguay, known for its tenderness.",
          price: 49.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
        },
        {
          id: 2,
          name: "FLANKSTEAK URUGUAY",
          description: "Premium Uruguayan flank steak.",
          price: 37.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "BBQ"],
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
          name: "BRISKET RINDERBRUST",
          description: "Perfect for slow smoking and BBQ, with rich marbling.",
          price: 32.95,
          image: "/images/products/product1.png",
          perfectFor: ["BBQ", "SMOKING"],
        },
        {
          id: 2,
          name: "FLANK-STEAK USA",
          description: "Classic American flank steak, perfect for marinating.",
          price: 29.95,
          image: "/images/products/product1.png",
          perfectFor: ["GRILLING", "MARINATING"],
        },
        {
          id: 3,
          name: "BBQ BEEF RIBS",
          description: "Perfectly marinated beef ribs for BBQ.",
          price: 39.95,
          image: "/images/products/product1.png",
          perfectFor: ["BBQ", "GRILLING"],
        },
      ],
    },
  },
  cuts: {
    hueftsteak: [
      {
        id: 1,
        name: "PREMIUM HÜFTSTEAK",
        description:
          "Premium cut from the hip, perfect for grilling. 250g portion.",
        price: 27.95,
        image: "/images/products/product1.png",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 2,
        name: "FAMILY HÜFTSTEAK",
        description:
          "Larger 400g portion, ideal for sharing or larger appetites.",
        price: 42.95,
        image: "/images/products/product1.png",
        perfectFor: ["BBQ", "FAMILY MEALS"],
      },
    ],
    ribeye: [
      {
        id: 1,
        name: "CLASSIC RIB-EYE",
        description: "300g of perfectly marbled ribeye steak.",
        price: 34.95,
        image: "/images/products/product1.png",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 2,
        name: "PREMIUM AGED RIB-EYE",
        description: "28-day aged ribeye steak, 300g of intense flavor.",
        price: 39.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
    ],
    rinderfilet: [
      {
        id: 1,
        name: "CLASSIC RINDERFILET",
        description:
          "200g of our most tender cut, perfect for special occasions.",
        price: 44.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
      {
        id: 2,
        name: "PREMIUM RINDERFILET",
        description: "Center-cut 250g filet, the crown jewel of tender beef.",
        price: 54.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
    ],
    roastbeef: [
      {
        id: 1,
        name: "TRADITIONAL ROASTBEEF",
        description: "1kg joint perfect for Sunday roast.",
        price: 32.95,
        image: "/images/products/product1.png",
        perfectFor: ["ROASTING", "FAMILY MEALS"],
      },
      {
        id: 2,
        name: "PREMIUM AGED ROASTBEEF",
        description: "28-day aged 1.2kg joint for superior flavor.",
        price: 39.95,
        image: "/images/products/product1.png",
        perfectFor: ["ROASTING", "SPECIAL OCCASIONS"],
      },
    ],
    rumpsteak: [
      {
        id: 1,
        name: "CLASSIC RUMPSTEAK",
        description: "250g cut with perfect fat marbling.",
        price: 29.95,
        image: "/images/products/product1.png",
        perfectFor: ["BBQ", "GRILLING"],
      },
      {
        id: 2,
        name: "PREMIUM RUMPSTEAK",
        description: "300g center-cut portion with extra marbling.",
        price: 34.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
    ],
    tbone: [
      {
        id: 1,
        name: "CLASSIC T-BONE",
        description:
          "500g of the perfect combination - tenderloin and strip steak.",
        price: 39.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
      {
        id: 2,
        name: "PREMIUM T-BONE",
        description: "700g cut for serious steak lovers.",
        price: 49.95,
        image: "/images/products/product1.png",
        perfectFor: ["GRILLING", "SPECIAL OCCASIONS"],
      },
    ],
  },
};
