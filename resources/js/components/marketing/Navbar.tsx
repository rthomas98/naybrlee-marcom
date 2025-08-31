"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Building2, Home, Scale } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from '@inertiajs/react';
import { useMediaQuery } from '@/hooks/use-media-query';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SubMenuLink = {
  url: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type LinkGroup = {
  subMenuLinks: SubMenuLink[];
};

type DropdownFooter = {
  title: string;
  link: string;
  url: string;
};

type MegaMenuProps = {
  linkGroups: LinkGroup[];
  dropdownFooter: DropdownFooter;
};

type NavLink = {
  url: string;
  title: string;
  megaMenu?: MegaMenuProps;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: Array<{
    title: string;
    url: string;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
  }>;
};

export type NavbarProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, buttons } = {
    ...NavbarDefaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section
      id="navbar"
      className="fixed top-0 left-0 right-0 z-[999] flex min-h-16 w-full items-center border-b border-gray-100 bg-white/95 backdrop-blur-sm px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <Link href={logo.url}>
          <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
        </Link>
        <div className="absolute hidden h-screen overflow-auto border-b border-gray-100 bg-white px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            {navLinks.map((navLink, index) =>
              navLink.megaMenu ? (
                <SubMenu
                  key={index}
                  megaMenu={navLink.megaMenu}
                  title={navLink.title}
                  url={navLink.url}
                  isMobile={isMobile}
                />
              ) : (
                <Link
                  key={index}
                  href={navLink.url}
                  className="relative block w-auto py-3 text-gray-600 font-['Poppins'] transition-colors hover:text-[#3C6098] active:text-[#112358] lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                >
                  {navLink.title}
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.url}
                className={getButtonClasses(button.variant, button.size)}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-[#112358]"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={topLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-[#112358]"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={middleLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-[#112358]"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={bottomLineVariants}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              open: { height: "100dvh" },
              close: { height: "auto" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{
                open: { y: 0 },
                close: { y: "-100%" },
              }}
              animate={isMobileMenuOpen ? "open" : "close"}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-gray-100 bg-white px-[5%] pb-8 pt-4"
            >
              <div className="flex flex-col">
                {navLinks.map((navLink, index) =>
                  navLink.megaMenu ? (
                    <SubMenu
                      key={index}
                      megaMenu={navLink.megaMenu}
                      title={navLink.title}
                      url={navLink.url}
                      isMobile={isMobile}
                    />
                  ) : (
                    <Link 
                      key={index} 
                      href={navLink.url} 
                      className="block py-3 text-gray-600 font-['Poppins'] hover:text-[#3C6098] active:text-[#112358]"
                    >
                      {navLink.title}
                    </Link>
                  ),
                )}
                <div className="mt-6 flex flex-col gap-4">
                  {buttons.map((button, index) => (
                    <Link
                      key={index}
                      href={button.url}
                      className={getButtonClasses(button.variant, button.size)}
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SubMenu = ({
  title,
  url,
  megaMenu,
  isMobile,
}: {
  title: string;
  url: string;
  megaMenu: MegaMenuProps;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-gray-600 font-['Poppins'] transition-colors hover:text-[#3C6098] active:text-[#112358] lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            variants={{
              open: {
                opacity: 1,
                height: "var(--height-open, auto)",
              },
              close: {
                opacity: 0,
                height: "var(--height-close, 0)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-white lg:absolute lg:w-screen lg:border-b lg:border-gray-100 lg:px-[5%] lg:[--height-close:auto]"
          >
            <div className="mx-auto flex size-full max-w-full items-center justify-between">
              <div className="flex w-full flex-col lg:flex-row">
                <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-6 gap-y-3 py-4 md:grid-cols-2 md:gap-y-4 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-x-4 lg:gap-y-0">
                  {megaMenu.linkGroups.map((linkGroup, index) => (
                    <React.Fragment key={index}>
                      {linkGroup.subMenuLinks.map((subMenuLink, index) => (
                        <Link
                          key={index}
                          href={subMenuLink.url}
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-[#FBF5F0] active:bg-[#E48B59]/10 active:scale-[0.98] group"
                        >
                          <div className="flex size-6 flex-col items-center justify-center text-[#3C6098] group-hover:text-[#112358] group-active:text-[#E48B59] transition-colors">
                            {subMenuLink.icon}
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold font-['Poppins'] text-gray-900 group-hover:text-[#3C6098] group-active:text-[#112358] transition-colors">
                              {subMenuLink.title}
                            </h5>
                            <p className="hidden text-sm text-gray-600 font-['Poppins'] group-hover:text-gray-700 md:block transition-colors">
                              {subMenuLink.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-3">
              <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-[#FBF5F0]" />
              <div className="relative z-10 mr-auto flex flex-col gap-y-4 sm:mx-auto sm:grid sm:auto-cols-fr sm:grid-cols-[max-content_max-content] sm:gap-x-1">
                <p className="font-['Poppins'] text-gray-700">{megaMenu.dropdownFooter.title}</p>
                <Link 
                  href={megaMenu.dropdownFooter.url} 
                  className="underline text-[#3C6098] hover:text-[#112358] font-['Poppins'] transition-colors"
                >
                  {megaMenu.dropdownFooter.link}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper function to get button classes
const getButtonClasses = (variant?: string, size?: string) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variantClasses = {
    default: "bg-[#E48B59] text-white hover:bg-[#d87a48] active:bg-[#c56a38] focus-visible:ring-[#E48B59]",
    secondary: "bg-[#3C6098] text-white hover:bg-[#2d4a7a] active:bg-[#1e3562] focus-visible:ring-[#3C6098]",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
    ghost: "text-[#3C6098] hover:bg-[#FBF5F0] active:bg-[#f5ede4]"
  };
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-8"
  };
  
  return `${baseClasses} ${variantClasses[variant || 'default']} ${sizeClasses[size || 'sm']}`;
};

export const NavbarDefaults: Props = {
  logo: {
    url: "/",
    src: "/logo/naybrlee-logo-main.svg",
    alt: "Naybrlee - Smarter Neighborhoods. Simplified HOA.",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Features", url: "/features" },
    {
      title: "Who It's For",
      url: "/who-its-for",
      megaMenu: {
        linkGroups: [
          {
            subMenuLinks: [
              {
                url: "/who-its-for/hoa-board-members",
                icon: <Users className="w-5 h-5" />,
                title: "HOA Board Members",
                description: "Streamline board operations and decision-making",
              },
            ],
          },
          {
            subMenuLinks: [
              {
                url: "/who-its-for/property-managers",
                icon: <Building2 className="w-5 h-5" />,
                title: "Property Managers",
                description: "Efficient community management tools",
              },
            ],
          },
          {
            subMenuLinks: [
              {
                url: "/who-its-for/residents",
                icon: <Home className="w-5 h-5" />,
                title: "Residents",
                description: "Easy access to community resources and services",
              },
            ],
          },
          {
            subMenuLinks: [
              {
                url: "/who-its-for/legal-advisors",
                icon: <Scale className="w-5 h-5" />,
                title: "Legal Advisors",
                description: "Compliance and legal document management",
              },
            ],
          },
        ],
        dropdownFooter: {
          title: "Ready to transform your HOA?",
          link: "Get Started Today",
          url: "/demo",
        },
      },
    },
    { title: "Pricing", url: "/pricing" },
    { title: "Resources", url: "/resources" },
  ],
  buttons: [
    {
      title: "Contact Us",
      url: "/contact",
      variant: "ghost",
      size: "sm",
    },
    {
      title: "Request Demo",
      url: "/demo",
      variant: "default",
      size: "sm",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};