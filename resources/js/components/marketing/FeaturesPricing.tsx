"use client";

import { Link } from '@inertiajs/react';
import React from "react";
import { Check, X } from "lucide-react";

type BillingCycle = "monthly" | "annually";

type PricingTier = {
  title: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: {
    text: string;
    included: boolean;
  }[];
  button: {
    title: string;
    url: string;
  };
  badge?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tiers: PricingTier[];
};

export type FeaturesPricingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesPricing = (props: FeaturesPricingProps) => {
  const { tagline, heading, description, tiers } = {
    ...FeaturesPricingDefaults,
    ...props,
  };

  const [billingCycle, setBillingCycle] = React.useState<BillingCycle>("monthly");

  return (
    <section id="features-pricing" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">{description}</p>
        </div>
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className={`font-['Poppins'] font-medium ${billingCycle === "monthly" ? "text-[#112358]" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[#3C6098] transition-transform ${
                billingCycle === "annually" ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-['Poppins'] font-medium ${billingCycle === "annually" ? "text-[#112358]" : "text-gray-500"}`}>
            Annually
          </span>
          {billingCycle === "annually" && (
            <span className="rounded-lg bg-[#E48B59]/10 px-2 py-1 text-sm font-['Poppins'] font-medium text-[#E48B59]">
              Save 20%
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg border ${
                tier.badge ? "border-[#3C6098] ring-2 ring-[#3C6098]/20" : "border-gray-200"
              } bg-white p-8`}
            >
              {tier.badge && (
                <div className="mb-4 inline-block rounded-lg bg-[#E48B59] px-3 py-1 text-sm font-['Poppins'] font-medium text-white">
                  {tier.badge}
                </div>
              )}
              <h3 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:text-3xl">
                {tier.title}
              </h3>
              <p className="mb-6 text-gray-600 font-['Poppins']">{tier.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold font-['Poppins'] text-[#112358] md:text-6xl">
                  ${billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice}
                </span>
                <span className="ml-2 text-gray-600 font-['Poppins']">
                  per {billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>
              <Link
                href={tier.button.url}
                className={`mb-8 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  tier.badge
                    ? "bg-[#3C6098] text-white hover:bg-[#2d4a7a] focus-visible:ring-[#3C6098]"
                    : "border border-[#3C6098] text-[#3C6098] hover:bg-[#3C6098]/10 focus-visible:ring-[#3C6098]"
                }`}
              >
                {tier.button.title}
              </Link>
              <div className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <span
                      className={`font-['Poppins'] ${
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.text}
                    </span>
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

export const FeaturesPricingDefaults: Props = {
  tagline: "Pilot Program Pricing",
  heading: "Be Among the First",
  description: "Join our exclusive pilot program and get special founding member pricing. Limited spots available.",
  tiers: [
    {
      title: "Starter",
      description: "Perfect for smaller HOA communities getting started",
      monthlyPrice: 49,
      annualPrice: 470,
      features: [
        { text: "Up to 50 homes", included: true },
        { text: "Core board management tools", included: true },
        { text: "Resident communication portal", included: true },
        { text: "Document storage (5GB)", included: true },
        { text: "Email support", included: true },
        { text: "Monthly training webinars", included: false },
        { text: "Advanced reporting", included: false },
        { text: "API access", included: false },
      ],
      button: {
        title: "Start Free Trial",
        url: "/demo",
      },
    },
    {
      title: "Professional",
      description: "Our most popular plan for growing communities",
      monthlyPrice: 99,
      annualPrice: 950,
      badge: "Most Popular",
      features: [
        { text: "Up to 200 homes", included: true },
        { text: "All Starter features", included: true },
        { text: "Financial management tools", included: true },
        { text: "Document storage (50GB)", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Monthly training webinars", included: true },
        { text: "Advanced reporting", included: true },
        { text: "API access", included: false },
      ],
      button: {
        title: "Start Free Trial",
        url: "/demo",
      },
    },
    {
      title: "Enterprise",
      description: "For large communities with advanced needs",
      monthlyPrice: 199,
      annualPrice: 1910,
      features: [
        { text: "Unlimited homes", included: true },
        { text: "All Professional features", included: true },
        { text: "Custom integrations", included: true },
        { text: "Unlimited document storage", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom training sessions", included: true },
        { text: "Advanced analytics & insights", included: true },
        { text: "Full API access", included: true },
      ],
      button: {
        title: "Contact Sales",
        url: "/contact",
      },
    },
  ],
};