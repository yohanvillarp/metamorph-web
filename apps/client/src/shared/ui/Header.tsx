import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10 py-4 px-8 flex justify-between items-center h-20">
      <Link to="/" className="font-bold text-2xl tracking-tighter flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
        <img src="/logo_metamorph.png" alt="Metamorph Logo" className="w-10 h-10 object-contain drop-shadow-md" />
        Metamorph
      </Link>
      <div className="hidden sm:flex items-center gap-8 text-base font-medium text-gray-300">
        <Link to="/docs" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Docs</Link>
        <a href="https://github.com/yohanvillarp/metamorph" target="_blank" rel="noopener noreferrer" className="transition-all hover:-translate-y-1" aria-label="GitHub">
          <img src="/github.svg" alt="GitHub" className="w-6 h-6 invert opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
        </a>
      </div>
    </nav>
  );
}
