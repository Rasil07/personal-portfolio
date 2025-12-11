"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

type NextPageButtonProps = {
  url: string;
  label: string;
  back?: boolean;
};

const NextPageButton = ({ url, label, back = false }: NextPageButtonProps) => {
  return (
    <div className={`flex ${back ? "justify-start" : "justify-end"}`}>
      <Link
        href={url}
        className="group relative flex items-center gap-2 px-5 py-2.5 overflow-hidden border border-gray-300/50 hover:border-[#007AFF]/30 bg-gradient-to-b from-white/80 to-white/40 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#007AFF]/10"
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>

        {back && (
          <motion.svg
            className="relative w-4 h-4 text-[#007AFF] group-hover:text-[#0051D5]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
        )}

        <span className="relative text-sm font-medium text-[#007AFF] group-hover:text-[#0051D5] transition-colors duration-200">
          {back ? `Back: ${label}` : `Next: ${label}`}
        </span>

        {!back && (
          <motion.svg
            className="relative w-4 h-4 text-[#007AFF] group-hover:text-[#0051D5]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        )}
      </Link>
    </div>
  );
};

export default NextPageButton;
