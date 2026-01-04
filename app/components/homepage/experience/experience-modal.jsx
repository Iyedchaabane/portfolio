"use client"

import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiCheckCircle } from 'react-icons/fi';
import { AiOutlineProject } from 'react-icons/ai';
import { MdLightbulb, MdBuild } from 'react-icons/md';

/**
 * ExperienceModal Component
 * 
 * Displays detailed information about a work experience in a modal overlay.
 * Features:
 * - Full-screen modal with backdrop blur
 * - Keyboard navigation (ESC to close)
 * - Body scroll lock when open
 * - Accessibility features (ARIA attributes, focus management)
 * - Responsive design
 * - Smooth animations
 * 
 * @param {Object} experience - The experience data object
 * @param {boolean} isOpen - Modal open state
 * @param {Function} onClose - Function to close the modal
 */
function ExperienceModal({ experience, isOpen, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !experience) return null;

    const {
        title,
        company,
        duration,
        description,
        technologies = [],
        projects = [],
        achievements = [],
        teamSize
    } = experience;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop - Darker for better separation */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal Content */}
            <div className="modal-scrollbar relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-xl border-2 border-[#16f2b3]/30 shadow-2xl shadow-[#16f2b3]/20 animate-slideUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="sticky top-4 right-4 float-right z-10 p-2 rounded-full bg-[#1a1443] text-gray-300 hover:text-white hover:bg-[#16f2b3] transition-all duration-300 hover:scale-110"
                    aria-label="Close modal"
                >
                    <IoMdClose size={24} />
                </button>

                <div className="p-6 sm:p-8 lg:p-10 clear-both">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 id="modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            {title}
                        </h2>
                        
                        {/* Make company name clickable if website exists */}
                        {experience.companyWebsite ? (
                            <a 
                                href={experience.companyWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl text-[#16f2b3] mb-2 inline-flex items-center gap-2 hover:text-[#0ef] transition-colors duration-300 group"
                            >
                                <span>{company}</span>
                                <svg 
                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        ) : (
                            <p className="text-xl text-[#16f2b3] mb-2">{company}</p>
                        )}
                        
                        <p className="text-gray-400">{duration}</p>
                        {teamSize && (
                            <p className="text-sm text-gray-500 mt-1">Team Size: {teamSize}</p>
                        )}
                    </div>

                    {/* Description */}
                    {description && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-[#16f2b3]">Overview</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{description}</p>
                        </div>
                    )}

                    {/* Technologies */}
                    {technologies.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <MdBuild className="text-[#16f2b3]" />
                                <span>Technologies & Tools</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-[#1a1443] text-gray-300 rounded-full text-sm border border-[#2a2e5a] hover:border-[#16f2b3] hover:text-[#16f2b3] transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects */}
                    {projects.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <AiOutlineProject className="text-[#16f2b3]" size={24} />
                                <span>Key Projects</span>
                            </h3>
                            <div className="space-y-6">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1a1443]/50 border border-[#2a2e5a] rounded-lg p-5 hover:border-[#16f2b3] transition-all duration-300"
                                    >
                                        <h4 className="text-lg font-semibold text-[#16f2b3] mb-2">
                                            {project.name}
                                        </h4>
                                        <p className="text-gray-300 mb-4">{project.description}</p>

                                        {/* Challenges */}
                                        {project.challenges && project.challenges.length > 0 && (
                                            <div className="mb-3">
                                                <p className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-1">
                                                    <MdLightbulb size={16} />
                                                    Challenges:
                                                </p>
                                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 ml-4">
                                                    {project.challenges.map((challenge, idx) => (
                                                        <li key={idx}>{challenge}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Solutions */}
                                        {project.solutions && project.solutions.length > 0 && (
                                            <div className="mb-3">
                                                <p className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                                                    <FiCheckCircle size={16} />
                                                    Solutions:
                                                </p>
                                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 ml-4">
                                                    {project.solutions.map((solution, idx) => (
                                                        <li key={idx}>{solution}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Impact */}
                                        {project.impact && (
                                            <div className="mt-3 p-3 bg-[#0d1224] rounded border-l-4 border-[#16f2b3]">
                                                <p className="text-sm font-semibold text-[#16f2b3] mb-1">Impact:</p>
                                                <p className="text-sm text-gray-300">{project.impact}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Achievements */}
                    {achievements.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <FiCheckCircle className="text-[#16f2b3]" size={22} />
                                <span>Key Achievements</span>
                            </h3>
                            <ul className="space-y-2">
                                {achievements.map((achievement, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-gray-300"
                                    >
                                        <span className="text-[#16f2b3] mt-1 flex-shrink-0">
                                            <FiCheckCircle size={18} />
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExperienceModal;
