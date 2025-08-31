"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  faqs: FAQItem[];
};

export type ResidentsFAQProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsFAQ = (props: ResidentsFAQProps) => {
  const { heading, description, faqs } = {
    ...ResidentsFAQDefaults,
    ...props,
  };

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="residents-faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4 md:py-5">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between text-left hover:text-[#3C6098] transition-colors"
                aria-expanded={openItems.includes(index)}
              >
                <span className="text-lg font-medium font-['Poppins'] text-[#112358] md:text-xl">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-[#3C6098] transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.includes(index) && (
                <div className="mt-4 pb-2 text-gray-600 font-['Poppins'] md:text-lg">
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

export const ResidentsFAQDefaults: Props = {
  heading: "FAQs",
  description: "Here are some common questions residents have about Naybrlee and its features.",
  faqs: [
    {
      question: "Is there a fee?",
      answer: "No, there are no fees for residents using Naybrlee. Your HOA covers any costs associated with the platform. Enjoy all the features without worrying about extra charges.",
    },
    {
      question: "Is my payment secure?",
      answer: "Absolutely! Naybrlee uses bank-level encryption to protect your payment information. Your data is private by default, ensuring your security.",
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Naybrlee is designed to be user-friendly for everyone. Our intuitive app and support resources make it easy to navigate. Plus, you can always reach out for assistance.",
    },
    {
      question: "Can I opt out?",
      answer: "Yes, you can choose to opt out of the community directory. Your privacy is important, and you control what information you share. Simply adjust your settings in the app.",
    },
    {
      question: "Do I need a smartphone?",
      answer: "While a smartphone enhances your experience, you can access Naybrlee through a web browser. However, using the app provides the best convenience and features. We recommend downloading it for full functionality.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Your HOA will provide you with an access code. Download the Naybrlee app, create your account using the code, and you'll be up and running in minutes.",
    },
    {
      question: "Can I pay with credit card?",
      answer: "Yes! Naybrlee accepts all major credit cards, debit cards, and ACH bank transfers. You can save your preferred payment method for quick, one-tap payments.",
    },
    {
      question: "How quickly are maintenance requests handled?",
      answer: "Maintenance requests submitted through Naybrlee are immediately sent to your property management team. You can track the status in real-time and receive updates as work progresses.",
    },
  ],
};