"use client";

import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

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
    src: string;
    alt: string;
  }[];
};

export type LegalAdvisorsHeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsHero = (props: LegalAdvisorsHeroProps) => {
  const { heading, description, primaryButton, secondaryButton, images } = {
    ...LegalAdvisorsHeroDefaults,
    ...props,
  };

  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return (
    <section id="legal-advisors-hero" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="mb-5 text-5xl font-bold text-white font-['Poppins'] md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h1>
              <p className="text-white font-['Poppins'] md:text-lg">
                {description}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Link
                  href={primaryButton.url}
                  className="inline-flex items-center justify-center rounded-lg bg-[#E48B59] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#E48B59]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                >
                  {primaryButton.title}
                </Link>
                <Link
                  href={secondaryButton.url}
                  className="inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 font-['Poppins'] font-medium hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                >
                  {secondaryButton.title}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-[#112358]/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-4 md:grid-cols-3"
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`relative ${
                  index === 1 || index === 4 || index === 7 ? 'block' : 'hidden md:block'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsHeroDefaults: Props = {
  heading: "AI-Powered Legal Compliance for Modern HOAs",
  description: "Automate document review, track regulatory changes, and prevent violations before they happen. Our innovative platform empowers legal advisors to streamline their processes and enhance compliance.",
  primaryButton: {
    title: "Schedule Legal Demo",
    url: "/demo",
  },
  secondaryButton: {
    title: "See AI in Action",
    url: "/features#ai",
  },
  images: [
    { src: "/images/legal-advisors/rob_thomas23_Professional_legal_team_reviewing_holographic_le_1bdd13d0-360d-4b00-a399-1fae7d4d02b3_0.png", alt: "Legal document review" },
    { src: "/images/legal-advisors/rob_thomas23_Legal_command_center_with_multiple_monitoring_sc_29db9742-16eb-4d5c-b51e-ae97935daa4a_1.png", alt: "Compliance dashboard" },
    { src: "/images/legal-advisors/rob_thomas23_Female_attorney_using_advanced_voice_recognition_4305447a-e62a-4f68-96ed-307814bb69c2_2.png", alt: "Voice recognition technology" },
    { src: "/images/legal-advisors/rob_thomas23_Digital_law_library_with_floating_holographic_bo_02db76f6-3513-4e77-834e-6ba1986a46ef_0.png", alt: "Digital law library" },
    { src: "/images/legal-advisors/rob_thomas23_Virtual_courtroom_with_multiple_screens_video_co_3fa7881f-5954-4812-96ec-51f1be0a03d8_0.png", alt: "Virtual courtroom" },
    { src: "/images/legal-advisors/rob_thomas23_AI_analyzing_legal_contracts_with_highlighted_cl_ef2643a1-d4c4-4089-b7ed-bf69882c50af_3.png", alt: "AI contract analysis" },
    { src: "/images/legal-advisors/rob_thomas23_Blockchain_smart_contracts_visualization_legal_p_559220bb-2823-4723-a08c-d5a49b45ab78_1.png", alt: "Blockchain contracts" },
    { src: "/images/legal-advisors/rob_thomas23_Interactive_compliance_map_showing_multiple_juri_5af7a5f6-d4f2-4c68-bd5a-54ff416be82a_2.png", alt: "Compliance map" },
    { src: "/images/legal-advisors/rob_thomas23_Secure_client_portal_interface_on_tablet_documen_a1d9ab72-2d52-46bc-909e-998fc55ccf99_0.png", alt: "Secure client portal" },
  ],
};