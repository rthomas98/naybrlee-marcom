"use client";

import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";

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
  images: {
    row1: { src: string; alt: string }[];
    row2: { src: string; alt: string }[];
  };
};

export type LegalAdvisorsTrustProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsTrust = (props: LegalAdvisorsTrustProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, images } = {
    ...LegalAdvisorsTrustDefaults,
    ...props,
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const xPartOne = useTransform(scrollYProgress, [0, 1], ["1%", "5%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["-1%", "-5%"]);

  return (
    <section
      id="legal-advisors-trust"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
              <h2 className="text-4xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </div>
            <div>
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
          <div className="flex w-screen flex-col items-center gap-4 overflow-hidden">
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartOne }}
            >
              {images.row1.map((image, index) => (
                <div key={`row1-${index}`} className="w-[40vw] flex-none md:w-[30vw]">
                  <img
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartTwo }}
            >
              {images.row2.map((image, index) => (
                <div key={`row2-${index}`} className="w-[40vw] flex-none md:w-[30vw]">
                  <img
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsTrustDefaults: Props = {
  tagline: "Trust",
  heading: "Built by Lawyers, for Lawyers: Accuracy & Trust",
  description: "Our AI compliance engine is designed with the legal professional in mind, ensuring that every document is reviewed with precision. With over 50,000 documents trained, our system continuously learns and adapts to the complexities of HOA law. Experience the confidence that comes from a solution built by legal experts for legal experts.",
  primaryButton: {
    title: "Learn More",
    url: "/about",
  },
  secondaryButton: {
    title: "Sign Up",
    url: "/demo",
  },
  images: {
    row1: [
      { src: "/images/legal-advisors/rob_thomas23_Distinguished_legal_team_in_professional_attire__42b1473f-c2fe-457b-9e05-0811a8c9a458_2.png", alt: "Legal expertise" },
      { src: "/images/legal-advisors/rob_thomas23_Wall_of_glowing_certification_badges_and_legal_a_e8901ad0-9d42-4eb7-ae3d-b43c1a01d64f_1.png", alt: "Certifications" },
      { src: "/images/legal-advisors/rob_thomas23_AI_neural_network_processing_thousands_of_legal__804f827b-67a8-419b-b5f8-2f71e5e1be45_3.png", alt: "AI training" },
      { src: "/images/legal-advisors/rob_thomas23_Legal_accuracy_metrics_dashboard_showing_99_succ_cb4938b3-648e-4285-8116-80e125b41016_1.png", alt: "Legal accuracy" },
    ],
    row2: [
      { src: "/images/legal-advisors/rob_thomas23_Advisory_board_of_senior_attorneys_in_modern_boa_51dcfdd8-475c-4e38-a347-ffbb0b9b70cc_3.png", alt: "Advisory board" },
      { src: "/images/legal-advisors/rob_thomas23_Advanced_legal_research_center_with_AI_terminals_bdf44b61-3898-4d64-84af-e9bf54d3d735_1.png", alt: "Legal research" },
      { src: "/images/legal-advisors/rob_thomas23_Quality_assurance_process_flowchart_for_document_1678d29a-1cc6-4169-afe8-7fc1ed01ee19_1.png", alt: "Quality assurance" },
      { src: "/images/legal-advisors/rob_thomas23_Client_success_stories_wall_with_glowing_testimo_bd169071-dac6-4144-8534-0d3a544c1001_2.png", alt: "Client success" },
    ],
  },
};