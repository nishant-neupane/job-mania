"use client";

import Image from "next/image";
import "./Logo.css";

const logos = [
  { name: "Vodafone", src: "/logos/vodafone.png" },
  { name: "Intel", src: "/logos/intel.png" },
  { name: "Tesla", src: "/logos/tesla.png" },
  { name: "AMD", src: "/logos/AMD.png" },
  { name: "Talkkit", src: "/logos/talkkit.png" },
  { name: "Vodafone", src: "/logos/vodafone.png" },
  { name: "Intel", src: "/logos/intel.png" },
  { name: "Tesla", src: "/logos/tesla.png" },
  { name: "AMD", src: "/logos/AMD.png" },
  { name: "Talkkit", src: "/logos/talkkit.png" },
];

const Logo = () => (
  <div className="container py-8 bg-white">
    <p className="font-epilogue font-[400] text-lg leading-[160%] text-[#202430] pb-4">
      Companies we helped grow
    </p>
    <div className="overflow-hidden">
      <div className="flex animate-marquee space-x-40 min-w-fit">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:cursor-pointer"
            style={{ width: 120, height: 120 }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Logo;
