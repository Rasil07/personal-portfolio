"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LandingSection() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY * 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-10 bg-zinc-300 dark:bg-zinc-600"></div>
      <section className="min-h-screen pt-0 bg-zinc-300 dark:bg-zinc-600">
        <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[url('../images/Subject1.png')] dark:bg-[url('../images/Subject2.png')] bg-center bg-no-repeat bg-contain">
          <div className="absolute bottom-16 w-full overflow-hidden bg-transparent">
            <div className="whitespace-nowrap lg:text-[180px] sm:text-4xl tracking-[24px] pointer-events-none text-zinc-50 dark:text-zinc-200 animate-scroll">
              <span
                className="inline-block w-full text-center"
                style={{
                  transform: `translateX(${scrollX * 0.95}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                - Rasil Baidar - Rasil Baidar -
              </span>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full mx-auto px-4 py-8 flex items-center">
        <div className="text-center w-3/5">
          <p className="text-xl md:text-3xl lg:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
            Turning complex ideas into elegant solutions through code. I craft
            seamless digital experiences with modern tech, bringing creativity
            and precision to every project.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <motion.a
            href="/about"
            className="w-20 h-20 rounded-full bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 flex items-center justify-center"
            initial={{ y: -100, x: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
              // rotate: scrollX * 0.022,
              transition: {
                y: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 1.5,
                },
                x: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 2,
                  delay: 1.5,
                },
                opacity: {
                  duration: 0.5,
                },
              },
            }}
            style={{
              transformOrigin: "center",
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <span className="text-lg font-medium">Learn More</span>
          </motion.a>
        </div>
      </section>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: 100%;
        }

        .animate-scroll span {
          display: inline-block;
          min-width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
