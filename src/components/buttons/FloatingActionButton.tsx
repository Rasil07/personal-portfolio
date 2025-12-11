"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Action buttons that appear on hover/click */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Download CV Button */}
            <motion.a
              href="/assets/Rasil_Baidar_Resume_SE.pdf"
              download
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2.5 bg-background border border-gray-300 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-200 group"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Download CV
              </span>
            </motion.a>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-sm font-medium">Get in Touch</span>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-14 h-14 rounded-full cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-foreground text-background"
            : "bg-primary text-primary-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        aria-label="Quick actions"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
