"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { ChevronRight } from "lucide-react";

type OnboardingStep = {
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
  steps: OnboardingStep[];
};

export type FeaturesOnboardingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesOnboarding = (props: FeaturesOnboardingProps) => {
  const { tagline, heading, description, primaryButton, secondaryButton, steps } = {
    ...FeaturesOnboardingDefaults,
    ...props,
  };

  return (
    <section id="features-onboarding" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-20 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-lg md:mr-12 md:ml-[5vw] lg:mr-20">
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
                    className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
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
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky top-0 flex h-screen flex-col justify-center border-t border-gray-200 bg-[#FBF5F0] px-[5%] py-10 md:px-10"
            >
              <div className="max-w-lg">
                <div className="mb-6 md:mb-8">
                  <img
                    src={step.image.src}
                    alt={step.image.alt}
                    className="size-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturesOnboardingDefaults: Props = {
  tagline: "Easy Onboarding",
  heading: "Adoption Made Simple for Volunteer Boards",
  description: "Transitioning to Naybrlee is effortless. Our straightforward setup ensures that your board can start benefiting from our tools in no time.",
  primaryButton: {
    title: "Start Free Trial",
    url: "/demo",
  },
  secondaryButton: {
    title: "View Pricing",
    url: "/pricing",
  },
  steps: [
    {
      title: "Step 1: Initial Setup",
      description: "Import your community data in minutes with our automated migration tools. We'll handle the heavy lifting, including resident information, financial records, and existing documents. Our smart import system recognizes common formats and organizes everything automatically.",
      image: {
        src: "/images/features/features-onboarding/Clean_modern_setup_wizard_interface_data_import__8281ad7c-f1fb-4f5a-b95a-7a5fa20669d7_1.png",
        alt: "Clean modern setup wizard interface with data import",
      },
    },
    {
      title: "Step 2: Board Training",
      description: "Get your board up to speed with personalized 30-minute training sessions. Our dedicated success team walks you through every feature, ensuring everyone feels confident. We provide role-specific training so each board member masters their specific tools.",
      image: {
        src: "/images/features/features-onboarding/Video_conference_call_showing_friendly_support_s_f0d1a9ec-2fa9-485a-b299-4619d37d6653_0.png",
        alt: "Video conference call showing friendly support specialist training",
      },
    },
    {
      title: "Step 3: Resident Onboarding",
      description: "Seamlessly invite residents with our automated welcome system. They'll receive personalized invitations with simple instructions to access their portal. Our self-service resources and in-app guides ensure smooth adoption across your entire community.",
      image: {
        src: "/images/features/features-onboarding/Email_invitation_interface_resident_portal_welco_05bcbac8-cce6-4fc4-920a-3b36bfd637ae_2.png",
        alt: "Email invitation interface and resident portal welcome",
      },
    },
    {
      title: "Step 4: Go Live",
      description: "Launch with confidence knowing our support team is standing by. We'll monitor your first week closely, addressing any questions immediately. Your dedicated success manager ensures a smooth transition and helps optimize your workflows for maximum efficiency.",
      image: {
        src: "/images/features/features-onboarding/Success_dashboard_with_confetti_animation_Youre__9cd774c8-9b6b-4924-baf7-eab7825ee5e6_3.png",
        alt: "Success dashboard with confetti animation - You're Live!",
      },
    },
  ],
};