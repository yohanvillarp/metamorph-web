import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function NavigationProgressBar() {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2.5px] bg-transparent overflow-hidden">
      <motion.div
        key={location.pathname}
        initial={{ width: '0%', opacity: 1 }}
        animate={{
          width: ['0%', '45%', '85%', '100%'],
          opacity: [1, 1, 1, 0],
        }}
        transition={{
          duration: 0.6,
          times: [0, 0.25, 0.65, 1],
          ease: 'easeInOut',
        }}
        className="h-full bg-gradient-to-r from-cyan-500 via-teal-300 to-cyan-400 shadow-[0_0_12px_#00f2fe]"
      />
    </div>
  );
}
