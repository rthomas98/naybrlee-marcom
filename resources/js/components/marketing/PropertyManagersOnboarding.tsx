"use client";

import React from "react";
import { Calendar, Users } from "lucide-react";

type OnboardingFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  features: OnboardingFeature[];
  image: {
    src: string;
    alt: string;
  };
};

export type PropertyManagersOnboardingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersOnboarding = (props: PropertyManagersOnboardingProps) => {
  const { heading, description, features, image } = {
    ...PropertyManagersOnboardingDefaults,
    ...props,
  };

  return (
    <section id="property-managers-onboarding" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10 md:mb-4">
                    {feature.icon}
                  </div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
                    {feature.title}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          src={image.src}
          className="w-full rounded-lg object-cover"
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export const PropertyManagersOnboardingDefaults: Props = {
  heading: "Smooth Transition, Immediate Impact for Your Property Management Operations",
  description: "Transitioning to Naybrlee is seamless and efficient. Our structured onboarding process ensures you're up and running in no time.",
  features: [
    {
      icon: <Calendar className="h-6 w-6 text-[#3C6098]" />,
      title: "Onboarding Timeline",
      description: "Week 1: Data migration, Week 2: Team training, Week 3: Client rollout, Week 4: Full operations.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#3C6098]" />,
      title: "Dedicated Support",
      description: "Enjoy 24/7 priority support and a dedicated success manager throughout your journey.",
    },
  ],
  image: {
    src: "/images/property-managers/remaining/Clean_4-week_onboarding_timeline_infographic_hor_15f2ccf6-1867-4482-a05a-82ea7499718e_2.png",
    alt: "Property management onboarding process",
  },
};