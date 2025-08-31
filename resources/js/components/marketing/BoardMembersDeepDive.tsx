"use client";

import React from "react";
import { Link } from '@inertiajs/react';

type Benefit = {
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  benefits: Benefit[];
  button: {
    title: string;
    url: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type BoardMembersDeepDiveProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BoardMembersDeepDive = (props: BoardMembersDeepDiveProps) => {
  const { tagline, heading, description, benefits, button, image } = {
    ...BoardMembersDeepDiveDefaults,
    ...props,
  };

  return (
    <section id="board-members-deep-dive" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-gray-600 font-['Poppins'] md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-xl">
                    {benefit.heading}
                  </h6>
                  <p className="text-gray-600 font-['Poppins']">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href={button.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
              >
                {button.title}
              </Link>
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full rounded-lg object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const BoardMembersDeepDiveDefaults: Props = {
  tagline: "Why Choose Naybrlee",
  heading: "Built by Board Members, for Board Members",
  description: "Our founder served on an HOA board and experienced firsthand the challenges of community management. That's why we built Naybrlee - to solve real problems with practical solutions.",
  benefits: [
    {
      heading: "Proven Results",
      description: "Join boards that have reduced administrative work by 80% and increased resident satisfaction by 45%.",
    },
    {
      heading: "Board-Centric Design",
      description: "Every feature is designed with board members in mind, from meeting management to compliance tracking.",
    },
  ],
  button: {
    title: "Start Your Free Pilot",
    url: "/demo",
  },
  image: {
    src: "/images/hoa-members/young_diverse_Board_members_collaborating_with_p_b9524b3e-ddd9-4a1d-8a1c-d2d677a3906c_2.png",
    alt: "Board members successfully using Naybrlee platform",
  },
};