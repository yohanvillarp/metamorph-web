import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export function GlassCard({ className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'border border-neo-border p-6 bg-neo-surface rounded-2xl backdrop-blur-xl shadow-lg transition-colors duration-300 relative overflow-hidden',
        hoverEffect && 'hover:border-neo-accent/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
        className
      )}
      {...props}
    />
  );
}
