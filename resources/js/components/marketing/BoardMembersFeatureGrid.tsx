"use client";

import React from "react";
import { Link } from '@inertiajs/react';

type FeatureCard = {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: FeatureCard[];
  button: {
    title: string;
    url: string;
  };
};

export type BoardMembersFeatureGridProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BoardMembersFeatureGrid = (props: BoardMembersFeatureGridProps) => {
  const { tagline, heading, description, features, button } = {
    ...BoardMembersFeatureGridDefaults,
    ...props,
  };

  return (
    <section id="board-members-feature-grid" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="text-5xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>
          <div>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="mb-6 md:mb-8">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="rounded-lg w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Link 
            href={button.url}
            className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
          >
            {button.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export const BoardMembersFeatureGridDefaults: Props = {
  tagline: "Features",
  heading: "Everything Your Board Needs to Succeed",
  description: "Naybrlee offers a comprehensive suite of tools designed specifically for HOA boards. From financial management to resident communication, our platform ensures you have everything needed to run an efficient, transparent community.",
  features: [
    {
      image: {
        src: "/images/hoa-members/Financial_dashboard_screenshot_--ar_43_--sref_ht_1d5754de-3532-47b7-bd21-a11407030188_3.png",
        alt: "Financial management dashboard",
      },
      heading: "Financial Tools for Every Community",
      description: "Easily manage budgets, track expenses, process payments, and generate comprehensive financial reports with our intuitive financial management suite.",
    },
    {
      image: {
        src: "/images/hoa-members/Message_interface_notification_center_--ar_43_--_b299a752-bce1-4d69-a110-813c89dfb9ae_2.png",
        alt: "Communication platform",
      },
      heading: "Unified Stakeholder Communication",
      description: "Keep everyone informed with targeted announcements, automated notifications, and seamless messaging that reaches the right people at the right time.",
    },
    {
      image: {
        src: "/images/hoa-members/Maintenance_request_system_in_an_app_--ar_43_--s_437627cd-ab9c-485a-86d1-e22a39bd5814_3.png",
        alt: "Maintenance request system",
      },
      heading: "Simple Maintenance Solutions",
      description: "Streamline maintenance requests with our easy submission system, real-time tracking, and automated vendor coordination for faster resolution.",
    },
  ],
  button: {
    title: "Explore All Features",
    url: "/features",
  },
};