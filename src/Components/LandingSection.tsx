"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

import reactLogo from "@/images/react_logo.png";

export default function LandingSection() {
  const [scrollX, setScrollX] = useState(0);
  const [activeTab, setActiveTab] = useState("Languages");
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
          <div className="absolute top-1/3 -translate-y-1/3 z-40 right-10 flex justify-center items-center ml-auto w-50 h-40">
            <svg
              className="w-8 h-8 text-white mr-2 -rotate-45 absolute top-[20px] left-[-80px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
            <h2 className="text-4xl text-white font-sans flex-1 tracking-widest">
              Full Stack Software Engineer
            </h2>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 z-40 left-0 flex items-center py-2 w-fit bg-slate-700 pr-2 pl-4 rounded-tr-full rounded-br-full">
            <div className="flex flex-col mr-3">
              <p className="text-xl text-white">Located in Sydney,</p>
              <p className="text-2xl text-white">Australia</p>
            </div>
            <svg
              className="w-8 h-8 text-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 21s-8-4.5-8-11.8A8 8 0 0112 1a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"
              />
              <circle cx="12" cy="9" r="4" strokeWidth={0.7} />
            </svg>
          </div>
          <div className="absolute  bottom-16 w-full overflow-hidden bg-transparent">
            <div className="whitespace-nowrap lg:text-[180px] sm:text-4xl tracking-[24px] pointer-events-none text-zinc-50 dark:text-zinc-200 animate-scroll">
              <h1
                className="inline-block w-full text-center"
                style={{
                  transform: `translateX(${scrollX * 0.95}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                - Rasil Baidar - Rasil Baidar -
              </h1>
            </div>
          </div>
        </section>
      </section>
      {/* Small summary section */}
      <section className="w-full mx-auto p-4 md:p-18 flex flex-col md:flex-row items-center ">
        <div className="text-center w-full md:w-3/5 mb-8 md:mb-0">
          <div className="flex flex-col ">
            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light"
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0,
                  },
                }}
                viewport={{ margin: "-100px" }}
              >
                Turning complex ideas into elegant solutions through code.
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light"
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.2,
                  },
                }}
                viewport={{ margin: "-100px" }}
              >
                I craft seamless digital experiences with modern tech,
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light"
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.4,
                  },
                }}
                viewport={{ margin: "-100px" }}
              >
                bringing creativity and precision to every project.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <motion.a
            href="/about"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 flex items-center justify-center"
            initial={{ y: -25, x: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                y: {
                  type: "spring",
                  bounce: 0.6,
                  duration: 1.5,
                  stiffness: 200,
                  damping: 10,
                  delay: 0.7,
                },
                x: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 2,
                  delay: 0.7,
                },
                delay: 1,
                opacity: {
                  duration: 0.5,
                  delay: 0.7,
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
            <span className="text-base md:text-lg font-medium">Learn More</span>
          </motion.a>
        </div>
      </section>

      {/* Skills section */}

      <section className="w-full px-4 md:px-18 md:py-4 ">
        <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light tracking-wide">
          TECHNICAL SKILLS
        </h2>

        <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-600"></div>
        <div className="w-full py-4">
          {/* Tabs */}
          <div className="flex mb-4  justify-center">
            {[
              "Languages",
              "Framework/Libraries",
              "Cloud/DevOps",
              "Concepts",
            ].map((tab, index) => (
              <motion.button
                key={tab}
                className="px-6 py-2 text-zinc-700 dark:text-zinc-300 font-medium relative"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 dark:bg-zinc-200 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "Languages" && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6"
              >
                <motion.div
                  className="flex items-center justify-center p-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2">
                    <Image
                      src={reactLogo}
                      alt="TypeScript"
                      width={35}
                      height={24}
                    />
                    TypeScript
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    JavaScript
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Python
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Go
                  </span>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Framework/Libraries" && (
              <motion.div
                key="frameworks"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6"
              >
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Node.js
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Express.js
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Nest.js
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    React.js
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Next.js
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    D3.js
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    React Native
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Framer Motion
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Tailwind CSS
                  </span>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Cloud/DevOps" && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6"
              >
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    AWS Services
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    MongoDB
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    DynamoDB
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    PostgreSQL
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Docker
                  </span>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Concepts" && (
              <motion.div
                key="concepts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6"
              >
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    DSA
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Microservices
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    Micro Frontends
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    System Design
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
