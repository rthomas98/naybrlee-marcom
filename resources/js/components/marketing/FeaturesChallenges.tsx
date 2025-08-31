"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type CardContent = {
  label: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  button?: {
    title: string;
    url: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  mainCard: CardContent & {
    secondaryButton?: {
      title: string;
      url: string;
    };
  };
  sideCards: CardContent[];
};

export type FeaturesChallengesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesChallenges = (props: FeaturesChallengesProps) => {
  const { tagline, heading, description, mainCard, sideCards } = {
    ...FeaturesChallengesDefaults,
    ...props,
  };

  return (
    <section id="features-challenges" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {/* Main Large Card */}
            <div className="order-first flex flex-col items-stretch bg-white rounded-lg overflow-hidden lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
              <div>
                <img
                  src={mainCard.image.src}
                  alt={mainCard.image.alt}
                  className="w-full h-64 object-cover lg:h-80"
                />
              </div>
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{mainCard.label}</p>
                  <h3 className="mb-5 text-3xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-4xl lg:text-5xl">
                    {mainCard.title}
                  </h3>
                  <p className="text-gray-600 font-['Poppins'] text-lg">
                    {mainCard.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  {mainCard.button && (
                    <Link
                      href={mainCard.button.url}
                      className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                    >
                      {mainCard.button.title}
                    </Link>
                  )}
                  {mainCard.secondaryButton && (
                    <Link
                      href={mainCard.secondaryButton.url}
                      className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                    >
                      {mainCard.secondaryButton.title}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Side Cards */}
            {sideCards.map((card, index) => (
              <div key={index} className="order-last flex flex-col bg-white rounded-lg overflow-hidden md:grid md:grid-cols-2 lg:order-none">
                <div className="flex w-full items-center justify-center">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    className="w-full h-48 object-cover md:h-full"
                  />
                </div>
                <div className="block flex-col justify-center p-6 md:flex">
                  <div>
                    <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{card.label}</p>
                    <h3 className="mb-2 text-xl font-bold font-['Poppins'] text-[#112358] md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 font-['Poppins']">
                      {card.description}
                    </p>
                    {card.button && (
                      <div className="mt-5 flex items-center gap-4 md:mt-6">
                        <Link
                          href={card.button.url}
                          className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                        >
                          {card.button.title}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesChallengesDefaults: Props = {
  tagline: "Understanding Your Needs",
  heading: "We Get Your Challenges",
  description: "Managing an HOA shouldn't be overwhelming. We've designed Naybrlee to address the real pain points board members face every day, transforming complex tasks into simple workflows.",
  mainCard: {
    label: "Common Challenges",
    title: "Recognizing Your Pain Points",
    description: "We understand the unique challenges you face as an HOA board member. From endless paperwork to compliance headaches, we've built solutions that actually work.",
    image: {
      src: "/images/features/features-challenges/A_diverse_group_of_HOA_board_members_in_a_meetin_6b36aa57-63ae-4e90-8009-ecc42b822d14_1.png",
      alt: "Diverse group of HOA board members in a meeting",
    },
    button: {
      title: "Explore Solutions",
      url: "/features#solutions",
    },
    secondaryButton: {
      title: "Join Pilot Program",
      url: "/demo",
    },
  },
  sideCards: [
    {
      label: "Time Management",
      title: "Reclaim Your Personal Time",
      description: "Automate routine tasks and streamline processes so you can focus on what matters most.",
      image: {
        src: "/images/features/features-challenges/Professional_using_Naybrlee_on_tabletlaptop_with_ca032aad-c344-4076-88fe-86f3d8e74b65_2.png",
        alt: "Professional using Naybrlee on tablet with peaceful expression",
      },
      button: {
        title: "Learn More",
        url: "/features#automation",
      },
    },
    {
      label: "Compliance Support",
      title: "Stay Legally Protected",
      description: "Built-in compliance tools and automated reminders ensure you never miss important deadlines.",
      image: {
        src: "/images/features/features-challenges/Checklist_interface_with_compliance_items_being__cb129bdf-7819-40f8-bd7c-878ea669e104_3.png",
        alt: "Compliance checklist interface with automated tracking",
      },
      button: {
        title: "View Features",
        url: "/features#compliance",
      },
    },
  ],
};