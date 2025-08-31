"use client";

import React, { useEffect, useState } from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

type FeatureSection = {
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
  image: {
    src: string;
    alt: string;
  };
};

type Props = {
  sections: FeatureSection[];
};

export type BoardMembersFeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.feature-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImageClassNames = (index: number) => {
    return clsx(
      "absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500",
      {
        "opacity-100": activeSection === index,
        "opacity-0": activeSection !== index,
      }
    );
  };

  return {
    activeSection,
    getImageClassNames,
  };
};

export const BoardMembersFeatures = (props: BoardMembersFeaturesProps) => {
  const { sections } = {
    ...BoardMembersFeaturesDefaults,
    ...props,
  };

  const { getImageClassNames } = useScrollTracking();

  return (
    <section id="board-members-features" className="px-[5%]">
      <div className="container mx-auto">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          {/* Sticky Image Column */}
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              {sections.map((section, index) => (
                <img
                  key={index}
                  src={section.image.src}
                  className={getImageClassNames(index)}
                  alt={section.image.alt}
                />
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div className="grid grid-cols-1 gap-12 md:block">
            {sections.map((section, index) => (
              <div key={index} className="feature-section">
                <div className="flex flex-col items-start justify-center md:min-h-screen py-12 md:py-0">
                  <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">
                    {section.tagline}
                  </p>
                  <h2 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-5xl lg:text-6xl">
                    {section.heading}
                  </h2>
                  <p className="text-gray-600 font-['Poppins'] md:text-lg">
                    {section.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Link 
                      href={section.primaryButton.url}
                      className="inline-flex items-center justify-center rounded-lg border border-[#3C6098] bg-white px-6 py-3 font-['Poppins'] font-medium text-[#3C6098] hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
                    >
                      {section.primaryButton.title}
                    </Link>
                    <Link
                      href={section.secondaryButton.url}
                      className="inline-flex items-center gap-1 text-[#3C6098] hover:text-[#2d4a7a] font-['Poppins'] font-medium transition-colors"
                    >
                      {section.secondaryButton.title}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src={section.image.src}
                      className="w-full rounded-lg object-cover"
                      alt={section.image.alt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const BoardMembersFeaturesDefaults: Props = {
  sections: [
    {
      tagline: "Compliance Management",
      heading: "Stay Compliant Without the Stress",
      description: "Track bylaws, regulations, and legal requirements effortlessly. Naybrlee's automated compliance monitoring ensures your HOA always meets state and federal requirements, with real-time alerts for important deadlines.",
      primaryButton: {
        title: "Learn More",
        url: "/features#compliance",
      },
      secondaryButton: {
        title: "View Demo",
        url: "/demo",
      },
      image: {
        src: "/images/hoa-members/board-members-features/Dashboard_showing_compliance_checkmarks_deadline_8af5fd50-7ffe-40a3-8a1e-511bb6f92537_1.png",
        alt: "Compliance tracking dashboard",
      },
    },
    {
      tagline: "Financial Oversight",
      heading: "Complete Financial Transparency",
      description: "Manage budgets, track expenses, and generate financial reports with ease. Our AI-powered analytics provide insights into spending patterns and help you make data-driven decisions for your community's financial health.",
      primaryButton: {
        title: "Explore Features",
        url: "/features#financial",
      },
      secondaryButton: {
        title: "See Pricing",
        url: "/pricing",
      },
      image: {
        src: "/images/hoa-members/board-members-features/Financial_charts_budget_graphs_--ar_43_--sref_ht_0710fb10-6c42-487f-98b5-440332c45692_0.png",
        alt: "Financial reporting dashboard",
      },
    },
    {
      tagline: "Communication Hub",
      heading: "Connect with Every Resident",
      description: "Streamline communication through announcements, surveys, and direct messaging. Keep residents informed and engaged with automated notifications, community forums, and emergency broadcast capabilities.",
      primaryButton: {
        title: "Discover More",
        url: "/features#communication",
      },
      secondaryButton: {
        title: "Try It Free",
        url: "/demo",
      },
      image: {
        src: "/images/hoa-members/board-members-features/Message_interface_notification_center_--ar_43_--_188f2782-6142-45ee-ba08-c6e7156229b1_0.png",
        alt: "Communication platform interface",
      },
    },
    {
      tagline: "Document Management",
      heading: "All Your Documents in One Place",
      description: "Store, organize, and share important documents securely. From meeting minutes to vendor contracts, everything is searchable, version-controlled, and accessible to authorized board members 24/7.",
      primaryButton: {
        title: "View Features",
        url: "/features#documents",
      },
      secondaryButton: {
        title: "Get Started",
        url: "/demo",
      },
      image: {
        src: "/images/hoa-members/board-members-features/Organized_document_folders_search_interface_--ar_ff235863-1db8-4754-9694-cdeddce0feaa_0.png",
        alt: "Document management system",
      },
    },
  ],
};