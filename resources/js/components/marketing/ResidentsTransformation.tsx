"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Transformation = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  transformations: Transformation[];
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

export type ResidentsTransformationProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsTransformation = (props: ResidentsTransformationProps) => {
  const { tagline, heading, description, transformations, primaryButton, secondaryButton, backgroundImage } = {
    ...ResidentsTransformationDefaults,
    ...props,
  };

  return (
    <section id="residents-transformation" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white font-['Poppins'] md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-5 text-4xl font-bold text-white font-['Poppins'] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-white font-['Poppins'] md:mb-8 md:text-lg">
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
          <div className="mx-[7.5%] md:mt-[25rem]">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              {transformations.map((transformation, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md leading-[1.4] font-bold text-white font-['Poppins'] md:mb-4 md:text-xl">
                    {transformation.title}
                  </h6>
                  <p className="text-white font-['Poppins']">
                    {transformation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage.src}
          className="absolute inset-0 size-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112358]/90 to-[#3C6098]/80" />
      </div>
    </section>
  );
};

export const ResidentsTransformationDefaults: Props = {
  tagline: "Transform",
  heading: "Your Community Experience: Before and After",
  description: "Experience the shift from chaos to convenience. Discover how Naybrlee simplifies your community interactions.",
  transformations: [
    {
      title: "Paying Dues",
      description: "Transitioning from writing checks to making quick, one-tap payments in just seconds.",
    },
    {
      title: "Maintenance Requests",
      description: "Instantly track your requests, eliminating the long wait for responses that can take days.",
    },
    {
      title: "Community Updates",
      description: "From missing notices to instant notifications about everything happening in your community.",
    },
    {
      title: "Document Access",
      description: "No more searching through files - instant access to all your HOA documents in one place.",
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Get Started",
    url: "/demo",
  },
  backgroundImage: {
    src: "/images/residents/Split-screen_visualization_showing_chaotic_paper_e96541d2-8771-4052-9361-34e73d155a88_0.png",
    alt: "Community transformation background",
  },
};