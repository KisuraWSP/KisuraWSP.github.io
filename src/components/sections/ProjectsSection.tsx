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
            <div className="mb-8 grid gap-4 lg:grid-cols-[auto_1fr] lg:items-end">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-[2px] w-8 shrink-0 bg-cyan-500 sm:w-12" />
                    <h2 className="text-2xl font-black uppercase tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 sm:text-3xl md:text-4xl">
                        Projects
                    </h2>
                </div>
                <div className="hidden h-px bg-gradient-to-r from-slate-700 via-cyan-500/35 to-transparent lg:block" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {PORTFOLIO_DATA.projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        className={cn(index < 2 && "xl:col-span-2")}
                    >
                        <Card variant="glass" className="group relative flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_22px_60px_rgba(6,182,212,0.12)]">
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <CardHeader className="p-5 sm:p-6">
                                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                                    <div className={cn(
                                        "rounded border px-2 py-0.5 font-mono text-xs",
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
                                <CardTitle className={cn("transition-colors group-hover:text-cyan-400", index < 2 && "xl:text-2xl")}>
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                                <p className={cn("text-sm leading-relaxed text-slate-300", index < 2 && "xl:max-w-2xl xl:text-base")}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded bg-cyan-900/20 px-2 py-1 font-mono text-xs text-cyan-200/70"
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
