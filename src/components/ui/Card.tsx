import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: "default" | "glass" | "neon";
    className?: string; // Explicitly include className in props
}

export function Card({
    children,
    variant = "glass",
    className,
    ...props
}: CardProps) {

    const baseStyles = "rounded-lg overflow-hidden";

    const variants = {
        default: "bg-card text-card-foreground border border-border",
        glass: "glass-panel", // defined in globals.css
        neon: "bg-slate-900 border border-primary/50 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]",
    };

    return (
        <div
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: ReactNode }) {
    return <h3 className={cn("text-xl font-semibold leading-tight tracking-normal", className)}>{children}</h3>;
}

export function CardDescription({ className, children }: { className?: string; children: ReactNode }) {
    return <p className={cn("text-sm text-slate-400", className)}>{children}</p>;
}

export function CardContent({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
}
