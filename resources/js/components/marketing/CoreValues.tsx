"use client";

import React, { useRef } from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Value = {
  number: string;
  tagline: string;
  heading: string;
  description: string;
  primaryButton?: {
    title: string;
    url: string;
  };
  secondaryButton?: {
    title: string;
    url: string;
  };
};

type Props = {
  values: Value[];
};

export type CoreValuesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CoreValues = (props: CoreValuesProps) => {
  const { values } = {
    ...CoreValuesDefaults,
    ...props,
  };

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const valueCount = values.length;
  const numbers = Array.from({ length: valueCount }, (_, index) => index + 1);
  const y = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    ["0%", "-33.5%", "-33.5%", "-66.5%"],
  );

  return (
    <section id="core-values" ref={ref} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <h1 className="text-[6rem] font-bold font-['Poppins'] text-[#E48B59] leading-[1] md:text-[14rem]">0</h1>
            <motion.div className="text-center" style={{ y }}>
              {numbers.map((number, index) => (
                <h1 key={index} className="text-[6rem] font-bold font-['Poppins'] text-[#E48B59] leading-[1] md:text-[14rem]">
                  {number}
                </h1>
              ))}
            </motion.div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ ...value }: Value) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const animatedWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const width = useTransform(animatedWidth, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold font-['Poppins'] text-[#E48B59] leading-[1] md:mt-0 md:hidden md:text-[14rem]">
        {value.number}
      </div>
      <div ref={ref} className="mb-8 mt-8 h-0.5 w-full bg-gray-200 md:mt-0">
        <motion.div className="h-0.5 bg-[#3C6098]" style={{ width }} />
      </div>
      <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{value.tagline}</p>
      <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
        {value.heading}
      </h2>
      <p className="text-gray-600 font-['Poppins'] text-lg md:text-xl">{value.description}</p>
      {(value.primaryButton || value.secondaryButton) && (
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {value.primaryButton && (
            <Link 
              href={value.primaryButton.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
            >
              {value.primaryButton.title}
            </Link>
          )}
          {value.secondaryButton && (
            <Link
              href={value.secondaryButton.url}
              className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
            >
              {value.secondaryButton.title}
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export const CoreValuesDefaults: Props = {
  values: [
    {
      number: "01",
      tagline: "Innovation",
      heading: "Technology That Works for You",
      description: "We believe in making sophisticated technology accessible. Our AI-powered platform transforms complex HOA management into simple, intuitive workflows that anyone can master.",
      primaryButton: {
        title: "See Our Features",
        url: "/features",
      },
      secondaryButton: {
        title: "View Demo",
        url: "/demo",
      },
    },
    {
      number: "02",
      tagline: "Transparency",
      heading: "Open Communication, Always",
      description: "Every community member deserves visibility into decisions and operations. We built Naybrlee to foster transparency, ensuring everyone stays informed and engaged.",
      primaryButton: {
        title: "Learn More",
        url: "/features#transparency",
      },
      secondaryButton: {
        title: "Contact Us",
        url: "/contact",
      },
    },
    {
      number: "03",
      tagline: "Community",
      heading: "People First, Technology Second",
      description: "At our core, we're about strengthening neighborhoods. Technology is just our tool to bring people together, improve lives, and create thriving communities.",
      primaryButton: {
        title: "Join Our Pilot",
        url: "/demo",
      },
      secondaryButton: {
        title: "Our Story",
        url: "#founder-story",
      },
    },
  ],
};