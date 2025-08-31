"use client";

import { Link } from '@inertiajs/react';
import React from "react";

type Props = {
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
  image: {
    src: string;
    alt: string;
  };
};

export type PropertyManagersFinalCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersFinalCTA = (props: PropertyManagersFinalCTAProps) => {
  const { heading, description, primaryButton, secondaryButton, image } = {
    ...PropertyManagersFinalCTADefaults,
    ...props,
  };

  return (
    <section id="property-managers-final-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
              >
                {primaryButton.title}
              </Link>
              <Link
                href={secondaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
              >
                {secondaryButton.title}
              </Link>
            </div>
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

export const PropertyManagersFinalCTADefaults: Props = {
  heading: "Ready to Scale Your PM Business?",
  description: "Choose your path to growth with Naybrlee's tailored solutions and expert support. Join hundreds of property managers who have transformed their operations.",
  primaryButton: {
    title: "Schedule Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "Analyze Your ROI",
    url: "/roi-calculator",
  },
  image: {
    src: "/images/features/Aerial_view_of_modern_HOA_community_at_golden_ho_5211cc8a-da8b-42d3-8e39-16d910509a89_0.png",
    alt: "Successful property manager with growing portfolio",
  },
};