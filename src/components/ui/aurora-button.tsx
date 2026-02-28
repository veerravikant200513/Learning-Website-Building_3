"use client"

import * as React from "react";
import { cn } from "../../lib/utils";

type AuroraButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    glowClassName?: string;
};

export function AuroraButton({
    className,
    children,
    glowClassName,
    ...props
}: AuroraButtonProps) {
    return (
        <div className="relative group w-full">
            {/* Gradient border container */}
            <div
                className={cn(
                    "absolute -inset-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all duration-500",
                    "group-hover:opacity-100 group-hover:blur-xl",
                    glowClassName
                )}
            />

            {/* Button */}
            <button
                className={cn(
                    "relative w-full rounded-xl bg-[#000000] px-6 py-4",
                    "text-white shadow-xl font-medium flex items-center justify-center gap-2",
                    "transition-all duration-300 hover:bg-[#18181B]",
                    "border border-white/10",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        </div>
    );
}
