"use client";

import React from "react";
import { Link } from '@inertiajs/react';

type Props = {
  tagline?: string;
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

export type AboutCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const AboutCTA = (props: AboutCTAProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, image } = {
    ...AboutCTADefaults,
    ...props,
  };

  return (
    <section id="about-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            {tagline && (
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
                {tagline}
              </p>
            )}
            <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
              >
                {primaryButton.title}
              </Link>
              <Link 
                href={secondaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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

export const AboutCTADefaults: Props = {
  tagline: "Join Our Journey",
  heading: "Take the Next Step",
  description: "Be part of the revolution in HOA management. Join our pilot program and help shape the future of community living.",
  primaryButton: {
    title: "Join Pilot Program",
    url: "/demo",
  },
  secondaryButton: {
    title: "Learn More",
    url: "/features",
  },
  image: {
    src: "/images/about/Diverse_Happy_community_members_at_a_neighborhoo_9b7bfb75-c74b-492b-8c85-2d90399038ae_2 (1).png",
    alt: "Happy community members at a neighborhood gathering",
  },
};