"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight } from "lucide-react";

type Props = {
  tagline: string;
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
  backgroundMedia: {
    video?: string;
    poster: string;
    alt: string;
  };
};

export type FounderStoryProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FounderStory = (props: FounderStoryProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, backgroundMedia } = {
    ...FounderStoryDefaults,
    ...props,
  };

  return (
    <section id="founder-story" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-3xl">
          <p className="mb-3 font-semibold text-[#E48B59] md:mb-4 font-['Poppins']">
            {tagline}
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white font-['Poppins'] md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h2>
          <p className="text-white/90 font-['Poppins'] text-lg md:text-xl">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link
              href={primaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              {primaryButton.title}
            </Link>
            <Link
              href={secondaryButton.url}
              className="inline-flex items-center gap-1 text-white hover:text-white/80 font-['Poppins'] font-medium transition-colors"
            >
              {secondaryButton.title}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {backgroundMedia.video ? (
          <video
            className="absolute inset-0 aspect-video size-full object-cover"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            poster={backgroundMedia.poster}
          >
            <source
              src={backgroundMedia.video}
              type="video/mp4"
            />
            <img
              src={backgroundMedia.poster}
              alt={backgroundMedia.alt}
              className="absolute inset-0 size-full object-cover"
            />
          </video>
        ) : (
          <img
            src={backgroundMedia.poster}
            alt={backgroundMedia.alt}
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
    </section>
  );
};

export const FounderStoryDefaults: Props = {
  tagline: "Our Journey",
  heading: "It Started with a Frustrated Board Member",
  description: "As an HOA board member myself, I experienced firsthand the chaos of outdated management tools. Spreadsheets, endless emails, and missed communications were the norm. I knew there had to be a better way—so I built it.",
  primaryButton: {
    title: "Our Mission",
    url: "#mission",
  },
  secondaryButton: {
    title: "Join the Revolution",
    url: "/demo",
  },
  backgroundMedia: {
    video: "/images/about/Frustrated_board_members_stacks_of_documents_lap_3d488786-9dd4-4c7a-bf95-f6f85345ab70_1.mp4",
    poster: "/images/about/Frustrated_board_members_stacks_of_documents_lap_51026b02-98b7-4a8f-92aa-9fb30b645e32_0 (1).png",
    alt: "Frustrated board members with stacks of documents showing typical HOA management challenges",
  },
};