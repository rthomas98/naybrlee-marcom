"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

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

export type FeaturesBottomCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesBottomCTA = (props: FeaturesBottomCTAProps) => {
  const { heading, description, primaryButton, secondaryButton, image } = {
    ...FeaturesBottomCTADefaults,
    ...props,
  };

  return (
    <section id="features-bottom-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 rounded-lg bg-[#FBF5F0] p-8 md:grid-cols-2 md:p-12 lg:gap-x-20 lg:p-16">
          <div>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
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
              alt={image.alt}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesBottomCTADefaults: Props = {
  heading: "See Naybrlee in Action",
  description: "Watch how Naybrlee transforms HOA management in just 15 minutes. Join our live demo to see the platform in action and get your questions answered by our team.",
  primaryButton: {
    title: "Schedule Live Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "Watch Demo Video",
    url: "/demo-video",
  },
  image: {
    src: "/images/features/demo/Clean_dashboard_screenshot_of_HOA_management_pla_6206ab63-864a-439b-81bf-3977e29cc56a_2 (1).png",
    alt: "Naybrlee platform demo screenshot",
  },
};