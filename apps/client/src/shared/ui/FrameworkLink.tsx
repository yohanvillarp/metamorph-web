import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

export interface FrameworkLinkProps {
  href?: string;
  name: string;
  className?: string;
}

export const FrameworkLink = ({ href, name, className }: FrameworkLinkProps) => {
  if (!href) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-xl text-sm font-medium",
        "bg-neo-surface border border-neo-border text-neo-text-muted transition-colors",
        "hover:text-neo-text hover:border-white/20 hover:bg-white/5",
        "shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
        className
      )}
    >
      <span>Official {name} Documentation</span>
      <ExternalLink size={14} className="opacity-70" />
    </motion.a>
  );
};
