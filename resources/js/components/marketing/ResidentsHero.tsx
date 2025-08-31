"use client";

import { Link } from '@inertiajs/react';
import React from "react";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
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
    row1: ImageItem[];
    row2: ImageItem[];
  };
};

export type ResidentsHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsHero = (props: ResidentsHeroProps) => {
  const { heading, description, primaryButton, secondaryButton, images } = {
    ...ResidentsHeroDefaults,
    ...props,
  };

  return (
    <section id="residents-hero" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center mx-auto">
        <div className="mb-12 max-w-4xl text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Link
              href={primaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
            >
              {primaryButton.title}
            </Link>
            <Link
              href={secondaryButton.url}
              className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
            >
              {secondaryButton.title}
            </Link>
          </div>
        </div>
        
        {/* Animated Image Gallery */}
        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            {/* Top Row - Scrolling Right */}
            <div className="grid w-full animate-marquee-right auto-cols-fr grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {images.row1.map((image, index) => (
                  <div key={`row1-1-${index}`} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                    <img
                      className="absolute inset-0 size-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {images.row1.map((image, index) => (
                  <div key={`row1-2-${index}`} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                    <img
                      className="absolute inset-0 size-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Row - Scrolling Left */}
            <div className="grid w-full animate-marquee-left grid-cols-2 gap-4 self-center">
              <div className="grid w-full grid-flow-col gap-4">
                {images.row2.map((image, index) => (
                  <div key={`row2-1-${index}`} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                    <img
                      className="absolute inset-0 size-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
              <div className="grid w-full grid-flow-col gap-4">
                {images.row2.map((image, index) => (
                  <div key={`row2-2-${index}`} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                    <img
                      className="absolute inset-0 size-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ResidentsHeroDefaults: Props = {
  heading: "Your Community at Your Fingertips",
  description: "Pay dues in seconds, submit requests with photos, and actually know what's happening in your neighborhood—all from your phone.",
  primaryButton: {
    title: "Ask Your HOA",
    url: "/contact",
  },
  secondaryButton: {
    title: "See Resident Features",
    url: "#features",
  },
  images: {
    row1: [
      { src: "/images/residents/Young_professional_woman_sitting_in_modern_apart_2a402b11-dab5-49f3-9461-294c91c5ea28_0.png", alt: "Community member using mobile app" },
      { src: "/images/residents/Close-up_of_hands_holding_smartphone_displaying__ecb130b0-1195-42e8-a8db-3fc59a1fa397_2.png", alt: "Digital payment interface" },
      { src: "/images/residents/Community_announcements_Tablet_device_on_kitchen_b669c12f-8cc9-4d47-86ad-f2e32d4a9042_2.png", alt: "Community announcements" },
      { src: "/images/residents/Maintenance_request_submission_Resident_photogra_2f221e18-6d7e-451c-b0e7-fccf29a9fc1e_0.png", alt: "Maintenance request submission" },
      { src: "/images/residents/Community_calendar_Wall-mounted_digital_display__082087d4-bb09-4b47-a617-798a1731040c_0.png", alt: "Community calendar" },
      { src: "/images/residents/Resident_portal_dashboard_Laptop_on_home_desk_di_3307b685-99a8-4eb0-b9b5-5bfdeb77e8a5_3.png", alt: "Resident portal dashboard" },
    ],
    row2: [
      { src: "/images/residents/Mobile_notifications_Smartphone_lock_screen_show_65119984-c7cf-4c1a-9351-8eaf8d84c9ea_3.png", alt: "Mobile notifications" },
      { src: "/images/residents/Community_chat_feature_Split_screen_showing_neig_fd7c68aa-50e5-4d6a-9b63-dcb42a983bc5_0.png", alt: "Community chat feature" },
      { src: "/images/residents/Payment_history_Tablet_displaying_detailed_trans_5e38e765-7f14-4411-8ea1-00379b79933f_0.png", alt: "Payment history" },
      { src: "/images/residents/Document_access_Person_accessing_digital_filing__ba4e3e0b-70cf-4fb1-a09b-0214ada00559_3.png", alt: "Document access" },
      { src: "/images/residents/Vibrant_community_gathering_in_shared_outdoor_sp_bfcc8833-8f8e-468c-a68e-84c19cd43872_3.png", alt: "Community events" },
      { src: "/images/residents/Resident_directory_Mobile_device_displaying_sear_69718ec9-966e-49c3-ade3-abe68443745a_3.png", alt: "Resident directory" },
    ],
  },
};