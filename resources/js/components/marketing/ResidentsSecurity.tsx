"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight, Shield, Lock, Eye } from "lucide-react";

type SecurityFeature = {
  icon: React.ReactNode;
  tagline: string;
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: SecurityFeature[];
};

export type ResidentsSecurityProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsSecurity = (props: ResidentsSecurityProps) => {
  const { tagline, heading, description, features } = {
    ...ResidentsSecurityDefaults,
    ...props,
  };

  return (
    <section id="residents-security" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">{description}</p>
        </div>
        
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* First card - spans 2 rows on large screens */}
          <div className="lg:row-span-2 flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden lg:col-span-1">
            <div className="flex-1 p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10">
                {features[0].icon}
              </div>
              <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{features[0].tagline}</p>
              <h2 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {features[0].title}
              </h2>
              <p className="text-gray-600 font-['Poppins']">{features[0].description}</p>
              <div className="mt-5 md:mt-6">
                <Link
                  href={features[0].link.url}
                  className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                >
                  {features[0].link.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6">
              <img
                src={features[0].image.src}
                alt={features[0].image.alt}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
          
          {/* Second and third cards - span 2 columns on large screens */}
          {features.slice(1).map((feature, index) => (
            <div key={index + 1} className="grid auto-cols-fr grid-cols-1 rounded-lg border border-gray-200 bg-white overflow-hidden sm:grid-cols-2 lg:col-span-2">
              <div className="p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10">
                  {feature.icon}
                </div>
                <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{feature.tagline}</p>
                <h2 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {feature.title}
                </h2>
                <p className="text-gray-600 font-['Poppins']">{feature.description}</p>
                <div className="mt-5 md:mt-6">
                  <Link
                    href={feature.link.url}
                    className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                  >
                    {feature.link.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center p-6">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ResidentsSecurityDefaults: Props = {
  tagline: "Secure",
  heading: "Your Information, Protected",
  description: "Rest assured, your data is safe with us.",
  features: [
    {
      icon: <Shield className="h-6 w-6 text-[#3C6098]" />,
      tagline: "Secure",
      title: "Data Protection You Can Trust",
      description: "We prioritize your privacy and security with industry-leading protection measures.",
      link: {
        title: "Learn More",
        url: "/security",
      },
      image: {
        src: "/images/residents/3D_metallic_shield_with_digital_lock_pattern_hol_7fe93243-2567-4b94-b5f7-2c35fed28b74_1.png",
        alt: "Security shield protection",
      },
    },
    {
      icon: <Lock className="h-6 w-6 text-[#3C6098]" />,
      tagline: "Protected",
      title: "Bank-Level Encryption",
      description: "Experience bank-level encryption and privacy controls for all your sensitive information.",
      link: {
        title: "Discover",
        url: "/security#encryption",
      },
      image: {
        src: "/images/residents/Abstract_visualization_of_data_encryption_proces_3a943015-9d67-446e-ad5a-b827ee73b0ad_2.png",
        alt: "Bank-level encryption",
      },
    },
    {
      icon: <Eye className="h-6 w-6 text-[#3C6098]" />,
      tagline: "Private",
      title: "Complete Privacy Control",
      description: "You control who sees your information and how it's used with granular privacy settings.",
      link: {
        title: "Explore",
        url: "/security#privacy",
      },
      image: {
        src: "/images/residents/User_interface_showing_granular_privacy_settings_906ccde2-aecb-43b6-9fd4-77404aad03dd_2.png",
        alt: "Privacy control settings",
      },
    },
  ],
};