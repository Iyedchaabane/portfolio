// @flow strict

"use client"

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import ExperienceModal from "./experience-modal";
import experience from '/public/lottie/code.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Experience Component
 * 
 * Displays professional experience timeline with interactive cards.
 * Clicking on a card opens a modal with detailed project information.
 * 
 * Features:
 * - Interactive experience cards
 * - Modal with detailed project information
 * - Responsive layout
 * - Accessibility features
 */
function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (exp) => {
    console.log('Card clicked:', exp.company); // Debug log
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal'); // Debug log
    setIsModalOpen(false);
    // Delay clearing the selected experience to allow animation to complete
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={`${basePath}/section.svg`}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:min-h-[600px]">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(exp => (
                  <div
                    key={exp.id}
                    onClick={() => handleCardClick(exp)}
                    className="cursor-pointer"
                  >
                    <GlowCard identifier={`experience-${exp.id}`}>
                      <div
                        className="p-3 relative group"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleCardClick(exp);
                          }
                        }}
                        aria-label={`View details for ${exp.title} at ${exp.company}`}
                      >
                        <Image
                          src={`${basePath}/blur-23.svg`}
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {exp.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 group-hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div className="flex-1">
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {exp.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-[#16f2b3] opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <MdArrowForward size={24} />
                          </div>
                        </div>

                        {/* Click indicator */}
                        <div className="mt-2 text-center">
                          <span className="text-xs text-gray-500 group-hover:text-[#16f2b3] transition-colors duration-300">
                            Click to view details
                          </span>
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Experience;
