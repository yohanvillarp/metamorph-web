import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Terminal, Cpu, Flag, Layers, ArrowRight, CornerDownLeft } from 'lucide-react';
import { SEARCH_INDEX, type SearchItem, type SearchCategory } from '../config/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Global shortcut (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Filter items
  const cleanQuery = query.trim().toLowerCase();
  const results: SearchItem[] = cleanQuery
    ? SEARCH_INDEX.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(cleanQuery);
        const descMatch = item.description.toLowerCase().includes(cleanQuery);
        const keywordMatch = item.keywords.some((k) => k.toLowerCase().includes(cleanQuery));
        return titleMatch || descMatch || keywordMatch;
      }).slice(0, 8)
    : SEARCH_INDEX.slice(0, 6);

  const handleSelect = (item: SearchItem) => {
    handleClose();
    if (item.href.startsWith('/')) {
      navigate(item.href);
      // Smooth scroll if anchor is present
      if (item.href.includes('#')) {
        const id = item.href.split('#')[1];
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const getCategoryBadge = (category: SearchCategory) => {
    switch (category) {
      case 'Command':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30';
      case 'Flag':
        return 'bg-blue-950/80 text-blue-300 border-blue-500/30';
      case 'Agent':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/30';
      case 'Architecture':
        return 'bg-teal-950/80 text-teal-300 border-teal-500/30';
      case 'Migration':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCategoryIcon = (category: SearchCategory) => {
    switch (category) {
      case 'Command':
        return <Terminal size={14} className="text-cyan-400" />;
      case 'Flag':
        return <Flag size={14} className="text-blue-400" />;
      case 'Agent':
        return <Cpu size={14} className="text-purple-400" />;
      default:
        return <Layers size={14} className="text-teal-400" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={handleClose} />

      <div 
        className="relative w-full max-w-2xl bg-[#080d17] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.15)] overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-cyan-500/20 bg-[#0b1220]/80">
          <Search size={18} className="text-cyan-400 flex-shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search commands, flags, agents, migrations (e.g. config, accounting, next)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <X size={16} />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-700 rounded-md">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {results.length > 0 ? (
            <>
              {!cleanQuery && (
                <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Recommended & Popular
                </div>
              )}
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.1)] text-white'
                        : 'text-slate-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 pr-2">
                      <div className="p-2 rounded-lg bg-[#06090e] border border-white/5 mt-0.5 flex-shrink-0">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-mono text-xs sm:text-sm font-bold text-white truncate">
                            {item.title}
                          </span>
                          <span
                            className={`text-[9px] font-mono uppercase px-2 py-0.2 rounded-full border ${getCategoryBadge(
                              item.category
                            )}`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-1 text-slate-500">
                      {isSelected ? (
                        <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                          <span>Select</span>
                          <CornerDownLeft size={10} />
                        </span>
                      ) : (
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No results found for &ldquo;<span className="text-cyan-300">{query}</span>&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &quot;run&quot;, &quot;config&quot;, &quot;accounting&quot;, or &quot;next&quot;.</p>
            </div>
          )}
        </div>

        {/* Modal Keyboard Footer */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-[#06090e] border-t border-cyan-500/10 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-400">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-400">↓</kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-400">↵</kbd>
              <span>select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-400">esc</kbd>
              <span>close</span>
            </span>
          </div>
          <span className="text-cyan-400/80">Metamorph v2.2.0 Docs</span>
        </div>
      </div>
    </div>
  );
}
