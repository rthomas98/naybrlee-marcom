"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

type BenefitItem = {
  text: string;
};

type Props = {
  heading: string;
  description: string;
  benefits: BenefitItem[];
  image: {
    src: string;
    alt: string;
  };
};

export type FeaturesCommandCenterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesCommandCenter = (props: FeaturesCommandCenterProps) => {
  const { heading, description, benefits, image } = {
    ...FeaturesCommandCenterDefaults,
    ...props,
  };

  return (
    <section id="features-command-center" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="mb-5 text-gray-600 font-['Poppins'] md:mb-6 md:text-lg">
              {description}
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <CheckCircle className="h-6 w-6 text-[#E48B59]" />
                  </div>
                  <p className="font-['Poppins'] text-gray-700">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={image.src}
            className="w-full rounded-lg object-cover"
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const FeaturesCommandCenterDefaults: Props = {
  heading: "Your Complete Board Management Command Center",
  description: "Naybrlee transforms how board members manage their communities, simplifying every aspect of governance. With our intelligent automation and intuitive tools, you can focus on strategic leadership rather than administrative tasks.",
  benefits: [
    {
      text: "Cut meeting time by 60% with automated agendas and minutes",
    },
    {
      text: "Prevent costly compliance violations with proactive alerts",
    },
    {
      text: "Make informed decisions with real-time analytics and insights",
    },
    {
      text: "Streamline communication across board members and residents",
    },
    {
      text: "Automate routine tasks and focus on community improvement",
    },
  ],
  image: {
    src: "/images/features/Command_Center_Dashboard_-_Key_metrics_and_KPIs__9b4ed2b4-bcd0-436a-827e-5e07dd6589ec_2.png",
    alt: "Naybrlee command center dashboard with key metrics and KPIs",
  },
};