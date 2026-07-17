import {
  MessageSquare,
  Lightbulb,
  Folder,
  FileText,
  BookOpen,
  Puzzle,
  Sparkles,
  History,
  Cpu,
  TerminalSquare,
  Sun,
  Maximize2,
  ArrowLeftRight,
} from 'lucide-react';

const navItems = [
  { icon: MessageSquare, label: 'Assistant', active: true },
  { icon: Lightbulb, label: 'Memory', active: false },
  { icon: Folder, label: 'Projects', active: false },
  { icon: FileText, label: 'Files', active: false },
  { icon: BookOpen, label: 'Knowledge', active: false },
  { icon: Puzzle, label: 'Plugins', active: false },
  { icon: Sparkles, label: 'Automation', active: false },
  { icon: Cpu, label: 'Models', active: false },
  { icon: TerminalSquare, label: 'Terminal', active: false },
  { icon: History, label: 'History', active: false },
];

export default function LeftSidebar() {
  return (
    <aside className="w-[230px] flex-shrink-0 px-4 py-4 flex flex-col">
      <div className="glass-panel flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <span className="w-5 h-px bg-gray-500" />
            <span className="w-5 h-px bg-gray-500" />
            <span className="w-5 h-px bg-gray-500" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Workspace
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${item.active ? 'nav-item--active' : ''}`}
            >
              <item.icon className="nav-item__icon" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5 flex items-center justify-between text-[var(--text-muted)]">
          <button className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">
            <Sun className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors">
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
