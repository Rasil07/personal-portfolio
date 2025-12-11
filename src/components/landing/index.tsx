"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import NextPageButton from "../buttons/nextPage";

const Landing = () => {
  const [activeSection, setActiveSection] = React.useState<number | null>(null);

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
      {/* Page Title */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-2xl font-bold mb-1">Getting Started</h1>
        <p className="text-sm text-muted-foreground">
          A quick overview of who I am and what I&apos;m looking for.
        </p>
      </motion.div>

      {/* Highlight Bar */}
      <motion.div
        className="border-dashed border-2 border-black/500 rounded-none px-3 py-5 mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
      >
        <p className="text-base font-mono">
          <motion.span
            className="font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            {Array.from("Rasil Baidar").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 0.4 + index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.4 + "Rasil Baidar".length * 0.05,
            }}
          >
            {" · "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.4 + "Rasil Baidar".length * 0.05 + 0.1,
            }}
          >
            {Array.from("Software Engineer (Full-stack)").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay:
                    0.4 + "Rasil Baidar".length * 0.05 + 0.1 + index * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay:
                0.4 +
                "Rasil Baidar".length * 0.05 +
                0.1 +
                "Software Engineer (Full-stack)".length * 0.03,
            }}
          >
            {" · "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay:
                0.4 +
                "Rasil Baidar".length * 0.05 +
                0.1 +
                "Software Engineer (Full-stack)".length * 0.03 +
                0.1,
            }}
          >
            {Array.from("Sydney, Australia").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay:
                    0.4 +
                    "Rasil Baidar".length * 0.05 +
                    0.1 +
                    "Software Engineer (Full-stack)".length * 0.03 +
                    0.1 +
                    index * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="inline-block w-1.5 h-3 bg-primary ml-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: 3,
              delay:
                0.4 +
                "Rasil Baidar".length * 0.05 +
                0.1 +
                "Software Engineer (Full-stack)".length * 0.03 +
                0.1 +
                "Sydney, Australia".length * 0.03,
            }}
          />
        </p>
      </motion.div>

      {/* Content Sections */}
      <motion.div
        className="space-y-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Me */}
        <motion.section
          variants={itemVariants}
          onHoverStart={() => setActiveSection(1)}
          onHoverEnd={() => setActiveSection(null)}
          className="p-3 rounded-md transition-colors hover:bg-accent/30"
        >
          <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
            <span
              className={`transition-transform duration-300 ${
                activeSection === 1 ? "translate-x-1" : ""
              }`}
            >
              1. The TL;DR
            </span>
          </h2>
          <p className="text-sm text-foreground/90 leading-normal">
            I build production systems that scale. Over 4 years, I&apos;ve
            shipped 5+ SaaS apps to the monday.com marketplace, cut P95 latency
            by 40%, and led engineering teams from MVP to production. My stack:
            TypeScript, Node.js, React, PostgreSQL, MongoDB. I&apos;ve tackled
            multi-tenant architectures, document automation pipelines, Web3
            integrations, and custom CKEditor plugins—all deployed on AWS with
            Docker.
          </p>
        </motion.section>

        {/* Snapshot / Spec Sheet */}
        <motion.section
          variants={itemVariants}
          onHoverStart={() => setActiveSection(2)}
          onHoverEnd={() => setActiveSection(null)}
          className="p-3 rounded-md transition-colors hover:bg-accent/30"
        >
          <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
            <span
              className={`transition-transform duration-300 ${
                activeSection === 2 ? "translate-x-1" : ""
              }`}
            >
              2. Snapshot / &quot;Spec sheet&quot;
            </span>
          </h2>
          <div className="text-sm text-foreground/90 font-mono space-y-0.5">
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Name</span>
              <span>Rasil Baidar</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Role</span>
              <span>Full-stack Developer</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Location</span>
              <span>Sydney, Australia</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Experience</span>
              <span>4+ years building production web apps and SaaS</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Primary stack</span>
              <span>
                TypeScript · Node.js/Express/NestJS · React/Next.js · PostgreSQL
                · MongoDB
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Cloud & infra</span>
              <span>
                AWS (EC2, S3, CloudWatch, Amplify) · Redis · Docker · Cloudflare
                R2/Workers
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Domains</span>
              <span>
                SaaS products · document workflows · integrations · marketplaces
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <span className="text-muted-foreground">Currently</span>
              <span>
                Open to full-time software engineering roles in Australia
              </span>
            </div>
          </div>
        </motion.section>

        {/* What I'm Looking For */}
        <motion.section
          variants={itemVariants}
          onHoverStart={() => setActiveSection(3)}
          onHoverEnd={() => setActiveSection(null)}
          className="p-3 rounded-md transition-colors hover:bg-accent/30"
        >
          <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
            <span
              className={`transition-transform duration-300 ${
                activeSection === 3 ? "translate-x-1" : ""
              }`}
            >
              3. What I&apos;m After
            </span>
          </h2>
          <p className="text-sm text-foreground/90 mb-2">
            I&apos;m hunting for my next challenge:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90 ml-1">
            <li className="hover:text-foreground transition-colors">
              Full-time roles building products that matter—SaaS, fintech,
              infrastructure.
            </li>
            <li className="hover:text-foreground transition-colors">
              Teams that move fast, value ownership, and solve hard problems.
            </li>
            <li className="hover:text-foreground transition-colors">
              Open to opportunities across Australia.
            </li>
          </ul>
        </motion.section>

        {/* How to Connect */}
        <motion.section
          variants={itemVariants}
          onHoverStart={() => setActiveSection(4)}
          onHoverEnd={() => setActiveSection(null)}
          className="p-3 rounded-md transition-colors hover:bg-accent/30"
        >
          <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
            <span
              className={`transition-transform duration-300 ${
                activeSection === 4 ? "translate-x-1" : ""
              }`}
            >
              4. Let&apos;s Talk
            </span>
          </h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-foreground/90 ml-1">
            <li className="hover:text-foreground transition-colors">
              Check out what I&apos;ve{" "}
              <Link
                href="/career"
                className="text-primary hover:underline font-medium"
              >
                built and shipped
              </Link>
              .
            </li>
            <li className="hover:text-foreground transition-colors">
              Learn the ways you can &nbsp;
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                reach out
              </Link>
              &nbsp; to me.
            </li>
            <li className="hover:text-foreground transition-colors">
              Drop me a line—tell me about the role, the problem you&apos;re
              solving, and the stack.
            </li>
          </ol>
        </motion.section>

        {/* My Expertise */}
        <motion.section
          variants={itemVariants}
          onHoverStart={() => setActiveSection(5)}
          onHoverEnd={() => setActiveSection(null)}
          className="p-3 rounded-md transition-colors hover:bg-accent/30"
        >
          <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
            <span
              className={`transition-transform duration-300 ${
                activeSection === 5 ? "translate-x-1" : ""
              }`}
            >
              5. What I Bring
            </span>
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90 ml-1">
            <li className="hover:text-foreground transition-colors">
              Architecting systems that handle scale—reduced latency by 40%,
              slashed memory usage.
            </li>
            <li className="hover:text-foreground transition-colors">
              Leading teams through agile sprints—MVP to production, on time.
            </li>
            <li className="hover:text-foreground transition-colors">
              Shipping features users love—custom editors, document workflows,
              multi-user signing.
            </li>
            <li className="hover:text-foreground transition-colors">
              Building secure, resilient backends—Auth0/OIDC, structured
              logging, zero-downtime deploys.
            </li>
          </ul>
        </motion.section>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-3 pt-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <NextPageButton url="/career" label="Career" />
    </div>
  );
};

export default Landing;
