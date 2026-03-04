"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export function EducationSection() {
    return (
        <section className="py-12 space-y-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black text-white tracking-widest uppercase border-b-2 border-cyan-500 pb-2">
                    Education
                </h2>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12 pl-8 md:pl-12 py-4">
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
                        <div className="absolute -left-[41px] md:-left-[58px] top-6 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />

                        <Card variant="glass" className="relative group">
                            <div className="p-7 space-y-5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-m font-bold text-cyan-400 font-heading tracking-wide">
                                        {exp.degree.toUpperCase()}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="text-lg font-semibold text-white">
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
