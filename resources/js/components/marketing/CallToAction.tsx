"use client";

import React from "react";
import { Link } from '@inertiajs/react';

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
};

export type CallToActionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CallToAction = (props: CallToActionProps) => {
  const { heading, description, primaryButton, secondaryButton } = {
    ...CallToActionDefaults,
    ...props,
  };

  return (
    <section id="call-to-action" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-[#FBF5F0]">
      <div className="container mx-auto">
        <div className="w-full max-w-xl">
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link
              href={primaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#E48B59] px-8 py-3 font-['Poppins'] font-medium text-white hover:bg-[#d87a48] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E48B59]"
            >
              {primaryButton.title}
            </Link>
            <Link
              href={secondaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-8 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
            >
              {secondaryButton.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CallToActionDefaults: Props = {
  heading: "Be Part of the HOA Revolution",
  description: "Join our exclusive pilot program and help shape the future of community management. Limited spots available for forward-thinking communities.",
  primaryButton: {
    title: "Join Pilot Program",
    url: "/demo",
  },
  secondaryButton: {
    title: "Join Waiting List",
    url: "/contact",
  },
};