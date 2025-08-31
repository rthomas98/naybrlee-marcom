"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight, CreditCard, Wrench, Bell } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
};

export type ResidentsFeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsFeatures = (props: ResidentsFeaturesProps) => {
  const { tagline, heading, description, features, primaryButton, secondaryButton } = {
    ...ResidentsFeaturesDefaults,
    ...props,
  };

  return (
    <section id="residents-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
              <h2 className="text-4xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </div>
            <div>
              <p className="text-gray-600 font-['Poppins'] md:text-lg">
                {description}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-5 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
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
    </section>
  );
};

export const ResidentsFeaturesDefaults: Props = {
  tagline: "Convenience",
  heading: "Daily Features for Effortless Community Living",
  description: "Naybrlee simplifies your community experience with modern solutions that save you time and hassle. Enjoy seamless interactions for payments, maintenance requests, and staying informed—all at your fingertips.",
  features: [
    {
      icon: <CreditCard className="h-6 w-6 text-[#3C6098]" />,
      title: "Effortless Payments Made Simple",
      description: "Complete your payment quickly and effortlessly in just 30 seconds, ensuring your dues are settled without any hassle or delay.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#3C6098]" />,
      title: "Quick Maintenance Requests Anytime",
      description: "Submit your requests along with any relevant photos, and easily track the progress of your submissions throughout the process.",
    },
    {
      icon: <Bell className="h-6 w-6 text-[#3C6098]" />,
      title: "Receive Instant Updates in Real Time",
      description: "Stay informed and never miss out on crucial updates from your community. Get the latest news delivered instantly.",
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Connect",
    url: "/contact",
  },
};