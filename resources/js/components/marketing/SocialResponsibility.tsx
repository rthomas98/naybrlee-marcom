"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight, Heart, Users, DollarSign, Handshake } from "lucide-react";

type Initiative = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  initiatives: Initiative[];
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

export type SocialResponsibilityProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SocialResponsibility = (props: SocialResponsibilityProps) => {
  const { tagline, heading, description, initiatives, primaryButton, secondaryButton, backgroundMedia } = {
    ...SocialResponsibilityDefaults,
    ...props,
  };

  return (
    <section id="social-responsibility" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 max-w-xl md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] md:mb-4 font-['Poppins']">
            {tagline}
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white font-['Poppins'] md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h2>
          <p className="text-white/90 font-['Poppins'] text-lg md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <div key={index} className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="text-[#E48B59]">
                    {initiative.icon}
                  </div>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-['Poppins'] md:mb-4 md:text-2xl">
                {initiative.heading}
              </h3>
              <p className="text-white/80 font-['Poppins']">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
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
      <div className="absolute inset-0 z-0">
        {backgroundMedia.video ? (
          <video
            className="size-full object-cover"
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
              className="size-full object-cover"
            />
          </video>
        ) : (
          <img
            src={backgroundMedia.poster}
            alt={backgroundMedia.alt}
            className="size-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#112358]/90 via-[#3C6098]/80 to-[#112358]/90" />
      </div>
    </section>
  );
};

export const SocialResponsibilityDefaults: Props = {
  tagline: "Our Impact",
  heading: "Building Better Communities Together",
  description: "At Naybrlee, we believe technology should strengthen communities. That's why we're committed to giving back and ensuring every neighborhood has access to the tools they need to thrive.",
  initiatives: [
    {
      icon: <Heart className="h-6 w-6" />,
      heading: "Free for Small Communities",
      description: "Communities with 10 units or less get our full platform absolutely free. No hidden fees, no limitations.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      heading: "Community Hero Awards",
      description: "Annual recognition program celebrating board members and volunteers who go above and beyond for their communities.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      heading: "1% for Neighborhoods",
      description: "We pledge 1% of revenue to fund community improvement projects and local initiatives that matter.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      heading: "Partner with Purpose",
      description: "Join us in creating positive change. Together, we can build stronger, more connected communities.",
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/social-impact",
  },
  secondaryButton: {
    title: "Get Involved",
    url: "/contact",
  },
  backgroundMedia: {
    video: "/images/about/social_rob_thomas23_People_interacting_children_playing_families_con_059e71e2-8828-4685-9815-c333e49d0f8d_2.mp4",
    poster: "/images/about/People_interacting_children_playing_families_con_bf65b47b-b8df-41f8-9d95-9a5bee3aef33_2 (1).png",
    alt: "Community members gathering and connecting",
  },
};