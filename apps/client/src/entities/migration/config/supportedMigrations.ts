export const SUPPORTED_MIGRATIONS: Record<string, string[]> = {
  express: ['fastify', 'nestjs'],
  fastify: ['express', 'nestjs'],
  nestjs: ['express', 'fastify'],
  react: ['next', 'vue'],
  next: ['react'],
  vue: ['react'],
};

export interface TechMetadata {
  id: string;
  name: string;
  icon: string;
  isFrontend: boolean;
  description: string;
  intro: string;
  website: string;
  requirements?: string;
  targetColorClass: string;
}

export const TECH_METADATA: Record<string, TechMetadata> = {
  express: {
    id: 'express',
    name: 'Express',
    icon: 'https://cdn.simpleicons.org/express/white',
    isFrontend: false,
    description: 'Migrate your existing Node.js and Express REST APIs.',
    intro: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It has been the standard for Node backend development for years.',
    website: 'https://expressjs.com',
    requirements: 'Node.js v18+',
    targetColorClass: 'hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
  },
  fastify: {
    id: 'fastify',
    name: 'Fastify',
    icon: 'https://cdn.simpleicons.org/fastify/white',
    isFrontend: false,
    description: 'Migrate to the fast and low overhead web framework, for Node.js.',
    intro: 'Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.',
    website: 'https://fastify.dev',
    targetColorClass: 'hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
  },
  nestjs: {
    id: 'nestjs',
    name: 'NestJS',
    icon: 'https://cdn.simpleicons.org/nestjs/E0234E',
    isFrontend: false,
    description: 'A progressive Node.js framework for building efficient and scalable server-side applications.',
    intro: 'NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP, FP, and FRP.',
    website: 'https://nestjs.com',
    requirements: 'Node.js v18+, TypeScript',
    targetColorClass: 'hover:border-[#E0234E]/50 hover:shadow-[0_0_15px_rgba(224,35,78,0.2)]',
  },
  react: {
    id: 'react',
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    isFrontend: true,
    description: 'Migrate your legacy UI components to modern React architectures.',
    intro: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
    website: 'https://react.dev',
    targetColorClass: 'hover:border-[#61DAFB]/50 hover:shadow-[0_0_15px_rgba(97,218,251,0.2)]',
  },
  next: {
    id: 'next',
    name: 'Next.js',
    icon: 'https://cdn.simpleicons.org/nextdotjs/white',
    isFrontend: true,
    description: 'Upgrade your React application with SSR, App Router, and server actions.',
    intro: 'Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.',
    website: 'https://nextjs.org',
    requirements: 'React 18+',
    targetColorClass: 'hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]',
  },
  vue: {
    id: 'vue',
    name: 'Vue',
    icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    isFrontend: true,
    description: 'Transition smoothly to the approachable, versatile and performant JavaScript framework.',
    intro: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces.',
    website: 'https://vuejs.org',
    requirements: 'Node.js, Vue 3',
    targetColorClass: 'hover:border-[#4FC08D]/50 hover:shadow-[0_0_15px_rgba(79,192,141,0.2)]',
  },
};
