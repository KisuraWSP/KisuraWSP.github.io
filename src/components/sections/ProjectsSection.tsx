"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
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
        <section id="projects" className="space-y-8 py-14 sm:py-20 lg:py-24">
            <div className="mb-8 flex items-center gap-3 sm:gap-4">
                <div className="h-[2px] w-8 shrink-0 bg-cyan-500 sm:w-12" />
                <h2 className="text-2xl font-black uppercase tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 sm:text-3xl md:text-4xl">
                    Projects
                </h2>
                <div className="h-[2px] flex-1 bg-slate-800" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
                {PORTFOLIO_DATA.projects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                        <Card variant="glass" className="group flex h-full flex-col transition-colors hover:border-cyan-500/50">
                            <CardHeader className="p-5 sm:p-6">
                                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                                    <div className={cn(
                                        "text-xs font-mono px-2 py-0.5 rounded border",
                                        project.status === "Completed" ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10" :
                                            project.status === "WIP" ? "border-yellow-500/50 text-yellow-400 bg-yellow-500/10" :
                                                "border-slate-500/50 text-slate-400 bg-slate-500/10"
                                    )}>
                                        [{project.status.toUpperCase()}]
                                    </div>
                                    <div className="break-all font-mono text-xs text-slate-500">
                                        ID: {project.id.toUpperCase()}
                                    </div>
                                </div>
                                <CardTitle className="transition-colors group-hover:text-cyan-400">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                                <p className="text-sm leading-relaxed text-slate-300">
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
                            <CardFooter className="border-t border-slate-700/50 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button variant="cyber" size="sm" className="w-full justify-between group-hover:bg-cyan-500/10">
                                        {project.id === "blog" ? "VISIT HERE" : "ACCESS FILES"}
                                        <ExternalLink className="ml-2 h-4 w-4 shrink-0" />
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
