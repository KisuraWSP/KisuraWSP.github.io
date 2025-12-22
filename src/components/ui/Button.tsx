import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "cyber" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string; // Explicitly include className in props
}

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {

    const baseStyles = "relative inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none";

    const sizes = {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base",
    };

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        cyber: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-sm",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, sizes[size], variants[variant], className)}
            {...props}
        >
            {/* Decorative corners for Cyber variant can be added here if needed */}
            {variant === 'cyber' && (
                <>
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
                </>
            )}
            {children}
        </motion.button>
    );
}
