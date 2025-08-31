"use client";

import { Link } from '@inertiajs/react';
import React, { useState } from "react";
import { Check } from "lucide-react";

type PlanFeature = {
  text: string;
};

type Plan = {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyNote?: string;
  features: PlanFeature[];
  buttonText: string;
  buttonUrl: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  plans: Plan[];
};

export type LegalAdvisorsPricingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LegalAdvisorsPricing = (props: LegalAdvisorsPricingProps) => {
  const { tagline, heading, description, plans } = {
    ...LegalAdvisorsPricingDefaults,
    ...props,
  };

  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="legal-advisors-pricing" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md font-['Poppins'] font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#3C6098] text-white"
                  : "text-gray-600 hover:text-[#3C6098]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-md font-['Poppins'] font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-[#3C6098] text-white"
                  : "text-gray-600 hover:text-[#3C6098]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div key={index} className="h-full rounded-lg border border-gray-200 bg-white px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:text-xl">
                {plan.name}
              </h2>
              <p className="text-gray-600 font-['Poppins']">{plan.description}</p>
              <div className="my-8 h-px w-full bg-gray-200" />
              <h3 className="my-2 text-5xl font-bold font-['Poppins'] text-[#112358] md:text-6xl lg:text-7xl">
                {billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              </h3>
              {billingPeriod === "yearly" && plan.yearlyNote && (
                <p className="mt-2 font-medium text-[#E48B59] font-['Poppins']">{plan.yearlyNote}</p>
              )}
              <div className="mt-6 md:mt-8">
                <Link
                  href={plan.buttonUrl}
                  className="block w-full text-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                >
                  {plan.buttonText}
                </Link>
              </div>
              <div className="my-8 h-px w-full bg-gray-200" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="h-6 w-6 text-[#3C6098]" />
                    </div>
                    <p className="text-gray-600 font-['Poppins']">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LegalAdvisorsPricingDefaults: Props = {
  tagline: "Affordable",
  heading: "Legal Pricing",
  description: "Choose a plan that fits your legal practice needs.",
  plans: [
    {
      name: "Basic Plan",
      description: "Ideal for solo practitioners.",
      monthlyPrice: "$19/mo",
      yearlyPrice: "$180/yr",
      yearlyNote: "Save 20% with the annual plan",
      features: [
        { text: "AI Document Review" },
        { text: "Regulatory Change Alerts" },
        { text: "Risk Assessment Tools" },
      ],
      buttonText: "Get started",
      buttonUrl: "/signup?plan=basic",
    },
    {
      name: "Business Plan",
      description: "For growing legal practices.",
      monthlyPrice: "$29/mo",
      yearlyPrice: "$280/yr",
      yearlyNote: "Save 20% with the annual plan",
      features: [
        { text: "Enhanced Compliance Tracking" },
        { text: "Dispute Management Features" },
        { text: "Audit Trail Capabilities" },
        { text: "Client Communication Logs" },
        { text: "Custom Reporting Options" },
      ],
      buttonText: "Get started",
      buttonUrl: "/signup?plan=business",
    },
  ],
};