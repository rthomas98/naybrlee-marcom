"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type ResidentsConvenienceProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsConvenience = (props: ResidentsConvenienceProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, backgroundImage } = {
    ...ResidentsConvenienceDefaults,
    ...props,
  };

  return (
    <section id="residents-convenience" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div className="md:mt-48">
            <p className="mb-3 font-semibold text-white font-['Poppins'] md:mb-4">
              {tagline}
            </p>
            <h2 className="text-4xl font-bold text-white font-['Poppins'] md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>
          <div className="mx-[7.5%]">
            <p className="text-white font-['Poppins'] md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                {primaryButton.title}
              </Link>
              <Link
                href={secondaryButton.url}
                className="inline-flex items-center gap-1 text-white hover:text-gray-200 font-['Poppins'] font-medium transition-colors"
              >
                {secondaryButton.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage.src}
          className="size-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112358]/90 to-[#3C6098]/80" />
      </div>
    </section>
  );
};

export const ResidentsConvenienceDefaults: Props = {
  tagline: "Convenience",
  heading: "Everything You Need in One App",
  description: "Discover the ease of community living through our comprehensive app. With just a tap, manage everything from payments to maintenance requests, making your life more convenient than ever.",
  primaryButton: {
    title: "Download App",
    url: "/download",
  },
  secondaryButton: {
    title: "Learn More",
    url: "/features",
  },
  backgroundImage: {
    src: "/images/residents/Aerial_view_of_diverse_residential_community_wit_070c37b9-08c1-4f06-9be7-37101b907fc6_2.png",
    alt: "Aerial view of diverse residential community",
  },
};