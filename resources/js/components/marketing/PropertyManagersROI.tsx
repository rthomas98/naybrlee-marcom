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

export type PropertyManagersROIProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersROI = (props: PropertyManagersROIProps) => {
  const { heading, description, primaryButton, secondaryButton, image } = {
    ...PropertyManagersROIDefaults,
    ...props,
  };

  return (
    <section id="property-managers-roi" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
          <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div>
                <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
                  {heading}
                </h2>
                <p className="text-gray-600 font-['Poppins'] md:text-lg">
                  {description}
                </p>
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
                  className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                >
                  {secondaryButton.title}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={image.src}
                className="w-full object-cover h-full"
                alt={image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersROIDefaults: Props = {
  heading: "See Your Profit Increase",
  description: "Discover how many hours you can save and profits you can gain with Naybrlee. Our ROI calculator shows the real impact on your bottom line.",
  primaryButton: {
    title: "Calculate ROI",
    url: "/roi-calculator",
  },
  secondaryButton: {
    title: "Learn More",
    url: "/features",
  },
  image: {
    src: "/images/property-managers/remaining/Professional_white-labeled_report_mockup_showing_f579af61-601a-483c-bf8d-6054aa9a9baa_2.png",
    alt: "ROI calculator showing profit increase",
  },
};