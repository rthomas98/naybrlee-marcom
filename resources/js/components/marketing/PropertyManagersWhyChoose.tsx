"use client";

import React from "react";

type Stat = {
  value: string;
  label: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  stats: Stat[];
  image: {
    src: string;
    alt: string;
  };
};

export type PropertyManagersWhyChooseProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersWhyChoose = (props: PropertyManagersWhyChooseProps) => {
  const { heading, description, stats, image } = {
    ...PropertyManagersWhyChooseDefaults,
    ...props,
  };

  return (
    <section id="property-managers-why-choose" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-5xl font-bold font-['Poppins'] text-[#3C6098] md:text-6xl lg:text-7xl">
                    {stat.value}
                  </h3>
                  <p className="font-semibold font-['Poppins'] text-[#112358] mb-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 font-['Poppins']">
                    {stat.description}
                  </p>
                </div>
              ))}
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

export const PropertyManagersWhyChooseDefaults: Props = {
  heading: "Why Property Managers Choose Naybrlee for Seamless Operations",
  description: "Naybrlee stands out with its unique features designed specifically for property managers. Experience unparalleled efficiency and client satisfaction with our innovative solutions.",
  stats: [
    {
      value: "75%",
      label: "Time Saved",
      description: "Reduce administrative tasks and focus on growth.",
    },
    {
      value: "98%",
      label: "Client Retention",
      description: "Keep clients happy with efficient operations.",
    },
  ],
  image: {
    src: "/images/property-managers/remaining/Client_satisfaction_dashboard_interface_showing__7e591603-867d-4915-b5e7-50e056a81fc0_2.png",
    alt: "Happy property manager with satisfied clients",
  },
};