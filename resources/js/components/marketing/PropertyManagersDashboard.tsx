"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
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

export type PropertyManagersDashboardProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersDashboard = (props: PropertyManagersDashboardProps) => {
  const { tagline, heading, description, features, primaryButton, secondaryButton, backgroundImage } = {
    ...PropertyManagersDashboardDefaults,
    ...props,
  };

  return (
    <section id="property-managers-dashboard" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white font-['Poppins'] md:mb-4">
              {tagline}
            </p>
            <h2 className="text-4xl font-bold text-white font-['Poppins'] md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-20 lg:mt-32">
            <p className="mb-6 text-white/90 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-lg font-bold text-white font-['Poppins'] md:mb-4 md:text-xl">
                    {feature.title}
                  </h6>
                  <p className="text-white/80 font-['Poppins']">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
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
          className="absolute inset-0 h-full w-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112358]/90 to-[#3C6098]/80" />
      </div>
    </section>
  );
};

export const PropertyManagersDashboardDefaults: Props = {
  tagline: "Overview",
  heading: "One Dashboard for Your Entire Portfolio",
  description: "Effortlessly manage all your properties from a single, user-friendly dashboard. Gain valuable insights and streamline your operations with ease and efficiency.",
  features: [
    {
      title: "Key Features",
      description: "Switch between properties instantly and manage tasks efficiently.",
    },
    {
      title: "Operational Efficiency",
      description: "Bulk operations across communities to save time and resources.",
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
    src: "/images/property-managers/dashboard/Clean_dashboard_interface_showing_portfolio_over_9348d108-b847-4793-8a08-6fc04f150ef5_1 (1).png",
    alt: "Property management dashboard interface",
  },
};