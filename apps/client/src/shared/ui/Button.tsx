import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'purple' | 'outline';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 select-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#0284c7] hover:brightness-110 text-[#050811] border border-cyan-200/60 shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.55)] font-extrabold tracking-wide",
    secondary: "bg-[#090e1a] text-slate-200 border border-white/10 hover:border-cyan-500/40 hover:bg-[#0e1628] hover:text-white font-medium",
    purple: "bg-[#5865F2]/20 hover:bg-[#5865F2] text-white border border-[#5865F2]/40 shadow-sm transition-all",
    outline: "bg-transparent text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
