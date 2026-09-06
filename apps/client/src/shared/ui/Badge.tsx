import { type HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'blue' | 'purple' | 'gray';
}

export function Badge({ className, variant = 'cyan', ...props }: BadgeProps) {
  const variants = {
    cyan: "border-neo-accent/30 bg-neo-accent/10 text-neo-accent",
    blue: "border-blue-400/30 bg-blue-500/10 text-blue-400",
    purple: "border-purple-400/30 bg-purple-500/10 text-purple-400",
    gray: "border-gray-500/30 bg-gray-500/10 text-gray-300",
  };

  return (
    <span
      className={cn(
        "border uppercase font-bold px-3 py-1 text-[10px] sm:text-xs rounded-full tracking-wider whitespace-nowrap",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
