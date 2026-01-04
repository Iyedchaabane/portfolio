// @flow strict

import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectCard Component
 * 
 * Displays a project in a code-styled card format with syntax highlighting,
 * project details, and social links.
 * 
 * @param {Object} project - The project data object
 * @param {number} project.id - Unique project identifier
 * @param {string} project.name - Project name
 * @param {string} project.description - Project description
 * @param {string[]} project.tools - Array of technologies/tools used
 * @param {string} project.role - Developer's role in the project
 * @param {string} [project.github] - GitHub repository URL (optional)
 * @param {string} [project.demo] - Live demo URL (optional)
 */
function ProjectCard({ project }) {
  // Destructure with defaults to prevent errors
  const {
    name = 'Untitled Project',
    description = 'No description available',
    tools = [],
    role = 'Developer',
    github = '',
    demo = ''
  } = project || {};

  // Check if we have any social links to display
  const hasLinks = github || demo;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Card Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2" aria-hidden="true">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {name}
        </p>
      </div>

      {/* Code Content */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          {/* Project Name */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          {/* Tools/Technologies */}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"'],"}</span>
          </div>

          {/* Role */}
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{role}</span>
            <span className="text-gray-400">,</span>
          </div>

          {/* Description */}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + description}</span>
            <span className="text-gray-400">,</span>
          </div>

          {/* Social Links as Code */}
          {hasLinks && (
            <>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">links:</span>
                <span className="text-gray-400">{' {'}</span>
              </div>
              
              {/* GitHub Link */}
              {github && (
                <div className="ml-8 lg:ml-16 mr-2">
                  <span className="text-white">github:</span>
                  <span className="text-gray-400">{' '}</span>
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${name} source code on GitHub`}
                    className="text-pink-400 hover:text-[#16f2b3] transition-all duration-300 hover:underline inline-flex items-center gap-1.5 group"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform" size={16} />
                    <span className="text-sm">repository</span>
                  </Link>
                  <span className="text-gray-400">,</span>
                </div>
              )}

              {/* Demo Link */}
              {demo && (
                <div className="ml-8 lg:ml-16 mr-2">
                  <span className="text-white">demo:</span>
                  <span className="text-gray-400">{' '}</span>
                  <Link
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${name} live demo`}
                    className="text-pink-400 hover:text-[#16f2b3] transition-all duration-300 hover:underline inline-flex items-center gap-1.5 group"
                  >
                    <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" size={14} />
                    <span className="text-sm">live site</span>
                  </Link>
                  <span className="text-gray-400">,</span>
                </div>
              )}
              
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-gray-400">{'},'}</span>
              </div>
            </>
          )}

          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;