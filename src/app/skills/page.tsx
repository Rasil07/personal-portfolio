"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import NextPageButton from "@/components/buttons/nextPage";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      {/* Breadcrumb */}
      <motion.div
        className="text-xs text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span>Reference</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">Tech Stack</span>
      </motion.div>

      {/* Page Title */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-2xl font-bold mb-1">Tech Stack</h1>
        <p className="text-sm text-muted-foreground">
          The tools and technologies I use most often in day-to-day work.
        </p>
      </motion.div>

      {/* Highlight Bar */}
      <motion.div
        className="border-dashed border-2 border-black/30 px-4 py-4 mb-6 font-mono text-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-muted-foreground">Core stack:</span>{" "}
        <span className="font-medium">
          TypeScript · Node.js · React · Next.js · PostgreSQL · MongoDB
        </span>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <p className="text-sm text-foreground/90 leading-relaxed">
          I work primarily in modern TypeScript-based web stacks: React/Next.js
          on the frontend, Node.js on the backend, and relational or document
          databases, usually deployed on AWS or similar cloud infrastructure.
        </p>
      </motion.div>

      {/* 2-Column Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <div className="space-y-6">
          {/* Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
              </svg>
              Languages
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • TypeScript
              </li>
              <li className="hover:text-foreground transition-colors">
                • JavaScript
              </li>
              <li className="hover:text-foreground transition-colors">
                • Python (for scripts / ML work)
              </li>
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              Frontend
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • React / Next.js
              </li>
              <li className="hover:text-foreground transition-colors">
                • Component systems from Figma
              </li>
              <li className="hover:text-foreground transition-colors">
                • CSS-in-JS / utility-first styling (e.g. Tailwind)
              </li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              Backend
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • Node.js / Express / NestJS
              </li>
              <li className="hover:text-foreground transition-colors">
                • REST and GraphQL APIs
              </li>
              <li className="hover:text-foreground transition-colors">
                • Background jobs / workers (queues, schedulers)
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Data & Storage */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              Data & Storage
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • PostgreSQL
              </li>
              <li className="hover:text-foreground transition-colors">
                • MongoDB
              </li>
              <li className="hover:text-foreground transition-colors">
                • Redis (caching / queues)
              </li>
              <li className="hover:text-foreground transition-colors">
                • S3 / R2-style object storage
              </li>
            </ul>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
              DevOps & Cloud
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • AWS (EC2, S3, CloudWatch, Amplify, basic IAM)
              </li>
              <li className="hover:text-foreground transition-colors">
                • Docker-based setups
              </li>
              <li className="hover:text-foreground transition-colors">
                • CI/CD with GitHub Actions or similar
              </li>
            </ul>
          </motion.div>

          {/* Tooling & Testing */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Tooling & Testing
            </h3>
            <ul className="space-y-1 text-sm text-foreground/90 ml-6">
              <li className="hover:text-foreground transition-colors">
                • Git, GitHub
              </li>
              <li className="hover:text-foreground transition-colors">
                • Linters & formatters (ESLint, Prettier)
              </li>
              <li className="hover:text-foreground transition-colors">
                • Jest / Vitest (unit), Playwright/Cypress (where needed)
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Proficiency Notes */}
      <motion.div
        className="border-l-4 border-gray-300 bg-accent/10 p-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-base font-semibold mb-2">How to read this</h2>
        <p className="text-sm text-foreground/90 leading-relaxed">
          I&apos;m comfortable being interviewed on everything listed above and
          have used these in production. If a tool or framework isn&apos;t here,
          I&apos;ve either only touched it briefly or I don&apos;t consider it
          part of my core stack.
        </p>
      </motion.div>

      {/* Related Sections */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-lg font-semibold mb-3">Related sections</h2>
        <div className="space-y-2 text-sm">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary hover:underline font-medium group"
          >
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            <span>Projects – where these tools show up in real systems.</span>
          </Link>
          <Link
            href="/career"
            className="flex items-center gap-2 text-primary hover:underline font-medium group"
          >
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            <span>Career – roles where I used this stack.</span>
          </Link>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="flex justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <NextPageButton url="/career" label="Career" back={true} />
        <NextPageButton url="/contact" label="Contact" back={false} />
      </motion.div>
    </div>
  );
};

export default Skills;
