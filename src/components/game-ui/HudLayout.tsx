"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HudLayoutProps {
    children: ReactNode;
}

export function HudLayout({ children }: HudLayoutProps) {
    const pathname = usePathname();

    const navItems = [
        { label: "HOME", path: "/" },
        { label: "EXPERIENCE", path: "/experience" },
        { label: "SKILLS", path: "/skills" },
        { label: "CONTACT", path: "/contact" },
    ];

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-cyan-500/30">

            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px),
                             linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Top HUD Bar */}
            <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 border-b border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                        KISURA_WSP
                    </div>
                    <div className="h-6 w-[1px] bg-white/20" />
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <Button
                                variant={pathname === item.path ? "primary" : "cyber"}
                                size="sm"
                                className={cn("w-32", pathname === item.path && "glow-border")}
                            >
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="relative z-10 pt-20 pb-12 px-6 container mx-auto min-h-screen flex flex-col">
                {children}
            </main>

            {/* Bottom HUD Bar */}
            <footer className="fixed bottom-0 left-0 right-0 h-12 z-50 flex items-center justify-between px-6 border-t border-white/10 bg-black/60 backdrop-blur-md text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-4">
                    <span>HP: 100%</span>
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span>ENERGY</span>
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-cyan-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                        />
                    </div>
                </div>
            </footer>

            {/* Corner Decorations */}
            <div className="fixed top-20 left-6 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg pointer-events-none" />
            <div className="fixed top-20 right-6 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg pointer-events-none" />
            <div className="fixed bottom-16 left-6 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg pointer-events-none" />
            <div className="fixed bottom-16 right-6 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg pointer-events-none" />

        </div>
    );
}
