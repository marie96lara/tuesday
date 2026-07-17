import { Bell, Settings, ChevronDown } from 'lucide-react';

export default function TopHeader() {
  return (
    <header className="h-16 flex-shrink-0 px-6 flex items-center justify-between bg-[#050b14] z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--accent-cyan-border)] bg-[var(--accent-cyan-soft)]">
          <span className="text-sm font-bold font-display text-[var(--accent-cyan)]">T</span>
        </div>
        <h1 className="font-display text-base font-semibold tracking-[0.22em] uppercase text-white">
          Tuesday OS
        </h1>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
        <span className="text-[var(--accent-cyan)] uppercase font-medium tracking-wider">Online</span>
        <span className="px-2 border-l border-white/10 uppercase tracking-wider">Idle</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="glass-panel px-3 py-2 flex items-center gap-2 cursor-pointer hover:border-[var(--accent-cyan-border)] transition-colors">
          <span className="text-xs text-gray-200 font-medium">GPT-4o</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        <button className="relative text-gray-400 hover:text-white transition-colors p-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff5570] rounded-full ring-2 ring-[#050b14]" />
        </button>

        <button className="text-gray-400 hover:text-white transition-colors p-2">
          <Settings className="w-5 h-5" />
        </button>

        <div className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-xs font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}
