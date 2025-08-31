"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type AIFeature = {
  tagline: string;
  title: string;
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
  imagePosition: "left" | "right";
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: AIFeature[];
};

export type LegalAdvisorsAIProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsAI = (props: LegalAdvisorsAIProps) => {
  const { tagline, heading, description, features } = {
    ...LegalAdvisorsAIDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-ai" className="px-[5%] py-16 md:py-24 lg:py-28">
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
        <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 content-center overflow-hidden rounded-lg border border-gray-200 bg-white md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
              style={{ top: `${15 + index * 3}%` }}
            >
              <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-12 ${feature.imagePosition === "right" ? "md:order-first" : "md:order-last"}`}>
                <p className="mb-2 font-semibold text-[#E48B59] font-['Poppins']">{feature.tagline}</p>
                <h2 className="mb-5 text-3xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-4xl lg:text-5xl">
                  {feature.title}
                </h2>
                <p className="text-gray-600 font-['Poppins']">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Link
                    href={feature.primaryButton.url}
                    className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-[#3C6098]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                  >
                    {feature.primaryButton.title}
                  </Link>
                  <Link
                    href={feature.secondaryButton.url}
                    className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                  >
                    {feature.secondaryButton.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className={`flex flex-col items-center justify-center ${feature.imagePosition === "right" ? "md:order-last" : "md:order-first"}`}>
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsAIDefaults: Props = {
  tagline: "Efficiency",
  heading: "AI Document Review Revolution",
  description: "Transform your compliance processes with AI technology.",
  features: [
    {
      tagline: "Speed",
      title: "Experience Rapid Document Analysis",
      description: "Our AI Compliance Engine reviews documents in seconds, highlighting risks and ensuring adherence to regulations. Say goodbye to tedious manual reviews and embrace a smarter way to manage compliance.",
      primaryButton: {
        title: "Demo",
        url: "/demo",
      },
      secondaryButton: {
        title: "Watch",
        url: "/watch-demo",
      },
      image: {
        src: "/images/legal-advisors/rob_thomas23_Split_screen_comparison_cluttered_desk_with_pape_6a8285fa-6bdf-446c-8a58-6dd3044cf703_1.png",
        alt: "AI document analysis",
      },
      imagePosition: "left",
    },
    {
      tagline: "Accuracy",
      title: "Intelligent Risk Detection",
      description: "Advanced pattern recognition identifies potential compliance issues before they become problems. Our AI learns from thousands of legal documents to provide unmatched accuracy.",
      primaryButton: {
        title: "Learn More",
        url: "/features",
      },
      secondaryButton: {
        title: "See Results",
        url: "/case-studies",
      },
      image: {
        src: "/images/legal-advisors/rob_thomas23_Heat_map_visualization_of_compliance_risks_acros_c2f097ba-a7de-40d8-a4a8-324d60315ab1_2.png",
        alt: "Risk detection dashboard",
      },
      imagePosition: "right",
    },
    {
      tagline: "Automation",
      title: "Streamlined Workflow Integration",
      description: "Seamlessly integrate AI-powered compliance into your existing legal workflow. Automate routine tasks and focus on high-value strategic work for your clients.",
      primaryButton: {
        title: "Explore",
        url: "/workflow",
      },
      secondaryButton: {
        title: "Integration Guide",
        url: "/docs",
      },
      image: {
        src: "/images/legal-advisors/rob_thomas23_Seamless_workflow_integration_diagram_connected__fa4e155b-af68-46b2-b481-9845ee92fb5d_0.png",
        alt: "Workflow automation",
      },
      imagePosition: "left",
    },
    {
      tagline: "Insights",
      title: "Predictive Compliance Analytics",
      description: "Stay ahead of regulatory changes with predictive analytics. Our AI monitors legal trends and alerts you to potential compliance impacts before they affect your clients.",
      primaryButton: {
        title: "View Analytics",
        url: "/analytics",
      },
      secondaryButton: {
        title: "Request Demo",
        url: "/demo",
      },
      image: {
        src: "/images/legal-advisors/rob_thomas23_Futuristic_predictive_analytics_dashboard_foreca_3fb1d816-c96c-4abc-af93-02b85b2d5ba5_3.png",
        alt: "Predictive analytics dashboard",
      },
      imagePosition: "right",
    },
  ],
};