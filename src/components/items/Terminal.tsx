"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface TerminalProps {
    className?: string; // Explicitly include className in props
    initialOutput?: string[];
    height?: string;
}

export function Terminal({ className, initialOutput = ["Welcome", "Type 'help' for commands."], height = "h-64" }: TerminalProps) {
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
                response = "Kisura W.S.P - Software & Game Developer.";
                break;
            case "skills":
                response = "Game Dev, Software Development";
                break;
            case "contact":
                response = "kisura2003@gmail.com | https://www.linkedin.com/in/kisurawsp/";
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
        <div className={cn("flex flex-col overflow-hidden rounded-md border border-slate-700 bg-black/90 font-mono text-xs shadow-2xl sm:text-sm", height, className)}>
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-3 py-2 sm:px-4">
                <div className="h-3 w-3 shrink-0 rounded-full bg-red-500" />
                <div className="h-3 w-3 shrink-0 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="ml-1 truncate text-xs text-slate-400 sm:ml-2">kisura@terminal:~</span>
            </div>

            {/* Body */}
            <div
                ref={scrollRef}
                className="custom-scrollbar flex-1 space-y-1 overflow-y-auto bg-[linear-gradient(180deg,rgba(6,182,212,0.035),transparent_32%)] p-3 sm:p-4"
            >
                {output.map((line, i) => (
                    <div key={i} className={cn("break-words", line.startsWith(">") ? "text-cyan-400" : "text-slate-300")}>
                        {line}
                    </div>
                ))}
                <div className="flex items-center gap-2 text-cyan-400">
                    <span className="shrink-0">{">"}</span>
                    <input
                        className="min-w-0 flex-1 border-none bg-transparent text-slate-100 outline-none placeholder-slate-600"
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
