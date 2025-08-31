"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type OnboardingStep = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  steps: OnboardingStep[];
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

export type ResidentsOnboardingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsOnboarding = (props: ResidentsOnboardingProps) => {
  const { tagline, heading, description, steps, primaryButton, secondaryButton, image } = {
    ...ResidentsOnboardingDefaults,
    ...props,
  };

  return (
    <section id="residents-onboarding" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
                    {step.title}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">{step.description}</p>
                </div>
              ))}
            </div>
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

export const ResidentsOnboardingDefaults: Props = {
  tagline: "Easy",
  heading: "Getting Started Is Simple and Quick",
  description: "Joining Naybrlee is a breeze. Follow these simple steps to enhance your community experience.",
  steps: [
    {
      title: "Step One",
      description: "Your HOA provides you with an access code to get started.",
    },
    {
      title: "Step Two",
      description: "Download the app and create your account in just a few minutes.",
    },
    {
      title: "Step Three",
      description: "Set up your payment method and notification preferences.",
    },
    {
      title: "Step Four",
      description: "Start enjoying all the benefits of connected community living!",
    },
  ],
  primaryButton: {
    title: "Start Now",
    url: "/demo",
  },
  secondaryButton: {
    title: "Join Today",
    url: "/contact",
  },
  image: {
    src: "/images/residents/Four-panel_illustration_showing_onboarding_journ_3d398649-66ff-43d2-bef0-e3df8bc0bdcf_0.png",
    alt: "Easy onboarding process",
  },
};