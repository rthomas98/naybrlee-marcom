"use client";

import React from "react";
import { FileText, Bell, Shield } from "lucide-react";

type Tool = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tools: Tool[];
};

export type LegalAdvisorsToolsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsTools = (props: LegalAdvisorsToolsProps) => {
  const { tagline, heading, description, tools } = {
    ...LegalAdvisorsToolsDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-tools" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-gray-600 font-['Poppins'] md:text-lg">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {tools.map((tool, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#3C6098]/10 md:mb-6">
                  {tool.icon}
                </div>
                <h3 className="mb-5 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tool.title}
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsToolsDefaults: Props = {
  tagline: "Tools",
  heading: "Empowering Attorneys with Advanced Legal Tools",
  description: "Naybrlee offers a suite of powerful tools designed specifically for legal professionals managing HOA compliance. Streamline your workflow and enhance your practice with our innovative solutions.",
  tools: [
    {
      icon: <FileText className="h-8 w-8 text-[#3C6098]" />,
      title: "Document Intelligence for Enhanced Accuracy",
      description: "Utilize advanced AI technology to effortlessly analyze and interpret bylaws and contracts, streamlining your legal processes for better efficiency.",
    },
    {
      icon: <Bell className="h-8 w-8 text-[#3C6098]" />,
      title: "Stay Ahead with Regulatory Tracking",
      description: "Stay updated with immediate notifications regarding legal changes that are specific to your jurisdiction, ensuring you never miss important updates that affect you.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#3C6098]" />,
      title: "Proactive Risk Management Solutions",
      description: "Streamline and automate your risk assessments to significantly reduce potential liability and enhance efficiency.",
    },
  ],
};