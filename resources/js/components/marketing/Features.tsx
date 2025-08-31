"use client";

import { Link } from '@inertiajs/react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { ChevronRight } from "lucide-react";

type ConditionalRenderProps = {
  condition: boolean;
  children: React.ReactNode;
};

const ConditionalRender = ({ condition, children }: ConditionalRenderProps) => {
  return condition ? <>{children}</> : null;
};

const useScrollAnimation = (totalSections: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });
  
  // Create all transforms upfront to respect hooks rules
  const scales = Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);
    return useTransform(scrollYProgress, [start, end], [1, 0.8]);
  });
  
  return { containerRef, scales };
};

const MotionCard = motion.div;

type FeatureCardData = {
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
  image: {
    src: string;
    alt: string;
  };
  imageFirst?: boolean;
};

export function Features() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isMobile = !isTablet;

  const scrollAnimation = useScrollAnimation(3); // Pass total number of features
  
  const features: FeatureCardData[] = [
    {
      tagline: "AI-Powered",
      heading: "Smart Document Management",
      description: "Revolutionary AI technology analyzes and organizes your HOA documents. Get instant answers about bylaws, automate compliance checks, and generate meeting minutes with one click.",
      primaryButton: {
        title: "Learn More",
        url: "/features#documents"
      },
      secondaryButton: {
        title: "See Demo",
        url: "/demo"
      },
      image: {
        src: "/images/home/features/HOA_board_members_in_a_meeting_reviewing_d_756b5284-cc8d-45ed-913d-4c9b129c2a50_0.png",
        alt: "HOA board members in a meeting reviewing documents"
      },
      imageFirst: false
    },
    {
      tagline: "Streamlined",
      heading: "Effortless Resident Portal",
      description: "Give residents 24/7 access to community resources. From amenity booking to violation reporting, everything they need in one intuitive mobile app.",
      primaryButton: {
        title: "Explore Portal",
        url: "/features#portal"
      },
      secondaryButton: {
        title: "View Features",
        url: "/features"
      },
      image: {
        src: "/images/home/features/Diverse_group_of_neighbors_looking_at_phones_tog_0fe4e658-b1aa-40e0-a8b8-f34f8d866fd8_1.png",
        alt: "Diverse group of neighbors using phones together"
      },
      imageFirst: true
    },
    {
      tagline: "Transparent",
      heading: "Complete Financial Visibility",
      description: "Track dues, manage budgets, and generate financial reports automatically. Full transparency for board members and homeowners with real-time dashboards.",
      primaryButton: {
        title: "See Benefits",
        url: "/features#financials"
      },
      secondaryButton: {
        title: "Request Demo",
        url: "/demo"
      },
      image: {
        src: "/images/home/features/Smiling_accountant_or_financial_advisor_in_profe_18468195-2502-421c-bb4f-96a5ad233b1f_1.png",
        alt: "Smiling financial advisor in professional setting"
      },
      imageFirst: false
    }
  ];

  const getButtonClasses = (variant: 'primary' | 'secondary') => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-6";
    
    if (variant === 'primary') {
      return `${baseClasses} bg-[#3C6098] text-white hover:bg-[#2d4a7a] active:bg-[#1e3562] focus-visible:ring-[#3C6098]`;
    }
    
    return `${baseClasses} text-[#3C6098] hover:text-[#2d4a7a] hover:underline`;
  };

  const renderFeatureCard = (feature: FeatureCardData, index: number) => {
    const cardContent = (
      <>
        <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-12 ${feature.imageFirst ? 'md:order-last' : 'md:order-first'}`}>
          <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{feature.tagline}</p>
          <h2 className="mb-5 text-3xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-4xl lg:text-5xl">
            {feature.heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] text-lg">
            {feature.description}
          </p>
          <div className="mt-6 flex items-center gap-x-4 md:mt-8">
            <Link 
              href={feature.primaryButton.url}
              className={getButtonClasses('primary')}
            >
              {feature.primaryButton.title}
            </Link>
            <Link
              href={feature.secondaryButton.url}
              className={`${getButtonClasses('secondary')} inline-flex items-center gap-1`}
            >
              {feature.secondaryButton.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className={`flex items-center justify-center bg-[#FBF5F0] ${feature.imageFirst ? 'md:order-first' : 'md:order-last'}`}>
          <img
            src={feature.image.src}
            alt={feature.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </>
    );

    if (isMobile) {
      return (
        <div key={index} className="grid grid-cols-1 content-center overflow-hidden bg-white rounded-lg border border-gray-100">
          {cardContent}
        </div>
      );
    }

    return (
      <MotionCard
        key={index}
        className="grid grid-cols-1 content-center overflow-hidden bg-white rounded-lg border border-gray-100 md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
        style={{ scale: scrollAnimation.scales[index] }}
      >
        {cardContent}
      </MotionCard>
    );
  };

  return (
    <section id="features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">The Platform</p>
          <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">
            Everything Your HOA Needs in One Place
          </h1>
          <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">
            Join the pilot program and experience the future of community management with our comprehensive suite of AI-powered tools.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-6 md:gap-0"
          ref={scrollAnimation.containerRef}
        >
          {features.map((feature, index) => (
            <Fragment key={index}>
              {renderFeatureCard(feature, index)}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}