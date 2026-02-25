"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link"; // Correct Next.js link import for internal routing if needed, but these are external
import { cn } from "@/lib/utils";

export function ProjectsSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 space-y-12">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[2px] w-12 bg-cyan-500" />
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">
                    Projects
                </h2>
                <div className="h-[2px] flex-1 bg-slate-800" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {PORTFOLIO_DATA.projects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                        <Card variant="glass" className="h-full flex flex-col group hover:border-cyan-500/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className={cn(
                                        "text-xs font-mono px-2 py-0.5 rounded border",
                                        project.status === "Completed" ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10" :
                                            project.status === "WIP" ? "border-yellow-500/50 text-yellow-400 bg-yellow-500/10" :
                                                "border-slate-500/50 text-slate-400 bg-slate-500/10"
                                    )}>
                                        [{project.status.toUpperCase()}]
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">
                                        ID: {project.id.toUpperCase()}
                                    </div>
                                </div>
                                <CardTitle className="group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-cyan-200/70 bg-cyan-900/20 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-4 border-t border-slate-700/50">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button variant="cyber" size="sm" className="w-full justify-between group-hover:bg-cyan-500/10">
                                        {project.id === "blog" ? "VISIT HERE" : "ACCESS FILES"}
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
