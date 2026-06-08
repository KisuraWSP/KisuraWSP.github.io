"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/items/Terminal";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center gap-10 py-10 sm:py-14 lg:flex-row lg:gap-16 lg:py-20 xl:gap-24">

            {/* Left Column: Text & Bio */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-20 w-full max-w-2xl flex-1 space-y-6 text-center lg:text-left"
            >
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            {PORTFOLIO_DATA.personal.name.split(" ")[0]}
                        </span>
                        <span className="mt-1 block text-3xl text-slate-500 sm:text-4xl md:text-6xl">
                            {PORTFOLIO_DATA.personal.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>

                    <h2 className="font-mono text-lg text-cyan-400 sm:text-xl md:text-2xl">
                        {">"} {PORTFOLIO_DATA.personal.title}
                    </h2>
                </div>

                <p className="mx-auto max-w-xl border-t border-slate-700 pt-5 text-base leading-7 text-slate-300 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-lg lg:mx-0">
                    {PORTFOLIO_DATA.personal.bio}
                </p>
            </motion.div>

            {/* Right Column: Terminal Visualization */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-lg flex-1"
            >
                <Terminal
                    className="relative z-10 w-full border-slate-700/80 bg-black/90 shadow-2xl backdrop-blur-xl"
                    height="h-[320px] sm:h-[400px]"
                    initialOutput={[
                        "Type 'help' to view available commands."
                    ]}
                />
            </motion.div>

        </section>
    );
}
