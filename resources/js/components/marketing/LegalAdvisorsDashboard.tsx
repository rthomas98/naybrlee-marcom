"use client";

import React from "react";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  features: Feature[];
  image: {
    src: string;
    alt: string;
  };
};

export type LegalAdvisorsDashboardProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsDashboard = (props: LegalAdvisorsDashboardProps) => {
  const { heading, description, features, image } = {
    ...LegalAdvisorsDashboardDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-dashboard" className="px-[5%] py-16 md:py-24 lg:py-28">
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
            <h3 className="mb-5 text-3xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h3>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
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
      </div>
    </section>
  );
};

export const LegalAdvisorsDashboardDefaults: Props = {
  heading: "Your Legal Command Center: Streamlined Compliance and Risk Management at Your Fingertips",
  description: "Our Legal Dashboard provides a comprehensive view of compliance scores and alerts. Stay ahead of regulatory changes and manage your cases efficiently.",
  features: [
    {
      title: "Compliance Overview",
      description: "Monitor portfolio compliance scores and receive real-time alerts for critical updates.",
    },
    {
      title: "Actionable Insights",
      description: "Generate litigation-ready reports and track pending reviews effortlessly from your dashboard.",
    },
  ],
  image: {
    src: "/images/legal-advisors/rob_thomas23_Legal_command_center_with_multiple_monitoring_sc_29db9742-16eb-4d5c-b51e-ae97935daa4a_1.png",
    alt: "Legal compliance dashboard",
  },
};