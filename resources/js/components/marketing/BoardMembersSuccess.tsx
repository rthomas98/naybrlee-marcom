"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight } from "lucide-react";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  tagline: string;
  image: ImageProps;
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
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  card: CardProps;
};

export type BoardMembersSuccessProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BoardMembersSuccess = (props: BoardMembersSuccessProps) => {
  const { tagline, heading, description, card } = {
    ...BoardMembersSuccessDefaults,
    ...props,
  };

  return (
    <section id="board-members-success" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">{description}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 border border-gray-200 rounded-lg overflow-hidden md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img src={card.image.src} className="size-full object-cover" alt={card.image.alt} />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <p className="mb-2 text-sm font-semibold text-[#E48B59] font-['Poppins']">{card.tagline}</p>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] font-['Poppins'] text-[#112358] md:mb-6 md:text-4xl lg:text-5xl">
              {card.heading}
            </h3>
            <p className="text-gray-600 font-['Poppins']">{card.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href={card.primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
              >
                {card.primaryButton.title}
              </Link>
              <Link
                href={card.secondaryButton.url}
                className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
              >
                {card.secondaryButton.title}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BoardMembersSuccessDefaults: Props = {
  tagline: "Success Story",
  heading: "See How Boards Are Thriving",
  description: "Discover how HOA boards across the country are transforming their communities with Naybrlee.",
  card: {
    tagline: "Case Study",
    image: {
      src: "/images/hoa-members/a_happy_professional_board_member_or_team_in_a_m_a276c7f7-e2f4-4a4a-a08f-63009baa5871_3 (1).png",
      alt: "Successful HOA board using Naybrlee",
    },
    heading: "Riverside Community Saves 20 Hours Per Month",
    description: "The Riverside HOA board reduced their administrative workload by 80% with Naybrlee's automation tools. Board meetings are now focused on strategic decisions rather than paperwork. Resident satisfaction has increased by 45% since implementing our platform.",
    primaryButton: {
      title: "Read Full Story",
      url: "/case-studies/riverside",
    },
    secondaryButton: {
      title: "View More Success Stories",
      url: "/case-studies",
    },
  },
};