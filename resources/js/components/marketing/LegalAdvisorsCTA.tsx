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
};

export type LegalAdvisorsCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsCTA = (props: LegalAdvisorsCTAProps) => {
  const { heading, description, primaryButton, secondaryButton } = {
    ...LegalAdvisorsCTADefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-3xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
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
    </section>
  );
};

export const LegalAdvisorsCTADefaults: Props = {
  heading: "Elevate Your HOA Management Today",
  description: "Streamline compliance and enhance your practice efficiency.",
  primaryButton: {
    title: "Private Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "Free Assessment",
    url: "/assessment",
  },
};