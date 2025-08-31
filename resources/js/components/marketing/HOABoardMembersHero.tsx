"use client";

import React from "react";
import { Link } from '@inertiajs/react';

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  tagline?: string;
  heading: string;
  description: string;
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
  images: {
    column1: ImageProps[];
    column2: ImageProps[];
  };
};

export type HOABoardMembersHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HOABoardMembersHero = (props: HOABoardMembersHeroProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, images } = {
    ...HOABoardMembersHeroDefaults,
    ...props,
  };

  return (
    <section
      id="hoa-board-members-hero"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        {tagline && (
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
            {tagline}
          </p>
        )}
        <h1 className="mb-5 text-6xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <p className="text-gray-600 font-['Poppins'] md:text-lg">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Link 
            href={primaryButton.url}
            className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
          >
            {primaryButton.title}
          </Link>
          <Link 
            href={secondaryButton.url}
            className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
          >
            {secondaryButton.title}
          </Link>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {[...images.column1, ...images.column1].map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-lg object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {[...images.column2, ...images.column2].map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-lg object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HOABoardMembersHeroDefaults: Props = {
  tagline: "For HOA Board Members",
  heading: "Every Tool Your Board Needs in One Platform",
  description: "Streamline your HOA management with Naybrlee's comprehensive solution. From compliance tracking to resident communication, we've built everything your board needs to succeed.",
  primaryButton: {
    title: "Start Free Pilot",
    url: "/demo",
  },
  secondaryButton: {
    title: "See Features",
    url: "#features",
  },
  images: {
    column1: [
      {
        src: "/images/hoa-members/Community_Event_-_Board_members_at_a_communit_3a011163-e09e-4499-b290-c97583bc6c27_0.png",
        alt: "Board members at a community event",
      },
      {
        src: "/images/hoa-members/Digital_Dashboard_View_-_Close-up_of_a_tabletlap_44a1c7b0-1b83-4d69-ac35-50c5b366ef33_1.png",
        alt: "Digital dashboard view on tablet",
      },
      {
        src: "/images/hoa-members/Financial_Review_-_Board_members_reviewing_finan_9d53fc05-be38-4863-b945-b58b6594d5d6_2.png",
        alt: "Board members reviewing financial reports",
      },
      {
        src: "/images/hoa-members/Happy_Community_-_Wide_shot_of_a_well-main_9a97483d-b0b9-490a-8374-b1c08de277ee_2.png",
        alt: "Happy well-maintained community",
      },
      {
        src: "/images/hoa-members/Mobile_App_Usage_-_Board_member_checking_notific_c9eec9d2-b035-4f12-b718-9805d9d149ea_0.png",
        alt: "Board member using mobile app",
      },
      {
        src: "/images/hoa-members/Resident_Communication_-_Board_member_speaking_w_dc493537-f168-443b-a4b9-b3186595105b_1.png",
        alt: "Board member communicating with residents",
      },
    ],
    column2: [
      {
        src: "/images/hoa-members/Digital_Dashboard_View_-_Close-up_of_a_tabletlap_44a1c7b0-1b83-4d69-ac35-50c5b366ef33_1.png",
        alt: "Dashboard showing metrics and analytics",
      },
      {
        src: "/images/hoa-members/Community_Event_-_Board_members_at_a_communit_3a011163-e09e-4499-b290-c97583bc6c27_0.png",
        alt: "Community gathering and engagement",
      },
      {
        src: "/images/hoa-members/Resident_Communication_-_Board_member_speaking_w_dc493537-f168-443b-a4b9-b3186595105b_1.png",
        alt: "Board member in discussion with residents",
      },
      {
        src: "/images/hoa-members/Financial_Review_-_Board_members_reviewing_finan_9d53fc05-be38-4863-b945-b58b6594d5d6_2.png",
        alt: "Financial management and reporting",
      },
      {
        src: "/images/hoa-members/Mobile_App_Usage_-_Board_member_checking_notific_c9eec9d2-b035-4f12-b718-9805d9d149ea_0.png",
        alt: "Mobile accessibility for board members",
      },
      {
        src: "/images/hoa-members/Happy_Community_-_Wide_shot_of_a_well-main_9a97483d-b0b9-490a-8374-b1c08de277ee_2.png",
        alt: "Thriving community environment",
      },
    ],
  },
};