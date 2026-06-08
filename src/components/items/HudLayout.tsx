"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface HudLayoutProps {
    children: ReactNode;
}

export function HudLayout({ children }: HudLayoutProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "HOME", path: "/" },
        { label: "EXPERIENCE", path: "/experience" },
        { label: "EDUCATION", path: "/education" },
        { label: "SKILLS", path: "/skills" },
        { label: "CONTACT", path: "/contact" },
    ];

    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-cyan-500/30">

            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.14]"
                style={{
                    backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px),
                             linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                }}
            />
            <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_35%,rgba(16,185,129,0.05)_68%,transparent)]" />
            <div className="pointer-events-none fixed inset-x-0 top-0 z-0 hidden h-64 border-b border-cyan-300/10 bg-[linear-gradient(180deg,rgba(6,182,212,0.08),transparent)] lg:block" />

            {/* Top HUD Bar */}
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:max-w-[88rem]">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="min-w-0 text-xl font-bold tracking-[0.18em] text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition hover:text-cyan-200 sm:text-2xl"
                    >
                        KISURA_WSP
                    </Link>

                    <nav className="hidden items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 p-1 lg:flex">
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path}>
                                <Button
                                    variant={pathname === item.path ? "primary" : "cyber"}
                                    size="sm"
                                    className={cn("w-30 border-transparent shadow-none", pathname === item.path && "glow-border")}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cyan-400/40 bg-cyan-500/10 text-cyan-200 transition hover:bg-cyan-500/20 lg:hidden"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="border-t border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl lg:hidden">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 sm:grid-cols-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "rounded-md border px-4 py-3 text-sm font-bold tracking-[0.12em] transition",
                                        pathname === item.path
                                            ? "border-cyan-400 bg-cyan-400 text-slate-950"
                                            : "border-slate-700 bg-slate-900/70 text-cyan-100 hover:border-cyan-400/70"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </header>

            {/* Main Content Area */}
            <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-20 sm:px-6 lg:px-8 xl:max-w-[88rem]">
                {children}
            </main>

            {/* Corner Decorations */}
            <div className="pointer-events-none fixed left-3 top-20 hidden h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-cyan-500/50 sm:block" />
            <div className="pointer-events-none fixed right-3 top-20 hidden h-4 w-4 rounded-tr-lg border-r-2 border-t-2 border-cyan-500/50 sm:block" />
            <div className="pointer-events-none fixed bottom-6 left-3 hidden h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-cyan-500/50 sm:block" />
            <div className="pointer-events-none fixed bottom-6 right-3 hidden h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-cyan-500/50 sm:block" />
        </div>
    );
}
