"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-black",
        className,
      )}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={cn(
            "aurora-effect",
            showRadialGradient && "aurora-mask",
          )}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
