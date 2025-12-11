"use client";
import React from "react";

import { CAREER } from "@/lib/data";

import { motion } from "motion/react";
import ExperienceCard from "@/components/career/card";

import NextPageButton from "@/components/buttons/nextPage";

const Career = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-2xl font-bold mb-1">Career</h1>
        <p className="text-sm text-muted-foreground">
          Have a look at the amazing journey I&apos;ve had so far.
        </p>
      </motion.div>
      <motion.div
        className="mb-6 p-4 border-gray-300 bg-accent/10 border-l-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          With <span className="font-semibold text-foreground">4 years</span> of
          experience building production-grade applications, I&apos;ve worked
          across the full stack—from engineering multi-tenant architectures to
          optimizing frontend performance. My journey has taken me through{" "}
          <span className="font-medium text-primary">SaaS marketplaces</span>,{" "}
          <span className="font-medium text-primary">workflow automation</span>,
          and <span className="font-medium text-primary">Web3 platforms</span>,
          where I&apos;ve led teams and delivered user-heavy products at scale.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-2 text-lg font-semibold mb-4 border-b pb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="12" y1="11" x2="12" y2="17" />
        </motion.svg>
        <span>Work Experience</span>
      </motion.div>

      <div className="relative mb-9">
        {CAREER.roles.map((role, index) => (
          <ExperienceCard
            key={role.company}
            role={role}
            isLatest={index === 0}
            isLast={index === CAREER.roles.length - 1}
            animation={{
              transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.2,
              },
            }}
          />
        ))}
      </div>

      <motion.div
        className="flex items-center gap-2 text-lg font-semibold mb-4 border-b pb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </motion.svg>
        <span>Education & Research</span>
      </motion.div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {CAREER.education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            className="relative border border-dashed border-gray-300 bg-gradient-to-br from-background to-accent/5 backdrop-blur-sm p-5 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Top reflection */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-base font-semibold text-foreground mb-0.5">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-primary mb-1">
                {edu.institution}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{edu.dates}</p>

              <div className="space-y-1.5">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Publications Section */}
      <motion.div
        className=" border-gray-300 bg-accent/100 p-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="flex items-center gap-2 text-base font-semibold mb-3 underline underline-offset-4">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Selected Publications</span>
        </h3>
        <ul className="space-y-2 text-sm text-foreground/90">
          {CAREER.publications.map((pub, index) => (
            <li
              key={index}
              className="leading-relaxed hover:text-foreground transition-colors"
            >
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="font-medium">
                  {pub.authors.join(", ")} ({pub.date}).
                </span>{" "}
                {pub.title}.{" "}
                <span className="text-muted-foreground italic">
                  {pub.conference}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="flex justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <NextPageButton url="/" label="Intro" back={true} />
        <NextPageButton url="/education" label="Education" back={false} />
      </motion.div>
    </div>
  );
};

export default Career;
