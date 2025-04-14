"use client";

import React, { useState, useEffect } from "react";

const InfinitySlider = () => {
  const [logos, setLogos] = useState([
    {
      id: 1,
      name: "Star Ranch Angus",
      url: "/logos/partner-1.webp",
      color: "#f0f0f0",
    },
    {
      id: 2,
      name: "Creekstone Farms",
      url: "/logos/partner-2.jpg",
      color: "#e0e0e0",
    },
    {
      id: 3,
      name: "World Steak Challenge",
      url: "/logos/partner-3.jpg",
      color: "#d0d0d0",
    },
    {
      id: 4,
      name: "Australian 2GR",
      url: "/logos/partner-4.png",
      color: "#c0c0c0",
    },
    {
      id: 5,
      name: "Devesa",
      url: "/logos/partner-5.png",
      color: "#b0b0b0",
    },
    {
      id: 6,
      name: "Wagyu Japanese Beef",
      url: "/logos/partner-6.png",
      color: "#a0a0a0",
    },
    {
      id: 7,
      name: "Jacks Creek",
      url: "/logos/partner-7.png",
      color: "#909090",
    },
    {
      id: 8,
      name: "Frimsa S.A",
      url: "/logos/partner-8.png",
      color: "#808080",
    },
    {
      id: 9,
      name: "ArreBeef",
      url: "/logos/partner-9.png",
      color: "#808080",
    },
  ]);

  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setPosition((prevPosition) => prevPosition - 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [paused]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  // Duplicate the logos array to create the continuous effect
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden  bg-[#fff5ee] py-8 rounded-lg shadow-md">
      <h2 className="text-4xl md:text-5xl text-center font-bold mt-6  mb-12 uppercase tracking-wider text-[#F4C430]">
        Unsere Partner
      </h2>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-center transition-transform duration-300 ease-linear"
          style={{
            transform: `translateX(${position}px)`,
            width: `${logos.length * 3 * 150}px`, // Each logo takes 150px of width
          }}
        >
          {displayLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex flex-col items-center justify-center mx-4 w-64 h-36"
            >
              <div
                className="flex items-center justify-center w-52 h-32  "
                // style={{ backgroundColor: logo.color }}
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full p-2"
                />
              </div>
              {/* <span className="mt-2 text-sm text-gray-600">{logo.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinitySlider;
