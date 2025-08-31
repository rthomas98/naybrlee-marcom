"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight, Plug, Code } from "lucide-react";

type Integration = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
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
  backgroundImage: {
    src: string;
    alt: string;
  };
  integrations: Integration[];
};

export type PropertyManagersIntegrationsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersIntegrations = (props: PropertyManagersIntegrationsProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, backgroundImage, integrations } = {
    ...PropertyManagersIntegrationsDefaults,
    ...props,
  };

  return (
    <section id="property-managers-integrations" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Hero Card with Background */}
          <div className="relative mb-8 rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center px-8 py-16 md:px-12 md:py-24">
              <div className="max-w-2xl text-center text-white">
                <p className="mb-3 font-semibold font-['Poppins'] md:mb-4">
                  {tagline}
                </p>
                <h2 className="mb-5 text-4xl font-bold font-['Poppins'] md:mb-6 md:text-5xl lg:text-6xl">
                  {heading}
                </h2>
                <p className="font-['Poppins'] md:text-lg">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Link
                    href={primaryButton.url}
                    className="inline-flex items-center justify-center rounded-lg bg-white text-[#3C6098] px-6 py-3 font-['Poppins'] font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                  >
                    {primaryButton.title}
                  </Link>
                  <Link
                    href={secondaryButton.url}
                    className="inline-flex items-center gap-1 text-white hover:text-gray-200 font-['Poppins'] font-medium transition-colors"
                  >
                    {secondaryButton.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <img
                  src={backgroundImage.src}
                  className="h-full w-full object-cover"
                  alt={backgroundImage.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#112358]/90 to-[#3C6098]/80" />
              </div>
            </div>
          </div>

          {/* Integration Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10">
                  {integration.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl">
                  {integration.title}
                </h3>
                <p className="mb-6 text-gray-600 font-['Poppins']">
                  {integration.description}
                </p>
                <Link
                  href={integration.link.url}
                  className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                >
                  {integration.link.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersIntegrationsDefaults: Props = {
  tagline: "Compatibility",
  heading: "Works Seamlessly With Your Existing Tools",
  description: "Naybrlee integrates effortlessly with the tools you already use. Enhance your property management experience with our robust compatibility.",
  primaryButton: {
    title: "Learn More",
    url: "/integrations",
  },
  secondaryButton: {
    title: "Sign Up",
    url: "/demo",
  },
  backgroundImage: {
    src: "/images/property-managers/remaining/Abstract_network_visualization_of_interconnected_b1d84a9d-0aef-4707-af92-4c647b306be3_1.png",
    alt: "Integration network visualization",
  },
  integrations: [
    {
      icon: <Plug className="h-6 w-6 text-[#3C6098]" />,
      title: "Key Integrations",
      description: "Integrate with AppFolio, Buildium, Yardi, QuickBooks, Xero, RentPayment, Stripe, and more.",
      link: {
        title: "Explore",
        url: "/integrations",
      },
    },
    {
      icon: <Code className="h-6 w-6 text-[#3C6098]" />,
      title: "Custom API Available",
      description: "Tailor Naybrlee to fit your unique processes with our customizable API solutions.",
      link: {
        title: "Get Started",
        url: "/api-docs",
      },
    },
  ],
};