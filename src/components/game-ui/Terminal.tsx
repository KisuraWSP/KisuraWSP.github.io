"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface TerminalProps {
    className?: string; // Explicitly include className in props
    initialOutput?: string[];
    height?: string;
}

export function Terminal({ className, initialOutput = ["Welcome to KisuraOS v1.0", "Type 'help' for commands."], height = "h-64" }: TerminalProps) {
    const [output, setOutput] = useState<string[]>(initialOutput);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [output]);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        let response = "";

        switch (trimmed) {
            case "help":
                response = "Available commands: help, about, skills, contact, clear";
                break;
            case "about":
                response = "Kisura W.S.P - Systems Developer & Game Developer.";
                break;
            case "skills":
                response = "Rust, Java, React, Game Dev, System Architecture.";
                break;
            case "contact":
                response = "kisura2003@gmail.com | github.com/KisuraWSP";
                break;
            case "clear":
                setOutput([]);
                return;
            default:
                response = `Command not found: ${trimmed}. Type 'help'.`;
        }
        setOutput(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        }
    };

    return (
        <div className={cn("font-mono text-sm bg-black/90 border border-slate-700 rounded-md shadow-2xl flex flex-col overflow-hidden", height, className)}>
            {/* Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-400">kisura@terminal:~</span>
            </div>

            {/* Body */}
            <div
                ref={scrollRef}
                className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-1"
            >
                {output.map((line, i) => (
                    <div key={i} className={line.startsWith(">") ? "text-cyan-400" : "text-slate-300"}>
                        {line}
                    </div>
                ))}
                <div className="flex items-center gap-2 text-cyan-400">
                    <span>{">"}</span>
                    <input
                        className="bg-transparent border-none outline-none flex-1 text-slate-100 placeholder-slate-600"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="..."
                    />
                </div>
            </div>
        </div>
    );
}
