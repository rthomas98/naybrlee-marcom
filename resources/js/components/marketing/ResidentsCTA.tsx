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
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type ResidentsCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsCTA = (props: ResidentsCTAProps) => {
  const { heading, description, primaryButton, secondaryButton, backgroundImage } = {
    ...ResidentsCTADefaults,
    ...props,
  };

  return (
    <section id="residents-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto relative rounded-lg overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-4xl font-bold text-white font-['Poppins'] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-white font-['Poppins'] md:text-lg">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link
              href={primaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#E48B59] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#E48B59]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              {primaryButton.title}
            </Link>
            <Link
              href={secondaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              {secondaryButton.title}
            </Link>
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
      </div>
    </section>
  );
};

export const ResidentsCTADefaults: Props = {
  heading: "Ready to Transform Your Community Experience?",
  description: "Join thousands of residents who have already discovered the convenience of modern community living with Naybrlee.",
  primaryButton: {
    title: "Get Started Now",
    url: "/demo",
  },
  secondaryButton: {
    title: "Talk to Your HOA",
    url: "/contact",
  },
  backgroundImage: {
    src: "/images/residents/Vibrant_community_gathering_in_shared_outdoor_sp_bfcc8833-8f8e-468c-a68e-84c19cd43872_3.png",
    alt: "Happy community residents",
  },
};