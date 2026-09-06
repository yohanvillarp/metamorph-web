import { useState } from 'react';
import { Menu, ChevronRight, Copy, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import TurndownService from 'turndown';

interface MobileNavProps {
  onOpenSidebar: () => void;
}

export const MobileNav = ({ onOpenSidebar }: MobileNavProps) => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  // Determine Breadcrumbs
  let parent = '';
  let current = '';

  if (location.pathname.includes(ROUTES.DOCS.MIGRATIONS.ROOT)) {
    parent = 'Migrations';
    if (location.pathname.includes(ROUTES.DOCS.MIGRATIONS.BACKEND)) {
      current = 'Backend Frameworks';
    } else if (location.pathname.includes(ROUTES.DOCS.MIGRATIONS.FRONTEND)) {
      current = 'Frontend Frameworks';
    }
  } else if (location.pathname.includes(ROUTES.DOCS.GETTING_STARTED)) {
    current = 'Getting Started';
  } else {
    current = 'Overview';
  }

  const handleCopyMarkdown = () => {
    try {
      const contentEl = document.getElementById('docs-content');
      if (contentEl) {
        // Clone the content so we can remove the nav bar from it before converting
        const clone = contentEl.cloneNode(true) as HTMLElement;
        const navEl = clone.querySelector('.flex.items-center.justify-between.mb-8'); // Selector for MobileNav
        if (navEl) {
          navEl.remove();
        }

        const turndownService = new TurndownService({ headingStyle: 'atx' });
        const markdown = turndownService.turndown(clone.innerHTML);
        
        // Add a small header indicating the source URL
        const finalMarkdown = `<!-- Source: ${window.location.href} -->\n\n${markdown}`;
        navigator.clipboard.writeText(finalMarkdown);
      } else {
        // Fallback if content is not found
        const markdown = `# ${current}\n\nDocumentation for ${current} at ${window.location.href}`;
        navigator.clipboard.writeText(markdown);
      }
    } catch (e) {
      console.error('Failed to copy markdown', e);
    }
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between mb-8">
      {/* Left Side: Menu Toggle & Breadcrumbs */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onOpenSidebar}
          className="md:hidden text-neo-text-muted hover:text-white transition-colors p-1 -ml-1 flex-shrink-0"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2 text-sm overflow-hidden whitespace-nowrap">
          {parent ? (
            <>
              <span className="text-neo-text-muted font-normal truncate max-w-[100px] md:max-w-none">{parent}</span>
              <ChevronRight size={14} className="text-neo-text-muted flex-shrink-0" />
              <span className="text-neo-text font-semibold truncate max-w-[150px] md:max-w-none">{current}</span>
            </>
          ) : (
            <span className="text-neo-text font-semibold truncate max-w-[150px] md:max-w-none">{current}</span>
          )}
        </div>
      </div>

      {/* Right Side: Copy Markdown Button */}
      <button 
        onClick={handleCopyMarkdown}
        className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1a2332] text-neo-text-muted border border-white/5 hover:bg-white/5 hover:text-white transition-colors"
      >
        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy Markdown'}
      </button>
    </div>
  );
};
