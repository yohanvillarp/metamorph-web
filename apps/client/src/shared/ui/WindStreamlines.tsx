import { motion } from 'framer-motion';

interface WindStreamlinesProps {
  className?: string;
}

export function WindStreamlines({ className = '' }: WindStreamlinesProps) {
  // Aerodynamic streamlines representing wind tunnel laminar flow
  const streamlines = [
    {
      id: 'stream-1',
      d: 'M -100,120 C 300,90 600,160 950,110 C 1200,75 1450,140 1700,90',
      strokeWidth: 1.25,
      duration: 12,
      delay: 0,
      opacity: 0.18,
      dashArray: '180 340',
    },
    {
      id: 'stream-2',
      d: 'M -80,180 C 260,240 580,140 920,200 C 1220,250 1480,160 1720,210',
      strokeWidth: 1.5,
      duration: 15,
      delay: 2.5,
      opacity: 0.22,
      dashArray: '220 380',
    },
    {
      id: 'stream-3',
      d: 'M -120,280 C 220,210 520,320 880,260 C 1180,210 1420,310 1680,240',
      strokeWidth: 1,
      duration: 18,
      delay: 5,
      opacity: 0.14,
      dashArray: '160 300',
    },
    {
      id: 'stream-4',
      d: 'M -60,360 C 320,410 680,310 1020,380 C 1280,430 1520,340 1740,390',
      strokeWidth: 1.25,
      duration: 14,
      delay: 1.5,
      opacity: 0.16,
      dashArray: '200 360',
    },
    {
      id: 'stream-5',
      d: 'M -140,460 C 240,400 540,510 900,440 C 1240,380 1460,490 1700,420',
      strokeWidth: 1,
      duration: 21,
      delay: 7,
      opacity: 0.12,
      dashArray: '140 320',
    },
    {
      id: 'stream-6',
      d: 'M -100,220 C 400,170 700,270 1100,190 C 1350,140 1550,220 1720,180',
      strokeWidth: 1.75,
      duration: 11,
      delay: 3.8,
      opacity: 0.2,
      dashArray: '240 400',
    },
  ];

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full min-w-[1200px]"
        viewBox="0 0 1600 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle cyan-slate laminar flow gradient without glowing drop-shadows */}
          <linearGradient id="wind-laminar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0" />
            <stop offset="20%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </linearGradient>

          {/* Micro tracer gradient for aerodynamic particle dashes */}
          <linearGradient id="wind-tracer-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Static faint baseline tracks to establish wind tunnel depth */}
        {streamlines.map((stream) => (
          <path
            key={`track-${stream.id}`}
            d={stream.d}
            stroke="rgba(255, 255, 255, 0.025)"
            strokeWidth={stream.strokeWidth}
            strokeLinecap="round"
          />
        ))}

        {/* Animated dynamic wind streamlines (GPU accelerated stroke-dashoffset) */}
        {streamlines.map((stream) => (
          <motion.path
            key={stream.id}
            d={stream.d}
            stroke="url(#wind-laminar-grad)"
            strokeWidth={stream.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={stream.dashArray}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -1040 }}
            transition={{
              duration: stream.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: stream.delay,
            }}
            style={{ opacity: stream.opacity }}
          />
        ))}

        {/* High-speed faint aerodynamic micro-tracers */}
        <motion.path
          d="M -50,150 C 350,110 650,180 1000,130 C 1250,90 1500,160 1750,110"
          stroke="url(#wind-tracer-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="40 800"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1680 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ opacity: 0.3 }}
        />
        <motion.path
          d="M -80,320 C 300,250 620,360 980,300 C 1260,250 1500,340 1760,280"
          stroke="url(#wind-tracer-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="50 900"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1900 }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: 'linear',
            delay: 3,
          }}
          style={{ opacity: 0.25 }}
        />
      </svg>
    </div>
  );
}
