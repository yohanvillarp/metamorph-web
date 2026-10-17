import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'purple' | 'outline';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 select-none";
  
  const variants = {
    primary: "bg-cyan-400 hover:bg-cyan-300 text-slate-950 border border-cyan-300/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] font-bold tracking-wide",
    secondary: "bg-[#0d0f17] text-slate-200 border border-white/10 hover:border-white/20 hover:bg-[#131622] hover:text-white font-medium",
    purple: "bg-[#5865F2]/20 hover:bg-[#5865F2] text-white border border-[#5865F2]/40 shadow-sm transition-all",
    outline: "bg-transparent text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10",
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
