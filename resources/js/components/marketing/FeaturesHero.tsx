"use client";

import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from '@/hooks/use-media-query';
import React from "react";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  buttons: Array<{
    title: string;
    url: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  }>;
  images: ImageProps[];
};

export type FeaturesHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesHero = (props: FeaturesHeroProps) => {
  const { title, description, buttons, images } = {
    ...FeaturesHeroDefaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const { scrollYProgress } = useScroll();

  const createTransform = (mobileValues: string[], desktopValues: string[]) =>
    useTransform(scrollYProgress, [0, 1], isMobile ? mobileValues : desktopValues);

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
    width: createTransform(["50vw", "100vw"], ["36vw", "100vw"]),
    height: createTransform(["60vh", "100vh"], ["80vh", "100vh"]),
  };

  const rightImageGroup = {
    x: createTransform(["0vw", "25vw"], ["0vw", "32vw"]),
  };

  return (
    <section id="features-hero" className="relative h-[250vh]">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container mx-auto">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
              {description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.url}
                  className={getButtonClasses(button.variant)}
                >
                  {button.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%] content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img 
                className="aspect-[2/3] w-full object-cover rounded-lg" 
                src={images[0].src}
                alt={images[0].alt}
              />
            </div>

            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative">
                <img 
                  className="aspect-square w-full object-cover rounded-lg" 
                  src={images[1].src}
                  alt={images[1].alt}
                />
              </div>
              <div className="relative">
                <img 
                  className="aspect-[3/4] w-full object-cover rounded-lg" 
                  src={images[2].src}
                  alt={images[2].alt}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" style={centerImageContainer}>
            <img 
              className="size-full object-cover rounded-lg" 
              src={images[3].src}
              alt={images[3].alt}
            />
          </motion.div>

          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={rightImageGroup}
          >
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-[40vw] sm:w-auto">
                <img 
                  className="aspect-[3/4] w-full object-cover rounded-lg" 
                  src={images[4].src}
                  alt={images[4].alt}
                />
              </div>
              <div className="relative w-[40vw] sm:w-auto">
                <img 
                  className="aspect-square w-full object-cover rounded-lg" 
                  src={images[5].src}
                  alt={images[5].alt}
                />
              </div>
            </div>

            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img 
                className="aspect-[2/3] w-full object-cover rounded-lg" 
                src={images[6].src}
                alt={images[6].alt}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const getButtonClasses = (variant?: string) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3";
  
  const variantClasses: Record<string, string> = {
    default: "bg-[#E48B59] text-white hover:bg-[#d87a48] active:bg-[#c56a38] focus-visible:ring-[#E48B59]",
    secondary: "bg-[#3C6098] text-white hover:bg-[#2d4a7a] active:bg-[#1e3562] focus-visible:ring-[#3C6098]",
    outline: "border-2 border-[#3C6098] text-[#3C6098] hover:bg-[#3C6098] hover:text-white active:bg-[#2d4a7a]",
    ghost: "text-[#3C6098] hover:bg-[#FBF5F0] active:bg-[#f5ede4]"
  };
  
  return `${baseClasses} ${variantClasses[variant || 'default']}`;
};

export const FeaturesHeroDefaults: Props = {
  title: "Powerful Features for Modern HOA Management",
  description: "Discover comprehensive tools designed to streamline operations, enhance communication, and build stronger communities. Every feature works together seamlessly.",
  buttons: [
    {
      title: "Start Free Trial",
      url: "/demo",
      variant: "default",
    },
    {
      title: "View All Features",
      url: "#features-grid",
      variant: "outline",
    },
  ],
  images: [
    {
      src: "/images/features/hero/Dashboard_Overview_Shows_financial_overview_memb_12296306-afee-4fcc-99f3-afe36f2e732e_1.png",
      alt: "HOA management dashboard overview",
    },
    {
      src: "/images/features/hero/Financial_Reports_Budget_tracking_interface_--ar_83508324-9ff7-4538-9a2b-2d20d6e4279e_0.png",
      alt: "Financial reports and budget tracking",
    },
    {
      src: "/images/features/hero/Communication_Hub_-_Message_center_interface_--a_eaf0b6af-ab7d-4587-a636-3997a375bdb9_3.png",
      alt: "Communication hub and message center",
    },
    {
      src: "/images/features/hero/Main_Feature_Showcase_-_Split_screen_showing_boa_29282a45-d3b6-49f8-96b5-15983ec443b5_1.png",
      alt: "Naybrlee main features showcase",
    },
    {
      src: "/images/features/hero/Document_Management_-_File_organization_system_-_e9832f08-82d5-4e9d-a03c-d01594e237d4_0.png",
      alt: "Document management and file organization",
    },
    {
      src: "/images/features/hero/Mobile_App_-_Phone_mockup_showing_resident_app_-_21aaf578-7cbd-4452-af60-dd07d936bdfb_2.png",
      alt: "Mobile app for residents",
    },
    {
      src: "/images/features/hero/Meeting_Tools_-_Virtual_meeting_interface_--ar_4_379edc3f-fa25-4d43-94e2-868b6c450231_3.png",
      alt: "Virtual meeting tools and interface",
    },
  ],
};