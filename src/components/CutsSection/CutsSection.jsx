import React from "react";
import Image from "next/image";
import Link from "next/link";

const cuts = [
  {
    id: 1,
    name: "Premium Steaks",
    image: "/images/products/argentine-ribeye.jpg",
    description:
      "From tender filet mignon to rich ribeye and flavorful T-bone steaks.",
    items: ["Filet Mignon", "Ribeye", "T-Bone", "Sirloin", "New York Strip"],
  },
  {
    id: 2,
    name: "Roasts",
    image: "/images/products/irish-striploin.jpg",
    description:
      "Perfect for slow cooking, our roasts are ideal for family gatherings.",
    items: ["Prime Rib", "Chuck Roast", "Rump Roast", "Brisket", "Pot Roast"],
  },
  {
    id: 3,
    name: "Ground & Minced",
    image: "/images/products/product1.png",
    description:
      "Freshly ground meat perfect for burgers, meatballs, and more.",
    items: [
      "Ground Beef",
      "Minced Pork",
      "Ground Lamb",
      "Ground Turkey",
      "Steak Mince",
    ],
  },
  {
    id: 4,
    name: "Specialty Cuts",
    image: "/images/products/american-tomahawk.jpg",
    description: "Unique cuts for specific dishes and cooking methods.",
    items: [
      "Flank Steak",
      "Skirt Steak",
      "Hanger Steak",
      "Short Ribs",
      "Oxtail",
    ],
  },
  {
    id: 5,
    name: "Chops",
    image: "/images/products/product2.png",
    description: "Premium pork and lamb chops cut to perfection.",
    items: [
      "Pork Chops",
      "Lamb Chops",
      "Veal Chops",
      "Rib Chops",
      "Loin Chops",
    ],
  },
  {
    id: 6,
    name: "Poultry Cuts",
    image: "/images/products/product3.png",
    description: "Various cuts of chicken and turkey for every recipe.",
    items: ["Chicken Breast", "Thighs", "Wings", "Drumsticks", "Turkey Cuts"],
  },
];

const CutsSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 font-montserrat">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuts.map((cut) => (
            <div
              key={cut.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={cut.image}
                  alt={cut.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#F4C430] text-2xl font-bold mb-3">
                  {cut.name}
                </h3>
                <p className="text-gray-600 mb-4">{cut.description}</p>
                <div className="space-y-2">
                  {cut.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-[#F4C430] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block mt-6 px-6 py-3 bg-[#F4C430] hover:bg-[#DAA520] text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CutsSection;
