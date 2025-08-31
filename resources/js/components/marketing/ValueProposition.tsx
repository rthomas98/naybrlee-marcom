"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight, TrendingUp, Target } from "lucide-react";

type ValueItemProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  valueItems: ValueItemProps[];
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

export type ValuePropositionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ValueProposition = (props: ValuePropositionProps) => {
  const { tagline, heading, description, valueItems, primaryButton, secondaryButton, image } = {
    ...ValuePropositionDefaults,
    ...props,
  };

  return (
    <section id="value-proposition" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h3 className="text-4xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:text-6xl lg:text-7xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className="mb-6 text-lg text-gray-600 font-['Poppins'] md:mb-8 md:text-xl">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {valueItems.map((item, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098] text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
                    {item.heading}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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
        <img
          src={image.src}
          className="w-full rounded-lg object-cover"
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export const ValuePropositionDefaults: Props = {
  tagline: "Value",
  heading: "Transform Your Community Management Experience",
  description: "Discover how Naybrlee simplifies HOA management for everyone involved. Experience increased efficiency, enhanced communication, and greater satisfaction.",
  valueItems: [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      heading: "Real Savings",
      description: "Save time and money while improving community engagement and compliance.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      heading: "Measurable Impact",
      description: "Join communities that have seen significant improvements in efficiency and resident satisfaction.",
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
  image: {
    src: "/images/home/value-proposition/Modern_conference_room_with_screens_showing_metr_79140a83-fb74-4d1b-80fd-22b59bf50836_0.png",
    alt: "Modern conference room with screens showing metrics",
  },
};