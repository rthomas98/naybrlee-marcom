"use client";

import { Link } from '@inertiajs/react';
import React, { useState } from "react";
import { Check, DollarSign, Building } from "lucide-react";

type PricingFeature = {
  text: string;
};

type PricingPlan = {
  icon: React.ReactNode;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  button: {
    title: string;
    url: string;
  };
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  plans: PricingPlan[];
};

export type PropertyManagersPricingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PropertyManagersPricing = (props: PropertyManagersPricingProps) => {
  const { tagline, heading, description, plans } = {
    ...PropertyManagersPricingDefaults,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="property-managers-pricing" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>
        
        {/* Billing Toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span 
            className={`font-['Poppins'] font-medium ${
              billingCycle === "monthly" ? "text-[#112358]" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[#3C6098] transition-transform ${
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span 
            className={`font-['Poppins'] font-medium ${
              billingCycle === "yearly" ? "text-[#112358]" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <span className="rounded-lg bg-[#E48B59]/10 px-2 py-1 text-sm font-['Poppins'] font-medium text-[#E48B59]">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white px-6 py-8 md:p-8"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10">
                      {plan.icon}
                    </div>
                    <h5 className="mb-2 text-xl font-bold font-['Poppins'] text-[#112358] md:text-2xl">
                      {plan.name}
                    </h5>
                    <p className="text-gray-600 font-['Poppins']">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-4xl font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
                      {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </h1>
                    <p className="text-gray-600 font-['Poppins']">
                      per {billingCycle === "monthly" ? "month" : "year"}
                    </p>
                    {billingCycle === "yearly" && (
                      <p className="mt-1 text-sm font-medium font-['Poppins'] text-[#E48B59]">
                        Save 20%
                      </p>
                    )}
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
                <p className="mb-4 font-semibold font-['Poppins'] text-[#112358]">Includes:</p>
                <div className="mb-8 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="mr-3 flex-none">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-gray-600 font-['Poppins']">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link
                  href={plan.button.url}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#3C6098] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                >
                  {plan.button.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PropertyManagersPricingDefaults: Props = {
  tagline: "Pricing",
  heading: "Pricing Plans for Property Managers",
  description: "Flexible options to fit your property management needs and portfolio size.",
  plans: [
    {
      icon: <DollarSign className="h-6 w-6 text-[#3C6098]" />,
      name: "Starter Plan",
      description: "Ideal for small portfolios up to 50 units.",
      monthlyPrice: "$99",
      yearlyPrice: "$950",
      features: [
        { text: "Up to 50 units" },
        { text: "Basic maintenance tracking" },
        { text: "Client communication tools" },
        { text: "Financial reporting" },
        { text: "Task management" },
        { text: "Email support" },
      ],
      button: {
        title: "Get Started",
        url: "/demo",
      },
    },
    {
      icon: <Building className="h-6 w-6 text-[#3C6098]" />,
      name: "Business Plan",
      description: "Perfect for growing portfolios up to 500 units.",
      monthlyPrice: "$299",
      yearlyPrice: "$2,870",
      features: [
        { text: "Up to 500 units" },
        { text: "Advanced reporting" },
        { text: "Automated payments" },
        { text: "Vendor management" },
        { text: "Custom workflows" },
        { text: "Real-time analytics" },
        { text: "Priority support" },
        { text: "Client satisfaction tracking" },
        { text: "Performance benchmarking" },
        { text: "API integrations" },
      ],
      button: {
        title: "Get Started",
        url: "/demo",
      },
    },
  ],
};