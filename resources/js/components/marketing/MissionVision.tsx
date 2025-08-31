"use client";

import React from "react";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type MissionVisionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const MissionVision = (props: MissionVisionProps) => {
  const { tagline, heading, description, image } = {
    ...MissionVisionDefaults,
    ...props,
  };

  return (
    <section id="mission-vision" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
              {description}
            </p>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full rounded-lg object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const MissionVisionDefaults: Props = {
  tagline: "Our Purpose",
  heading: "Empowering Communities Through Innovation",
  description: "We believe every community deserves access to professional-grade management tools. Our mission is to democratize HOA management by making sophisticated technology accessible, affordable, and intuitive. We envision a future where communities thrive through better communication, streamlined operations, and data-driven decision making.",
  image: {
    src: "/images/about/Network_connections_between_homes_showing_connec_a629826d-c6e8-4fa0-b524-800a3ac7e16a_2.png",
    alt: "Network connections between homes showing connected community",
  },
};