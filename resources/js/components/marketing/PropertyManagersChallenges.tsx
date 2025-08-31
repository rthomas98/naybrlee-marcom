"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Challenge = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  challenges: Challenge[];
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

export type PropertyManagersChallengesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersChallenges = (props: PropertyManagersChallengesProps) => {
  const { tagline, heading, description, challenges, primaryButton, secondaryButton, image } = {
    ...PropertyManagersChallengesDefaults,
    ...props,
  };

  return (
    <section id="property-managers-challenges" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {challenges.map((challenge, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                    {challenge.title}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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

export const PropertyManagersChallengesDefaults: Props = {
  tagline: "Challenges",
  heading: "We Understand Your Property Management Struggles",
  description: "Property managers face unique challenges that can keep them awake at night. From managing multiple communities to meeting client demands, the pressure is real.",
  challenges: [
    {
      title: "Client Overload",
      description: "Juggling multiple HOA boards with different needs, personalities, and expectations while maintaining professional relationships.",
    },
    {
      title: "Time Constraints",
      description: "Endless meetings, reports, and administrative tasks that eat into your time for strategic planning and business growth.",
    },
  ],
  primaryButton: {
    title: "See Our Solution",
    url: "/features",
  },
  secondaryButton: {
    title: "Talk to Us",
    url: "/contact",
  },
  image: {
    src: "/images/property-managers/challenges/Overwhelmed_property_manager_surrounded_by_stack_f70bf610-81c5-4b44-b623-76fdda8f5f5f_0 (1).png",
    alt: "Property manager reviewing multiple documents",
  },
};