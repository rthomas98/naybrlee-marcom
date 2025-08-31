"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

type StatProps = {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  stats: StatProps[];
  image: {
    src: string;
    alt: string;
  };
};

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(motionValue, (latest) => 
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export type ImpactStatsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ImpactStats = (props: ImpactStatsProps) => {
  const { tagline, heading, description, stats, image } = {
    ...ImpactStatsDefaults,
    ...props,
  };

  return (
    <section id="impact-stats" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image.src}
              className="w-full rounded-lg object-cover"
              alt={image.alt}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="mb-6 text-lg text-gray-600 font-['Poppins'] md:mb-8 md:text-xl">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-4xl font-bold font-['Poppins'] text-[#3C6098] md:text-5xl lg:text-6xl">
                    <AnimatedNumber value={stat.numericValue} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-600 font-['Poppins']">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImpactStatsDefaults: Props = {
  tagline: "Our Goal",
  heading: "Building the Future of Community Management",
  description: "While we're just beginning our journey, our vision is clear: to transform how communities operate nationwide. Our pilot program is the first step toward revolutionizing HOA management.",
  stats: [
    {
      value: "50+",
      numericValue: 50,
      suffix: "+",
      label: "Communities Ready to Join Our Pilot Program",
    },
    {
      value: "10,000+",
      numericValue: 10000,
      suffix: "+",
      label: "Residents Waiting for Modern HOA Solutions",
    },
  ],
  image: {
    src: "/images/about/Diverse_representation_of_potential_users_--ar_4_5a965486-68ef-4883-8e22-b18917f848ca_3 (1).png",
    alt: "Diverse representation of potential Naybrlee users",
  },
};