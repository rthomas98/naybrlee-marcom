"use client";

import React from "react";

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
};

export type PropertyManagersBenefitsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersBenefits = (props: PropertyManagersBenefitsProps) => {
  const { tagline, heading, description, benefits } = {
    ...PropertyManagersBenefitsDefaults,
    ...props,
  };

  return (
    <section id="property-managers-benefits" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
                {tagline}
              </p>
              <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <p className="text-gray-600 font-['Poppins'] md:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
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
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersBenefitsDefaults: Props = {
  tagline: "Efficiency",
  heading: "Unlock Your Property Management Potential",
  description: "Naybrlee empowers property managers to streamline operations and enhance client satisfaction. Our platform's innovative features allow you to manage more properties efficiently.",
  benefits: [
    {
      title: "Property Management Tools",
      description: "Get a comprehensive bird's-eye view of all your properties, allowing you to easily manage and oversee each one effectively.",
      image: {
        src: "/images/property-managers/benefits/Clean_dashboard_interface_showing_portfolio_over_9348d108-b847-4793-8a08-6fc04f150ef5_3.png",
        alt: "Property management overview dashboard",
      },
    },
    {
      title: "Streamlined Automated Workflows",
      description: "Effortlessly streamline the process of managing maintenance requests and coordinating with vendors for optimal efficiency.",
      image: {
        src: "/images/property-managers/benefits/Workflow_automation_diagram_showing_maintenance__401ea73f-3c75-4e98-bbc1-3f06f3e096cb_3.png",
        alt: "Automated workflow management",
      },
    },
    {
      title: "Real-Time Client Reporting Made Easy",
      description: "Create customized, white-labeled reports quickly and efficiently, saving you valuable time while maintaining a professional appearance for your clients.",
      image: {
        src: "/images/property-managers/benefits/Professional_white-labeled_report_mockup_showing_f579af61-601a-483c-bf8d-6054aa9a9baa_1.png",
        alt: "Professional client reporting",
      },
    },
  ],
};