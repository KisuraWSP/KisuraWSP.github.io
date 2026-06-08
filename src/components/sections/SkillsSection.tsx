"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SkillNodeProps {
    name: string;
    level: number;
    category: string;
    delay?: number;
}

function SkillNode({ name, delay = 0 }: SkillNodeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative"
        >
            <div className="absolute -top-4 left-1/2 -z-10 h-4 w-px bg-slate-800 transition-colors group-hover:bg-cyan-500/50" />

            <div className={cn(
                "relative rounded-lg border border-slate-700 bg-slate-900/50 p-4 backdrop-blur-sm",
                "hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300",
                "cursor-default group"
            )}>
                <div className="flex min-h-5 items-center justify-between gap-4">
                    <span className="break-words font-mono text-sm font-bold text-cyan-100">{name}</span>
                </div>
            </div>
        </motion.div>
    );
}

export function SkillsSection() {
    const categories = Array.from(new Set(PORTFOLIO_DATA.skills.map(s => s.category)));

    return (
        <section id="skills" className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 sm:text-4xl md:text-5xl">
                        SKILLS & TECHNOLOGIES
                    </h2>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat, colIndex) => (
                        <div key={cat} className="space-y-6">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-3 w-3 shrink-0 rotate-45 rounded-sm bg-cyan-500" />
                                <h3 className="w-full border-b border-slate-800 pb-2 text-base font-bold uppercase tracking-[0.12em] text-slate-200 sm:text-lg">
                                    {cat}
                                </h3>
                            </div>

                            <div className="space-y-4 border-l border-slate-800/50 pl-4">
                                {PORTFOLIO_DATA.skills
                                    .filter(s => s.category === cat)
                                    .sort((a, b) => b.level - a.level)
                                    .map((skill, index) => (
                                        <SkillNode
                                            key={skill.name}
                                            {...skill}
                                            delay={colIndex * 0.2 + index * 0.1}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
