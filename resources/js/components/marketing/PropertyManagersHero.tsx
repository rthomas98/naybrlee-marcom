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
  images: {
    main: {
      src: string;
      alt: string;
    };
    grid1: {
      src: string;
      alt: string;
    };
    grid2: {
      src: string;
      alt: string;
    };
  };
};

export type PropertyManagersHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersHero = (props: PropertyManagersHeroProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, images } = {
    ...PropertyManagersHeroDefaults,
    ...props,
  };

  return (
    <section id="property-managers-hero" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-12 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-18 md:text-5xl lg:mb-20 lg:text-6xl">
              {heading}
            </h2>
            <img
              src={images.main.src}
              className="aspect-square w-full rounded-lg object-cover"
              alt={images.main.alt}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-12 grid grid-cols-2 gap-6 sm:gap-8 md:mb-18 lg:mb-20">
              <img
                src={images.grid1.src}
                className="mt-[50%] w-full rounded-lg object-cover"
                alt={images.grid1.alt}
              />
              <img
                src={images.grid2.src}
                className="mt-[25%] w-full rounded-lg object-cover"
                alt={images.grid2.alt}
              />
            </div>
            <div className="mr-[10%] ml-[5%]">
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
                  className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                >
                  {secondaryButton.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersHeroDefaults: Props = {
  tagline: "Efficiency",
  heading: "Manage More Properties with Less Stress",
  description: "Scale your property management business with intelligent automation that delights clients and reduces overhead. Experience seamless operations that empower you to focus on growth.",
  primaryButton: {
    title: "Get Custom Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "Calculate Your ROI",
    url: "/roi-calculator",
  },
  images: {
    main: {
      src: "/images/property-managers/hero/Professional_property_manager_at_modern_desk_wit_5457b039-e0fd-49ac-a9e6-15c4c915f9eb_1.png",
      alt: "Property management dashboard",
    },
    grid1: {
      src: "/images/property-managers/hero/Happy_professional_property_manager_on_phone_cal_276d3a81-7aff-41a9-b8f4-22b734bf60fa_2.png",
      alt: "Happy property manager working efficiently",
    },
    grid2: {
      src: "/images/property-managers/hero/Modern_property_management_office_interior_with__d59b2e5f-9d12-4306-a3e9-4a5fac33b208_2.png",
      alt: "Modern property management office",
    },
  },
};