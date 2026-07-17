import {
  MessageSquare,
  Lightbulb,
  Folder,
  FileText,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const navItems = [
  { icon: MessageSquare, label: 'Assistant', active: true },
  { icon: Lightbulb, label: 'Memory', active: false },
  { icon: Folder, label: 'Projects', active: false },
  { icon: FileText, label: 'Files', active: false },
  { icon: BookOpen, label: 'Knowledge', active: false },
  { icon: Sparkles, label: 'Automation', active: false },
];

export default function LeftSidebar() {
  return (
    <aside className="w-[210px] flex-shrink-0 px-3 py-3 flex flex-col">
      <nav className="glass-panel flex-1 px-2.5 py-3 flex flex-col gap-1 overflow-y-auto">
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
    </aside>
  );
}
