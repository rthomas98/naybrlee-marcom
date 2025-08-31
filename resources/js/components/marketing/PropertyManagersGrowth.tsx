"use client";

import { Link } from '@inertiajs/react';
import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Feature = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  imageMobile: {
    src: string;
    alt: string;
  };
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
};

export type PropertyManagersGrowthProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersGrowth = (props: PropertyManagersGrowthProps) => {
  const { tagline, heading, description, features, primaryButton, secondaryButton } = {
    ...PropertyManagersGrowthDefaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Create all transforms at the top level
  const featureAnimations = features.map((_, index) => {
    const startProgress = index / features.length;
    const endProgress = (index + 1) / features.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0]
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100]
    );
    return { opacity, y };
  });

  return (
    <section
      id="property-managers-growth"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      ref={containerRef}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          {isTablet && (
            <div className="hidden md:grid md:grid-cols-1 md:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex h-screen w-full items-center justify-center overflow-hidden">
                  <img
                    src={feature.image.src}
                    alt={feature.image.alt}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <p className="text-gray-600 font-['Poppins'] md:text-lg">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href={primaryButton.url}
                  className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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
            <div className="flex flex-col justify-center gap-y-8">
              <AnimatePresence>
                {features.map((feature, index) => (
                  <React.Fragment key={index}>
                    {isMobile && (
                      <div>
                        <h5 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358]">
                          {feature.heading}
                        </h5>
                        <p className="text-gray-600 font-['Poppins']">
                          {feature.description}
                        </p>
                        <div className="mt-4">
                          <img
                            src={feature.imageMobile.src}
                            alt={feature.imageMobile.alt}
                            className="rounded-lg w-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    {isTablet && (
                      <motion.div
                        style={{
                          opacity: featureAnimations[index].opacity,
                          y: featureAnimations[index].y,
                        }}
                        initial={index === 0 ? { opacity: 0, y: 100 } : false}
                        animate={index === 0 ? { opacity: 1, y: 0 } : {}}
                        transition={index === 0 ? { duration: 0.5 } : {}}
                        className={index === 0 ? "md:relative" : "md:absolute"}
                      >
                        <h5 className="font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                          {feature.heading}
                        </h5>
                        <p className="text-gray-600 font-['Poppins'] md:text-lg">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersGrowthDefaults: Props = {
  tagline: "Growth",
  heading: "Tools to Grow Your PM Business",
  description: "Unlock the potential of your property management business with Naybrlee's innovative tools. Our solutions are designed to streamline operations and enhance client satisfaction.",
  features: [
    {
      heading: "New Business",
      description: "Track client satisfaction and success metrics to foster long-term relationships and loyalty.",
      image: {
        src: "/images/property-managers/remaining/Modern_property_management_dashboard_showing_new_c12a1888-2e37-445b-a9c7-bc92ceaf266e_3.png",
        alt: "New business growth dashboard",
      },
      imageMobile: {
        src: "/images/property-managers/remaining/Modern_property_management_dashboard_showing_new_c12a1888-2e37-445b-a9c7-bc92ceaf266e_3.png",
        alt: "New business growth dashboard mobile",
      },
    },
    {
      heading: "Client Retention",
      description: "Monitor satisfaction scores and renewal rates to keep your best clients happy and engaged.",
      image: {
        src: "/images/property-managers/remaining/Client_satisfaction_dashboard_interface_showing__7e591603-867d-4915-b5e7-50e056a81fc0_1.png",
        alt: "Client retention metrics",
      },
      imageMobile: {
        src: "/images/property-managers/remaining/Client_satisfaction_dashboard_interface_showing__7e591603-867d-4915-b5e7-50e056a81fc0_1.png",
        alt: "Client retention metrics mobile",
      },
    },
    {
      heading: "Operational Efficiency",
      description: "Manage unlimited properties with volume pricing that grows with your business needs.",
      image: {
        src: "/images/property-managers/remaining/Time-saving_automation_dashboard_showing_75_effi_7f0b0d5c-b1bd-40f5-9e1f-d93f82a1e589_1.png",
        alt: "Operational efficiency tools",
      },
      imageMobile: {
        src: "/images/property-managers/remaining/Time-saving_automation_dashboard_showing_75_effi_7f0b0d5c-b1bd-40f5-9e1f-d93f82a1e589_1.png",
        alt: "Operational efficiency tools mobile",
      },
    },
    {
      heading: "Scalability Options",
      description: "Expand your portfolio without expanding your team using our automation features.",
      image: {
        src: "/images/property-managers/remaining/Portfolio_growth_visualization_dashboard_showing_47191ad7-be23-4736-88fe-f211adf55a38_0.png",
        alt: "Scalability dashboard",
      },
      imageMobile: {
        src: "/images/property-managers/remaining/Portfolio_growth_visualization_dashboard_showing_47191ad7-be23-4736-88fe-f211adf55a38_0.png",
        alt: "Scalability dashboard mobile",
      },
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Get Started",
    url: "/demo",
  },
};