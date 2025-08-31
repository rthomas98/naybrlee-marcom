"use client";

import { Link } from '@inertiajs/react';
import React, { Fragment } from "react";
import { Check, X, ChevronRight, Banknote, Mail, Smartphone } from "lucide-react";

type ComparisonColumn = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

type ComparisonRow = {
  feature: string;
  values: (string | boolean)[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
};

export type ResidentsComparisonProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ResidentsComparison = (props: ResidentsComparisonProps) => {
  const { tagline, heading, description, columns, rows, primaryButton, secondaryButton } = {
    ...ResidentsComparisonDefaults,
    ...props,
  };

  return (
    <section id="residents-comparison" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">
            {description}
          </p>
        </div>
        
        <div className="mx-auto">
          {/* Column Headers */}
          <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <Fragment>
              <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                <h2 className="text-md leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:text-xl">
                  Payment Methods
                </h2>
              </div>
              {columns.map((column, index) => (
                <div key={index} className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C6098]/10">
                      {column.icon}
                    </div>
                    <h2 className="text-md leading-[1.4] font-bold font-['Poppins'] text-[#112358] md:text-xl">
                      {column.title}
                    </h2>
                    <p className="text-gray-600 font-['Poppins'] text-sm">
                      {column.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </Fragment>
          </div>
          
          {/* Comparison Rows */}
          <div>
            {rows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] ${rowIndex % 2 === 0 ? 'bg-gray-50' : ''}`}
              >
                <p className="col-span-3 row-span-1 p-4 font-['Poppins'] text-[#112358] md:col-span-1 md:px-6 md:py-4">
                  {row.feature}
                </p>
                {row.values.map((value, valueIndex) => (
                  <div key={valueIndex} className="flex items-center justify-center px-4 py-4 text-center font-semibold font-['Poppins'] md:px-6">
                    <span>
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="h-6 w-6 text-green-600" />
                        ) : (
                          <X className="h-6 w-6 text-red-600" />
                        )
                      ) : (
                        <span className="text-[#112358]">{value}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  );
};

export const ResidentsComparisonDefaults: Props = {
  tagline: "Comparison",
  heading: "Old Way vs. Naybrlee Way",
  description: "Experience the future of community living",
  columns: [
    {
      icon: <Banknote className="h-6 w-6 text-[#3C6098]" />,
      title: "Checks & Cash",
      subtitle: "Traditional method",
    },
    {
      icon: <Mail className="h-6 w-6 text-[#3C6098]" />,
      title: "Paper Notices",
      subtitle: "Postal mail",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#3C6098]" />,
      title: "Naybrlee",
      subtitle: "Digital solution",
    },
  ],
  rows: [
    {
      feature: "Payment Processing Time",
      values: ["5-7 days", "3-5 days", "Instant"],
    },
    {
      feature: "Real-time Updates",
      values: [false, false, true],
    },
    {
      feature: "Maintenance Request Tracking",
      values: [false, false, true],
    },
    {
      feature: "Instant Notifications",
      values: [false, false, true],
    },
    {
      feature: "Document Access",
      values: ["In-person", "Mail", "24/7 Online"],
    },
    {
      feature: "Community Directory",
      values: [false, false, true],
    },
    {
      feature: "Amenity Booking",
      values: ["Phone/Email", "Phone/Email", "In-app"],
    },
    {
      feature: "Payment History",
      values: ["Paper records", "Paper records", "Digital archive"],
    },
  ],
  primaryButton: {
    title: "Learn More",
    url: "/features",
  },
  secondaryButton: {
    title: "Sign Up",
    url: "/demo",
  },
};