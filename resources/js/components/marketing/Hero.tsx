"use client";

import { Link } from '@inertiajs/react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { motion, useScroll, useTransform } from "framer-motion";

type ImageProps = {
  src: string;
  alt: string;
};

type ButtonProps = {
  title: string;
  url: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
};

type Props = {
  title: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { title, description, buttons, images } = {
    ...HeroDefaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const { scrollYProgress } = useScroll();

  const createTransform = (mobileValues: string[], desktopValues: string[]) =>
    useTransform(scrollYProgress, [0, 1], isMobile ? mobileValues : desktopValues);

  const containerHeight = {
    height: createTransform(["60vh", "100vh"], ["70vh", "100vh"]),
  };

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-50vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-50vw"]),
    width: createTransform(["50vw", "100vw"], ["30vw", "100vw"]),
    height: createTransform(["50vh", "100vh"], ["70vh", "100vh"]),
  };

  const rightImage = {
    x: createTransform(["0vw", "25vw"], ["0vw", "20vw"]),
  };

  const getButtonClasses = (variant?: string) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-['Poppins'] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 px-8";
    
    const variantClasses: Record<string, string> = {
      default: "bg-[#E48B59] text-white hover:bg-[#d87a48] active:bg-[#c56a38] focus-visible:ring-[#E48B59]",
      secondary: "bg-[#3C6098] text-white hover:bg-[#2d4a7a] active:bg-[#1e3562] focus-visible:ring-[#3C6098]",
      outline: "border-2 border-[#3C6098] text-[#3C6098] hover:bg-[#3C6098] hover:text-white active:bg-[#2d4a7a]",
      ghost: "text-[#3C6098] hover:bg-[#FBF5F0] active:bg-[#f5ede4]"
    };
    
    return `${baseClasses} ${variantClasses[variant || 'default']}`;
  };

  return (
    <section id="hero" className="relative h-[250vh]">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container mx-auto">
          <div className="w-full max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold font-['Poppins'] text-[#112358] md:mb-6 md:text-6xl lg:text-7xl">{title}</h1>
            <p className="text-lg text-gray-600 font-['Poppins'] md:text-xl">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
        </div>
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div
          className="z-10 grid w-full grid-flow-col grid-cols-[25%_50%_25%] justify-center md:grid-cols-[50%_30%_20%]"
          style={containerHeight}
        >
          <motion.div
            className="grid grid-flow-col grid-cols-1 justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative top-[5%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img className="aspect-[2/3] w-full object-cover rounded-lg" {...images[0]} />
            </div>

            <div className="relative top-[-5%] flex flex-col gap-4 self-center">
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img className="aspect-square w-full object-cover rounded-lg" {...images[1]} />
              </div>
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img className="aspect-[3/4] w-full object-cover rounded-lg" {...images[2]} />
              </div>
            </div>

            <div className="relative top-[15%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img className="aspect-square w-full object-cover rounded-lg" {...images[3]} />
            </div>
          </motion.div>

          <motion.div className="relative" style={centerImageContainer}>
            <img className="size-full object-cover rounded-lg" {...images[4]} />
          </motion.div>

          <motion.div
            className="grid grid-flow-col grid-cols-1 gap-4 justify-self-start px-4"
            style={rightImage}
          >
            <div className="relative top-[5%] w-[40vw] md:w-[25vw] lg:w-[22vw]">
              <img className="aspect-[3/4] w-full object-cover rounded-lg" {...images[5]} />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const HeroDefaults: Props = {
  title: "The Future of HOA Management is Here",
  description:
    "Join our exclusive pilot program and transform how your community operates. Experience AI-powered tools that make HOA management simple, transparent, and efficient.",
  buttons: [
    {
      title: "Join Pilot Program",
      url: "/demo",
      variant: "default",
    },
    {
      title: "Join Waiting List",
      url: "/contact",
      variant: "secondary",
    },
  ],
  images: [
    {
      src: "/images/home/hero/Modern_suburban_neighborhood_Shows_well-maintain_1de23401-3bb1-4f66-a9be-fcfab47cb061_2.png",
      alt: "Modern suburban neighborhood with well-maintained homes",
    },
    {
      src: "/images/home/hero/Community_meeting_Board_members_or_residents_in__cb86b2e9-7566-4441-a12b-055cf09e025d_2.png",
      alt: "Community meeting with board members and residents",
    },
    {
      src: "/images/home/hero/Family_at_amenities_Residents_enjoying_community_acca71bc-e4a8-4e84-b21d-7a204aeb3dfd_2.png",
      alt: "Family enjoying community amenities",
    },
    {
      src: "/images/home/hero/diverse_people_in_a_neighborhood_happy_--ar_43_-_8b196006-1203-4b96-b746-115a02ae4281_0.png",
      alt: "Diverse happy neighbors in community",
    },
    {
      src: "/images/home/hero/HOA_entrance_Beautiful_community_entrancesignage_b8e7ac81-d5d9-4df9-9080-c312169b0e76_0.png",
      alt: "Beautiful HOA community entrance with signage",
    },
    {
      src: "/images/home/hero/Community_event_Social_gathering_showing_engagem_27e6cf14-f552-4620-893e-9ef53c42ac64_3.png",
      alt: "Community event and social gathering",
    },
  ],
};