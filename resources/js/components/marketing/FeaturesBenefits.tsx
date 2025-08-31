"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  benefits: Benefit[];
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
};

export type FeaturesBenefitsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesBenefits = (props: FeaturesBenefitsProps) => {
  const { tagline, heading, description, benefits, primaryButton, secondaryButton } = {
    ...FeaturesBenefitsDefaults,
    ...props,
  };

  return (
    <section id="features-benefits" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-3xl">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex w-full flex-col">
              <div className="mb-6 md:mb-8">
                <img
                  src={benefit.image.src}
                  alt={benefit.image.alt}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
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
    </section>
  );
};

export const FeaturesBenefitsDefaults: Props = {
  tagline: "Benefits",
  heading: "Empower Your Board with Essential Tools",
  description: "Naybrlee provides board members with the tools they need to lead effectively and efficiently. Experience a significant reduction in administrative burdens while enhancing community engagement.",
  benefits: [
    {
      title: "Essential Features for Board Members",
      description: "Simplify and enhance your daily tasks by utilizing our cutting-edge solutions designed to help you manage your responsibilities more efficiently and effectively.",
      image: {
        src: "/images/features/benefits/Modern_HOA_board_meeting_room_with_digital_displ_fd307b12-253d-4be8-af85-cd8e28b1c1f0_2.png",
        alt: "Essential board management features",
      },
    },
    {
      title: "Simplified Compliance and Risk Management",
      description: "Keep yourself informed about regulations to stay compliant and steer clear of expensive fines that could impact your community.",
      image: {
        src: "/images/features/benefits/Split-screen_visualization_showing_compliance_ch_b89971ca-d086-4a07-9be7-de60157d2da5_0.png",
        alt: "Compliance and risk management tools",
      },
    },
    {
      title: "Improved Collaboration Tools",
      description: "Cultivate a vibrant, connected community by providing seamless updates that keep everyone informed and engaged.",
      image: {
        src: "/images/features/benefits/Digital_collaboration_concept_showing_connected__445b8fb6-e628-45a4-bb78-ab7001ac011a_1.png",
        alt: "Collaboration and communication tools",
      },
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features#details",
  },
  secondaryButton: {
    title: "Get Started",
    url: "/demo",
  },
};