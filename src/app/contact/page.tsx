"use client";

import { HudLayout } from "@/components/game-ui/HudLayout";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Github, Linkedin, Twitter, StoreIcon, Store } from "lucide-react";

export default function ContactPage() {
    return (
        <HudLayout>
            <section className="h-[80vh] flex flex-col items-center justify-center space-y-12">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    CONTACT
                </h1>

                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 backdrop-blur-md max-w-md w-full space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="text-white text-lg">
                            Open for collaborations and opportunities.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="block">
                            <Button variant="primary" className="w-full h-14 text-lg">
                                <Mail className="mr-3 w-5 h-5" />
                                SEND ME A MAIL
                            </Button>
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 pt-8 border-t border-slate-700/50">
                        <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Github className="w-8 h-8" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <Twitter className="w-8 h-8" />
                        </a>
                        <a href={PORTFOLIO_DATA.personal.socials.itchio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <StoreIcon className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </section>
        </HudLayout>
    );
}
