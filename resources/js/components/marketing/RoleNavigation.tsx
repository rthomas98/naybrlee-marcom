"use client";

import React from "react";
import { Users, Building, Home, Scale } from "lucide-react";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  centerMedia: {
    video: string;
    poster: string;
    alt: string;
  };
};

export type RoleNavigationProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const RoleNavigation = (props: RoleNavigationProps) => {
  const { tagline, heading, description, centerMedia } = {
    ...RoleNavigationDefaults,
    ...props,
  };

  return (
    <section id="role-navigation" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098] text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                For Board Members
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Streamline operations and enhance decision-making with our
                all-in-one dashboard designed for board members.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098] text-white">
                  <Building className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                For Property Managers
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Manage multiple communities effortlessly while improving
                efficiency and service quality with automated workflows.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={centerMedia.poster}
              className="h-auto w-full rounded-lg object-cover"
              aria-label={centerMedia.alt}
            >
              <source src={centerMedia.video} type="video/mp4" />
              <img
                src={centerMedia.poster}
                alt={centerMedia.alt}
                className="h-auto w-full rounded-lg object-cover"
              />
            </video>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098] text-white">
                  <Home className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                For Residents
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Enjoy seamless communication and easy access to community
                services through our user-friendly app.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098] text-white">
                  <Scale className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-2xl">
                For Legal Advisors
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Stay ahead of compliance issues with our AI-driven document
                scanning and regulatory tracking features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RoleNavigationDefaults: Props = {
  tagline: "Navigate",
  heading: "Find Solutions Tailored to Your Role",
  description: "Discover how Naybrlee simplifies HOA management for everyone involved. Whether you're a board member, property manager, resident, or legal advisor, we have tailored solutions just for you.",
  centerMedia: {
    video: "/images/home/role-navigation/A_diverse_group_of_people_in_a_community_setting_62e7fb5a-bbcb-463a-9b0a-896e2c2c513b_3.mp4",
    poster: "/images/home/role-navigation/A_diverse_group_of_people_in_a_community_setting_941c64fd-eaef-4d57-8567-70ab655d02de_2 (1).png",
    alt: "Diverse group of people in a community setting working together",
  },
};