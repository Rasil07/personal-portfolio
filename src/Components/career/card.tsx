import { Role } from "@/types/resume";
import React from "react";
import { motion, MotionProps } from "motion/react";

type TExperienceCardProps = {
  role: Role;
  isLatest?: boolean;
  isLast?: boolean;
  animation?: MotionProps;
};

const ExperienceCard = (props: TExperienceCardProps) => {
  const { role, isLatest, isLast = false, animation } = props;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -1 }}
      {...animation}
    >
      {/* Vertical dashed connector from bottom of card to top of next card */}
      {!isLast && (
        <div className="absolute left-8 top-full w-px h-8 border-l border-dashed border-gray-400" />
      )}

      {/* Glass effect container with Apple-style reflection */}
      <div
        className={`relative overflow-hidden border-dashed border mb-8 ${
          isLatest
            ? "border-black/30 bg-gradient-to-br from-background to-accent/50"
            : "border-black/30 bg-gradient-to-br from-primary/5 to-accent/10"
        } backdrop-blur-sm p-5 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5`}
      >
        {/* Top reflection shine */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        {isLatest && (
          <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 shadow-lg">
            Current / Latest
          </div>
        )}

        <div className="flex justify-between items-start mb-3 relative z-10">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">
              {role.role}
            </h3>
            <p className="text-sm font-medium text-primary mt-0.5">
              {role.company}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 relative z-10">
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {role.location}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {role.dates}
          </span>
        </div>

        <ul className="space-y-1.5 text-sm text-foreground/90 relative z-10">
          {role.description.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 leading-relaxed hover:text-foreground transition-colors"
            >
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {role.skills && role.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 relative z-10">
            {role.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-black/100 text-secondary px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom reflection/shadow */}
      <div className="absolute -bottom-2 left-4 right-4 h-4 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ExperienceCard;
