"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Amenity = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  amenities: Amenity[];
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
};

export type ResidentsAmenitiesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsAmenities = (props: ResidentsAmenitiesProps) => {
  const { tagline, heading, description, amenities, primaryButton, secondaryButton } = {
    ...ResidentsAmenitiesDefaults,
    ...props,
  };

  return (
    <section id="residents-amenities" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h1 className="text-4xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
              {heading}
            </h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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
        </div>
        
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {amenities.map((amenity, index) => (
            <div key={index} className="w-full" style={{ marginTop: index === 1 ? '25%' : index === 2 ? '50%' : '0' }}>
              <div className="mb-6 w-full md:mb-8">
                <img
                  src={amenity.image.src}
                  alt={amenity.image.alt}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {amenity.title}
              </h2>
              <p className="text-gray-600 font-['Poppins']">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ResidentsAmenitiesDefaults: Props = {
  tagline: "Instant",
  heading: "Book Community Amenities Instantly",
  description: "Experience the convenience of reserving community amenities with just a few taps. Enjoy hassle-free access to facilities like tennis courts, pools, and clubhouses.",
  amenities: [
    {
      title: "Tennis Courts & Sports Facilities",
      description: "Reserve tennis courts, basketball courts, and other sports facilities instantly. Check real-time availability and book your preferred time slots.",
      image: {
        src: "/images/residents/Pristine_community_tennis_courts_at_sunrise_prof_c5efafa9-82dd-4824-8877-71c19a5dfcaa_2.png",
        alt: "Tennis courts booking",
      },
    },
    {
      title: "Pool & Recreation Areas",
      description: "Book pool time for parties or lap swimming. Access schedules for aqua fitness classes and secure your spot with ease.",
      image: {
        src: "/images/residents/Sparkling_community_pool_with_lap_lanes_and_leis_0456e27c-060f-4c88-b456-8fed74b0e580_1.png",
        alt: "Community pool reservation",
      },
    },
    {
      title: "Clubhouse & Event Spaces",
      description: "Reserve the clubhouse for private events, meetings, or celebrations. View availability calendar and amenity details in one place.",
      image: {
        src: "/images/residents/Elegant_community_clubhouse_interior_with_modern_dbd06be7-3c40-4efa-a2c8-a81aa6be120a_0.png",
        alt: "Clubhouse event space",
      },
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Sign Up",
    url: "/demo",
  },
};