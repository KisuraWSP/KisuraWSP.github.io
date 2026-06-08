"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export function EducationSection() {
    return (
        <section className="mx-auto w-full max-w-4xl space-y-8 py-12 sm:space-y-12 sm:py-16">
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
                <h2 className="border-b-2 border-cyan-500 pb-2 text-3xl font-black uppercase tracking-[0.14em] text-white">
                    Education
                </h2>
            </div>

            <div className="relative ml-3 space-y-8 border-l-2 border-slate-800 py-2 pl-6 sm:ml-6 sm:space-y-12 sm:pl-10 md:ml-12 md:pl-12">
                {PORTFOLIO_DATA.education.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[35px] top-6 z-10 h-5 w-5 rounded-full border-2 border-cyan-500 bg-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)] sm:-left-[51px] md:-left-[58px]" />

                        <Card variant="glass" className="relative group">
                            <div className="space-y-5 p-5 sm:p-7">
                                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                                    <h3 className="text-base font-bold tracking-wide text-cyan-400 sm:text-lg">
                                        {exp.degree.toUpperCase()}
                                    </h3>
                                    <span className="w-fit rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 font-mono text-xs text-slate-400">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="text-base font-semibold text-white sm:text-lg">
                                    {exp.school}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
