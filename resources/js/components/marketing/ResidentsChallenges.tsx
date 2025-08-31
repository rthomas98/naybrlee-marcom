"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  tagline: string;
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
  leftImage: {
    src: string;
    alt: string;
  };
  rightImage: {
    src: string;
    alt: string;
  };
};

export type ResidentsChallengesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsChallenges = (props: ResidentsChallengesProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, leftImage, rightImage } = {
    ...ResidentsChallengesDefaults,
    ...props,
  };

  return (
    <section id="residents-challenges" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-8 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
              <h2 className="text-4xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </div>
            <img
              src={leftImage.src}
              className="mt-12 aspect-square w-full rounded-lg object-cover md:mt-18 lg:mt-20"
              alt={leftImage.alt}
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <img
              src={rightImage.src}
              className="mb-6 w-full rounded-lg object-cover md:mb-8"
              alt={rightImage.alt}
            />
            <div className="mr-[10%] ml-[5%]">
              <p className="text-gray-600 font-['Poppins'] md:text-lg">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export const ResidentsChallengesDefaults: Props = {
  tagline: "Frustrated?",
  heading: "Still Dealing with Paper Forms and Checks?",
  description: "Managing your Homeowners Association (HOA) shouldn't be a stressful experience. Wave goodbye to outdated payment methods and communication gaps that often leave you feeling uninformed and disconnected from your community. Embrace a smoother process today!",
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Join Us",
    url: "/demo",
  },
  leftImage: {
    src: "/images/residents/Overwhelmed_homeowner_at_cluttered_dining_table__8b4b1961-421b-4af0-96f0-24f5ad1e09f6_0.png",
    alt: "Frustrated resident with paperwork",
  },
  rightImage: {
    src: "/images/residents/Same_dining_table_now_clear_except_for_sleek_tab_e1699a7c-c995-48f7-9a32-a3a69cd9e70e_3.png",
    alt: "Digital solution on mobile device",
  },
};