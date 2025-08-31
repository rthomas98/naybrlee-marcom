"use client";

import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import React from "react";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type Props = {
  logo: ImageProps;
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    url: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  }>;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
};

export type FooterProps = React.ComponentPropsWithoutRef<"footer"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
  const {
    logo,
    heading,
    description,
    buttons,
    columnLinks,
    socialMediaLinks,
    footerText,
  } = {
    ...FooterDefaults,
    ...props,
  };

  return (
    <footer id="footer" className="bg-[#3C6098] text-white px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mb-6 max-w-3xl">
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] md:mb-6 md:text-5xl lg:text-6xl">{heading}</h2>
            <p className="font-['Poppins'] text-white/90">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:mt-0">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.url}
                className={getButtonClasses(button.variant)}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-white/20" />
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-2 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-4">
          {columnLinks.map((column, index) => (
            <div key={index} className="flex flex-col items-start justify-start">
              <h3 className="mb-4 font-semibold font-['Poppins'] text-white">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm">
                    <Link 
                      href={link.url} 
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-['Poppins']"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8">
          <Link href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="h-10 w-auto mb-6 sm:mb-0" />
          </Link>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col-reverse items-start gap-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pt-8">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <p className="text-white/80 font-['Poppins']">{footerText}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            {socialMediaLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                className="text-white/80 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const getButtonClasses = (variant?: string) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-4";
  
  const variantClasses = {
    default: "bg-[#E48B59] text-white hover:bg-[#d87a48] active:bg-[#c56a38] focus-visible:ring-[#E48B59]",
    secondary: "bg-white text-[#3C6098] hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#3C6098] active:bg-gray-100",
    ghost: "text-white hover:bg-white/10 active:bg-white/20"
  };
  
  return `${baseClasses} ${variantClasses[variant || 'default']}`;
};

export const FooterDefaults: Props = {
  logo: {
    url: "/",
    src: "/logo/naybrlee-logo-white.svg",
    alt: "Naybrlee - Smarter Neighborhoods. Simplified HOA.",
  },
  heading: "Transform Your HOA Management",
  description:
    "Join thousands of communities using Naybrlee to streamline operations, improve communication, and build stronger neighborhoods.",
  buttons: [
    { title: "Get Started", url: "/demo", variant: "default" },
    { title: "Contact Sales", url: "/contact", variant: "secondary" }
  ],
  columnLinks: [
    {
      title: "Product",
      links: [
        { title: "Features", url: "/features" },
        { title: "Pricing", url: "/pricing" },
        { title: "Demo", url: "/demo" },
        { title: "Resources", url: "/resources" },
      ],
    },
    {
      title: "Who It's For",
      links: [
        { title: "HOA Board Members", url: "/who-its-for/hoa-board-members" },
        { title: "Property Managers", url: "/who-its-for/property-managers" },
        { title: "Residents", url: "/who-its-for/residents" },
        { title: "Legal Advisors", url: "/who-its-for/legal-advisors" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Terms of Service", url: "/terms" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "https://facebook.com", icon: <Facebook className="w-5 h-5" /> },
    { url: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
    { url: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
    { url: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
    { url: "https://youtube.com", icon: <Youtube className="w-5 h-5" /> },
  ],
  footerText: `© ${new Date().getFullYear()} Naybrlee. All rights reserved.`,
};