"use client";

import React from "react";
import { Users, Shield, TrendingUp } from "lucide-react";

type Benefit = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  benefits: Benefit[];
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type BoardMembersRoleBenefitsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BoardMembersRoleBenefits = (props: BoardMembersRoleBenefitsProps) => {
  const { tagline, heading, description, benefits, backgroundImage } = {
    ...BoardMembersRoleBenefitsDefaults,
    ...props,
  };

  return (
    <section id="board-members-role-benefits" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 max-w-3xl text-start text-white md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold font-['Poppins'] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full">
              <div className="mb-5 h-12 md:mb-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="text-[#E48B59]">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white font-['Poppins'] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {benefit.heading}
              </h3>
              <p className="text-base text-white/90 font-['Poppins']">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage.src}
          className="absolute inset-0 size-full object-cover"
          alt={backgroundImage.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#112358]/90 via-[#3C6098]/80 to-[#112358]/90" />
      </div>
    </section>
  );
};

export const BoardMembersRoleBenefitsDefaults: Props = {
  tagline: "Designed for Board Excellence",
  heading: "Tools That Empower Board Leadership",
  description: "Naybrlee provides board members with specialized features that streamline governance, enhance decision-making, and strengthen community leadership.",
  benefits: [
    {
      icon: <Shield className="h-6 w-6" />,
      heading: "Governance Made Simple",
      description: "Access meeting tools, voting systems, and policy management features designed specifically for board operations and compliance requirements.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      heading: "Enhanced Board Collaboration",
      description: "Secure board-only communication channels, document sharing, and task management tools that keep your board aligned and productive.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      heading: "Strategic Decision Support",
      description: "Real-time analytics, financial insights, and community metrics that help your board make informed, data-driven decisions for your community.",
    },
  ],
  backgroundImage: {
    src: "/images/hoa-members/A_professional_board_meeting_environment_or_mode_8010a279-e8f5-4826-b852-d89a41e46fb9_0.png",
    alt: "Professional board meeting environment",
  },
};