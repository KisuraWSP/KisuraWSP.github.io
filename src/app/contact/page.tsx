"use client";

import { HudLayout } from "@/components/items/HudLayout";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Github, Linkedin, Twitter, StoreIcon, Youtube } from "lucide-react";

export default function ContactPage() {
    return (
        <HudLayout>
            <section className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center space-y-8 py-12 sm:space-y-12">
                <h1 className="text-center text-4xl font-black tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 md:text-6xl">
                    CONTACT
                </h1>

                <div className="w-full max-w-md space-y-8 rounded-lg border border-slate-800 bg-slate-900/55 p-5 backdrop-blur-md sm:p-8">
                    <div className="space-y-2 text-center">
                        <p className="text-base text-white sm:text-lg">
                            Open for collaborations and opportunities.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="block">
                            <Button variant="primary" className="h-14 w-full text-base sm:text-lg">
                                <Mail className="mr-3 h-5 w-5 shrink-0" />
                                SEND ME A MAIL
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-5 gap-3 border-t border-slate-700/50 pt-8">
                        <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-12 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-cyan-400/70 hover:text-cyan-400">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-cyan-400/70 hover:text-cyan-400">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-12 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-cyan-400/70 hover:text-cyan-400">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.itchio} target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="flex h-12 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-cyan-400/70 hover:text-cyan-400">
                            <StoreIcon className="h-6 w-6" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-12 items-center justify-center rounded-md border border-slate-700 text-slate-400 transition-colors hover:border-cyan-400/70 hover:text-cyan-400">
                            <Youtube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </section>
        </HudLayout>
    );
}
