"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type Integration = {
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
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
  integrations: Integration[];
};

export type LegalAdvisorsIntegrationProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsIntegration = (props: LegalAdvisorsIntegrationProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, integrations } = {
    ...LegalAdvisorsIntegrationDefaults,
    ...props,
  };

  return (
    <section id="legal-advisors-integration" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:mr-12 md:ml-[5vw] lg:mr-20">
                <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
                <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
                  {heading}
                </h2>
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
          </div>
        </div>
        <div>
          {integrations.map((integration, index) => (
            <div key={index} className="sticky top-0 flex h-screen flex-col justify-center p-10">
              <div className="max-w-md text-white">
                <h3 className="mb-3 text-xl font-bold font-['Poppins'] md:mb-4 md:text-2xl">
                  {integration.title}
                </h3>
                <p className="font-['Poppins']">
                  {integration.description}
                </p>
              </div>
              <div className="absolute inset-0 -z-10">
                <img
                  src={integration.image.src}
                  className="size-full object-cover"
                  alt={integration.image.alt}
                />
                <div className="absolute inset-0 bg-[#112358]/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsIntegrationDefaults: Props = {
  tagline: "Integration",
  heading: "Seamless Integration for Your Legal Practice",
  description: "Naybrlee fits effortlessly into your existing workflow, enhancing efficiency without disruption. Our platform integrates with leading legal software to streamline your operations.",
  primaryButton: {
    title: "Learn More",
    url: "/integrations",
  },
  secondaryButton: {
    title: "Sign Up",
    url: "/demo",
  },
  integrations: [
    {
      title: "Document Management Systems",
      description: "Connect seamlessly with your existing document management platforms. Import and export files effortlessly while maintaining version control and audit trails.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Document_management_system_integration_files_flo_49e89e9f-9a7f-4436-b07f-fe6ff10b5753_3.png",
        alt: "Document management integration",
      },
    },
    {
      title: "Practice Management Software",
      description: "Integrate with leading practice management tools to synchronize client data, billing information, and case management workflows automatically.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Practice_management_software_dashboard_with_sync_42dc8a20-c222-41c2-b669-f08e21565792_0.png",
        alt: "Practice management integration",
      },
    },
    {
      title: "Communication Platforms",
      description: "Connect with email clients and secure messaging systems to maintain seamless communication while preserving attorney-client privilege.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Encrypted_communication_platform_with_secure_mes_f673ea98-6e77-47f0-bd94-44906c3cd016_1.png",
        alt: "Communication platform integration",
      },
    },
    {
      title: "Compliance Databases",
      description: "Access real-time regulatory updates from multiple jurisdictions through integrated compliance databases and legal research platforms.",
      image: {
        src: "/images/legal-advisors/rob_thomas23_Multi-jurisdictional_compliance_database_with_li_838a703c-ac6c-497f-a1f0-bd79b5f320a0_0.png",
        alt: "Compliance database integration",
      },
    },
  ],
};