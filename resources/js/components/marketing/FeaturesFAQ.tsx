"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  faqs: FaqItem[];
};

export type FeaturesFAQProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesFAQ = (props: FeaturesFAQProps) => {
  const { tagline, heading, description, faqs } = {
    ...FeaturesFAQDefaults,
    ...props,
  };

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="features-faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">{description}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="pr-4 text-lg font-semibold font-['Poppins'] text-[#112358] md:text-xl">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndexes.includes(index) ? (
                    <Minus className="h-5 w-5 text-[#3C6098]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#3C6098]" />
                  )}
                </span>
              </button>
              {openIndexes.includes(index) && (
                <div className="mt-4 pr-12 text-gray-600 font-['Poppins']">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturesFAQDefaults: Props = {
  tagline: "FAQs",
  heading: "Common Questions About Naybrlee",
  description: "Everything you need to know about our platform and pilot program",
  faqs: [
    {
      question: "What makes Naybrlee different from other HOA management tools?",
      answer: "Naybrlee is specifically designed for volunteer board members, not property management companies. We focus on simplicity, automation, and reducing the time burden on volunteers. Our platform eliminates the complexity found in traditional tools, making it easy for anyone to manage their HOA effectively without extensive training.",
    },
    {
      question: "How long does it take to set up Naybrlee for our community?",
      answer: "Most communities are up and running within 48 hours. Our automated migration tools import your existing data in minutes, and our onboarding team provides personalized 30-minute training sessions for your board. We handle all the technical setup, so you can focus on managing your community.",
    },
    {
      question: "What's included in the pilot program?",
      answer: "Pilot program members get full access to all Naybrlee features, dedicated onboarding support, weekly check-ins with our team, and the opportunity to shape the product roadmap. You'll also lock in special founding member pricing for life, even after the pilot program ends.",
    },
    {
      question: "Is our community data secure?",
      answer: "Absolutely. We use bank-level 256-bit encryption for all data, both in transit and at rest. Our platform is hosted on secure, SOC 2 compliant servers with automated backups every 4 hours. We never share or sell your data, and you maintain full ownership of all your community information.",
    },
    {
      question: "Can residents access the platform on their phones?",
      answer: "Yes! Naybrlee works perfectly on all devices - phones, tablets, and computers. Residents can download our mobile app or access everything through their web browser. The interface automatically adapts to provide the best experience on any screen size.",
    },
    {
      question: "What if we need help after onboarding?",
      answer: "We're here for you every step of the way. Depending on your plan, you'll have access to email support, live chat, or a dedicated account manager. We also provide monthly training webinars, a comprehensive knowledge base, and video tutorials for common tasks.",
    },
    {
      question: "Can we customize Naybrlee for our community's specific needs?",
      answer: "Yes! Naybrlee is highly customizable. You can configure workflows, create custom forms, set up automated communications, and tailor the platform to match your community's unique requirements. Enterprise plans also include custom integrations with your existing tools.",
    },
    {
      question: "What happens to our data if we decide to leave?",
      answer: "We believe in data portability. If you ever decide to leave Naybrlee, we'll provide all your data in standard formats (CSV, PDF) at no charge. We'll also maintain read-only access for 90 days to ensure a smooth transition. There are no lock-in contracts or cancellation fees.",
    },
  ],
};