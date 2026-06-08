"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/items/Terminal";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center gap-10 py-10 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:gap-12 lg:py-20 xl:gap-20">
            <div className="pointer-events-none absolute inset-y-16 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent lg:block" />
            <div className="pointer-events-none absolute left-0 top-20 hidden h-px w-72 bg-gradient-to-r from-cyan-400/50 to-transparent lg:block" />

            {/* Left Column: Text & Bio */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-20 w-full max-w-3xl space-y-6 text-center lg:text-left"
            >
                <div className="space-y-5">
                    <div className="mx-auto hidden w-fit items-center gap-2 rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200 lg:mx-0 lg:flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                        {PORTFOLIO_DATA.personal.title}
                    </div>

                    <h1 className="text-5xl font-black tracking-normal text-white sm:text-6xl md:text-7xl lg:text-[7.25rem] lg:leading-[0.82] xl:text-[8.5rem]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            {PORTFOLIO_DATA.personal.name.split(" ")[0]}
                        </span>
                        <span className="mt-1 block text-3xl text-slate-500 sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem]">
                            {PORTFOLIO_DATA.personal.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>

                    <h2 className="font-mono text-lg text-cyan-400 sm:text-xl md:text-2xl lg:hidden">
                        {">"} {PORTFOLIO_DATA.personal.title}
                    </h2>
                </div>

                <p className="mx-auto max-w-xl border-t border-slate-700 pt-5 text-base leading-7 text-slate-300 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-lg lg:mx-0">
                    {PORTFOLIO_DATA.personal.bio}
                </p>

                <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:max-w-2xl">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-700/70 bg-slate-950/45 px-4 py-3 text-left">
                        <MapPin className="h-5 w-5 shrink-0 text-emerald-300" />
                        <span className="text-sm leading-5 text-slate-300">{PORTFOLIO_DATA.personal.location}</span>
                    </div>
                    <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="flex items-center gap-3 rounded-lg border border-slate-700/70 bg-slate-950/45 px-4 py-3 text-left transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                    >
                        <Mail className="h-5 w-5 shrink-0 text-cyan-300" />
                        <span className="break-all text-sm leading-5 text-slate-300">{PORTFOLIO_DATA.personal.email}</span>
                    </a>
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center lg:justify-start">
                    <a
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-cyan-400 px-5 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.35)] transition hover:bg-cyan-300"
                    >
                        Projects
                        <ArrowDownRight className="ml-2 h-4 w-4" />
                    </a>
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-slate-600 bg-slate-950/50 px-5 text-sm font-bold uppercase tracking-[0.12em] text-cyan-100 transition hover:border-cyan-400/70 hover:bg-cyan-400/10"
                    >
                        Contact
                        <ArrowDownRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </motion.div>

            {/* Right Column: Terminal Visualization */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-lg lg:max-w-none"
            >
                <div className="pointer-events-none absolute -inset-4 hidden rounded-lg border border-cyan-400/10 bg-slate-950/20 lg:block" />
                <div className="pointer-events-none absolute -right-3 -top-3 hidden h-20 w-20 border-r border-t border-cyan-300/45 lg:block" />
                <div className="pointer-events-none absolute -bottom-3 -left-3 hidden h-20 w-20 border-b border-l border-emerald-300/35 lg:block" />
                <Terminal
                    className="relative z-10 w-full border-slate-700/80 bg-black/90 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl lg:h-[520px]"
                    height="h-[320px] sm:h-[400px]"
                    initialOutput={[
                        "Type 'help' to view available commands."
                    ]}
                />
            </motion.div>

        </section>
    );
}
