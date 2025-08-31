"use client";

import { useState } from "react";
import { Link } from '@inertiajs/react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
  inputPlaceholder?: string;
  buttonText: string;
  termsAndConditions: React.ReactNode;
};

export type FeaturesCTAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FeaturesCTA = (props: FeaturesCTAProps) => {
  const { heading, description, inputPlaceholder, buttonText, termsAndConditions, image } = {
    ...FeaturesCTADefaults,
    ...props,
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section id="features-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto relative rounded-lg overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-2xl">
            <h2 className="mb-5 text-4xl font-bold font-['Poppins'] text-white md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-white/90 font-['Poppins'] md:text-lg">{description}</p>
          </div>
          <div className="mr-auto mt-6 max-w-md md:mt-8">
            <form
              className="mb-4 grid grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
              onSubmit={handleSubmit}
            >
              <input
                id="email"
                type="email"
                placeholder={inputPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-white/60 font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-[#E48B59] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-[#E48B59] text-white px-6 py-3 font-['Poppins'] font-medium hover:bg-[#d87a48] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                {buttonText}
              </button>
            </form>
            <div className="text-xs text-white/80 font-['Poppins']">
              {termsAndConditions}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112358]/90 to-[#3C6098]/80" />
        </div>
      </div>
    </section>
  );
};

export const FeaturesCTADefaults: Props = {
  heading: "Ready to Transform Your HOA Management?",
  description: "Join our pilot program and be among the first to experience the future of board management. Get exclusive early access and special pricing.",
  inputPlaceholder: "Enter your email",
  buttonText: "Join Pilot Program",
  termsAndConditions: (
    <>
      By clicking Join Pilot Program you're confirming that you agree with our{" "}
      <Link href="/terms" className="underline hover:text-white">
        Terms and Conditions
      </Link>
      .
    </>
  ),
  image: {
    src: "/images/features/Aerial_view_of_modern_HOA_community_at_golden_ho_5211cc8a-da8b-42d3-8e39-16d910509a89_0.png",
    alt: "Aerial view of modern HOA community at golden hour",
  },
};