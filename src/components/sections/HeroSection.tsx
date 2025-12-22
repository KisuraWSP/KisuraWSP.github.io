"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Terminal } from "@/components/game-ui/Terminal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";

export function HeroSection() {
    return (
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">

            {/* Left Column: Text & Bio */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 space-y-8 max-w-2xl text-center lg:text-left z-20"
            >
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            {PORTFOLIO_DATA.personal.name.split(" ")[0]}
                        </span>
                        <span className="block text-4xl md:text-6xl text-slate-500 mt-2">
                            {PORTFOLIO_DATA.personal.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-cyan-400 font-mono">
                        {">"} {PORTFOLIO_DATA.personal.title}
                    </h2>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-slate-700 pl-6">
                    {PORTFOLIO_DATA.personal.bio}
                </p>
            </motion.div>

            {/* Right Column: Terminal Visualization */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 w-full max-w-lg relative"
            >
                {/* Decorative background glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 animate-pulse" />

                <Terminal
                    className="relative z-10 w-full shadow-2xl border-slate-700/80 bg-black/90 backdrop-blur-xl"
                    height="h-[400px]"
                    initialOutput={[
                        "> sys_boot_sequence.exe",
                        "Loading kernel... OK",
                        "Mounting file system... OK",
                        "Initializing graphical interface...",
                        "User: Kisura W.S.P detected.",
                        "Access Level: ADMIN",
                        " ",
                        "WELCOME TO THE MAINFRAME.",
                        "Type 'help' to view available commands."
                    ]}
                />

                {/* Floating tech elements */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -right-12 p-4 glass-panel rounded-lg border-cyan-500/30 hidden md:block"
                >
                    <div className="text-xs text-cyan-400 font-mono mb-1">STATUS</div>
                    <div className="text-2xl font-bold text-white">ONLINE</div>
                </motion.div>
            </motion.div>

        </section>
    );
}
