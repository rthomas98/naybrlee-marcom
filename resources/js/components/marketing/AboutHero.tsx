"use client";

import React, { useRef } from "react";
import { Link } from '@inertiajs/react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

const useScrollAnimation = () => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center start"],
  });
  
  const initialImageWidth = isMobile ? "60%" : "20%";
  const initialImageHeight = "40%";
  
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageWidth, "100%"],
  );
  
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageHeight, "100%"],
  );
  
  const imageYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  
  const cardYPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "100%", "0%"],
  );
  
  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
    y: imageYPosition,
  };
  
  const cardStyle = {
    y: cardYPosition,
  };
  
  return { containerRef, imageStyle, cardStyle };
};

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
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type AboutHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const AboutHero = (props: AboutHeroProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, backgroundImage } = {
    ...AboutHeroDefaults,
    ...props,
  };
  
  const scrollAnimation = useScrollAnimation();
  
  return (
    <section id="about-hero" className="h-[200vh]" ref={scrollAnimation.containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.img
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          className="size-full object-cover"
          style={scrollAnimation.imageStyle}
        />
        <motion.div
          className="absolute inset-0 mx-auto flex size-full max-w-7xl items-center justify-end px-[5%]"
          style={scrollAnimation.cardStyle}
        >
          <div className="flex w-[90%] flex-col bg-white rounded-lg border border-gray-100 p-6 md:max-w-[658px] md:p-12">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href={primaryButton.url}
                className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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
        </motion.div>
      </div>
    </section>
  );
};

export const AboutHeroDefaults: Props = {
  tagline: "Our Mission",
  heading: "Building Stronger Communities Through Smarter Technology",
  description: "Founded by Robert Thomas, Naybrlee emerged from a simple belief: every neighborhood deserves professional-grade management tools, regardless of size or budget. We're on a mission to democratize HOA management through intelligent, accessible technology.",
  primaryButton: {
    title: "Join Our Pilot Program",
    url: "/demo",
  },
  secondaryButton: {
    title: "Meet the Team",
    url: "#team",
  },
  backgroundImage: {
    src: "/images/about/Split_composition_technologyoffice_on_one_side_c_f003df3e-fedf-4ce8-90ff-83865cfe6339_3 (1).png",
    alt: "Split composition showing technology and community connection",
  },
};