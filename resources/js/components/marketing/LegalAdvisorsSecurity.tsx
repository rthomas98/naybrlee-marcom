"use client";

import React from "react";

type SecurityFeature = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  features: SecurityFeature[];
  image: {
    src: string;
    alt: string;
  };
};

export type LegalAdvisorsSecurityProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsSecurity = (props: LegalAdvisorsSecurityProps) => {
  const { heading, description, features, image } = {
    ...LegalAdvisorsSecurityDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-security" className="px-[5%] py-16 md:py-24 lg:py-28">
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

export const LegalAdvisorsSecurityDefaults: Props = {
  heading: "Protecting Your Confidentiality with Robust Security Measures",
  description: "At Naybrlee, we prioritize your privacy and security. Our platform ensures that all attorney-client communications remain confidential and protected.",
  features: [
    {
      title: "Security Assurance",
      description: "Your data is safeguarded with industry-leading encryption and compliance protocols.",
    },
    {
      title: "Compliance Standards",
      description: "We adhere to SOC 2 and GDPR standards for maximum data protection.",
    },
  ],
  image: {
    src: "/images/legal-advisors/rob_thomas23_Ultra-secure_data_center_with_encryption_visuali_85700781-f157-48d0-9bb6-156272066018_0.png",
    alt: "Security and confidentiality",
  },
};