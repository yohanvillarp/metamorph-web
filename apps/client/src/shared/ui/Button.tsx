import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'purple' | 'outline';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 select-none";
  
  const variants = {
    primary: "bg-neo-primary/90 hover:bg-neo-primary text-white border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
    secondary: "bg-neo-surface text-neo-text border border-neo-border hover:bg-white/5",
    purple: "bg-purple-500/90 hover:bg-purple-500 text-white border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    outline: "bg-transparent text-neo-accent border border-neo-accent/50 hover:bg-neo-accent/10",
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
