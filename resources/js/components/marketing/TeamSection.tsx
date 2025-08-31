"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link } from '@inertiajs/react';
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type ImageProps = {
  src: string;
  alt?: string;
};

type Footer = {
  heading: string;
  description: string;
  button: {
    title: string;
    url: string;
  };
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
  footer: Footer;
};

export type TeamSectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const TeamSection = (props: TeamSectionProps) => {
  const { tagline, heading, description, teamMembers, footer } = {
    ...TeamSectionDefaults,
    ...props,
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section id="team" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-xl md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#E48B59] font-['Poppins'] md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">{heading}</h2>
          <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">{description}</p>
        </div>
        
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {teamMembers.map((member, index) => (
              <div key={index} className="keen-slider__slide">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
          
          {loaded && instanceRef.current && (
            <>
              <div className="mt-12 flex items-center justify-between">
                <div className="flex w-full items-start justify-start">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={clsx("mx-[3px] inline-block h-2 w-2 rounded-full transition-colors", {
                        "bg-[#3C6098]": currentSlide === idx,
                        "bg-gray-300": currentSlide !== idx,
                      })}
                    />
                  ))}
                </div>
                <div className="flex items-end justify-end gap-2 md:gap-4">
                  <button
                    onClick={() => instanceRef.current?.prev()}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => instanceRef.current?.next()}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold font-['Poppins'] text-[#112358] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footer.heading}
          </h4>
          <p className="text-gray-600 font-['Poppins'] md:text-lg">{footer.description}</p>
          <div className="mt-6 md:mt-8">
            <Link 
              href={footer.button.url}
              className="inline-flex items-center justify-center rounded-lg bg-[#3C6098] px-6 py-3 font-['Poppins'] font-medium text-white hover:bg-[#2d4a7a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3C6098]"
            >
              {footer.button.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg md:mb-6">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-lg font-semibold font-['Poppins'] text-[#112358] md:text-xl">{member.name}</h5>
        <h6 className="text-[#E48B59] font-['Poppins'] md:text-lg">{member.jobTitle}</h6>
      </div>
      <p className="text-gray-600 font-['Poppins']">{member.description}</p>
      <div className="mt-6 flex gap-3.5">
        {member.socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3C6098] hover:text-[#2d4a7a] transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export const TeamSectionDefaults: Props = {
  tagline: "Our Team",
  heading: "Meet the People Behind Naybrlee",
  description: "A passionate team dedicated to revolutionizing HOA management through innovation and community-focused solutions.",
  teamMembers: [
    {
      image: {
        src: "/images/about/team/robert-thomas-founder.png",
        alt: "Robert Thomas - Founder & CEO",
      },
      name: "Robert Thomas",
      jobTitle: "Founder & CEO",
      description: "Former HOA board member turned tech entrepreneur. Robert founded Naybrlee after experiencing firsthand the challenges of community management.",
      socialLinks: [
        { href: "https://www.linkedin.com/in/robert-thomas-1b110216/", icon: <Linkedin className="h-6 w-6" /> },
        { href: "https://twitter.com/robertthomas", icon: <Twitter className="h-6 w-6" /> },
        { href: "mailto:robert@naybrlee.com", icon: <Mail className="h-6 w-6" /> },
      ],
    },
    {
      image: {
        src: "/images/about/team/team-member-2.png",
        alt: "Sarah Chen - CTO",
      },
      name: "Sarah Chen",
      jobTitle: "Chief Technology Officer",
      description: "AI and machine learning expert with 15+ years in enterprise software. Leading our technical innovation and platform development.",
      socialLinks: [
        { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" /> },
        { href: "mailto:sarah@naybrlee.com", icon: <Mail className="h-6 w-6" /> },
      ],
    },
    {
      image: {
        src: "/images/about/team/team-member-3.png",
        alt: "Michael Rodriguez - Head of Product",
      },
      name: "Michael Rodriguez",
      jobTitle: "Head of Product",
      description: "Former property manager bringing deep industry knowledge. Ensures our platform meets real community needs.",
      socialLinks: [
        { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" /> },
        { href: "mailto:michael@naybrlee.com", icon: <Mail className="h-6 w-6" /> },
      ],
    },
    {
      image: {
        src: "/images/about/team/team-member-4.png",
        alt: "Emily Johnson - Head of Customer Success",
      },
      name: "Emily Johnson",
      jobTitle: "Head of Customer Success",
      description: "Community management veteran dedicated to ensuring every HOA succeeds with Naybrlee. Your success is our mission.",
      socialLinks: [
        { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" /> },
        { href: "mailto:emily@naybrlee.com", icon: <Mail className="h-6 w-6" /> },
      ],
    },
  ],
  footer: {
    heading: "Join Our Growing Team",
    description: "We're looking for passionate individuals who want to transform community management. Help us build the future of HOA technology.",
    button: { 
      title: "View Open Positions", 
      url: "/careers",
    },
  },
};