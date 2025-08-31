"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight, Play, Rocket } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  heading: string;
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
  image: {
    src: string;
    alt: string;
  };
};

export type BoardMembersDemoCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BoardMembersDemoCTA = (props: BoardMembersDemoCTAProps) => {
  const { tagline, heading, description, features, primaryButton, secondaryButton, image } = {
    ...BoardMembersDemoCTADefaults,
    ...props,
  };

  return (
    <section id="board-members-demo-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
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
            <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#3C6098]/10">
                      <div className="text-[#3C6098]">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
                    {feature.heading}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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

export const BoardMembersDemoCTADefaults: Props = {
  tagline: "See It In Action",
  heading: "Experience Naybrlee Live",
  description: "See how Naybrlee transforms HOA management with our interactive demo. Explore real features and discover how we can streamline your board operations.",
  features: [
    {
      icon: <Play className="h-6 w-6" />,
      heading: "Interactive Demo",
      description: "Try our actual platform features with sample data to see the full board member experience.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      heading: "Quick Setup",
      description: "Join our pilot program and get your community up and running in minutes, not months.",
    },
  ],
  primaryButton: {
    title: "Try Live Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "Schedule Walkthrough",
    url: "/contact",
  },
  image: {
    src: "/images/hoa-members/young_diverse_Board_members_collaborating_with_p_b9524b3e-ddd9-4a1d-8a1c-d2d677a3906c_0.png",
    alt: "Young diverse board members collaborating with Naybrlee platform",
  },
};