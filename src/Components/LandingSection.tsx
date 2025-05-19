"use client";

import { useEffect, useState } from "react";

export default function LandingSection() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-10 bg-zinc-200"></div>
      <section className="min-h-screen pt-0 bg-zinc-200">
        <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[url('../images/Subject1.png')] dark:bg-[url('../images/Subject2.png')] bg-center bg-no-repeat bg-contain">
          <div className="absolute bottom-20 w-full overflow-hidden bg-transparent">
            <div className="whitespace-nowrap lg:text-9xl sm:text-4xl tracking-[46px] pointer-events-none text-zinc-100 dark:text-gray-700 animate-scroll">
              <span
                className="inline-block w-full text-center"
                style={{
                  transform: `translateX(${scrollX * 0.5}px)`,
                  transition: "transform 0.21s linear",
                }}
              >
                - Rasil Baidar - Rasil Baidar -
              </span>
            </div>
          </div>
        </section>
      </section>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
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
