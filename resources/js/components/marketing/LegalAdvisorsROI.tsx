"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight, Calculator } from "lucide-react";

type Props = {
  icon: React.ReactNode;
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

export type LegalAdvisorsROIProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsROI = (props: LegalAdvisorsROIProps) => {
  const { icon, heading, description, primaryButton, secondaryButton, image } = {
    ...LegalAdvisorsROIDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-roi" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-lg bg-[#3C6098]/10 md:mb-6">
              {icon}
            </div>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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

export const LegalAdvisorsROIDefaults: Props = {
  icon: <Calculator className="h-10 w-10 text-[#3C6098]" />,
  heading: "Multiply Your Practice Efficiency with Naybrlee",
  description: "Unlock the potential of your legal practice with our ROI Calculator. Input your client data to see how Naybrlee can save you time and increase your revenue.",
  primaryButton: {
    title: "Calculate",
    url: "/roi-calculator",
  },
  secondaryButton: {
    title: "Get Started",
    url: "/demo",
  },
  image: {
    src: "/images/legal-advisors/rob_thomas23_Interactive_ROI_calculator_hologram_showing_asce_b838d12b-4742-41cf-b8f8-c944f213e223_3.png",
    alt: "ROI calculator visualization",
  },
};