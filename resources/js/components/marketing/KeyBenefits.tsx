"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight, Sparkles, Rocket, Users } from "lucide-react";

type BenefitProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
  linkText: string;
  linkUrl: string;
};

type Props = {
  heading: string;
  benefits: BenefitProps[];
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type KeyBenefitsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const KeyBenefits = (props: KeyBenefitsProps) => {
  const { heading, benefits, backgroundImage } = {
    ...KeyBenefitsDefaults,
    ...props,
  };

  return (
    <section id="key-benefits" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto mb-12 max-w-xl text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl leading-[1.2] font-bold font-['Poppins'] text-white md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full text-center">
              <div className="mb-5 h-12 md:mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="text-[#E48B59]">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold font-['Poppins'] text-white md:mb-6 md:text-2xl md:leading-[1.4] lg:text-2xl">
                {benefit.heading}
              </h3>
              <p className="text-white/90 font-['Poppins']">
                {benefit.description}
              </p>
              <div className="mt-6 md:mt-8">
                <Link
                  href={benefit.linkUrl}
                  className="inline-flex items-center gap-1 text-[#E48B59] hover:text-[#d87a48] transition-colors font-['Poppins'] font-medium"
                >
                  {benefit.linkText}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage.src}
          className="absolute inset-0 size-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112358]/90 via-[#3C6098]/80 to-[#112358]/90" />
      </div>
    </section>
  );
};

export const KeyBenefitsDefaults: Props = {
  heading: "Everything You Need to Run a Modern Community Effectively",
  benefits: [
    {
      icon: <Sparkles className="h-6 w-6" />,
      heading: "AI-Powered Intelligence",
      description: "Leverage artificial intelligence to automate document analysis, compliance tracking, and generate insights that help you make better decisions faster.",
      linkText: "Learn More",
      linkUrl: "/features",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      heading: "Streamlined Operations",
      description: "Transform complex HOA processes into simple workflows. From violation management to financial reporting, everything runs smoothly and efficiently.",
      linkText: "Discover",
      linkUrl: "/features",
    },
    {
      icon: <Users className="h-6 w-6" />,
      heading: "Community Engagement",
      description: "Build stronger neighborhoods with tools that foster communication, transparency, and participation between boards and residents.",
      linkText: "Explore",
      linkUrl: "/features",
    },
  ],
  backgroundImage: {
    src: "/images/home/key-benefits/Birds_eye_view_of_a_well-maintained_residential__869aeab3-b953-4971-b8c0-7aea0043529f_0 (1).png",
    alt: "Birds eye view of a well-maintained residential community",
  },
};