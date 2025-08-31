"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Comparison = {
  before: {
    title: string;
    description: string;
  };
  after: {
    title: string;
    description: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  comparison: Comparison;
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

export type FeaturesTransformationProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesTransformation = (props: FeaturesTransformationProps) => {
  const { tagline, heading, description, comparison, primaryButton, secondaryButton, image } = {
    ...FeaturesTransformationDefaults,
    ...props,
  };

  return (
    <section id="features-transformation" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image.src}
              className="w-full rounded-lg object-cover"
              alt={image.alt}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-red-700 md:mb-4 md:text-xl">
                  {comparison.before.title}
                </h6>
                <p className="text-gray-700 font-['Poppins']">
                  {comparison.before.description}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-green-700 md:mb-4 md:text-xl">
                  {comparison.after.title}
                </h6>
                <p className="text-gray-700 font-['Poppins']">
                  {comparison.after.description}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
        </div>
      </div>
    </section>
  );
};

export const FeaturesTransformationDefaults: Props = {
  tagline: "Transform Your Experience",
  heading: "Your Board Duties: Before and After Naybrlee",
  description: "Experience a dramatic shift in how you manage your HOA. Say goodbye to overwhelming tasks and hello to strategic leadership.",
  comparison: {
    before: {
      title: "Before Naybrlee",
      description: "20+ hours monthly scrambling to manage board responsibilities, paperwork, and compliance.",
    },
    after: {
      title: "After Naybrlee",
      description: "5 hours focused on strategic leadership and meaningful community engagement.",
    },
  },
  primaryButton: {
    title: "Learn More",
    url: "/features#details",
  },
  secondaryButton: {
    title: "See Live Demo",
    url: "/demo",
  },
  image: {
    src: "/images/features/Could_show_stressed_board_member_vs._relaxed_pro_201fa1ff-8916-4d9b-833f-be48fe4cdca6_1.png",
    alt: "Stressed board member transformed to relaxed professional with Naybrlee",
  },
};