"use client";

import React from "react";

type Challenge = {
  tagline: string;
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
  challenges: Challenge[];
};

export type LegalAdvisorsChallengesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsChallenges = (props: LegalAdvisorsChallengesProps) => {
  const { tagline, heading, description, challenges } = {
    ...LegalAdvisorsChallengesDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-challenges" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{challenge.tagline}</p>
                  <h2 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {challenge.title}
                  </h2>
                  <p className="text-gray-600 font-['Poppins']">
                    {challenge.description}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <img
                  src={challenge.image.src}
                  alt={challenge.image.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsChallengesDefaults: Props = {
  tagline: "Understanding",
  heading: "Navigating HOA Legalities",
  description: "We take the complexity out of legal challenges, making them more manageable and understandable for you. Our goal is to provide clarity and support throughout your legal journey, ensuring peace of mind.",
  challenges: [
    {
      tagline: "Legal",
      title: "Challenges Faced by Attorneys",
      description: "Conducting manual reviews takes up a significant amount of time and resources that could be better utilized.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Mountain_of_legal_paperwork_transforming_into_or_7ae3411b-7ea3-43de-a58c-f46810105ca2_2.png",
        alt: "Legal review challenges",
      },
    },
    {
      tagline: "Compliance",
      title: "The Burden of Regulations",
      description: "Keep yourself informed and proactive in adapting to the ever-evolving landscape of regulatory changes that impact your business.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Complex_regulatory_compliance_flowchart_with_glo_67f2e79e-2f11-442f-b76d-90579fae12dc_0.png",
        alt: "Regulatory compliance",
      },
    },
    {
      tagline: "Risk",
      title: "Managing Liability Effectively",
      description: "Take proactive steps now to avoid expensive lawsuits in the future and protect your business from potential legal issues.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_3D_risk_assessment_matrix_with_predictive_analyt_ebbac499-16ec-4e9c-b50e-1a2334584c26_3.png",
        alt: "Risk management",
      },
    },
  ],
};