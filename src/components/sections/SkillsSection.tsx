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

function SkillNode({ name, level, category, delay = 0 }: SkillNodeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative group"
        >
            <div className="absolute -top-6 left-1/2 w-px h-6 bg-slate-800 -z-10 group-hover:bg-cyan-500/50 transition-colors" />

            <div className={cn(
                "relative p-4 rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur-sm",
                "hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300",
                "cursor-default group"
            )}>
                <div className="flex justify-between items-center mb-2 gap-4">
                    <span className="text-cyan-100 font-bold font-mono text-sm">{name}</span>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{category}</span>
                </div>

                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: delay + 0.2 }}
                    />
                </div>

                <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[10px] text-white font-mono group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                    {Math.floor(level / 10)}
                </div>
            </div>
        </motion.div>
    );
}

export function SkillsSection() {
    const categories = Array.from(new Set(PORTFOLIO_DATA.skills.map(s => s.category)));

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl -z-10" />

            <div className="space-y-12 max-w-6xl mx-auto px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter">
                        SKILLS & TECHNOLOGIES
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
                        Unlock new capabilities by acquiring advanced technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {categories.map((cat, colIndex) => (
                        <div key={cat} className="space-y-6">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-3 h-3 bg-cyan-500 rounded-sm rotate-45" />
                                <h3 className="text-lg font-bold text-slate-200 tracking-widest uppercase border-b border-slate-800 pb-2 w-full">
                                    {cat}
                                </h3>
                            </div>

                            <div className="space-y-6 pl-4 border-l border-slate-800/50">
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
