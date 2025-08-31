"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from '@inertiajs/react';

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureProps = {
  tagline: string;
  heading: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: FeatureProps[];
};

export type UseCasesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const UseCases = (props: UseCasesProps) => {
  const { tagline, heading, description, features } = {
    ...UseCasesDefaults,
    ...props,
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 991;

  return (
    <section id="use-cases" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-8">
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.linkUrl}
              className="relative flex h-full min-h-[70vh] flex-1 cursor-pointer flex-col justify-between self-stretch overflow-hidden rounded-lg border border-gray-100 lg:min-h-[70vh] lg:transition-all lg:duration-200"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              animate={
                !isMobile && {
                  flexGrow: hoveredIndex === index ? 1.5 : 1,
                }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 flex size-full items-center justify-center">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">
                    {feature.tagline}
                  </p>
                  <h3 className="mb-3 text-3xl font-bold leading-[1.2] text-white font-['Poppins'] md:mb-4 md:text-4xl lg:text-5xl">
                    {feature.heading}
                  </h3>
                </div>
                <AnimatePresence>
                  {(hoveredIndex === index || isMobile) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-base text-white/90 font-['Poppins'] md:text-lg">
                        {feature.description}
                      </p>
                      {feature.linkText && (
                        <div className="mt-6 md:mt-8">
                          <span className="inline-flex items-center justify-center rounded-lg bg-[#E48B59] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#d87a48] transition-colors">
                            {feature.linkText}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const UseCasesDefaults: Props = {
  tagline: "Who We Serve",
  heading: "Built for Your Community's Success",
  description:
    "Whether you're managing an HOA board or living in a community, Naybrlee transforms how neighborhoods connect and thrive.",
  features: [
    {
      tagline: "For HOA Boards",
      heading: "Lead with Confidence",
      description:
        "Streamline board meetings, automate compliance tracking, and make data-driven decisions. Our AI-powered tools handle the complexity so you can focus on building a better community.",
      linkText: "Explore Board Solutions",
      linkUrl: "/who-its-for/hoa-board-members",
      image: {
        src: "/images/home/use-cases/Community_meeting_Board_members_pr_34b6fd6c-fb1c-4f54-8c22-9c43fd0319d4_0.png",
        alt: "HOA board members presenting at community meeting",
      },
    },
    {
      tagline: "For Residents",
      heading: "Your Community, Connected",
      description:
        "Access community resources, submit requests, book amenities, and stay informed—all from your phone. Experience the convenience of modern community living.",
      linkText: "See Resident Features",
      linkUrl: "/who-its-for/residents",
      image: {
        src: "/images/home/use-cases/Family_at_community_pool_Residents_enjoying_amen_23ca54ad-cb7b-4233-8a9f-1a7fcbbc872e_0.png",
        alt: "Family enjoying community pool amenities",
      },
    },
  ],
};