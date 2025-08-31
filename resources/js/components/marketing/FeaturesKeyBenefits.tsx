"use client";

import React from "react";
import { Shield, Clock, CheckSquare } from "lucide-react";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  benefits: Benefit[];
};

export type FeaturesKeyBenefitsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesKeyBenefits = (props: FeaturesKeyBenefitsProps) => {
  const { heading, benefits } = {
    ...FeaturesKeyBenefitsDefaults,
    ...props,
  };

  return (
    <section id="features-key-benefits" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-12 w-full max-w-3xl md:mb-18 lg:mb-20">
            <h3 className="text-4xl leading-[1.2] font-bold font-['Poppins'] text-[#112358] md:text-5xl lg:text-6xl">
              {heading}
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div className="mb-5 md:mb-6">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#3C6098]/10">
                    <div className="text-[#3C6098]">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mb-5 text-xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mb-5 text-gray-600 font-['Poppins'] md:mb-6">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesKeyBenefitsDefaults: Props = {
  heading: "Unlock the Power of Efficient Board Management with Naybrlee",
  benefits: [
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Simplify Your Tasks with Custom Tools",
      description: "Transform your board operations from chaos to clarity effortlessly, ensuring a smooth and efficient transition every step of the way.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Transform Your Meetings with Smart Solutions",
      description: "Reduce the time spent in meetings and boost your productivity significantly with Naybrlee's innovative automated tools.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Effortlessly Ensure Compliance",
      description: "Stay ahead of ever-evolving regulations and prevent costly fines by utilizing our advanced compliance monitoring tools.",
    },
  ],
};